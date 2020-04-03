function searchfun() {

    let searchItem = document.getElementById("filter").value.toUpperCase();
    //console.log(searchItem);
    let table = document.getElementById("myTable");
    let row = table.getElementsByTagName('tr');
    //console.log(row);

    for (var i = 0; i < row.length; i++) {
        let data = row[i].getElementsByTagName('td')[0];

        if (data) {
            let textValue = data.textContent || data.innerHTML;

            if (textValue.toUpperCase().indexOf(searchItem) > -1) {
                row[i].style.display = "";
            } else {
                row[i].style.display = "none";
            }
        }
    }
}