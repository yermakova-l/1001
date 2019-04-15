function showProductList(productArray, imagesFolderName, imageSize) {
    
    var rootElement =  document.getElementById('product-list');
    
    var cardArray = productArray.map(buildProductCard);
    
    var htmlForCategoryView = cardArray.join('');
    
    rootElement.innerHTML = htmlForCategoryView;
    
    function buildProductCard(obj){
        
        return "<div class='card'><img src='../images/catalog/" 
                + imagesFolderName + "/" + imagesFolderName + "_" + imageSize + "/"
                + obj.image + "' />" 
                + "<p class='product-name'>" + obj.title + "</p>" 
                + "<p class='price'>" + obj.price + " грн.</p>" 
        + '</div>';
    }
};


