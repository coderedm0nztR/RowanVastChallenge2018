const CONTENT = '.content';	//the content tag that we will be targetting for d3
var VALTYPE = 'total';

$(document).ready(function(){
	//initially start the program with Methylosmoline as the selected measure
	csv('Methylosmoline');


	//the selected index changed event for the measure dropdown
	$('#chemicaltype').change(function(){
		csv($( this ).val());
	});


	//the selected index changed event for the value type dropdown
	$('#valuetype').change(function(){
		VALTYPE = $( this ).val();
		csv($('#chemicaltype').val());
	});

});


 //Read the chemicals csv and build an svg layer to visualize the Measures for Chai, Kohsoom, and Somchair factories
 function csv(measure){

 	var width = 740;
	var height = 580;
	$('.content').html('');
	var dataset; 
	var t = d3.csv('readings-csv-csv.csv', function(d){
		dataset = d.map(function(data){
			return {location: data['location'], value: parseFloat(data['value']), measure: data['measure'], year: parseInt(data['year'])};
		});

		//filter out only items with the given measure and items from 3 locations
		dataset = dataset.filter(function(x) { return x.measure == measure;});
		dataset = dataset.filter(function(x) { 
			return (x.location == 'Chai' || x.location == 'Kohsoom' || x.location == 'Somchair' || x.location == 'Boonsri' || x.location == 'Kannika') 
			&& x.year > 2008
		});

		console.log(dataset);

		var svg = d3.select('.content')
			.append('svg')
			.attr('width', width)
			.attr('height', height);


		var defs = svg.append('pattern')
			.attr('id', 'dumpmap')
			.attr('height', '100%')
			.attr('width', '100%')
			.attr('patternContentUnits', 'objectBoundingBox')
			.append('image')
			.attr('height', 1)
			.attr('width', 1)
			.attr('preserveAspectRatio', 'xMinYMax meet')
			.attr('xlink:href', 'Waterways.jpg');


		svg.append('rect')
			.attr('fill', 'url(#dumpmap)')
			.attr('height', '100%')
			.attr('width', '100%');

		var location1 = getDataSet(dataset, 'Kohsoom');
		var location2 = getDataSet(dataset, 'Chai');
		var location3 = getDataSet(dataset, 'Somchair');
		var location4 = getDataSet(dataset, 'Boonsri');
		var location5 = getDataSet(dataset, 'Kannika');



		//-----------------------------------------------------//	
		//BEGIN LOCATION 1 GROUP-------------------------------//
		//-----------------------------------------------------//

		var g1 = svg.selectAll('.data1').data(location1)
			.enter()
			.append('g').attr('class', 'data1');
				
		g1.append('rect').attr("class", "bar")
			.attr('x',  function(d, i){
				return 160 + (25 * i) + (5 * i);
			})
			//.attr('y', '170')
			.attr('y', function(d){
				//console.log(d);
				var h = (((d.value / d.total) * 2));
				if (h > 100){
					h = 100;
				}
				return 210 + 30 - h;
			}) 
			.attr('width', '25')
			.attr('stroke', 'grey')
			.attr("height", function(d) {
				var barHeight = (d.value / d.total) * 2;
				if (barHeight > 100)
				{
					barHeight = 100;
				}
				return barHeight + "";
			})
			.attr('fill', function(d){
					if ((d.value / d.total) * 2 > 100){
						return 'pink';
					}
					else{
						return 'lightgreen';
					}
				});//.attr('fill', function(d){
		g1.append('text')
			.style("fill", "black")
			.style('font-weight', 'bold')
		    .text(function(d) {
			    console.log(d['value']);
			    return Number(d['value'].toFixed(1));
			})
		    .attr('x',  function(d, i){
				return 160 + (25 * i) + (5 * i);
			})
			//.attr('y', '170')
			.attr('y', function(d){
				//console.log(d);
				var h = (((d.value / d.total) * 2));
				if (h > 100){
					h = 100;
				}
				return 210 + 25 - h;
			}) ;


		g1.append('text').style("fill", "black")
		    .text(function(d) {
		      	console.log(d['year']);
			    return Number(d['year']);
			})
			.style('font-weight', 'bold')
			.attr('x',  function(d, i){
				return 160 + (25 * i)  + (5 * i);
			})
			//.attr('y', '170')
			.attr('y', function(d){
				//console.log(d);
				var h = (((d.value / d.total) * 2));
				if (h > 100){
					h = 100;
				}
				return 210 + 45;
			}) ;

		g1.append('text')
			.style('fill', 'black')
			.style('font-weight', 'bold')
			.text('Somchair')
			.attr('y', '275')
			.attr('font-size', '15')
			.attr('x', '190');

		//-----------------------------------------------------//	
		//END LOCATION 1 GROUP---------------------------------//
		//-----------------------------------------------------//


		//..............................................................


		//-----------------------------------------------------//	
		//BEGIN LOCATION 2 GROUP-------------------------------//
		//-----------------------------------------------------//

		var g2 = svg.selectAll('.data2')
			.data(location2)
			.enter()
			.append('g').attr('class', 'data2');
					


		g2.append('rect')
			.attr("class", "bar")
			.attr('x',  function(d, i){
				return 390 + (25 * i)  + (5 * i);
				})
				//.attr('y', '170')
			.attr('y', function(d){
				//console.log(d);
				var h = (((d.value / d.total) * 2));
				if (h > 100){
					h = 100;
				}
				return 220 + 30 - h;
			}) 
			.attr('width', '25')
			.attr('stroke', 'grey')
			.attr("height", function(d) {
				var barHeight = (d.value / d.total) * 2;
				if (barHeight > 100)
				{
					barHeight = 100;
				}
				return barHeight + "";
			}).attr('fill', function(d){
				if ((d.value / d.total) * 2 > 100){
					return 'pink';
				}
				else{
					return 'lightgreen';
				}
		});//.attr('fill', function(d){

		g2.append('text')
			.style("fill", "black")
			.style('font-weight', 'bold')
		    .text(function(d) {
		      	console.log(d['value']);
		        return Number(d['value'].toFixed(1));
		    })
		    .attr('x',  function(d, i){
				return 390 + (25 * i) + (5 * i);
			})
			//.attr('y', '170')
			.attr('y', function(d){
			//console.log(d);
				var h = (((d.value / d.total) * 2));
				if (h > 100){
					h = 100;
				}
				return 220 + 25 - h;
			}) ;


		g2.append('text')
			.style('font-weight', 'bold')
			.style("fill", "black")
		    .text(function(d) {
		    	console.log(d['year']);
			    return Number(d['year']);
			})
			.attr('x',  function(d, i){
				return 390 + (25 * i)  + (5 * i);
			})
			.style('font-weight', 'bold')
			//.attr('y', '170')
			.attr('y', function(d){
				//console.log(d);
				var h = (((d.value / d.total) * 2));
				if (h > 100) {
					h = 100;
				}
				return 220 + 45;
			}) ;

		g2.append('text')
			.style('fill', 'black')
			.style('font-weight', 'bold')
			.text('Chai')
			.attr('y', '290')
			.attr('font-size', '15')
			.attr('x', '420');


		//-----------------------------------------------------//	
		//END LOCATION 2 GROUP---------------------------------//
		//-----------------------------------------------------//


		//..............................................................


		//-----------------------------------------------------//	
		//BEGIN LOCATION 3 GROUP-------------------------------//
		//-----------------------------------------------------//

		var g3 = svg.selectAll('.data3')
			.data(location3)
			.enter()
			.append('g').attr('class', 'data3');
				


		g3.append('rect')
			.attr("class", "bar")
			.attr('x',  function(d, i){
				return 500 + (25 * i)  + (5 * i);
			})
			//.attr('y', '170')
			.attr('y', function(d){
				//console.log(d);
				var h = (((d.value / d.total) * 2));
				if (h > 100){
					h = 100;
				}
				return 130 + 30 - h;
			}) 
			.attr('width', '25')
			.attr('stroke', 'grey')
			.attr("height", function(d) {
				var barHeight = (d.value / d.total) * 2;
				if (barHeight > 100)
				{
					barHeight = 100;
				}
				return barHeight + "";
			})
			.attr('fill', function(d){
				if ((d.value / d.total) * 2 > 100){
					return 'pink';
				}
				else{
					return 'lightgreen';
				}
			});//.attr('fill', function(d){
				
		g3.append('text')
			.style("fill", "black")
			.style('font-weight', 'bold')
		    .text(function(d) {
		      	console.log(d['value']);
		        return Number(d['value'].toFixed(1));
		    })
		    .attr('x',  function(d, i){
					return 500 + (25 * i) + (5 * i);
			})
			//.attr('y', '170')
			.attr('y', function(d){
				//console.log(d);
				var h = (((d.value / d.total) * 2));
				if (h > 100){
					h = 100;
				}
				return 130 + 25 - h;
			}) ;

		g3.append('text')
			.style("fill", "black")
			.style('font-weight', 'bold')
		    .text(function(d) {
		      	console.log(d['year']);
			    return Number(d['year']);
			    })
		    .attr('x',  function(d, i){
					return 500 + (25 * i)  + (5 * i);
			})
			//.attr('y', '170')
			.attr('y', function(d){
				//console.log(d);
				var h = (((d.value / d.total) * 2));
				if (h > 100){
					h = 100;
				}
				return 130 + 45;
			}) ;

		g3.append('text')
			.style('fill', 'black')
			.style('font-weight', 'bold')
			.text('Kohsoom')
			.attr('y', '190')
			.attr('font-size', '15')
			.attr('x', '540');
		


		//-----------------------------------------------------//	
		//END LOCATION 3 GROUP---------------------------------//
		//-----------------------------------------------------//


		//..............................................................


		//-----------------------------------------------------//	
		//BEGIN LOCATION 4 GROUP-------------------------------//
		//-----------------------------------------------------//

		var g4 = svg.selectAll('.data4')
			.data(location4)
			.enter()
			.append('g').attr('class', 'data4');
				


		g4.append('rect')
			.attr("class", "bar")
			.attr('x',  function(d, i){
				return 380 + (25 * i)  + (5 * i);
			})
			//.attr('y', '170')
			.attr('y', function(d){
				//console.log(d);
				var h = (((d.value / d.total) * 2));
				if (h > 100){
					h = 100;
				}
				return 60 + 30 - h;
			}) 
			.attr('width', '25')
			.attr('stroke', 'grey')
			.attr("height", function(d) {
				var barHeight = (d.value / d.total) * 2;
				if (barHeight > 100)
				{
					barHeight = 100;
				}
				return barHeight + "";
			})
			.attr('fill', function(d){
				if ((d.value / d.total) * 2 > 100){
					return 'pink';
				}
				else{
					return 'lightgreen';
				}
			});//.attr('fill', function(d){
				
		g4.append('text')
			.style("fill", "black")
			.style('font-weight', 'bold')
		    .text(function(d) {
		      	console.log(d['value']);
		        return Number(d['value'].toFixed(1));
		    })
		    .attr('x',  function(d, i){
					return 380 + (25 * i) + (5 * i);
			})
			//.attr('y', '170')
			.attr('y', function(d){
				//console.log(d);
				var h = (((d.value / d.total) * 2));
				if (h > 100){
					h = 100;
				}
				return 60 + 25 - h;
			}) ;

		g4.append('text')
			.style("fill", "black")
			.style('font-weight', 'bold')
		    .text(function(d) {
		      	console.log(d['year']);
			    return Number(d['year']);
			    })
		    .attr('x',  function(d, i){
					return 380 + (25 * i)  + (5 * i);
			})
			//.attr('y', '170')
			.attr('y', function(d){
				//console.log(d);
				var h = (((d.value / d.total) * 2));
				if (h > 100){
					h = 100;
				}
				return 60 + 45;
			}) ;

		g4.append('text')
			.style('fill', 'black')
			.style('font-weight', 'bold')
			.text('Boonsri')
			.attr('y', '120')
			.attr('font-size', '15')
			.attr('x', '380');



		//-----------------------------------------------------//	
		//END LOCATION 4 GROUP---------------------------------//
		//-----------------------------------------------------//

	

		//..............................................................


		//-----------------------------------------------------//	
		//BEGIN LOCATION 5 GROUP-------------------------------//
		//-----------------------------------------------------//

		var g5 = svg.selectAll('.data5')
			.data(location5)
			.enter()
			.append('g').attr('class', 'data5');
				


		g5.append('rect')
			.attr("class", "bar")
			.attr('x',  function(d, i){
				return 420 + (25 * i)  + (5 * i);
			})
			//.attr('y', '170')
			.attr('y', function(d){
				//console.log(d);
				var h = (((d.value / d.total) * 2));
				if (h > 100){
					h = 100;
				}
				return 360 + 30 - h;
			}) 
			.attr('width', '25')
			.attr('stroke', 'grey')
			.attr("height", function(d) {
				var barHeight = (d.value / d.total) * 2;
				if (barHeight > 100)
				{
					barHeight = 100;
				}
				return barHeight + "";
			})
			.attr('fill', function(d){
				if ((d.value / d.total) * 2 > 100){
					return 'pink';
				}
				else{
					return 'lightgreen';
				}
			});//.attr('fill', function(d){
				
		g5.append('text')
			.style("fill", "black")
			.style('font-weight', 'bold')
		    .text(function(d) {
		      	console.log(d['value']);
		        return Number(d['value'].toFixed(1));
		    })
		    .attr('x',  function(d, i){
					return 420 + (25 * i) + (5 * i);
			})
			//.attr('y', '170')
			.attr('y', function(d){
				//console.log(d);
				var h = (((d.value / d.total) * 2));
				if (h > 100){
					h = 100;
				}
				return 360 + 25 - h;
			}) ;

		g5.append('text')
			.style("fill", "black")
			.style('font-weight', 'bold')
		    .text(function(d) {
		      	console.log(d['year']);
			    return Number(d['year']);
			    })
		    .attr('x',  function(d, i){
					return 420 + (25 * i)  + (5 * i);
			})
			//.attr('y', '170')
			.attr('y', function(d){
				//console.log(d);
				var h = (((d.value / d.total) * 2));
				if (h > 100){
					h = 100;
				}
				return 360 + 45;
			}) ;

		g5.append('text')
			.style('fill', 'black')
			.style('font-weight', 'bold')
			.text('Kannika')
			.attr('y', '425')
			.attr('font-size', '15')
			.attr('x', '450');

		

		//-----------------------------------------------------//	
		//END LOCATION 5 GROUP---------------------------------//
		//-----------------------------------------------------//

		});




}




