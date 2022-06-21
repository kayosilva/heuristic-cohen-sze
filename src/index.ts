const employeesOnVacation = [3, 5];

const organogram = {
  id: 0,
  department: "Company Level",
  employees: [{ id: 1, name: "RBD", role: "CEO", isWorking: false }],
  subDepartment: [
    {
      id: 1,
      department: "R&D",
      employees: [
        { id: 2, name: "Neemias", role: "CTO", isWorking: true },
        { id: 3, name: "Kayo", role: "Engineering VP", isWorking: true }
      ],
      subDepartment: [
        {
          id: 3,
          department: "Product",
          employees: [
            { id: 4, name: "John", role: "Product VP", isWorking: false },
            { id: 5, name: "Mario", role: "Product Manager", isWorking: true }
          ]
        }
      ]
    }
  ]
};

function changeIsWorking(data: any) {
  if (data.employees) {
    data.employees.map((employee: any) => {
      employee.isWorking = !employeesOnVacation.includes(employee.id);
      return employee;
    });
  }

  if (data.subDepartment) {
    data.subDepartment.map((department: any) => changeIsWorking(department));
  }
}

changeIsWorking(organogram);

console.log(organogram, employeesOnVacation);
