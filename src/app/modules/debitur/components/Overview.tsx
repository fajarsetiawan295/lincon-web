import React, { useState } from 'react'
import { IOverview, OverviewValues as initialValues } from './Overview_model'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import {Link} from 'react-router-dom'

const debiturSchema = Yup.object().shape({
  fName: Yup.string().required('First name harus di isi'),
  lName: Yup.string().required('Last name harus di isi'),
  jenisPembiayaan: Yup.string().required('jenis Pembiayaan harus di isi'),
  jenisKredit: Yup.string().required('jenis Kredit harus di isi'),
  company: Yup.string().required('Company name harus di isi'),
  nameProyek: Yup.string().required('Name Proyek harus di isi'),
  nominalPengajuan: Yup.string().required('nominal pengajuan harus di isi'),
  rencanaKredit: Yup.string().required('Rencana Kredit harus di isi'),

})

export function Overview() {


  const [data, setData] = useState<IOverview>(initialValues)
  const updateData = (fieldsToUpdate: Partial<IOverview>): void => {
    const updatedData = Object.assign(data, fieldsToUpdate)
    setData(updatedData)
  }

  const [loading, setLoading] = useState(false)
  const formik = useFormik<IOverview>({
    initialValues,
    validationSchema: debiturSchema,
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
    <>
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
            <h3 className='fw-bolder m-0'>Create Debitur</h3>
          </div>
        </div>

        <div id='kt_account_profile_details' className='collapse show'>
          <form onSubmit={formik.handleSubmit} noValidate className='form'>
            <div className='card-body border-top p-9'>


              <div className='row mb-6'>
                <label className='col-lg-4 col-form-label required fw-bold fs-6'>Full Name</label>

                <div className='col-lg-8'>
                  <div className='row'>
                    <div className='col-lg-6 fv-row'>
                      <input
                        type='text'
                        className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                        placeholder='First name'
                        {...formik.getFieldProps('fName')}
                      />
                      {formik.touched.fName && formik.errors.fName && (
                        <div className='fv-plugins-message-container'>
                          <div className='fv-help-block'>{formik.errors.fName}</div>
                        </div>
                      )}
                    </div>

                    <div className='col-lg-6 fv-row'>
                      <input
                        type='text'
                        className='form-control form-control-lg form-control-solid'
                        placeholder='Last name'
                        {...formik.getFieldProps('lName')}
                      />
                      {formik.touched.lName && formik.errors.lName && (
                        <div className='fv-plugins-message-container'>
                          <div className='fv-help-block'>{formik.errors.lName}</div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>


              <div className='row mb-6'>
                <label className='col-lg-4 col-form-label fw-bold fs-6'>
                  <span className='required'>Jenis Pembiayaan</span>
                </label>

                <div className='col-lg-8 fv-row'>
                  <select
                    className='form-select form-select-solid form-select-lg fw-bold'
                    {...formik.getFieldProps('jenisPembiayaan')}
                  >
                    <option value=''>Jenis Pembiayaan...</option>
                    <option value='Baru'>Baru (Jenis Keredit)</option>
                    <option value='NSA'>NSA</option>

                  </select>
                  {formik.touched.jenisPembiayaan && formik.errors.jenisPembiayaan && (
                    <div className='fv-plugins-message-container'>
                      <div className='fv-help-block'>{formik.errors.jenisPembiayaan}</div>
                    </div>
                  )}
                </div>
              </div>

              <div className='row mb-6'>
                <label className='col-lg-4 col-form-label fw-bold fs-6'>
                  <span className='required'>Jenis Keredit</span>
                </label>

                <div className='col-lg-8 fv-row'>
                  <select
                    className='form-select form-select-solid form-select-lg fw-bold'
                    {...formik.getFieldProps('jenisKredit')}
                  >
                    <option value=''>Jenis Keredit...</option>
                    <option value='Baru'>Baru</option>
                    <option value='Secondary'>Secondary</option>
                    <option value='Take Over'>Take Over</option>
                    <option value='Top Up'>Top Up</option>
                    <option value='Multiguna'>Multiguna</option>

                  </select>
                  {formik.touched.jenisKredit && formik.errors.jenisKredit && (
                    <div className='fv-plugins-message-container'>
                      <div className='fv-help-block'>{formik.errors.jenisKredit}</div>
                    </div>
                  )}
                </div>
              </div>

              <div className='row mb-6'>
                <label className='col-lg-4 col-form-label required fw-bold fs-6'>Nama Perusahaan / Developer</label>

                <div className='col-lg-8 fv-row'>
                  <input
                    type='text'
                    className='form-control form-control-lg form-control-solid'
                    placeholder='Company name'
                    {...formik.getFieldProps('company')}
                  />
                  {formik.touched.company && formik.errors.company && (
                    <div className='fv-plugins-message-container'>
                      <div className='fv-help-block'>{formik.errors.company}</div>
                    </div>
                  )}
                </div>
              </div>


              <div className='row mb-6'>
                <label className='col-lg-4 col-form-label fw-bold fs-6'>
                  <span className='required'>Nama Proyek</span>
                </label>

                <div className='col-lg-8 fv-row'>
                  <input
                    type='text'
                    className='form-control form-control-lg form-control-solid'
                    placeholder='nama proyek'
                    {...formik.getFieldProps('nameProyek')}
                  />
                  {formik.touched.nameProyek && formik.errors.nameProyek && (
                    <div className='fv-plugins-message-container'>
                      <div className='fv-help-block'>{formik.errors.nameProyek}</div>
                    </div>
                  )}
                </div>
              </div>

              <div className='row mb-6'>
                <label className='col-lg-4 col-form-label fw-bold fs-6'>
                  <span className='required'>Nominal Pengajuan</span>
                </label>

                <div className='col-lg-8 fv-row'>
                  <input
                    type='number'
                    className='form-control form-control-lg form-control-solid'
                    placeholder='Company website'
                    {...formik.getFieldProps('nominalPengajuan')}
                  />
                  {formik.touched.nominalPengajuan && formik.errors.nominalPengajuan && (
                    <div className='fv-plugins-message-container'>
                      <div className='fv-help-block'>{formik.errors.nominalPengajuan}</div>
                    </div>
                  )}
                </div>
              </div>

              <div className='row mb-6'>
                <label className='col-lg-4 col-form-label fw-bold fs-6'>
                  <span className='required'>Rencana Bulan Booking</span>
                </label>

                <div className='col-lg-8 fv-row'>
                  <select
                    className='form-select form-select-solid form-select-lg fw-bold'
                    {...formik.getFieldProps('rencanaKredit')}
                  >
                    <option value=''>Rencana Bulan Booking...</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    <option value='6'>6</option>
                    <option value='7'>7</option>
                    <option value='8'>8</option>
                    <option value='9'>9</option>
                    <option value='10'>10</option>
                  </select>
                  {formik.touched.rencanaKredit && formik.errors.rencanaKredit && (
                    <div className='fv-plugins-message-container'>
                      <div className='fv-help-block'>{formik.errors.rencanaKredit}</div>
                    </div>
                  )}
                </div>
              </div>

            </div>



            <div className='card-footer d-flex justify-content-end py-6 px-9'>

              <Link to={'/dashboard'} className='btn btn-light' style={{
                marginRight: '10px',
              }}>
                {'Kembali'}
              </Link>

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
    </>
  )
}
