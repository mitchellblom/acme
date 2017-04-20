$(document).ready(function() {

    $("body").on("click", ".dynamicOption", function() {
        $(".productCard").hide();
        var test = this.innerHTML;

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

        var typeID = $(this).parent().attr("id");
        var typeNumber = typeID.split("Types-");
        var filteredType = typeNumber[1];
        console.log("Type Number: ", typeNumber[1]);
        for (var l = 0; l < products.length; l++) {
            if (products[l].type == typeNumber[1]) {
                // console.log("found match: ", products[l]);
                products[l].show();
            }
        }
    });

});