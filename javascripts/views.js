$(document).ready(function() {

	$(document).click(function() {
		console.log("doc click");
		addEventListeners();
	});

    addEventListeners = function() {
        $("#Categories").on("change", function() {
            console.log("Categories changed");
            $("#0").hide();
            // console.log();
        });
    };

});