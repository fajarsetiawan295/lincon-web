/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { KTIcon } from '../../../../../_metronic/helpers'


const TabelFilter = () => {
    const [searchTerm, setSearchTerm] = useState<string>('')
    const [role, setRole] = useState<string | undefined>()
    const [lastLogin, setLastLogin] = useState<string | undefined>()
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
    }, [])

    const resetData = () => {
        setIsLoading(false)
    }

    const filterData = () => {

        setIsLoading(true)

        setInterval(() => {
            setIsLoading(false)
        }, 1000);

    }
    return (
        <>
            {/* begin::Header */}
            <div className='card-header border-0 pt-5'>
                <h3 className='card-title align-items-start flex-column'>
                    <div className='card-title'>
                        {/* begin::Search */}
                        <div className='d-flex align-items-center position-relative my-1'>
                            <KTIcon iconName='magnifier' className='fs-1 position-absolute ms-6' />
                            <input
                                type='text'
                                data-kt-user-table-filter='search'
                                className='form-control form-control-solid w-250px ps-14'
                                placeholder='Search data'
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        {/* end::Search */}
                    </div>
                </h3>
                <div className='card-toolbar'>
                    <div className='d-flex justify-content-end' data-kt-user-table-toolbar='base'>

                        {/* begin::Filter Button */}
                        <button
                            disabled={isLoading}
                            type='button'
                            className='btn btn-light-primary me-3'
                            data-kt-menu-trigger='click'
                            data-kt-menu-placement='bottom-end'
                        >
                            <KTIcon iconName='filter' className='fs-2' />
                            Filter
                        </button>
                        {/* end::Filter Button */}
                        {/* begin::SubMenu */}
                        <div className='menu menu-sub menu-sub-dropdown w-300px w-md-325px' data-kt-menu='true'>
                            {/* begin::Header */}
                            <div className='px-7 py-5'>
                                <div className='fs-5 text-dark fw-bolder'>Filter Options</div>
                            </div>
                            {/* end::Header */}

                            {/* begin::Separator */}
                            <div className='separator border-gray-200'></div>
                            {/* end::Separator */}

                            {/* begin::Content */}
                            <div className='px-7 py-5' data-kt-user-table-filter='form'>
                                {/* begin::Input group */}
                                <div className='mb-10'>
                                    <label className='form-label fs-6 fw-bold'>Role:</label>
                                    <select
                                        className='form-select form-select-solid fw-bolder'
                                        data-kt-select2='true'
                                        data-placeholder='Select option'
                                        data-allow-clear='true'
                                        data-kt-user-table-filter='role'
                                        data-hide-search='true'
                                        onChange={(e) => setRole(e.target.value)}
                                        value={role}
                                    >
                                        <option value=''></option>
                                        <option value='dibayar'>dibayar</option>
                                        <option value='belum dibayar'>belum dibayar</option>
                                    </select>
                                </div>
                                {/* end::Input group */}

                                {/* begin::Input group */}
                                <div className='mb-10'>
                                    <label className='form-label fs-6 fw-bold'>Setting Tanggal Pembayaran:</label>
                                    <select
                                        className='form-select form-select-solid fw-bolder'
                                        data-kt-select2='true'
                                        data-placeholder='Select option'
                                        data-allow-clear='true'
                                        data-kt-user-table-filter='two-step'
                                        data-hide-search='true'
                                        onChange={(e) => setLastLogin(e.target.value)}
                                        value={lastLogin}
                                    >
                                        <option value=''></option>
                                        <option value='sudah'>sudah</option>
                                        <option value='belum di setting'>belum di setting</option>
                                    </select>
                                </div>
                                {/* end::Input group */}

                                {/* begin::Input group */}
                                <div className='mb-10'>
                                    <label className='form-label fs-6 fw-bold'>Tanggal Pembayaran:</label>
                                 
                                    <input
                                        placeholder='Tanggal Pembayaran'
                                        className='form-control form-control-white form-control-sm'
                                        type='date'
                                        autoComplete='off' />
                                </div>
                                {/* end::Input group */}

                                {/* begin::Actions */}
                                <div className='d-flex justify-content-end'>
                                    <button
                                        type='button'
                                        disabled={isLoading}
                                        onClick={filterData}
                                        className='btn btn-light btn-active-light-primary fw-bold me-2 px-6'
                                        data-kt-menu-dismiss='true'
                                        data-kt-user-table-filter='reset'
                                    >
                                        Reset
                                    </button>
                                    <button
                                        disabled={isLoading}
                                        type='button'
                                        onClick={resetData}
                                        className='btn btn-primary fw-bold px-6'
                                        data-kt-menu-dismiss='true'
                                        data-kt-user-table-filter='filter'
                                    >
                                        Apply
                                    </button>
                                </div>
                                {/* end::Actions */}
                            </div>
                            {/* end::Content */}
                        </div>
                        {/* end::SubMenu */}

                        {/* begin::Export */}
                        <button type='button' className='btn btn-light-primary me-3'>
                            <KTIcon iconName='exit-up' className='fs-2' />
                            Export
                        </button>
                        {/* end::Export */}
                    </div>
                </div>
            </div>
            {/* end::Header */}
        </>
    )
}

export { TabelFilter }
