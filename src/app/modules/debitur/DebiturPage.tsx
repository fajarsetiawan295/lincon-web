import React from 'react'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import { PageLink, PageTitle } from '../../../_metronic/layout/core'
import { Overview } from './components/Overview'
import { Settings } from './components/settings/Settings'
import { AccountHeader } from './AccountHeader'
import { DashboardWrapper } from './DashboardWrapper'

const accountBreadCrumbs: Array<PageLink> = [
    {
        title: 'Debitur',
        path: '/debitur',
        isSeparator: false,
        isActive: false,
    },
    {
        title: '',
        path: '',
        isSeparator: true,
        isActive: false,
    },
]

const DebiturPage: React.FC = () => {
    return (
        <Routes>
            <Route
                element={
                    <>
                        <Outlet />
                    </>
                }
            >
                <Route
                    path='create'
                    element={
                        <>
                            <PageTitle breadcrumbs={accountBreadCrumbs}>Create Debitur</PageTitle>
                            <Overview />
                        </>
                    }
                />
                <Route
                    path='index'
                    element={
                        <>
                            <PageTitle breadcrumbs={accountBreadCrumbs}>Report</PageTitle>
                            <DashboardWrapper />
                        </>
                    }
                />
                <Route
                    path='follow-up'
                    element={
                        <>
                            <PageTitle breadcrumbs={accountBreadCrumbs}>Follow Up</PageTitle>
                            <AccountHeader />
                            <Settings />
                        </>
                    }
                />
                <Route
                    path='overview'
                    element={
                        <>
                            <PageTitle breadcrumbs={accountBreadCrumbs}>Overview</PageTitle>
                            <AccountHeader />
                            <Overview />
                        </>
                    }
                />
                <Route index element={<Navigate to='/debitur/index' />} />
            </Route>
        </Routes>
    )
}

export default DebiturPage
