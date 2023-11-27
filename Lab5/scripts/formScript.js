function formValidation() {
    let form = document.forms["input_form"];
    let errorsMessages = document.querySelectorAll("label.wrong_input");
    let result = true;

    const fullnamePattern = /[\wа-яА-ЯІ]+\s[\wа-яА-ЯІ].[\wа-яА-ЯІ]./;
    if(!fullnamePattern.test(form['fullName'].value)) {
        errorsMessages[0].hidden = false;
        result = false;
    }
    else {
        errorsMessages[0].hidden = true;
        form['fullName'].style.border = "2px solid green";
    }

    const groupPattern = /^[А-ЯІ]{2}-\d{2}$/;
    if(!groupPattern.test(form['group'].value)) {
        errorsMessages[1].hidden = false;
        result = false;
    }
    else {
        errorsMessages[1].hidden = true;
        form['group'].style.border = "2px solid green";
    }

    const idCardPattern = /[\wа-яА-ЯІ]{2}\s№\d{6}/;
    if(!idCardPattern.test(form['id_card'].value)) {
        errorsMessages[2].hidden = false;
        result = false;
    }
    else {
        errorsMessages[2].hidden = true;
        form['id_card'].style.border = "2px solid green";
    }

    const birthDatePattern = /\d{2}.\d{2}.\d{4}/;
    if (!birthDatePattern.test(form['birth_date'].value)) {
        errorsMessages[3].hidden = false;
        res = false;
    }
    else {
        errorsMessages[3].hidden = true;
        form['birth_date'].style.border = "2px solid green";
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(form['e_mail'].value)) {
        errorsMessages[4].hidden = false;
        res = false;
    }
    else {
        errorsMessages[4].hidden = true;
        form['e_mail'].style.border = "2px solid green";
    }

    if(result) {
        let inf_container = document.getElementById("inf_container");
        let oldList = document.getElementById("inf_ul");

        let newList = document.createElement("ul");
        newList.setAttribute("id", "inf_ul");

        let fullName = document.createElement("li");
        fullName.appendChild(document.createTextNode("ПІБ: " + form['fullName'].value));
        newList.appendChild(fullName);

        let group = document.createElement("li");
        group.appendChild(document.createTextNode("Група: " + form['group'].value));
        newList.appendChild(group);

        let id_card = document.createElement("li");
        id_card.appendChild(document.createTextNode("ID-картка: " + form['id_card'].value));
        newList.appendChild(id_card);

        let birth_date = document.createElement("li");
        birth_date.appendChild(document.createTextNode("Дата народження: " + form['birth_date'].value));
        newList.appendChild(birth_date);

        let e_mail = document.createElement("li");
        e_mail.appendChild(document.createTextNode("Email: " + form['e_mail'].value));
        newList.appendChild(e_mail);

        inf_container.replaceChild(newList, oldList);
    }
    else {
        return result;
    }

    return result;
}