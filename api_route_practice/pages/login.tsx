import Layout from '../components/Layout'
import LoginForm from '../components/LoginForm'
import { useSession } from 'next-auth/react'
import { getToken, JWT } from 'next-auth/jwt'
import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const token = await getToken({ req, secret: 'secretKey' })

  return {
    props: {
      token,
    },
  }
}

interface Props {
  token: JWT | null
}

export default function LoginPage({ token }: Props) {
  const { data: session, status } = useSession()

  // console.log(session)
  // console.log(status)

  console.log(token)

  return (
    <Layout>
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-4xl font-black font-sans p-4 mt-6">Login Form</h2>
        <LoginForm />
        <h2 className="text-4xl font-black font-sans p-4 mt-6">User</h2>
        {session && (
          <div>
            {session.user?.name}: {session.user?.email}
          </div>
        )}
      </div>
    </Layout>
  )
}