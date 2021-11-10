import {URL_CATEGORY} from "./api.js"

function postGategory(){
    $.ajax({
        url :  URL_CATEGORY + "save",
        type:   "POST",
        data:   JSON.stringify({
            name: $("#name").val(),
            description: $("#description").val()
        }),
        contentType:"application/JSON",
        datatype: "JSON",
        success:() => {
            alert("Categoria guardada")
            getCategory()
        }
    });
}

function getCategory(){
    $.ajax({
        url :   URL_CATEGORY + "all",
        type:   "GET",
        datatype:   "JSON",
        success:(response) => {
            loadCategories(response)
        }
    });
}

function loadCategories(items){
    let myTable = document.getElementsByTagName("laodCategory")
    
    for(let i = 0; i < items.length; i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td>"+items[i].description+"</td>";
        myTable+="<td><ul>"  
        items[i].clouds.forEach(element => {
            myTable += `<li>${element.brand} -- ${element.year} -- ${element.name} -- ${element.description}</li>`;
        });
        myTable+="</ul></td>";
        myTable+="</tr>";

    }
    myTable+="</tbody>";
    $("#loadCategories").empty()
    $("#loadCategories").append(myTable);
}

$('#postCategory').click(function(){
    postGategory()
});

$('#getCategories').click(function(){
    getCategory()
});


