import React, { useState } from 'react'
import { toAbsoluteUrl } from '../../../../../../_metronic/helpers'
import { IProfileDetails, profileDetailsInitValues as initialValues } from '../SettingsModel'
import * as Yup from 'yup'
import { useFormik } from 'formik'

const profileDetailsSchema = Yup.object().shape({
  dbl: Yup.string().required('Input LEO harus di isi'),
  dtr: Yup.string().required('date time rencana LEO harus di isi'),
  dsa: Yup.string().required('Approve (APP) harus di isi'),
  ddsa: Yup.string().required('date time rencana (APP) harus di isi'),
  na: Yup.string().required('Nominal Approve harus di isi'),
  nae: Yup.string().required('No Aplikasi ElO harus di isi'),
})

const StageDua: React.FC = () => {
  const [data, setData] = useState<IProfileDetails>(initialValues)
  const updateData = (fieldsToUpdate: Partial<IProfileDetails>): void => {
    const updatedData = Object.assign(data, fieldsToUpdate)
    setData(updatedData)
  }

  const [loading, setLoading] = useState(false)
  const formik = useFormik<IProfileDetails>({
    initialValues,
    validationSchema: profileDetailsSchema,
    onSubmit: (values) => {
      setLoading(true)
      setTimeout(() => {
        const updatedData = Object.assign(data, values)
        setData(updatedData)
        setLoading(false)
      }, 1000)
    },
  })

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
          <h3 className='fw-bolder m-0'>Stage 2 (Aplikasi Dalam Proses)</h3>
        </div>
      </div>

      <div id='kt_account_profile_details' className='collapse show'>
        <form onSubmit={formik.handleSubmit} noValidate className='form'>
          <div className='card-body border-top p-9'>


            <div className='row'>
              <div className='row col-md-6 mb-6'>
                <label className='col-lg-4 col-form-label fw-bold fs-6'>
                  <span className='required'>Done (Input LEO)</span>
                </label>

                <div className='col-lg-8 fv-row'>
                  <select
                    className='form-select form-select-solid form-select-lg fw-bold'
                    {...formik.getFieldProps('dbl')}
                  >
                    <option value=''>Data Belum Lengkap...</option>
                    <option value='Rencana DSA'>Rencana DSA</option>
                    <option value='Rencana Done'>Rencana Done</option>
                  </select>
                  {formik.touched.dbl && formik.errors.dbl && (
                    <div className='fv-plugins-message-container'>
                      <div className='fv-help-block'>{formik.errors.dbl}</div>
                    </div>
                  )}
                </div>
              </div>
              <div className='row col-md-6 mb-6'>
                <label className='col-lg-4 col-form-label fw-bold fs-6'>
                  <span className='required'>Date Time Rencana/CBB</span>
                </label>

                <div className='col-lg-8 fv-row'>
                  <input
                    type='date'
                    className='form-control form-control-lg form-control-solid'
                    placeholder='Date Time Rencana'
                    {...formik.getFieldProps('dtr')}
                  />
                  {formik.touched.dtr && formik.errors.dtr && (
                    <div className='fv-plugins-message-container'>
                      <div className='fv-help-block'>{formik.errors.dtr}</div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='row col-md-6 mb-6'>
                <label className='col-lg-4 col-form-label fw-bold fs-6'>
                  <span className='required'>Approve (APP)</span>
                </label>

                <div className='col-lg-8 fv-row'>
                  <select
                    className='form-select form-select-solid form-select-lg fw-bold'
                    {...formik.getFieldProps('dsa')}
                  >
                    <option value=''>Pilih Status...</option>
                    <option value='Approved'>Approved</option>
                    <option value='Rejeted'>Rejeted</option>
                  </select>
                  {formik.touched.dsa && formik.errors.dsa && (
                    <div className='fv-plugins-message-container'>
                      <div className='fv-help-block'>{formik.errors.dsa}</div>
                    </div>
                  )}
                </div>
              </div>
              <div className='row col-md-6 mb-6'>
                <label className='col-lg-4 col-form-label fw-bold fs-6'>
                  <span className='required'>Date Time Rencana</span>
                </label>

                <div className='col-lg-8 fv-row'>
                  <input
                    type='date'
                    className='form-control form-control-lg form-control-solid'
                    placeholder='Date Time Rencana'
                    {...formik.getFieldProps('ddsa')}
                  />
                  {formik.touched.ddsa && formik.errors.ddsa && (
                    <div className='fv-plugins-message-container'>
                      <div className='fv-help-block'>{formik.errors.dtr}</div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='row col-md-6 mb-6'>
                <label className='col-lg-4 col-form-label fw-bold fs-6'>
                  <span className='required'>Nominal Approved</span>
                </label>

                <div className='col-lg-8 fv-row'>
                  <input
                    type='number'
                    className='form-control form-control-lg form-control-solid'
                    placeholder='Nominal Approved'
                    {...formik.getFieldProps('na')}
                  />
                  {formik.touched.na && formik.errors.na && (
                    <div className='fv-plugins-message-container'>
                      <div className='fv-help-block'>{formik.errors.dtr}</div>
                    </div>
                  )}
                </div>
              </div>
              <div className='row col-md-6 mb-6'>
                <label className='col-lg-4 col-form-label fw-bold fs-6'>
                  <span className='required'>No Aplikasi ElO</span>
                </label>

                <div className='col-lg-8 fv-row'>
                  <input
                    type='text'
                    className='form-control form-control-lg form-control-solid'
                    placeholder='No Aplikasi ElO'
                    {...formik.getFieldProps('nae')}
                  />
                  {formik.touched.nae && formik.errors.nae && (
                    <div className='fv-plugins-message-container'>
                      <div className='fv-help-block'>{formik.errors.dtr}</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className='card-footer d-flex justify-content-end py-6 px-9'>
            <button type='submit' className='btn btn-primary' disabled={loading}>
              {!loading && 'Save Changes'}
              {loading && (
                <span className='indicator-progress' style={{ display: 'block' }}>
                  Please wait...{' '}
                  <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                </span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export { StageDua }
