// @ts-nocheck
import {Column} from 'react-table'
import {SalesInfoCell} from './SalesInfoCell'
import {SalesLastLoginCell} from './SalesLastLoginCell'
import {SalesTwoStepsCell} from './SalesTwoStepsCell'
import {SalesActionsCell} from './SalesActionsCell'
import {SalesCustomHeader} from './SalesCustomHeader'
import {User} from '../../core/_models'

const usersColumns: ReadonlyArray<Column<User>> = [
  {
    Header: (props) => <SalesCustomHeader tableProps={props} title='Name' className='min-w-125px' />,
    id: 'name',
    Cell: ({...props}) => <SalesInfoCell user={props.data[props.row.index]} />,
  },
  {
    Header: (props) => <SalesCustomHeader tableProps={props} title='Role' className='min-w-125px' />,
    accessor: 'role',
  },
  {
    Header: (props) => (
      <SalesCustomHeader tableProps={props} title='Last login' className='min-w-125px' />
    ),
    id: 'last_login',
    Cell: ({...props}) => <SalesLastLoginCell last_login={props.data[props.row.index].last_login} />,
  },

  {
    Header: (props) => (
      <SalesCustomHeader tableProps={props} title='Joined day' className='min-w-125px' />
    ),
    accessor: 'joined_day',
  },
  {
    Header: (props) => (
      <SalesCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <SalesActionsCell id={props.data[props.row.index].id} />,
  },
]

export {usersColumns}
