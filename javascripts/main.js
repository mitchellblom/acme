$(document).ready(function() {

    var categories = [];
    var types = [];
    var products = [];

    function writeOptionsToDOM(array, heading) {
        var optionString = "";
        optionString += `<h5>${heading}</h5>`;
        optionString += `<select id="${heading}">`;
        optionString += `<option>All</option>`;
        for (var i = 0; i < array.length; i++) {
            optionString += `<option>${array[i].name}</option>`;
        }
        optionString += `</select>`;
        $("#cardContainer").append(optionString);
    };

    function writeProductCardsToDOM(array) {
        productString = "";
        if (i % 4 === 0) {
            productString += `<div class="row">`;
        };
        for (var i = 0; i < array.length; i++) {
            productString += `<div class="col-md-3 productCard ${array[i].type}">`;
            productString += `<h3>${array[i].name}</h3>`;
            productString += `<img src="${array[i].image}" class="img-circle thumbnail" alt="Product Image">`;
            productString += `<h4>${array[i].description}</h4>`;
            productString += `</div>`;
            if (i % 4 === 3) {
                productString += `</div>`
            };
        }
        $("#cardContainer").append(productString);
        // $(".productCard").hide();
    }

    var productJSON = function() {
        return new Promise(function(resolve, reject) {
            $.ajax("./db/products.json").done(function(data1) {
                resolve(data1.products)
            }).fail(function(error1) {
                reject(error1);
            });
        });
    };

    var categoryJSON = function() {
        return new Promise(function(resolve, reject) {
            $.ajax("./db/categories.json").done(function(data2) {
                resolve(data2.categories);
            }).fail(function(error2) {
                reject(error2);
            });
        });
    };

    var typeJSON = function() {
        return new Promise(function(resolve, reject) {
            $.ajax("./db/types.json").done(function(data3) {
                resolve(data3.types);
            }).fail(function(error3) {
                reject(error3);
            });
        });
    };

    categoryJSON().then(function(results) {
        results.forEach(function(singleCategory) {
            categories.push(singleCategory);
        });
        writeOptionsToDOM(categories, "Categories");
    });

    typeJSON().then(function(results) {
        results.forEach(function(singleType) {
            types.push(singleType);
        });
        writeOptionsToDOM(types, "Types");
    });

    productJSON().then(function(results) {
        results.forEach(function(singleProduct) {
            products.push(singleProduct);
        });
        writeOptionsToDOM(products, "Products");
        writeProductCardsToDOM(products);
    });

});