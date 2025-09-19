export default function Button({ children, type="button", variant="primary" }) {
  const base = "px-4 py-2 rounded font-medium focus:outline-none focus:ring-2"
  const styles = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400",
  }

  return (
    <button type={type} className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  )
}
