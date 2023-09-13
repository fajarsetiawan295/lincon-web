/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import { KTIcon, toAbsoluteUrl } from '../../../helpers'
import { Link } from 'react-router-dom'

type Props = {
  className: string
}

const TablesWidget11: React.FC<Props> = ({ className }) => {

  const initialData = [
    {
      name: "John Doe",
      jenisPembiayaan: "Baru",
      proses: "NEW",
      DateTime: "2023-09-06 10:30:00",
      status: 1,
    },
    {
      name: "Jane Smith",
      jenisPembiayaan: "Take Over",
      proses: "NSA",
      DateTime: "2023-09-07 14:45:00",
      status: 3,
    },
  ]

  const [rowData, setRowData] = useState(initialData);

  const handleSelectChange = (index, newValue) => {
    const updatedData = [...rowData];
    updatedData[index].status = newValue;
    setRowData(updatedData);
  };


  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>List Nasabah Anda</span>
          <span className='text-muted mt-1 fw-semibold fs-7'></span>
        </h3>
        <div className='card-toolbar'>

          <Link to='/debitur/create' className='btn btn-sm btn-light-primary'>
            <KTIcon iconName='plus' className='fs-2' />
            Add Nasabah
          </Link>
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table align-middle gs-0 gy-4'>
            {/* begin::Table head */}
            <thead>
              <tr className='fw-bold text-muted bg-light'>
                <th className='ps-4 min-w-125px rounded-start'>Calon Debitur</th>
                <th className='min-w-125px'>Pembiayaan</th>
                <th className='min-w-125px'>Rencana Tahapan</th>
                <th className='min-w-200px'>Date Time</th>
                <th className='min-w-200px'>Status</th>
                <th className='min-w-200px text-end rounded-end'>*</th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              {rowData.map((item, index) => {
                return (<>
                  <tr key={index}>
                    <td>
                      <div className='d-flex align-items-center'>
                        <div className='d-flex justify-content-start flex-column'>
                          <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                            {item.name}
                          </a>
                        </div>
                      </div>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                        {item.jenisPembiayaan}
                      </a>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                        {item.proses}
                      </a>
                    </td>
                    <td>
                      <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                        {item.DateTime}
                      </a>
                    </td>
                    <td>
                      <select
                        value={item.status}
                        className='form-select form-select-solid form-select-lg fw-bold'
                        onChange={(e) => handleSelectChange(index, e.target.value)}
                      >
                        <option value='1' >Stage 1 : Prospek </option>
                        <option value='2'>Stage 2 : Aplikasi Dalam Proses</option>
                        <option value='3'>Stage 3 : Booking</option>
                      </select>
                    </td>
                    <td className='text-center'>
                      <Link to={'/debitur/follow-up'}
                        className='btn btn-sm btn-bg-light btn-active-color-primary btn-sm '
                      >
                        Follow Up
                      </Link>

                    </td>
                  </tr>
                </>)
              })

              }

            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
    </div>
  )
}

export { TablesWidget11 }
