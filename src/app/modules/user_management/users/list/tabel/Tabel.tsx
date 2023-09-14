/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { KTIcon } from '../../../../../../_metronic/helpers'
import { TabelFilter } from './TabelFilter'
import { Link } from 'react-router-dom'
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

type Props = {
    className: string
}

const Tabel: React.FC<Props> = ({ className }) => {

    interface Employee {
        name: string;
        roles: string;
        email: string;
        telpon: string;
    }


    const data: Employee[] = [
        {
            "name": "Salsa",
            "roles": "Admin",
            "email": "salsa@gmail.ocm",
            "telpon": "0821310123812"
        },
        {
            "name": "Bila",
            "roles": "Super Admin",
            "email": "Bila@gmail.ocm",
            "telpon": "08201283123"

        },
        {
            "name": "alasa",
            "roles": "Finance",
            "email": "alasa@gmail.ocm",
            "telpon": "0820128312312"
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
                                <th className='min-w-100px'>Nama</th>
                                <th className='min-w-140px'>Email</th>
                                <th className='min-w-140px'>Telpon</th>
                                <th className='min-w-140px'>Roles</th>
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
                                            {employee.email}

                                        </span>
                                    </td>
                                    <td>
                                        <span className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                                            {employee.telpon}

                                        </span>
                                    </td>
                                    <td>
                                        <span className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                                            {employee.roles}
                                        </span>
                                    </td>

                                    <td className='text-end'>
                                        <OverlayTrigger
                                            key="left"
                                            placement="left"
                                            overlay={<Tooltip id={`tooltip-left`}>Update Tanggal Pembayaran</Tooltip>}
                                        >
                                            <Link
                                                to='/pembayaran/create'
                                                className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                                            >
                                                <KTIcon iconName='pencil' className='fs-3' />
                                            </Link>
                                        </OverlayTrigger>


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
