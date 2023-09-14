import React, { useState } from 'react'
import { SalesModel, SalesValue as initialValues } from './core/_model'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import clsx from 'clsx'


const ValidatorSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Nama Lengkap Harus di isi'),
  wilayah: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Wilayah Harus di isi'),
  npp: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Last name is required'),
  myWa: Yup.string()
    .min(12, 'Minimum 12 symbols')
    .max(50, 'Maximum 16 symbols')
    .required('nomor whatshapp anda harus di isi'),
})

const Create = () => {
  const [data, setData] = useState<SalesModel>(initialValues)
  const [role, setRole] = useState('');
  
  const updateData = (fieldsToUpdate: Partial<SalesModel>): void => {
    const updatedData = Object.assign(data, fieldsToUpdate)
    setData(updatedData)
  }

  const [loading, setLoading] = useState(false)
  const formik = useFormik<SalesModel>({
    initialValues,
    validationSchema: ValidatorSchema,
    onSubmit: (values) => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    },
  })

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  return (
    <div className='card mb-5 mb-xl-10'>
      <div
        className='card-header border-0 cursor-pointer'
      >
        <div className='card-title m-0'>
        </div>
      </div>

      <div id='kt_account_profile_details'>
        <form
          className='form p-4'
          noValidate
          onSubmit={formik.handleSubmit}
        >
  
          {formik.status && (
            <div className='mb-lg-15 alert alert-danger'>
              <div className='alert-text font-weight-bold'>{formik.status}</div>
            </div>
          )}

          {/* begin::Form group Firstname */}
          <div className='row fv-row mb-8'>
            <div className='col-md-12'>
              {/* begin::Form group npp */}
              <label className='form-label fw-bolder text-dark fs-6 required'>Tanggal Yang Akan di bayarkan</label>
              <input
                placeholder='Input NPP'
                type='date'
                autoComplete='off'
                {...formik.getFieldProps('npp')}
                className={clsx(
                  'form-control bg-transparent',
                  {
                    'is-invalid': formik.touched.npp && formik.errors.npp,
                  },
                  {
                    'is-valid': formik.touched.npp && !formik.errors.npp,
                  }
                )}
              />
              {formik.touched.npp && formik.errors.npp && (
                <div className='fv-plugins-message-container'>
                  <div className='fv-help-block'>
                    <span role='alert'>{formik.errors.npp}</span>
                  </div>
                </div>
              )}
              {/* end::Form group */}
            </div>
          </div>


          {/* begin::Form group */}
          <div className='card-footer d-flex justify-content-end py-6 px-9'>
            <button type='submit' className='btn btn-primary' disabled={loading}>
              {!loading && 'Simpan'}
              {loading && (
                <span className='indicator-progress' style={{display: 'block'}}>
                  Please wait...{' '}
                  <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                </span>
              )}
            </button>
          </div>
          {/* end::Form group */}
        </form>
      </div>
    </div>
  )
}

export { Create }
