import {URL_CLIENT} from "./api.js"

function postClient(){
    $.ajax({
        url :  URL_CLIENT + "save",
        type:   "POST",
        data:   JSON.stringify({
            name: $("#name").val(),
            email: $("#email").val(),
            age: $("#age").val(),
            password: $("#password").val(),
        }),
        contentType:"application/JSON",
        datatype: "JSON",
        success:() => {
            alert("Cliente guardado")
            getClients()
        }
    });
}

function getClients(){
    $.ajax({
        url :   URL_CLIENT + "all",
        type:   "GET",
        datatype:   "JSON",
        success:(response) => {
            loadClients(response)
        }
    });
}

function loadClients(items){
    let myTable = document.getElementsByTagName("laodClients")

    for(let i = 0; i < items.length; i++){

        myTable+="<tr>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td>"+items[i].email+"</td>";
        myTable+="<td>"+items[i].age+"</td>"; 
        myTable+="</tr>";
    }
    myTable+="</tbody>";
    $("#loadClients").empty()
    $("#loadClients").append(myTable);
}

$('#postClient').click(function(){
    postClient()
});

$('#getClients').click(function(){
    getClients()
});