import { ButtonHTMLAttributes, ReactNode } from 'react'
import { Wrapper } from './styles/Wrapper'

export enum VARIANT {
	OUTLINE,
  DARK
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode,
  variant?: VARIANT
}

export function Button({
  children,
  variant,
  ...props
}: ButtonProps) {
  return (
    <Wrapper variant={variant}>
      <button
        {...props}
      >
        {children}
      </button>
    </Wrapper>
  )
}