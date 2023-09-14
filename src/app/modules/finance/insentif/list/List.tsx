import { CardTop } from './card/card'
import { Tabel } from './tabel/Tabel'

const List = () => {
  return (
    <>
      <CardTop />
      <Tabel className='mb-5 mb-xl-8' />
    </>
  )
}

const ListWrapper = () => (

  <List />

)

export { ListWrapper }
