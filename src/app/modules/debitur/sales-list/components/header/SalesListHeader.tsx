import {useListView} from '../../core/ListViewProvider'
import {SalesListToolbar} from './SalesListToolbar'
import {SalesListGrouping} from './SalesListGrouping'
import {SalesListSearchComponent} from './SalesListSearchComponent'

const SalesListHeader = () => {
  const {selected} = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <SalesListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
         <SalesListToolbar />
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export {SalesListHeader}
