import { Link } from "react-router-dom";

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
  <div className="bg-white rounded-3xl p-4 flex items-center gap-4 hover:shadow-xl active:scale-[0.97] active:shadow-2xl transition-all duration-200 w-[365px] mx-auto touch-manipulation shadow-8px_8px_100px_0px_rgba(1000,100,100,0.13)]">
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

      <div className="flex-1 min-w-0 flex flex-col justify-between h-full py-3">
        <div className="flex flex-col items-start text-left">
          <h3 className="text-lg font-bold text-black mb-2 leading-tight">{title}</h3>
          <p className="text-[#9F9696] font-normal text-xs leading-relaxed mb-4">{description}</p>
        </div>
        <div className="flex justify-center w-full">
          <Link to={href}>
            <button className="categorycard-btn bg-[#CCB999] hover:bg-[#B8A888] text-black font-medium rounded-full transition-colors duration-200 text-sm border border-black w-[130px] h-[25px] flex items-center justify-center">
              {buttonText}
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
