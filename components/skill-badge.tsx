interface SkillBadgeProps {
  name: string
}

export function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <div className="px-4 py-2 rounded-full bg-gray-800/80 border border-gray-700 text-gray-200 hover:border-purple-500 hover:bg-gray-700/80 transition-colors duration-300">
      {name}
    </div>
  )
}
