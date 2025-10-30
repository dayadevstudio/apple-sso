"use client"
import AppleSigninButton from 'react-apple-signin-auth';

function AppleSignIn() {
  const handleSuccess = (data: any) => {
    const { authorization, user } = data;
    // Send data to your backend for verification
    console.log('Apple Sign In Success:', data);
  };

  const authOptions = {
    clientId: 'your.service.id', // Your Service ID
    scope: 'email name',
    redirectURI: 'https://your-domain.com',
    nonce: 'nonce',
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