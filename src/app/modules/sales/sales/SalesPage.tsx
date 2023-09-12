import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../_metronic/layout/core'
import {SalesListWrapper} from './sales-list/SalesList'

const salesBreadcrumbs: Array<PageLink> = [
  {
    title: 'Sales',
    path: '/sales',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

const SalesPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='views'
          element={
            <>
              <PageTitle breadcrumbs={salesBreadcrumbs}>View</PageTitle>
              <SalesListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/sales/views' />} />
    </Routes>
  )
}

export default SalesPage
