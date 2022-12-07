import { SignOut } from 'phosphor-react'
import { Picture } from '../Picture/Picture'
import { Hello } from './styles/Hello'
import { Wrapper } from './styles/Wrapper'

export function User() {
  return (
    <Wrapper>
      <Picture src="https://via.placeholder.com/100" />
      <Hello>
        Olá, Rodrigo Gonçalves
      </Hello>
      <SignOut size="28" />
    </Wrapper>
  )
}