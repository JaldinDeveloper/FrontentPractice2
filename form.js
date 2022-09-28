const arrivalDate = document.getElementById("arrivalDate");
const nights = document.getElementById("nights");
const adults = document.getElementById("adults");

const standard = document.getElementById("standard");
const business = document.getElementById("business");
const suite = document.getElementById("suite");

const king = document.getElementById("king");
const radio = document.getElementById("radio");
const smoking = document.getElementById("smoking");

const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

const form = document.getElementById("reservationForm");
const formElements = form.elements;
const saveButton = document.getElementById("save");

//const keyStorage = "aguanteBoca";

const formId = "save-later-form"; // ID of the form
const url = location.href; //  href for the page
const keyStorage = `${url} ${formId}`; // Identifier used to identify the form
// saveButton.onclick = (event) => { 
    
//     console.log("Hola bro");
// };

form.onsubmit = (event) =>{
    data = getFormData();
    //localStorage.setItem(keyStorage, JSON.stringify(data[keyStorage]));
    localStorage.setItem(keyStorage, JSON.stringify
        (
        [
            {
                'hola': 'bno',
                element
            },
            {
                'hola': 'boca'
            }
        ])
    );
}

const getFormData = () => {
    let data = { [keyStorage]: {} };
    for (const element of formElements) {
      if (element.name.length > 0) {
        data[keyStorage][element.name] = element.value;
      }
    }
    return data;
};

function send(){

}