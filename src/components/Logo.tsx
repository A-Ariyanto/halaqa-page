import Image, { ImageProps } from 'next/image'
import logoImg from '@/images/main-logo.png'

export function Logo(props: Omit<ImageProps, 'src' | 'alt'>) {
  return (
    <Image src={logoImg} alt="Main logo" {...props} />
  )
}