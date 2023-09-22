/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { KTIcon } from '../../../../../_metronic/helpers'
import { TabelFilter } from './TabelFilter'
import { Link } from 'react-router-dom'
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

type Props = {
    className: string
}

const Tabel: React.FC<Props> = ({ className }) => {

    interface Employee {
        name: string;
        platform: string;
        keterangan: string;
        nominal_insentif: string;
        date_pemabayaran: string;
        status: string;
        persentasi_insentif: string;
    }

    const data: Employee[] = [
        {
            "name": "Salsa",
            "platform": "Rp. 400.000.000",
            "keterangan": "Top Up",
            "persentasi_insentif": "1,2",
            "nominal_insentif": "Rp. 4.800.000",
            "date_pemabayaran": "15-10-2023",
            "status": "Aktif",
        },
        {
            "name": "Bila",
            "platform": "Rp. 400.000.000",
            "keterangan": "REGULER",
            "nominal_insentif": "Rp. 5.200.000",
            "date_pemabayaran": "14-10-2023",
            "persentasi_insentif": "1,3",
            "status": "Aktif",
        },
        {
            "name": "alasa",
            "platform": "Rp. 400.000.000",
            "keterangan": "REGULER",
            "nominal_insentif": "Rp. 6.400.000",
            "date_pemabayaran": "",
            "persentasi_insentif": "1,6",
            "status": "-",
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
                                <th className='min-w-100px'>Nama Debitur</th>
                                <th className='min-w-140px'>Platform</th>
                                <th className='min-w-120px'>keterangan</th>
                                <th className='min-w-120px'>Persentasi Insentif</th>
                                <th className='min-w-120px'>Nominal insentif</th>
                                <th className='min-w-120px'>Tanggal Pembayaran</th>
                                <th className='min-w-120px'>Status Pembayaran</th>
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
                                            {employee.platform}
                                        </span>
                                    </td>
                                    <td>
                                        <span className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                                            {employee.keterangan}
                                        </span>
                                    </td>
                                    <td>
                                        <span className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                                            {employee.persentasi_insentif}
                                        </span>
                                    </td>
                                    <td>
                                        <span className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                                            {employee.nominal_insentif}
                                        </span>

                                    </td>
                                    <td className='text-dark fw-bold text-hover-primary fs-6'>
                                        {employee.date_pemabayaran == "" ? 'Belum di setting' : employee.date_pemabayaran}
                                    </td>
                                    <td>
                                        {
                                            employee.status === 'Aktif' ?
                                                (<span className='badge badge-light-success'>Dibayar</span>)
                                                :
                                                (<span className='badge badge-light-danger'>Belum Dibayar</span>)
                                        }

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
