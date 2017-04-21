    var categories = [];
    var types = [];
    var products = [];

    $(document).ready(function() {

        function writeOptionsToDOM(array, heading) {
            var optionString = "";
            optionString +=
                		`<div class="card" id="${heading}>
        				<div class="btn-group">
        				<div class="dropdown">
 						<button id="${heading}-button" class="btn btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">   						
 						${heading}
   						<span class="caret"></span>
   						</button>
        				<ul class="dropdown-menu">`;
            for (var i = 0; i < array.length; i++) {
                optionString +=
                    	`<li id="${heading}-${array[i].id}">
            			<a class="dynamicOption">${array[i].name}</a>
            			</li>`;
            }
            optionString +=
               			`</ul>
       					</div>
       					</div>
       					</div>`;
            $("#optionContainer").append(optionString);
        };

        function writeProductCardsToDOM(array) {
            $("#cardContainer").html("");
            productString = "";
            if (i % 4 === 0) {
                productString += `<div class="row">`;
            };
            for (var i = 0; i < array.length; i++) {
                productString += `<div class="col-md-3 productCard ${array[i].type}" id="${array[i].name}">
                				<h3>${array[i].name}</h3>
                				<img src="${array[i].image}" class="img-circle thumbnail" alt="Product Image">
                				<h4>${array[i].description}</h4>
                				<h4>Type: ${array[i].typeg}</h4>
                				</div>`;
                if (i % 4 === 3) {
                    productString += `</div>`
                };
            }
            $("#cardContainer").append(productString);
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

        ////////VIEW FILTERS////////

        $("body").on("click", ".dynamicOption", function() {
            $(".productCard").hide();

            var clickedId = $(this).parent().attr("id");
            var clickedIdLetter = clickedId[0]
            var filteredProducts = [];

            if (clickedIdLetter === "C") {

                if (clickedId === "Categories-0") {
                    for (var i = 0; i < products.length; i++) {
                        if (products[i].type == 0 || products[i].type == 1 || products[i].type == 2) {
                            filteredProducts.push(products[i]);
                        }
                    }
                    writeProductCardsToDOM(filteredProducts);
                } else if (clickedId === "Categories-1") {
                	for (var j = 0; j < products.length; j++) {
                        if (products[j].type == 3 || products[j].type == 4 || products[j].type == 5) {
                            filteredProducts.push(products[j]);
                        }
                    }
                    writeProductCardsToDOM(filteredProducts);
                } else if (clickedId === "Categories-2") {
                	for (var k = 0; k < products.length; k++) {
                        if (products[k].type == 6 || products[k].type == 7 || products[k].type == 8) {
                            filteredProducts.push(products[k]);
                        }
                    }
                    writeProductCardsToDOM(filteredProducts);
                }

            } else if (clickedIdLetter === "T") {
                var typeNumber = clickedId.split("Types-");
                var filteredType = typeNumber[1];
                for (var l = 0; l < products.length; l++) {
                    if (products[l].type == filteredType) {
                        filteredProducts.push(products[l]);
                    }
                    writeProductCardsToDOM(filteredProducts);
                }
            } else if (clickedIdLetter === "P") {
                var typeNumber = clickedId.split("Products-");
                var filteredProductId = typeNumber[1];
                for (var m = 0; m < products.length; m++) {
                    if (products[m].id == filteredProductId) {
                        filteredProducts.push(products[m]);
                    }
                    writeProductCardsToDOM(filteredProducts);
                }
            }
        });
    });