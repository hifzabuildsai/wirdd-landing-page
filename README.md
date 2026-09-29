# Wirdd website

Next.js 16.2.4 site for `wirdd.app`. The page currently describes an Android
tester candidate. It deliberately offers no APK link until a verified preview
build and physical-device acceptance exist.

```bash
npm ci
npx tsc --noEmit
npm run lint
npm run build
```

The waitlist is shown only when `KIT_FORM_ID` is configured at build time.
The server route returns 503 without it and never logs submitted email
addresses. With a configured form, the server sends email to Kit only after
the visitor submits the form. There is no app audio on this website.

Update the status and install link only after the Android app's Arabic voice
counting and locked-screen flow have physical-device evidence. Coordinate
the APK link, supported Android versions, privacy notes, and release wording
with the app README. For tester support, invitees currently reply to their
inviter; no domain mailbox has been verified.
