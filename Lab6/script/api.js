let numOfPeopleAdded = 0;

async function getData() {
    try{
        const response = await fetch('https://randomuser.me/api', {
            headers: {
                'Accept': 'application/json',
            }
        });

        if(!response.ok) {
            throw new Error('Network response was not ok');
        }

        const value = await response.json();
        console.log(value);

        const parent = document.getElementById("results");
        const personalInfBlock = await CreatePersonalInfBlock(value);

        parent.appendChild(personalInfBlock);
        numOfPeopleAdded++;

        const countLabel = document.getElementById("count_label");

        if(countLabel) {
            countLabel.innerText = `Додано людей: ${numOfPeopleAdded}`;
        }
        else {
            const label = document.createElement("p");
            label.id = "count_label";
            label.innerHTML = `Додано людей ${numOfPeopleAdded}`;
            parent.appendChild(label);
        }

    }
    catch(error) {
        console.error("Fetch error: ", error);
    }
}

async function CreatePersonalInfBlock(data) {
    const personalInfBlock = document.createElement("div");
    personalInfBlock.className = "person_info";

    let pictureDoc = document.createElement("img");
    pictureDoc.src = data.results[0].picture.large;
    pictureDoc.className = "person_img";
    personalInfBlock.appendChild(pictureDoc);

    let pesronName = document.createElement("p");
    pesronName.className = "person_inf_item";
    pesronName.appendChild(document.createTextNode(`Name: ${data.results[0].name.first}  ${data.results[0].name.last}`));
    personalInfBlock.appendChild(pesronName);

    let personCountry = document.createElement("p");
    personCountry.className = "person_inf_item";
    personCountry.appendChild(document.createTextNode(`County: ${data.results[0].location.country}`));
    personalInfBlock.appendChild(personCountry);

    let personPostcode = document.createElement("p");
    personPostcode.className = "person_inf_item";
    personPostcode.appendChild(document.createTextNode(`Postcode: ${data.results[0].location.postcode}`));
    personalInfBlock.appendChild(personPostcode);

    let personPhone = document.createElement("p");
    personPhone.className = "person_inf_item";
    personPhone.appendChild(document.createTextNode(`Phone: ${data.results[0].phone}`));
    personalInfBlock.appendChild(personPhone);

    return personalInfBlock;
}