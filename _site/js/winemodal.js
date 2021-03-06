
function displayWineInfo(wineTitle, wineValuePointImage, wineImage, wineVintage, wineProducer, wineCountry, wineRegion, wineSubRegion, wineTastingNotes, wineProducerLink) {
    var parentDiv = document.getElementById("wineModalContent");
    parentDiv.innerHTML = "";
    var headerDiv = document.createElement("div");

    headerDiv.setAttribute("class","modal-header");
    headerDiv.innerHTML = "<img src=" + wineValuePointImage + " style='width:80px;height:auto;'>";
    headerDiv.innerHTML += "<h4 class='modal-title'>" + wineTitle +
    "</h4><button type='button' class='close' data-dismiss='modal'>&times;</button>";

    parentDiv.appendChild(headerDiv);

    var rowDiv = document.createElement("div");
    rowDiv.setAttribute("class","modal-body row");

    var bodyImgDiv = document.createElement("div");
    bodyImgDiv.setAttribute("class","col-sm-4");
    bodyImgDiv.innerHTML="<img src=" + wineImage + " style='width:120px;height:auto;'>";
    // bodyDiv.innerHTML += "<p>Vintage:" + wineVintage + "</p>";

    rowDiv.appendChild(bodyImgDiv);

    var bodyTxtDiv = document.createElement("div");
    bodyTxtDiv.setAttribute("class","col-sm-8");
    var bodyTable = document.createElement("table");
    bodyTable.setAttribute("class","wineTableInfo");
    bodyTable.innerHTML = "<tr><td>Vintage:</td><td>" + wineVintage + "</td></tr>"
    bodyTable.innerHTML += "<tr><td>Producer:</td><td><a href='https://" + wineProducerLink + "' target='_blank'>" + wineProducer + "</a></td></tr>"
    bodyTable.innerHTML += "<tr><td>Country:</td><td>" + wineCountry + "</td></tr>"
    bodyTable.innerHTML += "<tr><td>Region:</td><td>" + wineSubRegion + ", " + wineRegion + "</td></tr>"
    bodyTable.innerHTML += "<tr><td>Tasting Notes:</td><td>" + wineTastingNotes + "</td></tr>"
    
    bodyTxtDiv.appendChild(bodyTable);

    rowDiv.appendChild(bodyTxtDiv);

    parentDiv.appendChild(rowDiv);
}
