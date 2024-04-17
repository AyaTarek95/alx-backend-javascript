interface Teacher {
  readonly firstName: string,
  readonly fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  lastName: string,
  location: string,
  [key: string]: unknown,
}
