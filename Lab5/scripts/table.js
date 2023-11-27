    document.addEventListener("DOMContentLoaded", function () {
        var rows = 6;
        var columns = 6;

        var table = document.createElement("table");
        document.body.appendChild(table);

        var trArr = [];

        function getRandomColor() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        function changeColorOnHover(cell, rowIndex, colIndex) {
            cell.addEventListener("mouseover", function () {
                if (rowIndex === 1 && colIndex === 1) {
                    cell.style.backgroundColor = getRandomColor();
                }
            });
        }

        function changeColorOnClick(cell, hueb, rowIndex, colIndex) {
            cell.addEventListener("click", function () {
                if (rowIndex === 1 && colIndex === 1) {
                    hueb.open();
                    hueb.on('change', function (color) {
                        cell.style.backgroundColor = color;
                    });
                }
            });
        }

        function changeColorOnDoubleClick(cell, rowIndex, colIndex) {
            cell.addEventListener("dblclick", function () {
                if (rowIndex === 1 && colIndex === 1) {
                    var randomColor = getRandomColor();
                    for (let j = 1; j < columns; j+=2) { // Починаючи з обраного стовпця, змінюємо кожен другий
                        for (let i = 0; i < rows; i++) {
                            trArr[i][j].style.backgroundColor = randomColor;
                        }
                    }
                }
            });
        }

        for (var i = 0; i < rows; i++) {
            var tr = document.createElement('tr');
            trArr[i] = [];

            for (var j = 0; j < columns; j++) {
                var td = document.createElement('td');
                trArr[i][j] = td;

                trArr[i][j].setAttribute("class", "tr");
                trArr[i][j].appendChild(document.createTextNode(rows * i + j + 1));
                tr.appendChild(trArr[i][j]);

                // Зміна кольору при наведенні
                changeColorOnHover(trArr[i][j], i, j);

                // Використання Huebee для вибору кольору при кліку
                var hueb = new Huebee(trArr[i][j], {
                    setText: false
                });
                changeColorOnClick(trArr[i][j], hueb, i, j);

                // Зміна кольору на побічній діагоналі при подвійному кліку
                changeColorOnDoubleClick(trArr[i][j], i, j);
            }

            table.appendChild(tr);
        }
    });
