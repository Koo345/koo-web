//after the page is loaded, this will be executed
document.addEventListener("DOMContentLoaded", function(){

    function fetchDataFromAPI(){
        fetch("https://api.sheety.co/6b28d0ddf29f89bbb1595d1a623d84b9/mockDataProduct/sheet1")
        .then(response=> response.json())
        .then(data => {
            console.log(data)

            //verify ur sheety
            const sheet1 =data.sheet1;

            //For loop to create the rows (7)
            for (let i =0; i<sheet1.length; i++){
                //create new row tr
                let newTr = document.createElement("tr");

                //verify on table, how many columns are there - 5 col
                // create nwq col by repeat 5 times
                let newTd1 = document.createElement("td");
                let newTd2 = document.createElement("td");
                let newTd3 = document.createElement("td");
                let newTd4 = document.createElement("td");
                let newTd5 = document.createElement("td");
                let newTd6 = document.createElement("td");

                //set the innerText of HTML of the col
                newTd1.innerHTML = sheet1[i].category;
                newTd2.innerHTML = sheet1[i].type;
                newTd3.innerHTML = sheet1[i].itemid;
                newTd4.innerHTML = sheet1[i].price;
                newTd5.innerHTML = sheet1[i].stock;

                //homework: add 3 button - view, edit, delete
                //create 3 button
                //add class to the button "btn btn-primary","btn btn-secondary"
                //AddEventListener "click" to each of the button
                //append to new Td
                newTd6.innerHTML = "to do button later";

                //add the columns to the row
                newTr.appendChild(newTd1);
                newTr.appendChild(newTd2);
                newTr.appendChild(newTd3);
                newTr.appendChild(newTd4);
                newTr.appendChild(newTd5);
                newTr.appendChild(newTd6);


                //add the rows to the tbody
                let tbody = document.getElementById("sheet1_tbody");
                tbody.appendChild(newTr);

            }   

        })
        .catch(error => console.log(err))
    }

    //invoke the function
    fetchDataFromAPI()
})

