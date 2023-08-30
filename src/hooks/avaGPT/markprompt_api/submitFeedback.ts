import type { PromptFeedback } from '../types'

export interface SubmitFeedbackBody {
  /**
   * Prompt feedback.
   */
  feedback: PromptFeedback
  /** ID of the prompt for which feedback is being submitted. */
  promptId: string
}

export interface SubmitFeedbackOptions {
  /**
   * URL to submit feedback to.
   * @default 'https://api.markprompt.com/v1/feedback'
   */
  apiUrl?: string
  signal?: AbortSignal
}

export const DEFAULT_SUBMIT_FEEDBACK_OPTIONS: SubmitFeedbackOptions = {
  apiUrl: 'https://api.markprompt.com/v1/feedback',
}

export async function submitFeedback(
  projectKey: string,
  body: SubmitFeedbackBody,
  options?: SubmitFeedbackOptions
): Promise<void> {
  if (!projectKey) {
    throw new Error('A projectKey is required.')
  }

  const { apiUrl = DEFAULT_SUBMIT_FEEDBACK_OPTIONS.apiUrl, signal } =
    options ?? {}

  const params = new URLSearchParams({
    projectKey,
  })

  try {
    const response = await fetch(apiUrl + `?${params}`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(body),
      signal,
    })

    if (!response.ok) {
      const error = (await response.json())?.error
      throw new Error(`Failed to submit feedback: ${error || 'Unknown error'}`)
    }

    return response.json()
  } catch (error) {
    if (error instanceof DOMException && error.name === 'AbortError') {
      // do nothing on AbortError's, this is expected
      return undefined
    } else {
      throw error
    }
  }
}