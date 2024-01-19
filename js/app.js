
var person = [
    {
        name: "Jhone Doe",
        age: 20,
        city: "London",
    },
    {
        name: "Bob Jin",
        age: 29,
        city: "New York",
    },
    {
        name: "Smit Due",
        age: 30,
        city: "Chicago",
    },
    {
        name: "Petter Hence",
        age: 28,
        city: "Chicago",
    },
    {
        name: "Jack Den",
        age: 23,
        city: "Los Angle",
    },
    {
        name: "Dhana Den",
        age: 33,
        city: "Los Angle",
    },
    {
        name: "Mike",
        age: 35,
        city: "London",
    },
    {
        name: "Pal losi",
        age: 38,
        city: "Los Angle",
    },
    {
        name: "Annie Mari",
        age: 32,
        city: "London",
    },
    {
        name: "Jaffer kin",
        age: 38,
        city: "paris",
    },

];


var table = document.querySelector('table');

// function detailTable(){
//     for (var i = 0; i < person.length; i++){
//         var row = table.insertRow(i + 1);
//         var cellName = row.insertCell(0);
//         var cellAge = row.insertCell(1);
//         var cellCity = row.insertCell(2);

//         cellName.innerHTML = person[i].name;
//         cellAge.innerHTML = person[i].age;
//         cellCity.innerHTML = person[i].city;
//     }
// };

    person.map(function(personDetails){
        var row = table.insertRow();
        var cellName = row.insertCell(0);
        var cellAge = row.insertCell(1);
        var cellCity = row.insertCell(2);

        cellName.innerHTML = personDetails.name;
        cellAge.innerHTML = personDetails.age;
        cellCity.innerHTML = personDetails.city;

    })


// window.onload = detailTable;