var temp;
let body = document.getElementById("main-body");
let numbers = [
  {
    name: "Triangle Clinic",
    line: "228-376-0324",
    hours: ["08:00 - 09:00"]
  },
  {
    name: "Immunizations",
    line: "228-376-3553"
  },
  {
    name: "ENT Clinic",
    line: "228-376-0421"
  },
  {
    name: "Dental",
    line: "228-376-0512"
  },
  {
    name: "GI Clinic",
    line: "228-376-3835"
  },
  {
    name: "Neurology",
    line: "228-376-3791"
  },
  {
    name: "BOMC",
    line: "228-376-3163"
  },
  {
    name: "Orthopedics",
    line: "228-376-0428"
  },
  {
    name: "Chiropractic",
    line: "228-376-3412"
  },
  {
    name: "Referral Management",
    line: "228-376-0490"
  },
  {
    name: "Dermatology",
    line: "228-376-3501"
  },
  {
    name: "Optometry",
    line: "228-376-0449"
  },
  {
    name: "Hematology",
    line: "228-376-3845"
  },
  {
    name: "Mental Health",
    line: "228-376-0385"
  },
  {
    name: "Lab",
    line: "228-376-4435"
  },
  {
    name: "Urology",
    line: "228-376-0456"
  },
  {
    name: "CT scan",
    line: "228-376-4809"
  },
  {
    name: "Cardiology",
    line: "228-376-3490"
  },
  {
    name: "Endocrinology",
    line: "228-376-3887"
  },
  {
    name: "Pulmonology",
    line: "228-376-5566"
  },
  {
    name: "BHOP",
    line: "228-376-3761"
  },
  {
    name: "General Surgery",
    line: "228-376-0425"
  },
  {
    name: "Women's Health",
    line: "228-376-0433"
  },
  {
    name: "Public Health",
    line: "228-376-3163"
  },
  {
    name: "Physical Therapy",
    line: "228-376-0446"
  },
  {
    name: "Radiology (X-ray)",
    line: "228-376-0481"
  },
  {
    name: "Base Taxi",
    line: "228-377-2432"
  },
  {
    name: "Pharmacy",
    line: "228-377-9791"
  }
];

//prepare HTML for phone numbers
let htmlNumbers = `<h1 class="center">Important Numbers</h1><div class="row row-cols-1 row-cols-md-4 g-4" id="phone-grid">`
  numbers.forEach(function (value, index, arr) {
    html = `
  <div class="col">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${value.name}</h5>
        <p class="card-text"><a class="link-secondary" href="tel:${value.line}">${value.line}</a></p>
      </div>
    </div>
  </div>`;
    htmlNumbers += html;
  });
htmlNumbers += "</div>";
