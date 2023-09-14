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
                <span className="required">Role name</span>
              </label>

              <input className="form-control form-control-solid" placeholder="Enter a role name" name="role_name" value="Developer"/>
                <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div></div>

            <div className="fv-row">
              <label className="fs-5 fw-bold form-label mb-2">Role Permissions</label>

              <div className="table-responsive">
                <table className="table align-middle table-row-dashed fs-6 gy-5">
                  <tbody className="text-gray-600 fw-semibold">
                    <tr>
                      <td className="text-gray-800">
                        Administrator Access


                        <span className="ms-1" data-bs-toggle="tooltip" aria-label="Allows a full access to the system" data-bs-original-title="Allows a full access to the system" data-kt-initialized="1">
                          <i className="ki-duotone ki-information-5 text-gray-500 fs-6"><span className="path1"></span><span className="path2"></span><span className="path3"></span></i></span>                                            </td>
                      <td>
                        <label className="form-check form-check-sm form-check-custom form-check-solid me-9">
                          <input className="form-check-input" type="checkbox" value="" id="kt_roles_select_all"/>
                            <span className="form-check-label">
                              Select all
                            </span>
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-gray-800">User Management</td>

                      <td>
                        <div className="d-flex">
                          <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                            <input className="form-check-input" type="checkbox" value="" name="user_management_read"/>
                              <span className="form-check-label">
                                Read
                              </span>
                          </label>

                          <label className="form-check form-check-custom form-check-solid me-5 me-lg-20">
                            <input className="form-check-input" type="checkbox" value="" name="user_management_write"/>
                              <span className="form-check-label">
                                Write
                              </span>
                          </label>

                          <label className="form-check form-check-custom form-check-solid">
                            <input className="form-check-input" type="checkbox" value="" name="user_management_create"/>
                              <span className="form-check-label">
                                Create
                              </span>
                          </label>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-gray-800">Content Management</td>

                      <td>
                        <div className="d-flex">
                          <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                            <input className="form-check-input" type="checkbox" value="" name="content_management_read"/>
                              <span className="form-check-label">
                                Read
                              </span>
                          </label>

                          <label className="form-check form-check-custom form-check-solid me-5 me-lg-20">
                            <input className="form-check-input" type="checkbox" value="" name="content_management_write"/>
                              <span className="form-check-label">
                                Write
                              </span>
                          </label>

                          <label className="form-check form-check-custom form-check-solid">
                            <input className="form-check-input" type="checkbox" value="" name="content_management_create"/>
                              <span className="form-check-label">
                                Create
                              </span>
                          </label>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-gray-800">Financial Management</td>

                      <td>
                        <div className="d-flex">
                          <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                            <input className="form-check-input" type="checkbox" value="" name="financial_management_read"/>
                              <span className="form-check-label">
                                Read
                              </span>
                          </label>

                          <label className="form-check form-check-custom form-check-solid me-5 me-lg-20">
                            <input className="form-check-input" type="checkbox" value="" name="financial_management_write"/>
                              <span className="form-check-label">
                                Write
                              </span>
                          </label>

                          <label className="form-check form-check-custom form-check-solid">
                            <input className="form-check-input" type="checkbox" value="" name="financial_management_create"/>
                              <span className="form-check-label">
                                Create
                              </span>
                          </label>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-gray-800">Reporting</td>

                      <td>
                        <div className="d-flex">
                          <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                            <input className="form-check-input" type="checkbox" value="" name="reporting_read"/>
                              <span className="form-check-label">
                                Read
                              </span>
                          </label>

                          <label className="form-check form-check-custom form-check-solid me-5 me-lg-20">
                            <input className="form-check-input" type="checkbox" value="" name="reporting_write"/>
                              <span className="form-check-label">
                                Write
                              </span>
                          </label>

                          <label className="form-check form-check-custom form-check-solid">
                            <input className="form-check-input" type="checkbox" value="" name="reporting_create"/>
                              <span className="form-check-label">
                                Create
                              </span>
                          </label>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-gray-800">Payroll</td>

                      <td>
                        <div className="d-flex">
                          <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                            <input className="form-check-input" type="checkbox" value="" name="payroll_read"/>
                              <span className="form-check-label">
                                Read
                              </span>
                          </label>

                          <label className="form-check form-check-custom form-check-solid me-5 me-lg-20">
                            <input className="form-check-input" type="checkbox" value="" name="payroll_write"/>
                              <span className="form-check-label">
                                Write
                              </span>
                          </label>

                          <label className="form-check form-check-custom form-check-solid">
                            <input className="form-check-input" type="checkbox" value="" name="payroll_create"/>
                              <span className="form-check-label">
                                Create
                              </span>
                          </label>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-gray-800">Disputes Management</td>

                      <td>
                        <div className="d-flex">
                          <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                            <input className="form-check-input" type="checkbox" value="" name="disputes_management_read"/>
                              <span className="form-check-label">
                                Read
                              </span>
                          </label>

                          <label className="form-check form-check-custom form-check-solid me-5 me-lg-20">
                            <input className="form-check-input" type="checkbox" value="" name="disputes_management_write"/>
                              <span className="form-check-label">
                                Write
                              </span>
                          </label>

                          <label className="form-check form-check-custom form-check-solid">
                            <input className="form-check-input" type="checkbox" value="" name="disputes_management_create"/>
                              <span className="form-check-label">
                                Create
                              </span>
                          </label>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-gray-800">API Controls</td>

                      <td>
                        <div className="d-flex">
                          <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                            <input className="form-check-input" type="checkbox" value="" name="api_controls_read"/>
                              <span className="form-check-label">
                                Read
                              </span>
                          </label>

                          <label className="form-check form-check-custom form-check-solid me-5 me-lg-20">
                            <input className="form-check-input" type="checkbox" value="" name="api_controls_write"/>
                              <span className="form-check-label">
                                Write
                              </span>
                          </label>

                          <label className="form-check form-check-custom form-check-solid">
                            <input className="form-check-input" type="checkbox" value="" name="api_controls_create"/>
                              <span className="form-check-label">
                                Create
                              </span>
                          </label>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-gray-800">Database Management</td>

                      <td>
                        <div className="d-flex">
                          <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                            <input className="form-check-input" type="checkbox" value="" name="database_management_read"/>
                              <span className="form-check-label">
                                Read
                              </span>
                          </label>

                          <label className="form-check form-check-custom form-check-solid me-5 me-lg-20">
                            <input className="form-check-input" type="checkbox" value="" name="database_management_write"/>
                              <span className="form-check-label">
                                Write
                              </span>
                          </label>

                          <label className="form-check form-check-custom form-check-solid">
                            <input className="form-check-input" type="checkbox" value="" name="database_management_create"/>
                              <span className="form-check-label">
                                Create
                              </span>
                          </label>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-gray-800">Repository Management</td>

                      <td>
                        <div className="d-flex">
                          <label className="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
                            <input className="form-check-input" type="checkbox" value="" name="repository_management_read"/>
                              <span className="form-check-label">
                                Read
                              </span>
                          </label>

                          <label className="form-check form-check-custom form-check-solid me-5 me-lg-20">
                            <input className="form-check-input" type="checkbox" value="" name="repository_management_write"/>
                              <span className="form-check-label">
                                Write
                              </span>
                          </label>

                          <label className="form-check form-check-custom form-check-solid">
                            <input className="form-check-input" type="checkbox" value="" name="repository_management_create"/>
                              <span className="form-check-label">
                                Create
                              </span>
                          </label>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
