const express = require("express");

const app = express();

const data = {
  patients: [
    {
      id: "5856675843",
      firstName: "Milt",
      lastName: "Rosenbaum",
      gender: "Male",
      dateOfBirth: "15/01/2005",
      email: "mrosenbaum0@fastcompany.com",
      phoneNumber: "+351 161 160 5674",
      prescriptions: ["Lidocaine Viscous"],
      doctorId: 1,
    },
    {
      id: "8272482266",
      firstName: "Faydra",
      lastName: "Lief",
      gender: "Female",
      dateOfBirth: "29/09/2003",
      email: "flief1@apache.org",
      phoneNumber: "+86 503 995 7341",
      prescriptions: ["Mucinex", "Aspirin"],
      doctorId: 2,
    },
    {
      id: "6877351762",
      firstName: "Roxane",
      lastName: "Alflat",
      gender: "Female",
      dateOfBirth: "14/01/2014",
      email: "ralflat2@pcworld.com",
      phoneNumber: "+1 914 731 0603",
      prescriptions: ["ARBUTINUM", "Cetirizine Hydrochloride"],
      doctorId: 2,
    },
    {
      id: "0323339832",
      firstName: "Willy",
      lastName: "Entwisle",
      gender: "Female",
      dateOfBirth: "24/09/1949",
      email: "wentwisle3@reddit.com",
      phoneNumber: "+351 550 612 9238",
      prescriptions: [
        "Rich Almond Perfecting Makeup Broad Spectrum SPF 25",
        "VITAMIN CREAM",
        "NITRO-DUR",
      ],
      doctorId: 3,
    },
    {
      id: "4772181415",
      firstName: "Bjorn",
      lastName: "Bolgar",
      gender: "Male",
      dateOfBirth: "09/07/1985",
      email: "bbolgar4@wired.com",
      phoneNumber: "+7 375 198 3116",
      prescriptions: ["Vanilla Fig Hand Sanitizer"],
      doctorId: 2,
    },
    {
      id: "5942660123",
      firstName: "Ardith",
      lastName: "Kilmartin",
      gender: "Female",
      dateOfBirth: "14/12/1949",
      email: "akilmartin5@google.co.jp",
      phoneNumber: "+1 773 365 8289",
      prescriptions: ["NEXIUM", "Clear Defense"],
      doctorId: 3,
    },
    {
      id: "6467006526",
      firstName: "Walt",
      lastName: "Moule",
      gender: "Male",
      dateOfBirth: "12/05/2005",
      email: "wmoule6@businessinsider.com",
      phoneNumber: "+967 897 754 8473",
      prescriptions: [],
      doctorId: 3,
    },
    {
      id: "6906950363",
      firstName: "Fedora",
      lastName: "Johnston",
      gender: "Female",
      dateOfBirth: "27/08/1959",
      email: "fjohnston7@noaa.gov",
      phoneNumber: "+505 127 699 7118",
      prescriptions: ["DELUXE Dish DETERGENT"],
      doctorId: 3,
    },
    {
      id: "3711892663",
      firstName: "Jo-anne",
      lastName: "Furmonger",
      gender: "Female",
      dateOfBirth: "29/01/1953",
      email: "jfurmonger8@baidu.com",
      phoneNumber: "+62 826 530 5184",
      prescriptions: ["Acyclovir", "Palmers Amaranth"],
      doctorId: 1,
    },
    {
      id: "9335192813",
      firstName: "Gerome",
      lastName: "Stutte",
      gender: "Male",
      dateOfBirth: "31/05/1984",
      email: "gstutte9@joomla.org",
      phoneNumber: "+81 855 427 4970",
      prescriptions: ["Emtriva"],
      doctorId: 1,
    },
  ],
  doctors: [
    {
      id: 1,
      doctor: "Dr. Coventry",
      email: "ecoventry@amspractice.nl",
      onDuty: true,
    },
    {
      id: 2,
      doctor: "Dr. Adenet",
      email: "radenet@amspractice.nl",
      onDuty: true,
    },
    {
      id: 3,
      doctor: "Dr. Tollady",
      email: "atollady@amspractice.nl",
      onDuty: false,
    },
  ],
};

const findById = (id) => {
  const foundPatient = data.patients.find((patient) => {
    if (patient.id === id) {
      return true;
    } else {
      return false;
    }
  });
  return foundPatient;
};

app.get("/db", function (request, response) {
  response.send(data);
});
app.get("/patients", function (request, response) {
  response.send(data.patients);
});
app.get("/patients/:id", function (request, response) {
  response.send(findById(request.params.id));
});
app.get("/doctors", function (request, response) {
  response.send(data.doctors);
});

app.listen(4000);
