$(document).ready(function() {

    $("body").on("click", ".dynamicOption", function() {
        $(".productCard").hide();

// Category view filter
        var categoryClicked = this.innerHTML;

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

        if (categoryClicked === "Recreational") {
            for (var i = 0; i < rec.length; i++) {
                $(rec[i]).show();
            }
        } else if (categoryClicked === "Commercial") {
            for (var j = 0; j < com.length; i = j++) {
                $(com[j]).show();
            }
        } else if (categoryClicked === "Military")
            for (var k = 0; k < mil.length; k++) {
                $(mil[k]).show();
            }

// Type view filter
        var typeID = $(this).parent().attr("id");
        var typeNumber = typeID.split("Types-");
        var filteredType = typeNumber[1];
        // console.log("filteredType: ", filteredType);
        for (var l = 0; l < products.length; l++) {
            if (products[l].type == filteredType) {
                console.log("found type match: ", products[l]);
                products[l].show();					// where i want to show the products that match type
            }
        }

// Product view filter
            var specificProductClicked = $(this).html();
            for (var m = 0; m < products.length; m++) {
                if (products[m].name == specificProductClicked) {
                	console.log("found product match: ", products[m]);
                    products[m].show();			// where i want to show the individual product selected
                }
            }
    });
});