export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="hidden md:block w-64 bg-white shadow-md p-4">
        <h2 className="text-lg font-semibold mb-4">Dashboard</h2>
        <nav className="space-y-2">
          <a href="#" className="block py-2 px-3 rounded hover:bg-gray-100">Overview</a>
          <a href="#" className="block py-2 px-3 rounded hover:bg-gray-100">Courses</a>
          <a href="#" className="block py-2 px-3 rounded hover:bg-gray-100">Settings</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-50">
        {children}
      </main>
    </div>
  )
}
