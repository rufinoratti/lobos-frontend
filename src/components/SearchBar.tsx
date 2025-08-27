"use client"

import { Search } from "lucide-react"

interface SearchBarProps {
  placeholder?: string
  onSearch?: (query: string) => void
}

export default function SearchBar({ placeholder = "Explorar Lobos", onSearch }: SearchBarProps) {
  return (
    <div className="relative w-full max-w-md mx-auto mb-6">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full h-12 pl-4 pr-12 text-gray-700 bg-white rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
        onChange={(e) => onSearch?.(e.target.value)}
      />
      <button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2">
        <Search className="w-5 h-5 text-gray-500" />
      </button>
    </div>
  )
}
