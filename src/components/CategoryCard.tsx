import { Link } from "react-router-dom"

interface CategoryCardProps {
  title: string
  description: string
  image: string
  href: string
  buttonText?: string
}

export { CategoryCard }
export default function CategoryCard({
  title,
  description,
  image,
  href,
  buttonText = "Explorar más",
}: CategoryCardProps) {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 flex items-center gap-6 hover:shadow-xl transition-shadow duration-300 w-full max-w-md mx-auto">
      <div className="flex-shrink-0 w-24 h-24">
        <div className="w-full h-full rounded-full overflow-hidden">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            width={96}
            height={96}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="flex-1 min-w-0 flex flex-col justify-center">
        <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{title}</h3>
        <p className="text-gray-600 text-base leading-relaxed mb-4 line-clamp-3">{description}</p>

        <Link to={href}>
          <button className="bg-amber-100 hover:bg-amber-200 text-gray-800 font-medium px-6 py-3 rounded-full transition-colors duration-200 text-base border border-amber-200">
            {buttonText}
          </button>
        </Link>
      </div>
    </div>
  )
}
