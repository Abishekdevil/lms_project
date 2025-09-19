"use client"
import { useState } from "react"
import Link from "next/link"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-indigo-600">LMS</Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
          <Link href="/dashboard" className="hover:text-indigo-600">Dashboard</Link>
          <Link href="/login" className="hover:text-indigo-600">Login</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-gray-50 px-4 py-2 space-y-2">
          <Link href="/dashboard" className="block">Dashboard</Link>
          <Link href="/login" className="block">Login</Link>
        </div>
      )}
    </header>
  )
}
