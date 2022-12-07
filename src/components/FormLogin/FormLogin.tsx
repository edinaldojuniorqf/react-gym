import { useForm } from 'react-hook-form'
import { Button } from '../Button/Button'
import { Input } from '../Input/Input'
import { Title } from './styles/Title'
import { Wrapper } from './styles/Wrapper'

interface FormData {
  email: string
  password: string
}

export function FormLogin() {
  const { handleSubmit, register } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    console.log(data)
  }

  return (
    <Wrapper>
      <Title>
				Acesse sua conta
      </Title>
      <form
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          type="text"
          placeholder="E-mail"
          {...register('email', {
            required: true
          })}
        />
        <Input
          type="password"
          placeholder="Senha"
          {...register('password', {
            required: true
          })}
        />
        <Button type="submit">Acessar</Button>
      </form>
    </Wrapper>
  )
}