interface Teacher {
  readonly firstName: string,
  readonly fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  lastName: string,
  location: string,
  [key: string]: unknown,
}

interface Directors extends Teacher {
  numberOfReports: number,
}

interface printTeacherF {
  (firstName: string, lastName:string): string
}

const  printTeacher: printTeacherF = (firstName, lastName) => {
  return `${firstName[0]}.${lastName}`
}

