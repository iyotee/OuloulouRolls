# EmailJS Configuration for Ouloulou Ice Rolls

## Current Configuration

The contact form is configured to send emails using EmailJS with the following credentials:

- **Service ID**: `service_ouloulourolls`
- **Template ID**: `template_d5rsd8f`
- **Public Key**: `2YFk-ZcHZhTtL2nhK`
- **Current Recipient**: `jeremy.noverraz@gmail.com` (for testing)

## Setup Instructions

### 1. Create EmailJS Account

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Sign up or log in with your account
3. Verify your email address

### 2. Create Email Service

1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Name it: `service_ouloulourolls`
5. Connect your email account and authorize

### 3. Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use the template ID: `template_d5rsd8f`

#### Template HTML Content:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
    }
    .header {
      background: linear-gradient(135deg, #5AAECC 0%, #62B1CE 100%);
      color: white;
      padding: 30px;
      text-align: center;
      border-radius: 10px 10px 0 0;
    }
    .content {
      background: #f9f9f9;
      padding: 30px;
      border: 1px solid #e0e0e0;
    }
    .info-row {
      margin: 15px 0;
      padding: 10px;
      background: white;
      border-left: 4px solid #5AAECC;
    }
    .label {
      font-weight: bold;
      color: #5AAECC;
    }
    .footer {
      background: #333;
      color: white;
      padding: 20px;
      text-align: center;
      border-radius: 0 0 10px 10px;
      font-size: 12px;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>🍦 Nouvelle Demande de Devis</h1>
    <p>Ouloulou Ice Rolls</p>
  </div>
  
  <div class="content">
    <h2>Contact Information</h2>
    
    <div class="info-row">
      <span class="label">Nom:</span> {{from_name}}
    </div>
    
    <div class="info-row">
      <span class="label">Email:</span> {{from_email}}
    </div>
    
    <div class="info-row">
      <span class="label">Téléphone:</span> {{phone}}
    </div>
    
    <div class="info-row">
      <span class="label">Type d'événement:</span> {{event_type}}
    </div>
    
    <div class="info-row">
      <span class="label">Date de l'événement:</span> {{event_date}}
    </div>
    
    <h2>Message</h2>
    <div class="info-row">
      {{message}}
    </div>
  </div>
  
  <div class="footer">
    <p>Ce message a été envoyé depuis le formulaire de contact de ouloulouicerolls.ch</p>
    <p>Pour répondre, utilisez: {{reply_to}}</p>
  </div>
</body>
</html>
```

#### Template Variables:

Make sure these variables are present in your template:

- `{{from_name}}` - Full name of the sender
- `{{from_email}}` - Email address of the sender
- `{{phone}}` - Phone number (optional)
- `{{event_type}}` - Type of event
- `{{event_date}}` - Date of the event
- `{{message}}` - Message content
- `{{reply_to}}` - Reply-to email address

#### Email Settings:

- **Subject**: `[Ouloulou] Nouvelle demande de devis - {{event_type}}`
- **From Name**: `Ouloulou Ice Rolls - Contact`
- **Reply To**: `{{reply_to}}`

### 4. Test the Template

1. In the EmailJS dashboard, go to your template
2. Click **Test** in the top right
3. Fill in test data for all variables
4. Send a test email to verify it works

### 5. Change Recipient Email

To change the recipient from test email to the real one:

Open `src/views/Contact.vue` and modify line 254:

```javascript
// Current (for testing)
to_email: 'jeremy.noverraz@gmail.com',

// Change to production email
to_email: 'oulouloufood@gmail.com',
```

### 6. Security Considerations

✅ **Good**: The EmailJS Public Key (`2YFk-ZcHZhTtL2nhK`) is safe to be in the frontend code
✅ **Good**: Recipient email is controlled server-side by EmailJS template
⚠️ **Important**: Enable CAPTCHA in EmailJS settings to prevent spam

### 7. Enable CAPTCHA (Recommended)

1. Go to EmailJS Dashboard → **Security**
2. Enable reCAPTCHA
3. Get your site key
4. Add to the contact form

## Troubleshooting

### Email not sending?

1. Check EmailJS Dashboard → **Email Services** → Verify connection
2. Check template ID matches: `template_contact`
3. Check service ID matches: `service_ouloulourolls`
4. Check browser console for errors
5. Verify EmailJS account is verified

### Wrong template?

Make sure the template ID in `Contact.vue` matches your EmailJS template ID.

### Rate Limiting?

EmailJS free tier allows:
- 200 emails/month
- Update to paid plan if needed

## Current Status

✅ EmailJS integration: **Active**
✅ Recipient: `jeremy.noverraz@gmail.com` (testing)
⚠️ Next step: Change to `oulouloufood@gmail.com` for production

---

**Last Updated**: October 14, 2025

