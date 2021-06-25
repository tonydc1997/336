/*
{
  name: "name of building",
  hours: ["monday hours", "tuesday hours", "08:00 - 20:00", "thursday hours", "friday hours", "10:00 - 15:00", "sunday hours"]
}
*/
let htmlHours = "";
let x = "10:00 - 20:00";
let hours = [
  {
    name: "Mini-mall",
    hours: [x, x, x, x, x, "10:00 - 18:00", "10:00 - 18:00"],
    maps: "https://goo.gl/maps/oeZF7iJoXLvqqpFW7"
  }
];
//prepare HTML
hours.forEach(function (value, index, arr) {
  let x = "";
  let week = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];
  let table = `<table class="table-light table-striped">
  <tr>
    <th>Day</th>
    <th>Time</th></tr>`;
 value.hours.forEach(function(day, i){
       x += `<tr><td>${week[i]}</td><td>${day}</td></tr>`;
 });

  
    

  table += x + "</table>";
  let html = `
<h1 class="center">Hours of Operation</h1><div class="row row-cols-1 row-cols-md-4 g-4">
  <div class="col">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${value.name}</h5>
        <p class="card-text">${table}</p>
        <a href="${value.maps}" class="btn btn-primary">Get Directions</a>
      </div>
    </div>
  </div>
  </div>
`;
  htmlHours += html;
});
