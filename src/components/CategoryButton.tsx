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
    <Link
      to={href}
      className="flex flex-col items-center justify-center gap-2 active:scale-95 transition-transform duration-150"
      style={{ WebkitTapHighlightColor: 'transparent' }}
    >
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg border border-[#bba77a] bg-gradient-to-br from-[#ccb999] to-[#e6ddc6]"
        style={{
          boxShadow: '0 4px 16px 0 rgba(204,185,153,0.18), 0 1.5px 6px 0 rgba(0,0,0,0.10)',
          backdropFilter: 'blur(2px)',
        }}
      >
        {icon}
      </div>
      <span
        className="text-base font-medium text-gray-900 text-center font-geologica"
        style={{ fontFamily: 'Geologica, sans-serif', letterSpacing: '0.01em' }}
      >
        {title}
      </span>
    </Link>
  )
}
