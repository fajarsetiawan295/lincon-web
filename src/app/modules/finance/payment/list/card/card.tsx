
/* eslint-disable jsx-a11y/anchor-is-valid */
import { StatisticsWidget5 } from '../../../../../../_metronic/partials/widgets';


/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'


const CardTop: React.FC = () => {

    return (
        <div className='row g-5 g-xl-8'>
            <div className='col-xl-4'>
                <StatisticsWidget5
                    className='card-xl-stretch mb-xl-8'
                    svgIcon='cheque'
                    color='dark'
                    iconColor='white'
                    title='10'
                    titleColor='white'
                    description='Jatuh Tempo Hari Ini'
                    descriptionColor='white'
                />
            </div>

            <div className='col-xl-4'>
                <StatisticsWidget5
                    className='card-xl-stretch mb-xl-8'
                    svgIcon='briefcase'
                    color='success'
                    iconColor='white'
                    title='50'
                    titleColor='white'
                    description='Jatuh Tempo Minggu Ini'
                    descriptionColor='white'
                />
            </div>

            <div className='col-xl-4'>
                <StatisticsWidget5
                    className='card-xl-stretch mb-5 mb-xl-8'
                    svgIcon='chart-pie-simple'
                    color='info'
                    iconColor='white'
                    title='10'
                    titleColor='white'
                    description='Jatuh Tempo Bulan Ini'
                    descriptionColor='white'
                />
            </div>
        </div>
    )
}

export { CardTop }
