import Link from 'next/link'
import AppleSignIn from './auth/apple-sso/AppleSigninButton'
export default function Home() {
  return (
    <main>
      <AppleSignIn />
    </main>
  )
}
