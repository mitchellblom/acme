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

        ////////////////

        $("body").on("click", ".dynamicOption", function() {
            $(".productCard").hide();

            // Category view filter
            // var categoryClicked = this.innerHTML;

            // var rec = [];
            // rec.push($(".0"));
            // rec.push($(".1"));
            // rec.push($(".2"));

            // var com = [];
            // com.push($(".3"));
            // com.push($(".4"));
            // com.push($(".5"));

            // var mil = [];
            // mil.push($(".6"));
            // mil.push($(".7"));
            // mil.push($(".8"));

            // if (categoryClicked === "Recreational") {
            //     for (var i = 0; i < rec.length; i++) {
            //         // $(rec[i]).show();
            //     	writeProductCardsToDOM($(rec[i]));
            //     }
            // } else if (categoryClicked === "Commercial") {
            //     for (var j = 0; j < com.length; i = j++) {
            //         $(com[j]).show();
            //     }
            // } else if (categoryClicked === "Military")
            //     for (var k = 0; k < mil.length; k++) {
            //         $(mil[k]).show();
            //     }

            // Type view filter


            console.log("this.parent", $(this).parent());
            var clickedId = $(this).parent().attr("id");
            var clickedIdLetter = clickedId[0]
            var filteredProducts = [];

            if (clickedIdLetter === "T") {
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
                console.log("filteredProductId: ", filteredProductId);
                for (var m = 0; m < products.length; m++) {
                	console.log("products[m].id", products[m].id);
                    if (products[m].id == filteredProductId) {
                    	filteredProducts.push(products[m]);
                    }
                        writeProductCardsToDOM(filteredProducts);
                }
            }
        });
    });