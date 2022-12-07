import { Container } from '../../components/Container/Container'
import { FormLogin } from '../../components/FormLogin/FormLogin'
import { Logo } from '../../components/Logo/Logo'
import { Button, VARIANT } from '../../components/Button/Button'
import { WrapperLogo } from './styles/WrapperLogo'
import { Wrapper } from './styles/Wrapper'
import { Footer } from './styles/Footer'
import { SubTitle } from './styles/SubTitle'

export function LoginPage() {
  return (
    <Container>
      <Wrapper>
        <WrapperLogo>
          <Logo />
        </WrapperLogo>
        <FormLogin />
        <Footer>
          <SubTitle>
            Ainda não tem Acesso?
          </SubTitle>
          <Button variant={VARIANT.OUTLINE}>Criar conta</Button>
        </Footer>
      </Wrapper>
    </Container>
  )
}