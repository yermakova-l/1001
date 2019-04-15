function showPriceList(productArray, root){
    
    var root = document.getElementById(root);
    
    var tableRowsArray = productArray.map(buildTableRow);
    
    var tableRowsHtml = tableRowsArray.join('');

    var htmlForTable = "<table>" + tableRowsHtml + "</table>";
    root.innerHTML = htmlForTable;
    
    function buildTableRow(obj){
        return "<tr><td>"+ obj.id + "</td><td>" + obj.title + "</td><td>" + obj.price + "</td></tr>";
    }
    
}