import { useEffect } from 'react'
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'
import {
  TablesWidget11,
} from '../../../_metronic/partials/widgets'

const DashboardPage = () => {
  useEffect(() => {
    // We have to show toolbar only for dashboard page
    document.getElementById('kt_layout_toolbar')?.classList.remove('d-none')
    return () => {
      document.getElementById('kt_layout_toolbar')?.classList.add('d-none')
    }
  }, [])

  return (
    <>
      {/* begin::Row */}
      <div className='g-5 gx-xxl-8'>
        <TablesWidget11 className='' />
      </div>
      {/* end::Row */}
    </>
  )
}

const DashboardWrapper = () => {
  return (
    <>
      <DashboardPage />
    </>
  )
}

export { DashboardWrapper }
