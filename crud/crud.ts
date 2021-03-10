
const FIREBASE_URL = "https://crud-956c2.europe-west1.firebasedatabase.app/bogdan-nourescu/"



interface Inregistrare {
    data: string,
    link: string,
    parola: string
}
type Inregistrari = { [name: string]: Inregistrare }

//CRUD = Create, Read, Update, Delete;
let inregistrari: Inregistrari = {};
let indexEditare: string | null = null;

async function getInregistrari() {
    const response = await fetch(FIREBASE_URL + ".json");
    inregistrari = await response.json();
    if (inregistrari === null) {
        inregistrari = {};
    }
    draw();
}


function getHtml(lista: Inregistrari) {
    let str = "";
    for (let [id, inregistrare] of Object.entries(lista)) {
        str += `
					<tr>
						<td>${inregistrare.data}</td>
						<td><a href="${inregistrare.link}" target="_blank">Link</a></td>
						<td>${inregistrare.parola}</td>
						<td>
							<img class="delete" src="icons/icon-delete-16.jpg" onclick="del('${id}');" />
							<img class="edit" src="icons/edit.png" onclick="edit('${id}');" />
						</td>
					</tr>
				`
    }
    return str;
}

function draw() {
    let str = getHtml(inregistrari);
    let elem = document.querySelector("#zoom tbody");
    if (elem) {
        elem.innerHTML = str;
    }
}

/**
 Preia informatiile din array si le populeaza in Formular.
 */
function edit(idx: string) {
    let inregistrare = inregistrari[idx];
    (document.querySelector("[name='link']") as HTMLInputElement).value = inregistrare.link;
    (document.querySelector("[name='parola']") as HTMLInputElement).value = inregistrare.parola;
    (document.querySelector("[name='data']") as HTMLInputElement).value = inregistrare.data;
    indexEditare = idx;
    (document.querySelector("#editBtn") as HTMLButtonElement).classList.remove("hidden");
    (document.querySelector("#addBtn") as HTMLButtonElement).classList.add("hidden");
    showForm();
}


/**
 Preia informatiile formular si le actualizeaza in array;
 */
async function editPasul2() {
    if (indexEditare === null) {
        return;
    }
    let inregistrare: Inregistrare = {
        link: (document.querySelector("[name='link']") as HTMLInputElement).value,
        parola: (document.querySelector("[name='parola']") as HTMLInputElement).value,
        data: (document.querySelector("[name='data']") as HTMLInputElement).value
    };

    const response = await fetch(FIREBASE_URL + indexEditare + ".json", {
        method: "put",
        body: JSON.stringify(inregistrare),
        headers: {
            'Content-Type': 'application/json'
        },
    });
    await response.json();

    await getInregistrari();

    cancel();
}

function cancel() {
    indexEditare = null;
    (document.querySelector("#editBtn") as HTMLButtonElement).classList.add("hidden");
    (document.querySelector("#addBtn") as HTMLButtonElement).classList.remove("hidden");

    (document.querySelector("form") as HTMLFormElement).reset();
    //cu reset sau asa:
    //document.querySelector("[name='data']").value="";
    //document.querySelector("[name='parola']").value="";
    //document.querySelector("[name='link']").value="";

    hideForm();
}

async function del(idx: string) {
    if (confirm(`Esti sigur ca vrei sa stergi inregistrarea de la data de ${inregistrari[idx].data} ?`)) {
        await fetch(FIREBASE_URL + idx + ".json", {
            method: "delete"
        });

        delete inregistrari[idx];

        draw();
        //await getInregistrari();
    }

}

async function adauga() {
    const link = (document.querySelector("[name='link']") as HTMLInputElement).value.trim();
    const parola = (document.querySelector("[name='parola']") as HTMLInputElement).value;
    const data = (document.querySelector("[name='data']") as HTMLInputElement).value;

    const newInregistrare = {
        "link": link,
        "parola": parola,
        "data": data
    }

    const response = await fetch(FIREBASE_URL + ".json", {
        method: "post",
        body: JSON.stringify(newInregistrare),
        headers: {
            'Content-Type': 'application/json'
        },
    });
    let responseObj = await response.json();
    inregistrari[responseObj.name] = newInregistrare;
    //await getInregistrari();
    draw();
    hideForm();
}

function hideForm() {
    (document.querySelector("form") as HTMLFormElement).classList.add("hidden");
    (document.querySelector("#zoom") as HTMLTableElement).classList.remove("hidden");
    (document.querySelector("#plusBtn") as HTMLButtonElement).classList.remove("hidden");
}

function showForm() {
    (document.querySelector("form") as HTMLFormElement).classList.remove("hidden");
    (document.querySelector("#zoom") as HTMLTableElement).classList.add("hidden");
    (document.querySelector("#plusBtn") as HTMLButtonElement).classList.add("hidden");
}

