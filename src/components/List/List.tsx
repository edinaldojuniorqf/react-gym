import { CaretRight } from 'phosphor-react'
import { Img } from './styles/Img'
import { Item } from './styles/Item'
import { ItemDescription } from './styles/ItemDescription'
import { ItemTitle } from './styles/ItemTitle'
import { Title } from './styles/Title'
import { Wrapper } from './styles/Wrapper'
import { WrapperIcon } from './styles/WrapperIcon'
import { WrapperItem } from './styles/WrapperItem'
import { WrapperLoading } from './styles/WrapperLoadding'

interface IItem {
	image: string
	title: string
	description: string
}

interface IListProps {
	items: IItem[]
  loading: boolean
}

export function List({
  items = [],
  loading = false
}: IListProps) {
  if (loading) {
    return <WrapperLoading>Carregando...</WrapperLoading>
  }

  return (
    <Wrapper>
      <Title>Exercícios</Title>
      {items.map(item => (
        <Item key={item.title}>
          <Img src={item.image} alt={item.title} />
          <WrapperItem>
            <ItemTitle>{item.title}</ItemTitle>
            <ItemDescription>{item.description}</ItemDescription>
          </WrapperItem>
          <WrapperIcon>
            <CaretRight size={24} />
          </WrapperIcon>
        </Item>
      ))}
    </Wrapper>
  )
}