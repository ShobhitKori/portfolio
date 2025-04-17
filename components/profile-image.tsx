"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface ProfileImageProps {
  src: string
  alt: string
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
}

export function ProfileImage({ src, alt, size = "lg", className = "" }: ProfileImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  // Size mapping
  const sizeClasses = {
    sm: "w-24 h-24",
    md: "w-32 h-32",
    lg: "w-40 h-40 md:w-48 md:h-48",
    xl: "w-48 h-48 md:w-56 md:h-56",
  }

  useEffect(() => {
    // Preload the image
    const img = document.createElement("img")
    img.src = src
    img.onload = () => setIsLoaded(true)
  }, [src])

  return (
    <div className={`relative ${sizeClasses[size]} rounded-full overflow-hidden ${className}`}>
      {/* Gradient border */}
      <div className="absolute inset-0 rounded-full p-1 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="absolute inset-0 rounded-full overflow-hidden bg-black"></div>
      </div>

      {/* Animated glow effect */}
      <div className="absolute inset-1 rounded-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/30 animate-pulse"></div>
      </div>

      {/* Image */}
      <div className="absolute inset-2 rounded-full overflow-hidden bg-gray-900">
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          fill
          className={`object-cover transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
          onLoadingComplete={() => setIsLoaded(true)}
        />
      </div>

      {/* Shine effect */}
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <div className="absolute -inset-full top-0 right-0 w-1/2 h-1/2 bg-gradient-to-r from-transparent to-white/10 blur-sm transform rotate-45 translate-x-[100%] translate-y-[100%] animate-shine"></div>
      </div>
    </div>
  )
}
