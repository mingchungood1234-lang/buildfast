# BuildFast Agency Website

A responsive development-agency website built with pure HTML, CSS and JavaScript.

## Files

- index.html — page structure
- style.css — responsive design and animations
- script.js — navigation, reveal animations and demo contact form

## Run

Open `index.html` directly in a browser, or use VS Code Live Server.

## Before publishing

1. Replace `hello@buildfast.dev` with your actual email.
2. Replace the example portfolio projects with your real projects.
3. Connect the contact form in `script.js` to your backend/API.
4. Change the brand name if needed.
5. Add your real domain, social links and company details.

## Suggested future backend endpoint

POST /api/contact

Example body:

{
  "name": "Client name",
  "email": "client@example.com",
  "service": "Website Development",
  "message": "Project description"
}
