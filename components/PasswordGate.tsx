'use client'

import { useState, type FormEvent, type ReactNode } from 'react'

const PASSWORD = '1437'

export default function PasswordGate({ children }: { children: ReactNode }) {
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [password, setPassword] = useState('')
  const [hasError, setHasError] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (password !== PASSWORD) {
      setHasError(true)
      return
    }

    setIsUnlocked(true)
  }

  if (isUnlocked) return children

  return (
    <main className="password-page">
      <form className="password-card" onSubmit={handleSubmit}>
        <div className="password-icon" aria-hidden="true">🔐</div>
        <p className="subtitle">✦ A LITTLE SURPRISE ✦</p>
        <h1 className="gift-title">Just for <span>You</span></h1>
        <p className="password-description">Enter the secret code to open your gift 💌</p>
        <label className="password-label" htmlFor="gift-password">Secret code</label>
        <input
          id="gift-password"
          className="password-input"
          type="password"
          inputMode="numeric"
          autoComplete="current-password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value)
            setHasError(false)
          }}
          aria-invalid={hasError}
          aria-describedby={hasError ? 'password-error' : undefined}
          autoFocus
        />
        {hasError && <p className="password-error" id="password-error" role="alert">That code isn’t quite right. Try again 💗</p>}
        <button className="btn-primary password-submit" type="submit">Open your gift ✨</button>
      </form>
    </main>
  )
}
