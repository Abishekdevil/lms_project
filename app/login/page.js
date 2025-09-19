import Input from '../components/input'
import Button from '../components/button'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-indigo-600">Login</h1>

        <form className="space-y-4">
          <Input label="Email" type="email" />
          <Input label="Password" type="password" />
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
      </div>
    </div>
  )
}
