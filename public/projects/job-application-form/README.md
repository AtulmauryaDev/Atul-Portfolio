# CareerLaunch — Job Application Form

A polished, responsive job application form built with **HTML5, CSS3, and vanilla JavaScript**. This project improves the original form with a modern interface, clearer structure, accessibility touches, and browser-side validation.

## Features

- Responsive layout for desktop, tablet, and mobile
- Personal information, role, address, availability, and work preference fields
- Accessible labels, fieldsets, keyboard focus states, and inline validation messages
- Resume picker supporting PDF, DOC, and DOCX files up to 5 MB
- Email, phone, postal/PIN code, required-field, and resume validation
- Live character counter for the introduction field
- Clear success/error feedback without reloading the page
- Reduced-motion support and automatically updated footer year
- No framework or build step required

## Run locally

1. Download or clone the repository.
2. Open `index.html` in a modern browser.

Google Fonts are optional; system-font fallbacks are included for offline use.

## Important: demo limitations

This is a **front-end-only demo**. The form validates data in the browser but does not transmit or store applications. For production use, connect a secure backend or trusted form service, repeat validation on the server, handle uploaded files securely, and publish an appropriate privacy notice. Browser-side validation alone is not a security measure.

## Tech stack

- HTML5
- CSS3
- Vanilla JavaScript (ES6)


## Where to start reading the code

1. **`index.html`** — the page structure. Start with the header, intro section, then the form's `fieldset` groups. Labels use `for` attributes that match input `id` values.
2. **`style.css`** — the visual design. The `:root` variables hold shared colors. The layout uses CSS Grid/Flexbox; the `@media` block adapts the form for smaller screens.
3. **`script.js`** — the behavior. `validateField()` checks one input, `showError()`/`clearError()` update messages, and the submit listener validates all required fields. The resume handler checks file type and size.

## Interview explanation (simple version)

> I built a responsive job application form using semantic HTML, CSS, and vanilla JavaScript. HTML defines the form and labels, CSS handles the layout and mobile responsiveness, and JavaScript validates required fields and the resume file. The form currently demonstrates client-side validation only; it does not submit data to a backend.
