# EmailJS Troubleshooting - Erreur 400

## 🚨 Problème Actuel

L'erreur **400** indique que la configuration EmailJS n'est pas complète. Voici comment résoudre :

## ✅ Étapes de Configuration Obligatoires

### 1. Créer le Service EmailJS

1. **Aller sur** [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. **Se connecter** avec votre compte
3. **Email Services** → **Add New Service**
4. **Choisir votre provider** (Gmail, Outlook, etc.)
5. **Nom du service** : `service_ouloulourolls` (EXACTEMENT ce nom)
6. **Connecter votre email** et autoriser

### 2. Créer le Template EmailJS

1. **Email Templates** → **Create New Template**
2. **Template ID** : `template_contact` (EXACTEMENT cet ID)
3. **Subject** : `[Ouloulou] Nouvelle demande - {{event_type}}`
4. **Content** : Copier le HTML ci-dessous

#### Template HTML Complet :

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; }
    .header { background: linear-gradient(135deg, #5AAECC 0%, #62B1CE 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
    .content { background: #f9f9f9; padding: 30px; border: 1px solid #e0e0e0; }
    .info-row { margin: 15px 0; padding: 10px; background: white; border-left: 4px solid #5AAECC; }
    .label { font-weight: bold; color: #5AAECC; }
    .footer { background: #333; color: white; padding: 20px; text-align: center; border-radius: 0 0 10px 10px; font-size: 12px; }
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

### 3. Variables Requises

Assurez-vous que ces variables sont dans le template :

- `{{from_name}}`
- `{{from_email}}`
- `{{phone}}`
- `{{event_type}}`
- `{{event_date}}`
- `{{message}}`
- `{{reply_to}}`

### 4. Configuration Email

- **To Email** : `jeremy.noverraz@gmail.com`
- **From Name** : `Ouloulou Ice Rolls`
- **Reply To** : `{{reply_to}}`

### 5. Test du Template

1. **Cliquer sur "Test"** dans le template
2. **Remplir les variables** avec des données de test
3. **Envoyer un test** à votre email
4. **Vérifier** que l'email arrive

## 🔧 Debugging

### Vérifications à faire :

1. **Service ID** : `service_ouloulourolls` (exactement)
2. **Template ID** : `template_contact` (exactement)
3. **User ID** : `2YFk-ZcHZhTtL2nhK` (correct)
4. **Service connecté** : Vérifier que le service email est bien connecté
5. **Template publié** : Le template doit être publié (pas en brouillon)

### Erreurs Communes :

- **Service non connecté** → Reconnexion nécessaire
- **Template ID incorrect** → Vérifier l'ID exact
- **Variables manquantes** → Ajouter toutes les variables dans le template
- **Service non publié** → Publier le service et le template

## 📧 Configuration Alternative (Si EmailJS ne fonctionne pas)

Si EmailJS pose toujours problème, on peut utiliser une solution alternative :

### Option 1: Formspree
```javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
})
```

### Option 2: Netlify Forms
```html
<form name="contact" netlify netlify-honeypot="bot-field" hidden>
  <input type="text" name="firstName" />
  <input type="email" name="email" />
  <textarea name="message"></textarea>
</form>
```

## 🎯 Prochaines Étapes

1. **Configurer EmailJS** selon ce guide
2. **Tester** avec le bouton Test dans EmailJS
3. **Redéployer** le site si nécessaire
4. **Tester** le formulaire en live

## 📞 Support

Si le problème persiste, vérifiez :
- Console du navigateur pour plus de détails
- Logs EmailJS dans le dashboard
- Statut de connexion du service email

---

**Dernière mise à jour** : Octobre 2025
