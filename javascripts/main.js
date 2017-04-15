$(document).ready(function() {

    var categories = [];
    var types = [];
    var products = [];

    function writeDOM(array) {
    	console.log("");
        var domString = "";
        domString += `<select>`
        for (var i = 0; i < array.length; i++) {
            // domString += '<h6>${array[i]}</h6>'
            domString += `<option>${array[i].name}</option>`;
        }
        domString += `</select>`
        $("#promises").append(domString);
    };

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
        writeDOM(categories);
    });

    typeJSON().then(function(results) {
            results.forEach(function(singleType) {
            types.push(singleType);
        });
        writeDOM(types);
        });

    productJSON().then(function(results) {
            results.forEach(function(singleProduct) {
            products.push(singleProduct);
        });
        writeDOM(products);
        });

});