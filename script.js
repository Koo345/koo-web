
const addBtn = document.getElementById('add_btn');
addBtn.addEventListener('click',() => {
    const category = document.getElementById('category').value;
    const type = document.getElementById('type').value;
    const itemid = document.getElementById('itemid').value;
    const price = document.getElementById('price').value;
    const stock = document.getElementById('stock').value;


    const data = {
        "sheet1": {
            "category":category,
            "type":type,
            "itemid":itemid,
            "price":price,
            "stock":stock
        }
    }
    fetch("https://api.sheety.co/6b28d0ddf29f89bbb1595d1a623d84b9/mockDataProduct/sheet1",
    {
        "method": "POST",
        "body": JSON.stringify(data),
        "headers": {
        //     "Authorization":"Bearer thisistoken"
        "Content-Type":"application/json"     
        }
    }
    )
    .then(response => response.json())
    .then(data=> {
        alert("success")
    })
    .catch(err=> console.log(err))
});
