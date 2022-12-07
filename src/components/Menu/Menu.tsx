import { useState } from 'react'
import { SwiperSlide } from 'swiper/react'
import { Button, VARIANT } from '../Button/Button'
import { Wrapper } from './styles/Wrapper'
import { SwiperStyled } from './styles/Swiper'

export interface Item {
	id: string
	text: string
}

interface MenuProps {
	items: Item[]
  onItemClick: (item: Item) => void
}

export function Menu({
  items,
  onItemClick
}: MenuProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleItemClick = (index: number, item: Item) => () => {
    setActiveIndex(index)
    onItemClick(item)
  }

  const isActive = (index: number) => index === activeIndex

  return (
    <Wrapper>
      <SwiperStyled
        spaceBetween={50}
        slidesPerView={3.6}
      >
        {items.map((item, index) => (
          <SwiperSlide key={item.id}>
            <Button
              variant={isActive(index) ? VARIANT.OUTLINE : VARIANT.DARK}
              onClick={handleItemClick(index, item)}
            >
              {item.text}
            </Button>
          </SwiperSlide>
        ))}
        
      </SwiperStyled>
    </Wrapper>
  )
}