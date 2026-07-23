// ─────────────────────────────────────────────────────────────
// EmailJS lets the Contact form send real emails with no backend.
// Fill in the three 🔧 values below after setting up your account.
//
// How to get them (free tier is plenty for a portfolio site):
//   1. Create an account at https://www.emailjs.com/
//   2. Email Services → Add New Service → connect Gmail/Outlook/etc.
//      → copy the "Service ID"
//   3. Email Templates → Create New Template. Use these variable
//      names in the template body so they match the code:
//        {{from_name}}   {{from_email}}   {{message}}
//      → copy the "Template ID"
//   4. Account → General → copy your "Public Key"
//
// These values are meant to be public — EmailJS is designed to be
// called safely from client-side code, so it's fine that they end
// up in your built JS bundle. (You can still restrict which domains
// are allowed to use them from the EmailJS dashboard for extra safety.)
// ─────────────────────────────────────────────────────────────

export const EMAILJS_CONFIG = {
  serviceId: 'service_2jt8s4g',
  templateId: 'template_r3ns22b',
  publicKey: 'qCmgzCL2sV1WzumXj',
}
