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
        <form className="form p-5" action="#">
          <div className="fv-row mb-10 fv-plugins-icon-container">
            <label className="fs-5 fw-bold form-label mb-2">
              <span className="required">Nama</span>
            </label>

            <input className="form-control form-control-solid" placeholder="Enter a role name" name="role_name" value="Developer" />
            <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback">
            </div>
          </div>

          <div className="fv-row mb-10 fv-plugins-icon-container">
            <label className="fs-5 fw-bold form-label mb-2">
              <span className="required">Email</span>
            </label>

            <input className="form-control form-control-solid" placeholder="Enter a role name" name="role_name" value="Developer" />
            <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback">
            </div>
          </div>
          <div className="fv-row mb-10 fv-plugins-icon-container">
            <label className="fs-5 fw-bold form-label mb-2">
              <span className="required">Nomor Telepon</span>
            </label>

            <input className="form-control form-control-solid" placeholder="Enter a role name" name="role_name" value="Developer" />
            <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback">
            </div>
          </div>
          <div className="fv-row mb-10 fv-plugins-icon-container">
            <label className="fs-5 fw-bold form-label mb-2">
              <span className="required">Role name</span>
            </label>

            <input className="form-control form-control-solid" placeholder="Enter a role name" name="role_name" value="Developer" />
            <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback">
            </div>
          </div>

          <div className="text-end pt-15">
            <button type="reset" className="btn btn-light me-3" data-kt-roles-modal-action="cancel">
              Discard
            </button>

            <button type="submit" className="btn btn-primary" data-kt-roles-modal-action="submit">
              <span className="indicator-label">
                Submit
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export { Create }
