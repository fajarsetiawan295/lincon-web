import { Route, Routes, Outlet, Navigate } from 'react-router-dom'
import { PageLink, PageTitle } from '../../../../_metronic/layout/core'
import { SalesListWrapper } from './sales-list/SalesList'
import { SalesCreate } from './sales-create/SalesCreate'
import { Header } from './sales-detail/header'
import { ProfileSales } from './sales-detail/profileSales'
import { Debitur } from './sales-detail/debitur'
import { Sales } from './sales-detail/sales'
import { Pembayaran } from './sales-detail/pembayaran'

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
        <Route
          path='create'
          element={
            <>
              <PageTitle breadcrumbs={salesBreadcrumbs}>Create</PageTitle>
              <SalesCreate />
            </>
          }
        />

        <Route
          path='sales-profile'
          element={
            <>
              <PageTitle breadcrumbs={salesBreadcrumbs}>Profile</PageTitle>
              <Header />
              <ProfileSales />
            </>
          }
        />
        <Route
          path='sales-debiturs'
          element={
            <>
              <PageTitle breadcrumbs={salesBreadcrumbs}>List Debitur</PageTitle>
              <Header />
              <Debitur />
            </>
          }
        />
        <Route
          path='sales-list'
          element={
            <>
              <PageTitle breadcrumbs={salesBreadcrumbs}>Sales</PageTitle>
              <Header />
              <Sales />
            </>
          }
        />
        <Route
          path='sales-pembayaran'
          element={
            <>
              <PageTitle breadcrumbs={salesBreadcrumbs}>Pembayaran</PageTitle>
              <Header />
              <Pembayaran />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/sales/views' />} />
    </Routes>
  )
}

export default SalesPage
