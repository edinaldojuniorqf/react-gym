import { ReactNode } from 'react'
import { Wrapper } from './styles/Wrapper'

interface ContainerProps {
	children: ReactNode
}

export function Container({
  children
}: ContainerProps) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}