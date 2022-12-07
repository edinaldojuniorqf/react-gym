import { forwardRef, InputHTMLAttributes } from 'react'
import { Wrapper } from './styles/Wrapper'

type InputProps = InputHTMLAttributes<HTMLInputElement>

type Ref = HTMLInputElement

export const Input = forwardRef<Ref, InputProps>((props, ref) => {
  return (
    <Wrapper>
      <input
        ref={ref}
        {...props}
      />
    </Wrapper>
  )
})