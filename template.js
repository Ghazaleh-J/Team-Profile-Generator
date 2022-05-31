function manager(employeeArray) {
  return employeeArray
    .filter((employee) => {
      return employee.getRole() === "Manager";
    })
    .map((managerCard) => {
      return `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${managerCard.name}</h5>
          <p class="card-text">${managerCard.getRole()}</p>
        </div>
        <div class="card-body">
        <ul class="list-group list-group-flush">
        <li class="list-group-item">Id: ${managerCard.id}</li>
        <li class="list-group-item">Email: ${managerCard.email}</li>
        <li class="list-group-item">Office Number: ${managerCard.officeNumber}</li>
      </ul>
        </div>
      </div>`;
    })
    .join("");
}

function engineer(employeeArray) {
  return employeeArray
    .filter((employee) => {
      return employee.getRole() === "Engineer";
    })
    .map((engineerCard) => {
      return `<div> ${engineerCard.name}</div>`;
    })
    .join("");
}

function intern(employeeArray) {
  return employeeArray
    .filter((employee) => {
      return employee.getRole() === "Intern";
    })
    .map((internCard) => {
      return `<div> ${internCard.name}</div>`;
    })
    .join("");
}

function generateTeam(employeeArray) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    
    <title>Team Generator</title>
</head>
<body>
${manager(employeeArray)}
${engineer(employeeArray)}
${intern(employeeArray)}
    
</body>
</html>`; // html body, head "entire doc"
}

module.exports = generateTeam;
