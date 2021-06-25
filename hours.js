/*
{
  name: "name of building",
  hours: ["monday hours", "tuesday hours", "08:00 - 20:00", "thursday hours", "friday hours", "10:00 - 15:00", "sunday hours"]
}
*/
let htmlHours = "";
x = "10:00 - 20:00";
y = "09:00 - 18:00";
let hours = [
  {
    name: "Mini-mall",
    hours: [x, x, x, x, x, "10:00 - 18:00", "10:00 - 18:00"],
    maps: "https://goo.gl/maps/RSCydHgbCtWKLY1E6"
    
  },{
    name: "Keesler BX",
    hours: [y, y, y, y, y, "N/A", "N/A"],
    maps: "https://goo.gl/maps/zw8wQ12Qnv5bYzpK6"
  }
];
//prepare HTML
  let week = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];
hours.forEach(function (value, index, arr) {
  x = "";
  let table = `<table class="table-light table-striped">
  <tr>
    <th>Day</th>
    <th>Time</th></tr>`;
  value.hours.forEach(function (day, i) {
    x += `<tr><td>${week[i]}</td><td>${day}</td></tr>`;
  });

  table += x + "</table>";
  y = `
  <div class="col">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${value.name}</h5>
        <p class="card-text">${table}</p>
        <a href="${value.maps}" target="_blank" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
`;
  htmlHours += y;
});
htmlHours = `<h1 class="center">Hours of Operation</h1><div class="row row-cols-1 row-cols-lg-3 g-4">${htmlHours}</div>`
