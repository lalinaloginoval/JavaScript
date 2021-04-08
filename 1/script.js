// задание 1
function chessCreate() {
    var rows = [0, 8, 7, 6, 5, 4, 3, 2, 1, 0];
    var cols = [0, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 0];

    for (var i = 0; i < rows.length; i++) {
        const tr = document.createElement('tr');
        document.getElementById('chess').appendChild(tr);

        for (var j = 0; j < cols.length; j++) {
            const td = document.createElement('td');
            tr.appendChild(td);

            if (rows[i] == 0 && cols[j] != 0)
                td.innerHTML = cols[j];
            else if (rows[i] != 0 && cols[j] == 0)
                td.innerHTML = rows[i].toString();

            if (rows[i] != 0 && cols[j] != 0 && (i + j) % 2 == 1)
                td.style.backgroundColor = 'black';
        }
    }
}

chessCreate();