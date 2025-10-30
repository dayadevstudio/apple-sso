"use client"
import AppleSigninButton from 'react-apple-signin-auth'

function AppleSignIn() {
  const handleSuccess = (data: any) => {
    console.log('Apple Sign In Success:', data)
  }

  const handleError = (error: any) => {
    console.error('Apple Sign In Error:', error)
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

  const authOptions = {
    clientId: process.env.NEXT_PUBLIC_APPLE_CLIENT_ID || 'com.telliant.web.localhost',
    scope: process.env.NEXT_PUBLIC_APPLE_SCOPE || 'email name',
    redirectURI: `${baseUrl}/api/auth/callback`,
    nonce: process.env.NEXT_PUBLIC_APPLE_NONCE || 'nonce',
    usePopup: false,
  }

  return (
    <AppleSigninButton
      authOptions={authOptions}
      uiType="dark"
      className="apple-auth-btn"
      onSuccess={handleSuccess}
      onError={handleError}
    />
  )
}

export default AppleSignIn


