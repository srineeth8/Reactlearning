# Supabase Google OAuth Setup Guide

This guide walks you through setting up Google OAuth authentication with Supabase for your React e-commerce app.

## Step 1: Create a Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Click "Start your project"
3. Sign up or log in with your account
4. Create a new project:
   - Choose a project name (e.g., "ecommerce-app")
   - Set a database password and save it
   - Select your region
   - Click "Create new project"

Wait for the project to initialize (~2 minutes).

## Step 2: Get Your Supabase Credentials

1. In your Supabase dashboard, go to **Settings** → **API**
2. Copy these values:
   - **Project URL** (under "Project URL")
   - **anon public** key (under "API keys")

## Step 3: Set Up Google OAuth Provider

### 3a. Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click on **New Project**
3. Enter project name and click **Create**
4. Wait for the project to be created
5. Make sure the new project is selected in the top dropdown

### 3b. Create OAuth Credentials

1. In Google Cloud Console, go to **APIs & Services** → **OAuth consent screen**
2. Select **External** user type
3. Fill in the application information:
   - App name: "E-Commerce App"
   - User support email: Your email
   - Developer contact: Your email
4. Click **Save and Continue**
5. On the "Scopes" page, click **Save and Continue**
6. Click **Save and Continue** on the "Test users" page as well
7. Click **Back to Dashboard**

### 3c: Create OAuth Client ID

1. Go to **APIs & Services** → **Credentials**
2. Click **+ Create Credentials** → **OAuth client ID**
3. Select **Web application**
4. Add authorized redirect URIs:
   - `http://localhost:5173` (for local development)
   - `http://localhost:3000` (alternative dev port)
   - `https://yourdomain.com` (for production)
   - `https://yourdomain.com/auth/callback` (for production callback)
5. Click **Create**
6. Copy your **Client ID** (you'll need this)

## Step 4: Configure Google OAuth in Supabase

1. In Supabase Dashboard, go to **Authentication** → **Providers**
2. Click on **Google**
3. Enable Google provider by toggling it on
4. Paste your Google **Client ID** in the "Client ID" field
5. You'll need the **Client Secret** from Google Cloud Console:
   - Go back to Google Cloud Console → **APIs & Services** → **Credentials**
   - Click on your OAuth 2.0 Client ID
   - Copy the **Client Secret**
6. Paste the **Client Secret** in Supabase
7. Copy the **Redirect URL** from Supabase (you'll need this)

### Add Redirect URI to Google

1. Go back to Google Cloud Console
2. Go to **APIs & Services** → **Credentials**
3. Click on your OAuth 2.0 Client ID
4. Add the redirect URL from Supabase to "Authorized redirect URIs"
5. Format should be: `https://[your-project].supabase.co/auth/v1/callback?provider=google`
6. Click **Save**

## Step 5: Add Environment Variables

1. Open `.env.local` in your project root
2. Add your Supabase credentials:

```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```

Replace the placeholders with your actual values from Supabase.

## Step 6: Enable User Signups (Optional)

In Supabase Dashboard:
1. Go to **Authentication** → **Policies** (or **Settings**)
2. Under "Email/Password Auth Settings", enable "Enable signup" if it's not already enabled
3. Google OAuth will automatically allow signups for new users

## Step 7: Test the Application

1. Start your development server:
```bash
npm run dev
```

2. Open `http://localhost:5173` in your browser
3. Click the **Login** button in the header
4. Click **Sign in with Google**
5. Follow the Google authentication flow
6. You should be redirected back to your app and logged in

## Troubleshooting

### Issue: "Invalid redirect URI"
- Make sure the redirect URI in Google Cloud Console matches exactly what Supabase shows
- Check that `http://localhost:5173` is added in Google OAuth settings
- Clear browser cache and try again

### Issue: "CORS Error"
- Make sure your VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are correct
- Verify they're in `.env.local` file
- Restart your dev server after adding environment variables

### Issue: "Authentication failed"
- Check the browser console for detailed error messages
- Make sure Google OAuth is enabled in Supabase
- Verify Client ID and Client Secret in Supabase match Google Cloud Console

## Features Implemented

✅ Google OAuth login/signup
✅ User context management
✅ Logout functionality
✅ Protected checkout route (requires login)
✅ Display user info in header
✅ Session persistence

## File Structure

```
src/
  config/
    supabaseClient.js          # Supabase client configuration
  context/
    authctx.jsx               # Auth context and provider
    countctx.jsx              # Existing cart context
  login.jsx                   # Login page with Google button
  header.jsx                  # Updated with login/logout
  App.jsx                     # Updated with auth routes
  main.jsx                    # Updated with AuthProvider
```

## Next Steps

- Add user profile page
- Store user preferences in Supabase database
- Add order history
- Implement email notifications
- Add two-factor authentication

For more details, visit [Supabase Documentation](https://supabase.com/docs) or [Google OAuth Documentation](https://developers.google.com/identity/protocols/oauth2).
