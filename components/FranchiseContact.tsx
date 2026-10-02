"use client";

import { useState, type FormEvent } from "react";

type Enquiry = { name: string; phone: string; city: string };

/**
 * Inline franchise enquiry form. On submit the thank-you message is laid over the form,
 * which stays in place (hidden) so the section keeps its height and the page doesn't jump.
 */
export default function FranchiseContact() {
  const [sent, setSent] = useState<Enquiry | null>(null);
  const [failed, setFailed] = useState(false);

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Enquiry;
    setFailed(false);
    const res = await fetch("/api/enquiries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).catch(() => null);
    if (res?.ok) setSent(data);
    else setFailed(true);
  };

  return (
    <div className="enquiry-wrap">
      <form className={`enquiry${sent ? " is-sent" : ""}`} onSubmit={submit} inert={!!sent} aria-hidden={!!sent}>
        <div className="eyebrow">ENQUIRE NOW</div>
        <label>
          <span>Name</span>
          <input name="name" required autoComplete="name" />
        </label>
        <label>
          <span>Phone number</span>
          <input name="phone" type="tel" required autoComplete="tel" inputMode="tel" pattern="[0-9 +\-]{7,}" title="Digits, spaces, + or - only" />
        </label>
        <label>
          <span>City</span>
          <input name="city" required autoComplete="address-level2" />
        </label>
        <button type="submit" className="pill">
          Submit
        </button>
        {failed && <p role="alert">Couldn&apos;t send your enquiry. Please try again.</p>}
      </form>

      {sent && (
        <div className="enquiry-done" role="status">
          <span className="enquiry-check" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12.5l4.5 4.5L19 7.5" />
            </svg>
          </span>
          <h3>Thanks, {sent.name.trim().split(/\s+/)[0]}.</h3>
          <p>We&apos;ve got your details. Our team will call you on {sent.phone} about bringing SATO to {sent.city}.</p>
        </div>
      )}
    </div>
  );
}
