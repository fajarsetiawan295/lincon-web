/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { KTIcon } from './../../../../../_metronic/helpers'
import { TabelFilter } from './TabelFilter'
import { Link } from 'react-router-dom'

type Props = {
    className: string
}

const TabelSales: React.FC<Props> = ({ className }) => {

    interface Employee {
        name: string;
        npp: string;
        nomor: string;
        nominal_insentif: string;
        jabatan: string;
        status: string;
    }

    const data: Employee[] = [
        {
            "name": "Salsa",
            "npp": "12312312312",
            "nomor": "082213100769",
            "nominal_insentif": "1,2",
            "jabatan": "Sales",
            "status": "Aktif",
        },
        {
            "name": "Bila",
            "npp": "12312312312",
            "nomor": "082213100769",
            "nominal_insentif": "1,3",
            "jabatan": "Sales",
            "status": "Aktif",
        }
    ];


    return (
        <div className={`card ${className}`}>
            {/* begin::Header */}
            <TabelFilter />
            {/* end::Header */}
            {/* begin::Body */}
            <div className='card-body py-3'>
                {/* begin::Table container */}
                <div className='table-responsive'>
                    {/* begin::Table */}
                    <table className='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3'>
                        {/* begin::Table head */}
                        <thead>
                            <tr>
                                <th className='min-w-150px'>Nama</th>
                                <th className='min-w-140px'>Npp</th>
                                <th className='min-w-120px'>Nomor Whatshap</th>
                                <th className='min-w-120px'>Nominal Insentif</th>
                                <th className='min-w-120px'>Jabatan</th>
                                <th className='min-w-120px'>Status</th>
                                <th className='min-w-100px text-end'>Actions</th>
                            </tr>
                        </thead>
                        {/* end::Table head */}
                        {/* begin::Table body */}
                        <tbody>

                            {data.map((employee, index) => (
                                <tr key={index}>
                                    <td>
                                        <span className='text-dark fw-bold text-hover-primary fs-6'>
                                            {employee.name}
                                        </span>
                                    </td>
                                    <td>
                                        <span className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                                            {employee.npp}
                                        </span>
                                    </td>
                                    <td>
                                        <span className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                                            {employee.nomor}
                                        </span>
                                    </td>
                                    <td>
                                        <span className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                                            {employee.nominal_insentif}
                                        </span>

                                    </td>
                                    <td className='text-dark fw-bold text-hover-primary fs-6'>
                                        {employee.jabatan}
                                    </td>
                                    <td>
                                        {
                                            employee.status === 'Aktif' ?
                                                (<span className='badge badge-light-success'>Aktif</span>) 
                                                :
                                                (<span className='badge badge-light-danger'>Non Aktif</span>)
                                        }

                                    </td>
                                    <td className='text-end'>
                                        <Link
                                            to={'/sales/sales-profile'}
                                            className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                                        >
                                            <KTIcon iconName='switch' className='fs-3' />
                                        </Link>
                                        <a
                                            href='#'
                                            className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                                        >
                                            <KTIcon iconName='pencil' className='fs-3' />
                                        </a>
                                        <a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                                            <KTIcon iconName='trash' className='fs-3' />
                                        </a>
                                    </td>
                                </tr>
                            ))}
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

export { TabelSales }
