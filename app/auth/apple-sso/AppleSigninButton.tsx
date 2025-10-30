"use client"
import AppleSigninButton from 'react-apple-signin-auth'

function AppleSignIn() {
  const handleSuccess = (data: any) => {
    console.log('Apple Sign In Success:', data)
  }

  const handleError = (error: any) => {
    console.error('Apple Sign In Error:', error)
  }

  // Resolve base URL on the client without using env vars
  const getBaseUrl = () => {
    if (typeof window !== 'undefined') {
      return window.location.origin
    }
    return 'http://localhost:3000'
  }

  const baseUrl = getBaseUrl()
  const clientId = 'com.telliant.web.localhost'

  if (!clientId) {
    // Surface a clear error when client ID is not configured
    console.error(
      'Apple Sign In configuration error: NEXT_PUBLIC_APPLE_CLIENT_ID is not set. Set it to your Apple Service ID (e.g., com.your.domain.web) and restart the dev server.'
    )
  }

  // Helpful log to verify values during setup
  if (typeof window !== 'undefined') {
    // eslint-disable-next-line no-console
    console.debug('[Apple SSO] Using clientId/baseUrl:', clientId, baseUrl)
  }

  const authOptions = {
    clientId: clientId || 'MISSING_CLIENT_ID',
    scope: 'email name',
    redirectURI: `https://apple-sso-delta.vercel.app/api/auth/callback`,
    nonce: 'nonce',
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


