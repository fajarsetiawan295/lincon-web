import { Route, Routes, Outlet, Navigate } from 'react-router-dom'
import { PageLink, PageTitle } from '../../../_metronic/layout/core'
import { Header } from './header'
import { ProfileSales } from './profileSales'
import { Debitur } from './debitur'
import { Sales } from './sales'
import { Pembayaran } from './pembayaran'

const salesBreadcrumbs: Array<PageLink> = [
  {
    title: 'Page Sales',
    path: '/page-sales',
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
          path='page-sales-profile'
          element={
            <>
              <PageTitle breadcrumbs={salesBreadcrumbs}>Profile</PageTitle>
              <Header />
              <ProfileSales />
            </>
          }
        />
        <Route
          path='page-sales-debiturs'
          element={
            <>
              <PageTitle breadcrumbs={salesBreadcrumbs}>List Debitur</PageTitle>
              <Header />
              <Debitur />
            </>
          }
        />
        <Route
          path='page-sales-list'
          element={
            <>
              <PageTitle breadcrumbs={salesBreadcrumbs}>Sales</PageTitle>
              <Header />
              <Sales />
            </>
          }
        />
        <Route
          path='page-sales-pembayaran'
          element={
            <>
              <PageTitle breadcrumbs={salesBreadcrumbs}>Pembayaran</PageTitle>
              <Header />
              <Pembayaran />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/page-sales/page-sales-profile' />} />
    </Routes>
  )
}

export default SalesPage
