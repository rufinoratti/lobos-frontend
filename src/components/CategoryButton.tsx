import type { ReactNode } from "react"
import { Link } from "react-router-dom"
// Ejemplo de importación de iconos de lucide-react
// import { Home, User } from "lucide-react"

interface CategoryButtonProps {
  title: string
  icon: ReactNode
  href: string
}

export default function CategoryButton({ title, icon, href }: CategoryButtonProps) {
  return (
    <Link to={href} className="flex flex-col items-center active:scale-95 active:shadow-lg transition-all duration-150">
      <div className="w-20 h-20 bg-[#CCB999] rounded-[50px] flex items-center justify-center mb-2 shadow-[2px_2px_4px_rgba(0,0,0,0.15)]">
        {icon}
      </div>
      <span className="text-sm font-medium text-gray-900 text-center">{title}</span>
    </Link>
  )
}
