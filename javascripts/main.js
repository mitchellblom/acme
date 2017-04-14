console.log("testing again for new branch");

$(document).ready(function(){

    var dinosaurs = [];

    function writeDOM(){
        var domString = "";
        for(var i=0; i<dinosaurs.length; i++){
            domString += `<h1>${dinosaurs[i].name}</h1>`;
        }
        $("#promises").append(domString);
    }

//iife, like a getter
var firstDinosaurJSON = function(){
	return new Promise(function(resolve, reject){
		$.ajax("./db/products.json").done(function(data1){
			resolve(data1.products);
		}).fail(function(error1){
			reject(error1);
		});
	});
};

var secondDinosaurJSON = function(){
	return new Promise(function(resolve, reject){
		$.ajax("./db/categories.json").done(function(data2){
			resolve(data2.categories);
		}).fail(function(error2){
			reject(error2);
		});
	});
};

var thirdDinosaurJSON = function(){
	return new Promise(function(resolve, reject){
		$.ajax("./db/types.json").done(function(data3){
			resolve(data3.types);
		}).fail(function(error3){
			reject(error3);
		});
	});
};

//main.js
// firstDinosaurJSON().then(function(jsonData1){
// 	console.log(jsonData1);
// 	dinosaurs = jsonData1;
// 	writeDOM();
// }).catch(function(jsonDataFail1){
// 	console.log(jsonDataFail1);
// });

// secondDinosaurJSON().then(function(jsonData2){
// 	console.log(jsonData1);
// 	dinosaurs = jsonData1;
// 	writeDOM();
// }).catch(function(jsonDataFail1){
// 	console.log(jsonDataFail1);
// });

// thirdDinosaurJSON().then(function(jsonData1){
// 	console.log(jsonData1);
// 	dinosaurs = jsonData1;
// 	writeDOM();
// }).catch(function(jsonDataFail1){
// 	console.log(jsonDataFail1);
// });

	Promise.all([firstDinosaurJSON(), secondDinosaurJSON(), thirdDinosaurJSON()])
		.then(function(resultz){
			console.log("resultz", resultz);
			resultz.forEach(function(ajaxCalls){
				ajaxCalls.forEach(function(dino){
					dinosaurs.push(dino);
				});
			});
			writeDOM();
		});
});