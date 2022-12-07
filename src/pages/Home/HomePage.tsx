import { useEffect } from 'react'
import { Container } from '../../components/Container/Container'
import { List } from '../../components/List/List'
import { Item, Menu } from '../../components/Menu/Menu'
import { User } from '../../components/User/User'
import { getExercises } from '../../store/exercisesSlice'
import { useAppDispatch, useAppSelector } from '../../store/hooks'

export function HomePage() {
  const dispatch = useAppDispatch()
  const exercises = useAppSelector((state) => state.exercises)

  const isLoading = exercises.status === 'loading'

  useEffect(() => {
    if (exercises.status === 'idle') {
      dispatch(getExercises('costas'))
    }
  }, [dispatch, exercises])

  const handleItemClick = (item: Item) => {
    dispatch(getExercises(item.id))
  }

  return (
    <Container>
      <User />
      <Menu
        items={[
          { id: 'costas', text: 'Costas' },
          { id: 'biceps', text: 'Bíceps' },
          { id: 'triceps', text: 'Tríceps' },
          { id: 'perna', text: 'Perna' },
        ]}
        onItemClick={handleItemClick}
      />
      <List items={exercises.list} loading={isLoading} />
    </Container>
  )
}