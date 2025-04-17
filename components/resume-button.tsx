"use client"

import { useState } from "react"
import { Download, FileText, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ResumeButtonProps {
  resumeUrl: string
  className?: string
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg"
}

export function ResumeButton({ resumeUrl, className = "", variant = "default", size = "default" }: ResumeButtonProps) {
  const [isDownloading, setIsDownloading] = useState(false)
  const [isDownloaded, setIsDownloaded] = useState(false)

  const handleDownload = () => {
    setIsDownloading(true)

    // Simulate download process (you can remove this in production)
    setTimeout(() => {
      setIsDownloading(false)
      setIsDownloaded(true)

      // Reset the downloaded state after 3 seconds
      setTimeout(() => {
        setIsDownloaded(false)
      }, 3000)
    }, 1000)

    // Trigger the actual download
    const link = document.createElement("a")
    link.href = resumeUrl
    link.download = resumeUrl.split("/").pop() || "resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <Button
      onClick={handleDownload}
      disabled={isDownloading}
      variant={variant}
      size={size}
      className={`relative group ${className} ${
        variant === "default"
          ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
          : ""
      }`}
    >
      <span className="flex items-center gap-2">
        {isDownloading ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Downloading...
          </>
        ) : isDownloaded ? (
          <>
            <Check className="h-4 w-4" />
            Downloaded!
          </>
        ) : (
          <>
            <FileText className="h-4 w-4 group-hover:hidden" />
            <Download className="h-4 w-4 hidden group-hover:block" />
            Download Resume
          </>
        )}
      </span>

      {/* Animated border for hover effect */}
      {variant !== "default" && (
        <span className="absolute inset-0 rounded-md overflow-hidden">
          <span className="absolute inset-0 rounded-md bg-gradient-to-r from-purple-600/0 via-purple-600/50 to-pink-600/0 opacity-0 group-hover:opacity-100 blur-sm transition-opacity"></span>
        </span>
      )}
    </Button>
  )
}
