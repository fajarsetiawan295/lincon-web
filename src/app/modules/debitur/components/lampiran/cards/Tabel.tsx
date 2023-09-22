/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { KTIcon } from '../../../../../../_metronic/helpers'
import { Link } from 'react-router-dom'

type Props = {
    className: string
}

const Tabel: React.FC<Props> = ({ className }) => {

    interface Employee {
        name: string;
        npp: string;
       
    }

    const data: Employee[] = [
        {
            "name": "KTP",
            "npp": "",
        },
        {
            "name": "Bila",
            "npp": "",
        },
        {
            "name": "alasa",
            "npp": "",
        }
    ];


    return (
        <div className={`card ${className}`}>
            {/* begin::Header */}
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
                                <th className='min-w-140px'>File</th>
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
                                        <a href='#!' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                                            View File
                                        </a>
                                    </td>
                                    
                                    <td className='text-end'>
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

export { Tabel }
