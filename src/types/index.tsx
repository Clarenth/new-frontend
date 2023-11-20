export type INewAccount = {
  email: string,
  password: string,
  phone_number: string,
  job_title: string,
  office_address: string,
  employee_identity_data: 
  {
    first_name: string,
    middle_name: string,
    last_name: string,
    sex: string,
    gender: string,
    age: string,
    height: string,
    home_address: string,
    birthdate: string,
    birthplace: string,
  },
  security_access_level: string
}