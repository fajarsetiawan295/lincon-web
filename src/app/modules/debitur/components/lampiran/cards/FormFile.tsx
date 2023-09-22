import React, { useState } from 'react'
import { toAbsoluteUrl } from '../../../../../../_metronic/helpers'
import * as Yup from 'yup'
import { useFormik } from 'formik'


const FormFile: React.FC = () => {


  return (
    <div className='card mb-5 mb-xl-10'>
      <div
        className='card-header border-0 cursor-pointer'
        role='button'
        data-bs-toggle='collapse'
        data-bs-target='#kt_account_profile_details'
        aria-expanded='true'
        aria-controls='kt_account_profile_details'
      >
        <div className='card-title m-0'>
          <h3 className='fw-bolder m-0'>Upload Lampiran Debitur</h3>
        </div>
      </div>

      <div id='kt_account_profile_details' className='collapse show'>
        <form noValidate className='form'>
          <div className='card-body border-top p-9'>


            <div className='row'>
              <div className='row col-md-6 mb-6'>
                <label className='col-lg-4 col-form-label fw-bold fs-6'>
                  <span className='required'>Nama File</span>
                </label>

                <div className='col-lg-8 fv-row'>
                  <input
                    type='text'
                    className='form-control form-control-lg form-control-solid'
                    placeholder='Input Nama File'
                  />
                </div>
              </div>
              <div className='row col-md-6 mb-6'>
                <label className='col-lg-4 col-form-label fw-bold fs-6'>
                  <span className='required'>Upload File</span>
                </label>

                <div className='col-lg-8 fv-row'>
                  <input
                    type='file'
                    className='form-control form-control-lg form-control-solid'
                    placeholder='Input Nama File'
                  />
                </div>
              </div>
            </div>
          </div>

          <div className='card-footer d-flex justify-content-end py-6 px-9'>
            <button type='submit' className='btn btn-primary'>
              {'Save Changes'}
             
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export { FormFile }
