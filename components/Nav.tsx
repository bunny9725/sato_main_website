"use client";

import Image from "next/image";
import { useEffect, useState, type CSSProperties } from "react";
import { navLinks } from "@/lib/content";
import SocialIcons from "./SocialIcons";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  // The overlay is hidden by CSS on wide screens; also reset state so it doesn't reappear on shrink.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 900px)");
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <>
      <nav className="nav">
        <a href="#top" className="nav-logo">
          <Image src="/assets/logo-lockup.png" alt="SATO Ramen Bowl" width={98} height={36} priority />
        </a>
        <div className="nav-links">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </div>
        <SocialIcons className="nav-social" />
        <button
          className={`burger${open ? " open" : ""}`}
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </nav>
      {/* Always rendered so it can ease in and out; inert while closed. */}
      <div className={`mobile-menu${open ? " open" : ""}`} inert={!open} aria-hidden={!open}>
          <div className="mobile-menu-links">
            {navLinks.map((l, i) => (
              <a key={l.href} href={l.href} onClick={close} style={{ "--i": i } as CSSProperties}>
                {l.label}
                <span>0{i + 1}</span>
              </a>
            ))}
          </div>
          <div className="mobile-menu-foot" style={{ "--i": navLinks.length } as CSSProperties}>
            <SocialIcons />
            <a href="#location" className="pill" onClick={close}>
              Find your SATO
            </a>
          </div>
      </div>
    </>
  );
}
