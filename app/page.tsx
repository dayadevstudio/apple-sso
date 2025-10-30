import Link from 'next/link'
import AppleSignIn from './auth/apple-sso/AppleSigninButton'
export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <Link href="/users">Users</Link>
      <AppleSignIn />
    </main>
  )
}
