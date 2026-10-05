import React, { useRef, useState } from 'react'

const endpoint = 'https://getform.io/f/8fb699dd-8aa4-4a71-a6a4-b76f4d0fcca3'
const fieldClass = 'w-full border-2 rounded-lg p-3 border-gray-300 focus:border-[#001b5e] focus:outline-none'

const Contact = () => {
  const [status, setStatus] = useState('idle')
  const submitting = useRef(false)
  const successRef = useRef(null)

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (submitting.current) return
    const form = event.currentTarget
    const data = new FormData(form)
    submitting.current = true
    setStatus('sending')
    const controller = new AbortController()
    const timeout = window.setTimeout(() => controller.abort(), 30000)

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
        signal: controller.signal,
      })
      if (!response.ok || response.redirected) throw new Error('Submission not confirmed')
      const result = await response.json()
      if (result.success === false || result.error || result.errors) {
        throw new Error('Submission rejected')
      }
      form.reset()
      setStatus('success')
      window.requestAnimationFrame(() => successRef.current?.focus())
    } catch {
      setStatus('error')
    } finally {
      window.clearTimeout(timeout)
      submitting.current = false
    }
  }

  const returnHome = () => {
    setStatus('idle')
    window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}#main`)
    const heading = document.querySelector('#main h1')
    heading?.focus({ preventScroll: true })
    document.getElementById('main')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="py-4 text-4xl font-bold text-center text-[#001b5e]">Let’s Connect</h1>
      <p className="pb-6 text-center text-lg text-stone-600">
        Have a junior development opportunity or a project to discuss? Send me a message — I’d love to hear from you.
      </p>
      {status === 'success' ? (
        <div ref={successRef} tabIndex={-1} className="rounded-xl bg-green-50 p-8 text-center focus:outline-none">
          <h2 className="text-2xl font-semibold text-green-900">Thank you for your message!</h2>
          <p className="mt-3 text-green-900">Your message has been sent successfully.</p>
          <button type="button" onClick={returnHome} className="mt-6 rounded-lg bg-[#001b5e] px-6 py-3 text-white">
            Back to Home
          </button>
        </div>
      ) : (
        <form action={endpoint} method="POST" onSubmit={handleSubmit}>
          <fieldset disabled={status === 'sending'}>
            <div className="grid md:grid-cols-2 gap-4 w-full py-2">
              <div className="flex flex-col">
                <label htmlFor="contact-name" className="uppercase text-sm py-2">Full name</label>
                <input id="contact-name" className={fieldClass} type="text" name="name" autoComplete="name" required maxLength={120} />
              </div>
              <div className="flex flex-col">
                <label htmlFor="contact-phone" className="uppercase text-sm py-2">Phone (optional)</label>
                <input id="contact-phone" className={fieldClass} type="tel" name="phone" autoComplete="tel" maxLength={40} />
              </div>
            </div>
            <div className="flex flex-col py-2">
              <label htmlFor="contact-email" className="uppercase text-sm py-2">Email address</label>
              <input id="contact-email" className={fieldClass} type="email" name="email" autoComplete="email" required maxLength={254} />
            </div>
            <div className="flex flex-col py-2">
              <label htmlFor="contact-subject" className="uppercase text-sm py-2">Subject</label>
              <input id="contact-subject" className={fieldClass} type="text" name="subject" required maxLength={200} />
            </div>
            <div className="flex flex-col py-2">
              <label htmlFor="contact-message" className="uppercase text-sm py-2">Message</label>
              <textarea id="contact-message" className={fieldClass} rows={6} name="message" required maxLength={5000} />
            </div>
            <button type="submit" className="bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg disabled:opacity-60">
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>
          </fieldset>
          <p role="status" aria-live="polite" className="mt-4 text-center text-stone-600">
            {status === 'sending' && 'Sending your message…'}
          </p>
          {status === 'error' && (
            <p role="alert" className="mt-2 text-center text-red-700">
              We couldn’t confirm your submission. Your message is still here. Please check your connection before trying again.
            </p>
          )}
        </form>
      )}
    </div>
  )
}

export default Contact
