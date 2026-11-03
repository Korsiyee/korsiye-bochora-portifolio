# 📧 EmailJS Setup Guide for Your Portfolio

This guide will help you set up EmailJS to receive contact form submissions directly to your email: **bkorsiye@gmail.com**

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up"** (it's FREE!)
3. Sign up with your email or Google account

## Step 2: Add Email Service

1. After logging in, go to **"Email Services"** in the dashboard
2. Click **"Add New Service"**
3. Choose **"Gmail"** (recommended for personal use)
4. Click **"Connect Account"**
5. Sign in with your Gmail account: **bkorsiye@gmail.com**
6. Allow EmailJS to access your Gmail
7. Give your service a name (e.g., "Portfolio Contact")
8. **Copy the Service ID** (e.g., `service_abc1234`) - You'll need this!

## Step 3: Create Email Template

1. Go to **"Email Templates"** in the dashboard
2. Click **"Create New Template"**
3. Use this template content:

### Template Content:

**Subject:**
```
New Contact from {{name}} - {{subject}}
```

**Body:**
```html
<h2>New Message from Your Portfolio</h2>

<p><strong>From:</strong> {{name}}</p>
<p><strong>Email:</strong> {{email}}</p>
<p><strong>Subject:</strong> {{subject}}</p>

<h3>Message:</h3>
<p>{{message}}</p>

<hr>
<p><em>Sent from your portfolio contact form</em></p>
```

4. In the **"To email"** field, enter: **bkorsiye@gmail.com**
5. Click **"Save"**
6. **Copy the Template ID** (e.g., `template_xyz5678`) - You'll need this!

## Step 4: Get Your Public Key

1. Go to **"Account"** → **"General"** in the dashboard
2. Find **"Public Key"** section
3. **Copy your Public Key** (e.g., `AbC123dEf456GhI789`) - You'll need this!

## Step 5: Update Your Portfolio Code

Open the file: `src/components/Contact.jsx`

Find these lines (around line 26-29):

```javascript
const result = await emailjs.sendForm(
  'service_portfolio',  // Replace with your EmailJS Service ID
  'template_portfolio', // Replace with your EmailJS Template ID
  form.current,
  'YOUR_PUBLIC_KEY'     // Replace with your EmailJS Public Key
)
```

**Replace with YOUR actual values:**

```javascript
const result = await emailjs.sendForm(
  'service_abc1234',      // Your Service ID from Step 2
  'template_xyz5678',     // Your Template ID from Step 3
  form.current,
  'AbC123dEf456GhI789'    // Your Public Key from Step 4
)
```

## Step 6: Save and Test

1. Save the `Contact.jsx` file
2. Your dev server will automatically reload
3. Go to your portfolio and fill out the contact form
4. Submit it
5. Check your email: **bkorsiye@gmail.com** - you should receive the message!

## 📋 Quick Reference Card

```
Service ID:    service_______   (from Step 2)
Template ID:   template_______  (from Step 3)
Public Key:    _______________  (from Step 4)
Your Email:    bkorsiye@gmail.com
```

## ⚠️ Important Notes

1. **Free Tier Limits**: EmailJS free plan allows 200 emails per month
2. **Gmail App Password**: If you have 2-factor authentication on Gmail, you might need to create an app password
3. **Spam Folder**: First email might go to spam, mark it as "Not Spam"
4. **Test First**: Always test with a dummy message before going live

## 🎯 Expected Behavior

When someone fills out your contact form:
1. They fill in: Name, Email, Subject, Message
2. Click "Send Message"
3. Button shows "Sending..."
4. Success message appears: "Thank you for your message! 🎉"
5. **You receive an email** at bkorsiye@gmail.com with all the details

## 🚨 Troubleshooting

### "Failed to send" error?
- Check that Service ID, Template ID, and Public Key are correct
- Make sure you're connected to the internet
- Verify your EmailJS account is active

### Not receiving emails?
- Check spam/junk folder
- Verify "To email" in template is set to bkorsiye@gmail.com
- Make sure Gmail service is connected properly

### Need Help?
- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: support@emailjs.com

---

## 🎉 You're All Set!

Once you complete these steps, your portfolio contact form will send messages directly to your email!

**Total Setup Time: ~10 minutes** ⏱️
