import { URL_RESERVATION, URL_CLOUD } from "./api.js";

function postReservation(){
    $.ajax({
        url :  URL_RESERVATION + "save",
        type:   "POST",
        data:   JSON.stringify({
            startDate: document.getElementById("startDate").value,
            devolutionDate: document.getElementById("startDate").value,
            cloud: {id: $("#idCloud").val()},
            client: {idClient: 1}
        }),
        contentType:"application/JSON",
        datatype: "JSON",
        success:() => {
            alert("Reserva guardada")
            getReservations()
        }
    });
}

function loadOptions(){
    $.ajax({
        url :   URL_CLOUD + "all",
        type:   "GET",
        datatype:   "JSON",
        success:(response) => {
            response.forEach(element => {
                let option = document.createElement("option")
                option.innerHTML = element.name
                option.value = element.id
                $("#idCloud").append(option)
            });
        }
    });
}

function getReservations(){
    $.ajax({
        url :   URL_RESERVATION + "all",
        type:   "GET",
        datatype:   "JSON",
        success:(response) => {
            loadReservation(response)
        }
    });
}

function loadReservation(items){
    let myTable = document.getElementsByTagName("loadReservations")

    for(let i = 0; i < items.length; i++){

        myTable+="<tr>";
        myTable+="<td>"+items[i].idReservation+"</td>";
        myTable+="<td>"+items[i].cloud.name+"</td>";
        myTable+="<td>"+items[i].client.idClient+"</td>";
        myTable+="<td>"+items[i].client.name+"</td>";
        myTable+="<td>"+items[i].client.email+"</td>";
        myTable+= items[i].client.score == null ? "<td>No tiene calificación</td>" : "<td>"+items[i].client.score+"</td>";
        myTable+="</tr>";
    }
    myTable+="</tbody>";
    $("#loadReservations").empty()
    $("#loadReservations").append(myTable);
}

$('#postReservation').click(function(){
    postReservation()
});

$('#getReservations').click(function(){
    getReservations()
});

document.addEventListener("DOMContentLoaded", loadOptions())