import { useMemo, useState } from 'react'
import { Button } from '../ui/Button'
import { TextField } from '../ui/TextField'

function validateEmail(value: string) {
  const trimmed = value.trim()
  if (!trimmed) return 'Email is required.'
  // Intentionally permissive; good UX for newsletters.
  const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)
  if (!ok) return 'Enter a valid email.'
  return ''
}

export function NewsletterCard() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [touched, setTouched] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const error = useMemo(() => {
    if (!touched) return ''
    return validateEmail(email)
  }, [email, touched])

  async function onSubmit() {
    setTouched(true)
    const nextError = validateEmail(email)
    if (nextError) return

    setIsSubmitting(true)
    setSubmitted(false)
    await new Promise((r) => setTimeout(r, 650))
    setIsSubmitting(false)
    setSubmitted(true)
  }

  return (
    <section className="rounded-[10px] border-2 border-[var(--color-border)] p-6">
      <h2 className="text-[18px] leading-[28px] font-medium text-[var(--color-heading)]">
        Newsletter
      </h2>
      <p className="mt-[14px] text-[16px] leading-[26px] text-[var(--color-muted)]">
        Get our news earlier, let’s get in touch.
      </p>

      <div className="mt-[18px] flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-2">
        <TextField
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            if (submitted) setSubmitted(false)
          }}
          onBlur={() => setTouched(true)}
          placeholder="Your email"
          inputMode="email"
          autoComplete="email"
          error={error}
          aria-label="Email address"
        />
        <Button
          type="button"
          size="lg"
          variant="teal"
          className="w-full sm:w-[80px] sm:px-0"
          isLoading={isSubmitting}
          onClick={onSubmit}
        >
          Send
        </Button>
      </div>

      {submitted ? (
        <p className="mt-3 text-sm text-[var(--color-heading)] opacity-80">
          Thanks — you’re subscribed.
        </p>
      ) : null}
    </section>
  )
}
