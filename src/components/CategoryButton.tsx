import type { ReactNode } from "react"
import { Link } from "react-router-dom"

interface CategoryButtonProps {
  title: string
  icon?: ReactNode
  image?: string
  href: string
}

export default function CategoryButton({ title, icon, image, href }: CategoryButtonProps) {
  return (
    <Link to={href} className="flex flex-col items-center">
      <div className="w-20 h-20 bg-[#CCB999] rounded-[10px] flex items-center justify-center mb-2 shadow-[2px_2px_4px_rgba(0,0,0,0.15)]">
        {image ? (
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            width={48}
            height={48}
            className="rounded-md object-cover"
          />
        ) : (
          icon
        )}
      </div>
      <span className="text-sm font-medium text-gray-900 text-center">{title}</span>
    </Link>
  )
}
