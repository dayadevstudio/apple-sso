"use client"
import AppleSigninButton from 'react-apple-signin-auth';

function AppleSignIn() {
  const handleSuccess = (data: any) => {
    const { authorization, user } = data;
    // Send data to your backend for verification
    console.log('Apple Sign In Success:', data);
  };

  const authOptions = {
    clientId: process.env.APPLE_CLIENT_ID || 'com.telliant.web.localhost', // Your Service ID
    scope: process.env.APPLE_SCOPE || 'email name',
    redirectURI: 'https://dayadevstudio.github.io/api/auth/callback',
    nonce: process.env.APPLE_NONCE || 'nonce',
    usePopup: true, // Recommended for single-page apps
  };

  return (
    <AppleSigninButton
      authOptions={authOptions}
      uiType="dark"
      className="apple-auth-btn"
      onSuccess={handleSuccess}
      onError={(error: any) => console.error(error)}
    />
  );
}

export default AppleSignIn;