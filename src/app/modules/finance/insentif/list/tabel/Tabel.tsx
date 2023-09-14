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
        persentasi_insentif: string;
    }

    const data: Employee[] = [
        {
            "name": "Salsa",        
            "persentasi_insentif": "1,2",
        },
        {
            "name": "Bila",
            "persentasi_insentif": "0",
        },
        {
            "name": "alasa",
            "persentasi_insentif": "1,6",
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
                                <th className='min-w-120px'>Persentasi Insentif</th>
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
                                            {employee.persentasi_insentif}
                                        </span>
                                    </td>
                                    <td className='text-end'>

                                        <OverlayTrigger
                                            key="left"
                                            placement="left"
                                            overlay={<Tooltip id={`tooltip-left`}>Update Insentif Sales</Tooltip>}
                                        >
                                            <Link
                                                to='/insentif/create'
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
