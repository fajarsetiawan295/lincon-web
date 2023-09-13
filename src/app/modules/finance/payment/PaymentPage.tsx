import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../_metronic/layout/core'
import {ListWrapper} from './list/List'
import { SalesCreate } from './create/SalesCreate'

const salesBreadcrumbs: Array<PageLink> = [
  {
    title: 'Pembayaran',
    path: '/pembayaran',
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
              <ListWrapper />
            </>
          }
        />
        <Route
          path='create'
          element={
            <>
              <PageTitle breadcrumbs={salesBreadcrumbs}>Update Tanggal Pembayaran</PageTitle>
              <SalesCreate />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/pembayaran/views' />} />
    </Routes>
  )
}

export default SalesPage
