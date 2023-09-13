/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import clsx from 'clsx'
import { Link, useNavigate } from 'react-router-dom'
import { PasswordMeterComponent } from '../../../../_metronic/assets/ts/components'
import { useAuth } from '../core/Auth'

const initialValues = {
  firstname: '',
  npp: '',
  wilayah: '',
  myWa: "",
  jabatan: "",
  npps: "",
  spvWa: "",
}

const registrationSchema = Yup.object().shape({
  firstname: Yup.string()
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

export function Registration() {
  const [loading, setLoading] = useState(false)
  const [role, setRole] = useState('');
  const { saveAuth, setCurrentUser } = useAuth()
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues,
    validationSchema: registrationSchema,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      setLoading(true)
      navigate('/auth/login');

    },
  })


  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  useEffect(() => {
    PasswordMeterComponent.bootstrap()
  }, [])

  return (
    <form
      className='form w-100 fv-plugins-bootstrap5 fv-plugins-framework'
      noValidate
      id='kt_login_signup_form'
      onSubmit={formik.handleSubmit}
    >
      {/* begin::Heading */}
      <div className='text-center mb-11'>
        {/* begin::Title */}
        <h1 className='text-dark fw-bolder mb-3'>Register Your NPP</h1>
        {/* end::Title */}
      </div>
      {/* end::Heading */}

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
            {...formik.getFieldProps('firstname')}
            className={clsx(
              'form-control bg-transparent',
              {
                'is-invalid': formik.touched.firstname && formik.errors.firstname,
              },
              {
                'is-valid': formik.touched.firstname && !formik.errors.firstname,
              }
            )}
          />
          {formik.touched.firstname && formik.errors.firstname && (
            <div className='fv-plugins-message-container'>
              <div className='fv-help-block'>
                <span role='alert'>{formik.errors.firstname}</span>
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
      <div className='text-center'>
        <button
          type='submit'
          id='kt_sign_up_submit'
          className='btn btn-lg btn-primary w-100 mb-5'
          disabled={false}
        >
          {!loading && <span className='indicator-label'>Submit</span>}
          {loading && (
            <span className='indicator-progress' style={{ display: 'block' }}>
              Please wait...{' '}
              <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
            </span>
          )}
        </button>
        <Link to='/auth/login'>
          <button
            type='button'
            id='kt_login_signup_form_cancel_button'
            className='btn btn-lg btn-light-primary w-100 mb-5'
          >
            Cancel
          </button>
        </Link>
      </div>
      {/* end::Form group */}
    </form>
  )
}
