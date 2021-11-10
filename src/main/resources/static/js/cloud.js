import {URL_CLOUD, URL_CATEGORY} from "./api.js"

function loadOptions(){
    $.ajax({
        url :   URL_CATEGORY + "all",
        type:   "GET",
        datatype:   "JSON",
        success:(response) => {
            response.forEach(element => {
                let option = document.createElement("option")
                option.innerHTML = element.name
                option.value = element.id
                $("#category").append(option)
            });
        }
    });
}

function postCloud(){
    $.ajax({
        url :  URL_CLOUD + "save",
        type:   "POST",
        data:   JSON.stringify({
            brand: $("#brand").val(),
            year: $("#year").val(),
            name: $("#name").val(),
            category: {id: $("#category").val()},
            description: $("#description").val()
        }),
        contentType:"application/JSON",
        datatype: "JSON",
        success:() => {
            alert("Nube guardada")
            getClouds()
        }
    });
}

function getClouds(){
    $.ajax({
        url :   URL_CLOUD + "all",
        type:   "GET",
        datatype:   "JSON",
        success:(response) => {
            loadClouds(response)
        }
    });
}

function loadClouds(items){
    let myTable = document.getElementsByTagName("laodClouds")

    for(let i = 0; i < items.length; i++){

        myTable+="<tr>";
        myTable+="<td>"+items[i].brand+"</td>";
        myTable+="<td>"+items[i].year+"</td>";
        myTable+="<td>"+items[i].category.name+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td>"+items[i].description+"</td>";
        myTable+="</tr>";
    }
    myTable+="</tbody>";
    $("#loadClouds").empty()
    $("#loadClouds").append(myTable);
}

$('#postCloud').click(function(){
    postCloud()
});

$('#getClouds').click(function(){
    getClouds()
});


document.addEventListener("DOMContentLoaded", loadOptions())