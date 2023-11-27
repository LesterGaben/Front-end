let first_element = document.getElementById("first_element");
first_element.onclick = function() {
    if(first_element.className == "blue")
        first_element.className = "yellow";
    else
        first_element.className = "blue";
}

let second_element = document.querySelectorAll("p#second_element");
second_element[0].onclick = function() {
    if(second_element[0].className == "white")
        second_element[0].className = "grey";
    else
        second_element[0].className = "white";
}

let img_container = document.getElementById("img_container");
let add_button = document.getElementById("add_button");
add_button.onclick = function() {
    let img = document.createElement("img");
    img.src = "https://old.zt-rada.gov.ua/data/photogallery/b4db71d7806628.jpg";
    img_container.appendChild(img);
}

let increase_button = document.getElementById("increase_button");
increase_button.onclick = function() {
    let images = document.querySelectorAll("img");
    images.forEach(image => {
        image.width += 10;
        image.height += 10;
    });
}

let decrease_button = document.getElementById("decrease_button");
decrease_button.onclick = function() {
    let images = document.querySelectorAll("img");
    images.forEach(image => {
        image.width -= 10;
        image.height -= 10;
    });
}

let delete_button = document.getElementById("delete_button");
delete_button.onclick = function() {
    let images = document.querySelectorAll("#img_container img");
    if (images.length > 1) {
        img_container.removeChild(images[images.length - 1]);
    } else if (images.length === 1) {
        
        let firstImageLink = document.querySelector("#img_container a");
        if (firstImageLink && firstImageLink.contains(images[0])) {
            // Якщо це початкове зображення, видаляємо його разом з обгорткою <a>
            img_container.removeChild(firstImageLink);
        } else {
            // Інакше, просто видаляємо останнє зображення
            img_container.removeChild(images[0]);
        }
    }
}




