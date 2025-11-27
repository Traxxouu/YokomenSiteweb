'use client'

export default function CopyButton({ text }: { text: string }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(text)
  }

  return (
    <button
      onClick={handleCopy}
      className="px-3 py-2 bg-primary hover:bg-primary-light rounded text-sm transition-colors"
    >
      Copier
    </button>
  )
}