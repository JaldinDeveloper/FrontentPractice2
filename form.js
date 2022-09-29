const form = document.getElementById("reservationForm");
const formElements = form.elements;
const clearButton = document.getElementById("clear");
const keyStorage = "aguanteBoca";
const lengthId = 10;
let dataArray = [];

tableRefresh();

clearButton.onclick = (event) => {
    
    localStorage.setItem(keyStorage, [JSON.stringify([])]);
};

form.onsubmit = (event) =>{
    let storaged = JSON.parse(localStorage.getItem(keyStorage));
    dataArray =  storaged == null ? []:storaged;
    data = getFormData();
    const id = generateid();
    const smoking = smokingVal();
    dataArray.push({id: id, smoking: smoking, ...data});
    localStorage.setItem(keyStorage, JSON.stringify(dataArray)
    );
    tableRefresh();
}

function smokingVal() {
    var checkBox = document.getElementById("smoking");
    return checkBox.checked;
}

function generateid() {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < lengthId; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

function deleteRow(r) {
    const i = r.parentNode.parentNode.rowIndex;
    document.getElementById("table").deleteRow(i);
}

function removeRow(id, r) {
    let stored = JSON.parse(localStorage.getItem(keyStorage));
    let storedId = stored.findIndex((obj) => obj.id === id);
    console.log(stored);
    stored.splice(storedId, 1);
    localStorage.setItem(keyStorage, JSON.stringify(stored));
    deleteRow(r);
}

const getFormData = () => {
    let data = {};
    for (const element of formElements) {
      if (element.name.length > 0) {
        data[element.name] = element.value;
      }
    }
    return data;
};
function tableRefresh(){
    let stored = JSON.parse(localStorage.getItem(keyStorage));
    for ( let i = 0; i < stored.length; ++i) {
        let rowCount = table.rows.length;
        let row = table.insertRow(rowCount);
        let valId = String(stored[i].id);
        let smokeImg = stored[i].smoking;
        let smokeUrl = 'img/nosmoke.png';
        if(smokeImg){
            smokeUrl = 'img/smoke.png';
        }
        else {
            smokeUrl = 'img/nosmoke.png';
        }
        row.insertCell(0).innerHTML= stored[i].arrivalDate;
        row.insertCell(1).innerHTML= stored[i].nights;
        row.insertCell(2).innerHTML= stored[i].adults;
        row.insertCell(3).innerHTML= stored[i].children;
        row.insertCell(4).innerHTML= stored[i].room;
        row.insertCell(5).innerHTML= stored[i].bed;
        row.insertCell(6).innerHTML= '<img src=\'' + smokeUrl + '\'/>';
        row.insertCell(7).innerHTML= stored[i].name;
        row.insertCell(8).innerHTML= stored[i].email;
        row.insertCell(9).innerHTML= stored[i].phone;
        row.insertCell(10).innerHTML= '<button onclick="removeRow(\'' + valId + '\',this)" ' +
                                            'type="button" ' +
                                            'class="delete-button">Delete</button>';
    }
}