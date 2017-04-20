$(document).ready(function() {

    $("body").on("click", ".dynamicOption", function() {
            console.log("this inner: ", this.innerHTML);
            $(".productCard").hide();
            var test = this.innerHTML;
            console.log("test: ", test);

            var rec = [];
            rec.push($(".0"));
            rec.push($(".1"));
            rec.push($(".2"));

            var com = [];
            com.push($(".3"));
            com.push($(".4"));
            com.push($(".5"));

            var mil = [];
            mil.push($(".6"));
            mil.push($(".7"));
            mil.push($(".8"));

            console.log(test);
            if (test === "Recreational") {
                for (var i = 0; i < rec.length; i++) {
                    $(rec[i]).show();
                }
            } else if (test === "Commercial") {
                for (var j = 0; j < com.length; i = j++) {
                    $(com[j]).show();
                }
            } else if (test === "Military")
                for (var k = 0; k < mil.length; k++) {
                    $(mil[k]).show();
                }

            // if (test === "Recreational") {
            //     for (var i = 0; i < rec.length; i++) {
            //         $(rec[i]).show();
            //     }
            // } else if (test === "Commercial") {
            //     for (var j = 0; j < com.length; i = j++) {
            //         $(com[j]).show();
            //     }
            // } else if (test === "Military")
            //     for (var k = 0; k < mil.length; k++) {
            //         $(mil[k]).show();
            //     }

            var typeFilteredProducts = [];

            var typeID = $(this).parent().attr("id");
            console.log("typeID", typeID);
            var typeNumber = typeID.split("Types-");
            console.log("typeNumber[1]", typeNumber[1]);
			for (var l = 0; l < products.length; l++) {
				console.log("products[l].type: ", products[l].type);
                    if (products[l].type == typeNumber[1]){
                    	console.log("found match: ", products[l].type);
                    	typeFilteredProducts.push(products[l])
                    }
                }
                    	console.log(typeFilteredProducts);
                	}
			);
        // for (var i = 0; i < com.length; i++){
        // 	console.log("com i: ", com[i]);
        // 	console.log($(com[i]));
        // 	$(com[i]).show();
        // }
        // this.childNodes.nodeValue
        // forEach or .class("Recreational");
        // if (test === "Recreational") {
        //     console.log("rec");
        //     $(".productCard").hide();
        //     console.log($(".0"));
        //     $(".0").forEach().show();
        // } else if (test === "Commercial") {
        //     console.log("com");
        //     $(".productCard").hide();
        //     $(".1").show();
        // } else if (test === "Military") {
        //     console.log("mil");
        //     $(".productCard").hide();
        //     $(".2").show();
        // }
    

});