interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string,
};

const student1: Student = {
  firstName: "Aya",
  lastName: "Tarek",
  age: 29,
  location: "Cairo", 
};

const student2: Student = {
  firstName: "Ali",
  lastName: "Mohamed",
  age: 17,
  location: "Alex",
};

const studentsList: Student[] = [student1, student2];

function createTablerow(student: Student){
  const tableRow = document.createElement("tr")
  const firstNamecell = document.createElement("td")
  const locationCell = document.createElement("td")
  
  firstNamecell.textContent =  student.firstName
  locationCell.textContent = student.location

  tableRow.appendChild(firstNamecell)
  tableRow.appendChild(locationCell)
  return tableRow
}

const tableBody = document.getElementById("table")

studentsList.forEach((student) => {
  const tableRow = createTablerow(student)
  tableBody.appendChild(tableRow)
})
