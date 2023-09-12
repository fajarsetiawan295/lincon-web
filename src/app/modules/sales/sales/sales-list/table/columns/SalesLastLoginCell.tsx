import {FC} from 'react'

type Props = {
  last_login?: string
}

const SalesLastLoginCell: FC<Props> = ({last_login}) => (
  <div className='badge badge-light fw-bolder'>{last_login}</div>
)

export {SalesLastLoginCell}
