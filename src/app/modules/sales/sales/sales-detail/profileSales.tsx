import React, { useState } from 'react'
import { SalesModel, SalesValue as initialValues } from '../sales-create/core/_model'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import clsx from 'clsx'


const profileDetailsSchema = Yup.object().shape({
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

const ProfileSales = () => {
  const [data, setData] = useState<SalesModel>(initialValues)
  const [role, setRole] = useState('');
  
  const updateData = (fieldsToUpdate: Partial<SalesModel>): void => {
    const updatedData = Object.assign(data, fieldsToUpdate)
    setData(updatedData)
  }

  const [loading, setLoading] = useState(false)
  const formik = useFormik<SalesModel>({
    initialValues,
    validationSchema: profileDetailsSchema,
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
            <div className='col-md-6'>
              <label className='form-label fw-bolder text-dark fs-6'>Nama Lengkap</label>
              <input
                placeholder='First name'
                type='text'
                autoComplete='off'
                {...formik.getFieldProps('name')}
                className={clsx(
                  'form-control bg-transparent',
                  {
                    'is-invalid': formik.touched.name && formik.errors.name,
                  },
                  {
                    'is-valid': formik.touched.name && !formik.errors.name,
                  }
                )}
              />
              {formik.touched.name && formik.errors.name && (
                <div className='fv-plugins-message-container'>
                  <div className='fv-help-block'>
                    <span role='alert'>{formik.errors.name}</span>
                  </div>
                </div>
              )}
            </div>
            <div className='col-md-6'>
              {/* begin::Form group npp */}
              <label className='form-label fw-bolder text-dark fs-6 required'>NPP ANDA</label>
              <input
                placeholder='Input NPP'
                type='text'
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

          <div className='row fv-row mb-8'>
            <div className='col-md-6'>
              <label className='form-label fw-bolder text-dark fs-6 required'>Wilayah</label>
              <select
                autoComplete='off'
                {...formik.getFieldProps('wilayah')}
                className={clsx(
                  'form-control bg-transparent',
                  {
                    'is-invalid': formik.touched.wilayah && formik.errors.wilayah,
                  },
                  {
                    'is-valid': formik.touched.wilayah && !formik.errors.wilayah,
                  }
                )}>
                <option> BNI Jakarta </option>
                <option> BNI Jawa Barat </option>
                <option> BNI Jawa Tengah </option>
                <option> BNI Jawa Timur </option>
                <option> BNI Banten </option>
              </select>
              {formik.touched.wilayah && formik.errors.wilayah && (
                <div className='fv-plugins-message-container'>
                  <div className='fv-help-block'>
                    <span role='alert'>{formik.errors.wilayah}</span>
                  </div>
                </div>
              )}
            </div>
            <div className='col-md-6 fv-row'>
              {/* begin::Form group npp */}
              <label className='form-label fw-bolder text-dark fs-6 required'>Nomor Whatsapp Anda</label>
              <input
                placeholder='Input Nomor whatsapp anda'
                type='text'
                autoComplete='off'
                {...formik.getFieldProps('myWa')}
                className={clsx(
                  'form-control bg-transparent',
                  {
                    'is-invalid': formik.touched.myWa && formik.errors.myWa,
                  },
                  {
                    'is-valid': formik.touched.myWa && !formik.errors.myWa,
                  }
                )}
              />
              {formik.touched.myWa && formik.errors.myWa && (
                <div className='fv-plugins-message-container'>
                  <div className='fv-help-block'>
                    <span role='alert'>{formik.errors.myWa}</span>
                  </div>
                </div>
              )}
              {/* end::Form group */}
            </div>
          </div>

          <div className='row fv-row mb-6'>
            <div className='col-md-6'>
              <label className='form-label fw-bolder text-dark fs-6 required'>Jabatan</label>
              <br></br>
              <label>
                <input
                  className="form-check-input"
                  type="radio"
                  value="Pimpinan/SPV"
                  checked={role === 'Pimpinan/SPV'}
                  onChange={handleRoleChange}
                />
                Pimpinan/SPV
              </label>
              <br></br>

              <label style={{
                marginTop: '10px',
              }}>
                <input
                  className="form-check-input"
                  type="radio"
                  value="Sales"
                  checked={role === 'Sales'}
                  onChange={handleRoleChange}
                />
                Sales
              </label>
              {formik.touched.jabatan && formik.errors.jabatan && (
                <div className='fv-plugins-message-container'>
                  <div className='fv-help-block'>
                    <span role='alert'>{formik.errors.jabatan}</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {role == 'Sales' ?
            (
              <>
                <div className='row fv-row mb-8'>
                  <div className='col-md-6'>
                    <label className='form-label fw-bolder text-dark fs-6'>Npp SPV</label>
                    <input
                      placeholder='NPP SPV'
                      type='text'
                      autoComplete='off'
                      {...formik.getFieldProps('npps')}
                      className={clsx(
                        'form-control bg-transparent',
                        {
                          'is-invalid': formik.touched.npps && formik.errors.npps,
                        },
                        {
                          'is-valid': formik.touched.npps && !formik.errors.npps,
                        }
                      )}
                    />
                    {formik.touched.npps && formik.errors.npps && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>
                          <span role='alert'>{formik.errors.npps}</span>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className='col-md-6'>
                    {/* begin::Form group npp */}
                    <label className='form-label fw-bolder text-dark fs-6 required'>No Whatsapp SPV</label>
                    <input
                      placeholder='Input No Whatsapp SPV'
                      type='text'
                      autoComplete='off'
                      {...formik.getFieldProps('spvWa')}
                      className={clsx(
                        'form-control bg-transparent',
                        {
                          'is-invalid': formik.touched.spvWa && formik.errors.spvWa,
                        },
                        {
                          'is-valid': formik.touched.spvWa && !formik.errors.spvWa,
                        }
                      )}
                    />
                    {formik.touched.spvWa && formik.errors.spvWa && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>
                          <span role='alert'>{formik.errors.spvWa}</span>
                        </div>
                      </div>
                    )}
                    {/* end::Form group */}
                  </div>
                </div>
              </>
            ) : <></>

          }

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

export { ProfileSales }
