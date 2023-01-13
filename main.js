const body = document.getElementsByTagName('body')[0]

let table = document.createElement('table');
body.append(table);
console.log(table);

let count = 1

for(let i = 0; i < 10; i++){
    let tr = document.createElement('tr');
    for(let j = 0; j < 10; j++){
        let td = document.createElement('td');
        td.textContent = count;
        count++
		tr.appendChild(td);
    }
    table.appendChild(tr);
}


