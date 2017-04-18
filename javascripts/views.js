$(document).ready(function() {

	$(document).click(function() {
		console.log("doc click");
		addEventListeners();
	});

    addEventListeners = function() {
        $("#Categories").on("change", function(e) {
            console.log(e.target.value);
            $(".productCard").hide();
            $(".0").show(); // this id needs to be dymanic
        });
    };

});