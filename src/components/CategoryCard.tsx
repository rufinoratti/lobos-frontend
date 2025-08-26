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
    <div className="bg-white rounded-3xl shadow-lg p-4 flex items-center gap-4 hover:shadow-xl transition-shadow duration-300 w-[365px] h-[175px] mx-auto">
      <div className="flex-shrink-0 w-32 h-32">
        <div className="w-full h-full rounded-full overflow-hidden">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            width={128}
            height={128}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="flex-1 min-w-0 flex flex-col justify-between items-center text-center h-full py-3">
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">{title}</h3>
          <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{description}</p>
        </div>

        <Link to={href}>
          <button className="bg-[#CCB999] hover:bg-[#B8A888] text-gray-800 font-medium rounded-full transition-colors duration-200 text-sm border border-black w-[130px] h-[25px] flex items-center justify-center">
            {buttonText}
          </button>
        </Link>
      </div>
    </div>
  )
}