function getDataSet(wholedata, location){

	//filter all data from the given dataset that only contains the given location
	var dsFromLoc = wholedata.filter(function(x) {return x.location == location}); 

	//init empty set for storing unique years
	var set = new Set([]);
	for(var i = 0; i < dsFromLoc.length; i++){
		var y = dsFromLoc[i].year;
		set.add(y);
	}

	//init empty map from set to reference values at indexes
	var yearMap = Array.from(set);
	console.log(yearMap);
	console.log(set);

	//init empty json storage of value and total based on each year from set
	var dataset = [];
	for(var i = 0; i < yearMap.length; i++){
		console.log(yearMap[i]);
		dataset.push({year: yearMap[i], value: 0.0, total: 0});
	}
		
	console.log(dataset);
		
	for(var i = 0; i < dsFromLoc.length; i++){
		for (var j = 0; j < yearMap.length; j++){
			
			if (dsFromLoc[i].year == yearMap[j]){
				dataset[j].value += dsFromLoc[i].value;
				dataset[j].total = dataset[j].total + 1;
			}
		}
		console.log(dataset);
	}

	if (VALTYPE == 'Average') {
		for (var i = 0; i < dataset.length; i++) {
			if (dataset[i].value != 0){
				dataset[i].value = dataset[i].value / dataset[i].total;
			}
		}
	}

	return dataset;
}





