import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../_metronic/layout/core'
import {ListWrapper} from './list/List'
import { Create } from './create/Create'

const Breadcrumbs: Array<PageLink> = [
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

const Page = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='views'
          element={
            <>
              <PageTitle breadcrumbs={Breadcrumbs}>View</PageTitle>
              <ListWrapper />
            </>
          }
        />
        <Route
          path='create'
          element={
            <>
              <PageTitle breadcrumbs={Breadcrumbs}>Update Tanggal Pembayaran</PageTitle>
              <Create />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/pembayaran/views' />} />
    </Routes>
  )
}

export default Page
