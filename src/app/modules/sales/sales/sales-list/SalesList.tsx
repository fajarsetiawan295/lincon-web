import { TabelSales } from './tabel/TabelSales'

const SalesList = () => {
  return (
    <>
      <TabelSales className='mb-5 mb-xl-8' />
    </>
  )
}

const SalesListWrapper = () => (

  <SalesList />

)

export { SalesListWrapper }
