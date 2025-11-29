import Image from 'next/image'
import { urlForImage } from '@/sanity/lib/image'
import type { Image as SanityImageType } from 'sanity'

interface SanityImageProps {
  image: SanityImageType
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
}

export default function SanityImage({ 
  image, 
  alt, 
  width = 800, 
  height = 600, 
  className = '',
  priority = false 
}: SanityImageProps) {
  if (!image) return null

  const imageUrl = urlForImage(image).width(width).height(height).url()

  return (
    <Image
      src={imageUrl}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
    />
  )
}
