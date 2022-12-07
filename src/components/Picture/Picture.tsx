import { ImgHTMLAttributes } from 'react'
import { Wrapper } from './styles/Wrapper'

type PictureProps = ImgHTMLAttributes<HTMLImageElement>

export function Picture({alt, ...props}: PictureProps) {
  return (
    <Wrapper>
      <img {...props} alt={alt} />
    </Wrapper>
  )
}