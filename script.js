
/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
    arr.map((employee) => {
        if (employee.profession === "developer") {
            console.log(employee);
        }
    });
}

function PrintDeveloperbyForEach() {
    arr.forEach((employee) => {
        if (employee.profession === "developer") {
            console.log(employee);
        }
    });
}

function addData() {
    arr.push({
        id: 4,
        name: "susan",
        age: "20",
        profession: "intern"
    });

    console.log(arr);
}

function removeAdmin() {
    arr = arr.filter((employee) => {
        return employee.profession !== "admin";
    });

    console.log(arr);
}

function concatenateArray() {
    let newEmployees = [
        { id: 4, name: "sarah", age: "22", profession: "designer" },
        { id: 5, name: "mike", age: "25", profession: "manager" },
        { id: 6, name: "alex", age: "21", profession: "developer" }
    ];

    let allEmployees = arr.concat(newEmployees);

    console.log(allEmployees);
}

