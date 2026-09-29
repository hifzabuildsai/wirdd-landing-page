import WaitlistForm from "@/components/WaitlistForm";

const cards = [
  {
    label: "01 / Start",
    title: "Open a session",
    body: "Grant microphone permission for voice counting, or begin manually. No account is required.",
  },
  {
    label: "02 / Count",
    title: "Keep your place",
    body: "See your Astaghfirullah count, add a missed recitation, remove an extra one, and pause or resume.",
  },
  {
    label: "03 / Reflect",
    title: "See your history",
    body: "Session counts and a daily summary are saved on your Android device.",
  },
];

export default function Home() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Wirdd home">وِرد <span>Wirdd</span></a>
        <nav aria-label="Main navigation">
          <a href="#how">How it works</a>
          <a href="#privacy">Privacy</a>
          <a href="#testing">Testing</a>
        </nav>
      </header>

      <section id="top" className="hero">
        <div className="hero-copy">
          <p className="edition-badge"><span className="badge-dot" /> ANDROID TESTER EDITION</p>
          <p className="hero-wordmark" lang="ar" dir="rtl">وِرد</p>
          <p className="hero-transliteration">WIRDD</p>
          <h1>Let your dhikr<br /><em>find its rhythm.</em></h1>
          <p className="intro">A quiet companion for counting Astaghfirullah. Start a session, correct the count whenever you need, and return to your day with a clear record.</p>
          <a className="primary-link" href="#testing">See tester status <span aria-hidden="true">↗</span></a>
          <p className="hero-note">Voice and locked-screen counting are awaiting physical Android acceptance testing. No download is offered yet.</p>
        </div>
        <div className="hero-art">
          <div className="phone-frame" role="img" aria-label="Illustration of the session counter interface, showing manual correction controls">
            <div className="phone-notch" aria-hidden="true" />
            <div className="phone-top"><span>9:41</span><span>●●●</span></div>
            <p className="phone-eyebrow">SESSION · ILLUSTRATION</p>
            <div className="phone-ring"><span>20</span></div>
            <p className="phone-arabic" lang="ar" dir="rtl">أَسْتَغْفِرُ اللّٰه</p>
            <p className="phone-state">Count shown as an interface example</p>
            <div className="phone-actions"><span>+1</span><span>−1</span><span>Pause</span></div>
          </div>
          <p>One moment at a time.</p>
        </div>
      </section>

      <section className="pullquote" aria-label="Why Wirdd">
        <p className="eyebrow">WHY WIRDD</p>
        <blockquote>“I want to remember the recitation, without losing my place in the day.”</blockquote>
        <p>Wirdd is being built for that quiet rhythm. The hands-free experience is still being checked on real Android phones.</p>
      </section>

      <section id="how" className="section">
        <p className="eyebrow">THE JOURNEY</p>
        <h2>Simple enough to stay present.</h2>
        <div className="card-grid">
          {cards.map(card => (
            <article className="card" key={card.label}>
              <p className="eyebrow">{card.label}</p>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="privacy" className="section privacy-section">
        <div>
          <p className="eyebrow">PRIVACY & DATA FLOW</p>
          <h2>Your recitation is yours.</h2>
        </div>
        <div className="privacy-copy">
          <p>The tester app asks Android for <strong>on-device Arabic speech recognition</strong>. It uses text results in memory to count the phrase. Wirdd does not save raw audio or transcripts, and the tester app does not require an account or contact an app server for its core session flow.</p>
          <p>Voice counting requires Android 13 or newer and an installed Arabic on-device speech model. On older Android versions, or if that capability is unavailable, manual counting remains available. Recognition accuracy and background operation have not yet passed physical device testing.</p>
          <p>Counts, session times, and optional mood are stored in local SQLite. This website sends a waitlist email to Kit only when the waitlist is configured and you choose to submit it.</p>
        </div>
      </section>

      <section id="testing" className="section testing-section">
        <p className="eyebrow">RELEASE STATUS</p>
        <h2>Android testing is in progress.</h2>
        <p>The installable preview and its tester link will be published after the voice count, corrections, saved history, and locked-screen behavior are checked on a physical phone. There is no verified APK link yet.</p>
        <div className="status-list">
          <span>✓ Local counts and corrections implemented</span>
          <span>◌ On-device Arabic recognition needs device proof</span>
          <span>◌ Locked-screen continuity needs device proof</span>
          <span>◌ Billing is not offered in this tester edition</span>
        </div>
        <div className="waitlist">
          <h3>Hear when testing opens</h3>
          {process.env.KIT_FORM_ID ? (
            <WaitlistForm source="tester-site" buttonText="Join the waitlist" />
          ) : (
            <p>The email waitlist is temporarily unavailable. Please check back for a verified tester link.</p>
          )}
          <small>We only use your email to contact you about Wirdd testing. If the waitlist is unavailable, the form will tell you.</small>
        </div>
      </section>

      <footer>
        <span>وِرد · Wirdd</span>
        <span>For tester support, reply to the person who invited you. © 2026 Wirdd.</span>
        <a href="#privacy">Privacy</a>
      </footer>
    </main>
  );
}
