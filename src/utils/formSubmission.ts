import { ACADEMY_INFO } from '../data/daycareData';

export interface FormEmailSubmission {
  subject: string;
  replyTo?: string;
  fields: Record<string, string>;
}

export interface SubmissionResult {
  delivered: boolean;
  mailtoUrl: string;
  errorMessage?: string;
}

export function buildAcademyMailtoUrl({
  subject,
  fields,
}: FormEmailSubmission): string {
  const lines = Object.entries(fields)
    .filter(([, value]) => value.trim().length > 0)
    .map(([label, value]) => `${label}: ${value}`);

  const body = lines.join('\n');
  return `mailto:${ACADEMY_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export async function submitFormToAcademyEmail(
  submission: FormEmailSubmission
): Promise<SubmissionResult> {
  const mailtoUrl = buildAcademyMailtoUrl(submission);

  const payload: Record<string, string> = {
    _subject: submission.subject,
    _template: 'table',
    _captcha: 'false',
    ...submission.fields,
  };

  if (submission.replyTo) {
    payload._replyto = submission.replyTo;
  }

  try {
    const response = await fetch(
      `https://formsubmit.co/ajax/${encodeURIComponent(ACADEMY_INFO.email)}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      }
    );

    const data = await response.json().catch(() => null);
    const isSuccess =
      response.ok &&
      (data?.success === true || data?.success === 'true');

    if (isSuccess) {
      return { delivered: true, mailtoUrl };
    }

    return {
      delivered: false,
      mailtoUrl,
      errorMessage:
        data?.message ||
        `Unable to reach the automated email service right now. Please send your form directly to ${ACADEMY_INFO.email} below.`,
    };
  } catch {
    return {
      delivered: false,
      mailtoUrl,
      errorMessage: `Unable to reach the automated email service right now. Please send your form directly to ${ACADEMY_INFO.email} below.`,
    };
  }
}
