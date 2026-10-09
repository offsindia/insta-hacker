# CyberLab — multi-page white-hat cybersecurity website

## Included pages
- index.html — premium landing page
- services.html — service directory
- social-media.html — social platform account access/recovery guidance
- mobile-security.html — device privacy and security
- digital-forensics.html — authorized evidence and incident support
- training.html — cybersecurity learning
- pricing.html — editable example packages and payment placeholders
- contact.html — enquiry form placeholder
- about.html, privacy.html, terms.html
- style.css — shared responsive visual system
- app.js — shared navigation and WhatsApp configuration

## WhatsApp number (intentionally blank)
Edit `app.js` and set:
`const WHATSAPP_NUMBER = "91XXXXXXXXXX";`
Use international digits only, with no plus sign or spaces. All pages share the same sticky button.

## Payment integration
The payment methods are non-functional placeholders. Before taking payments, implement a real gateway with server-side order creation, verified webhooks/signatures, order records, receipts, tax and refund handling. Never trust a client-side success redirect.

## Contact form
The form currently does not transmit or store information. Connect it to a secure backend or trusted form provider before launch.

## Before production
- Replace the placeholder brand name with the final registered/approved business identity.
- Review legal policies for your actual services and applicable law.
- Configure HTTPS, security headers, spam controls, server-side validation, access controls, backups, and logging.
- Add accurate service scope, support email, business details, and prices.
- Keep gateway secrets on the server, never in front-end JavaScript.

## Service boundaries
The copy presents legitimate white-hat services: official account recovery guidance, authorized business account access configuration, owner-controlled device security, consent-based evidence handling, and cybersecurity training. It intentionally excludes unauthorized account bypass, credential theft, covert microphone access, spyware, private photo extraction, and obtaining another person's private call records from a phone number.
