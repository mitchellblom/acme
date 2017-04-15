console.log("testing again for new branch");

$(document).ready(function() {

    var dinosaurs = [];
    var categories = [];
    var types = [];
    var products = [];

    function writeDOM1(array) {
        var domString = "";
            domString += `<select>`
        for (var i = 0; i < array.length; i++) {
        	 domString += `
            				<option>${array[i].name}</option>
            			
            			`;
        }
         domString += `</select>`
        $("#promises").append(domString);
    }

    function writeDOMproducts(array) {
        var domString = "";
            domString += `<select>`
        for (var i = 0; i < array.length; i++) {
        	 domString += `
            				<option>${array[i].name}</option>
            			
            			`;
        }
         domString += `</select>`
        $("#promises").append(domString);
    }

    //iife, like a getter
    var firstDinosaurJSON = function() {
        return new Promise(function(resolve, reject) {
            $.ajax("./db/products.json").done(function(data1) {
                console.log("getting here?")
                resolve(data1.products)

            }).fail(function(error1) {
                reject(error1);
            });
        });
    };

    var secondDinosaurJSON = function() {
        return new Promise(function(resolve, reject) {
            $.ajax("./db/categories.json").done(function(data2) {
                resolve(data2.categories);
            }).fail(function(error2) {
                reject(error2);
            });
        });
    };

    var thirdDinosaurJSON = function() {
        return new Promise(function(resolve, reject) {
            $.ajax("./db/types.json").done(function(data3) {
                resolve(data3.types);
            }).fail(function(error3) {
                reject(error3);
            });
        });
    };

    // Promise.all([firstDinosaurJSON(), secondDinosaurJSON(), thirdDinosaurJSON()])
    // .then(function(resultz){
    // 	console.log("resultz", resultz);
    // 	resultz.forEach(function(ajaxCalls){
    // 		ajaxCalls.forEach(function(dino){
    // 			dinosaurs.push(dino);
    // 		});
    // 	});
    // 	writeDOM();
    // });

    Promise.all([firstDinosaurJSON()])
        .then(function(results) {
            console.log("results: ", results);
            results.forEach(function(ajaxCalls) {
                ajaxCalls.forEach(function(singleProduct) {
                    products.push(singleProduct);
                    console.log("products: ", products);
                });
            });
            writeDOM1(products);
        });

    Promise.all([secondDinosaurJSON()])
        .then(function(results) {
            console.log("results: ", results);
            results.forEach(function(ajaxCalls) {
                ajaxCalls.forEach(function(singleCategory) {
                    categories.push(singleCategory);
                });
            });
            writeDOM1(categories);
        });

    Promise.all([thirdDinosaurJSON()])
        .then(function(results) {
            console.log("results: ", results);
            results.forEach(function(ajaxCalls) {
                ajaxCalls.forEach(function(singleType) {
                    types.push(singleType);
                    console.log("types: ", types);
                });
            });
            writeDOM1(types);
        });



});