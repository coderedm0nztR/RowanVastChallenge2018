const CONTENT = '.content';	//the content tag that we will be targetting for d3


$(document).ready(function(){
	//init();
	csv('Methylosmoline');



	$('select').change(function(){
		csv($( this ).val());
	});

});



 function csv(location){

 	var width = 640;
	var height = 480;
	$('.content').html('');
	var dataset; 
	var t = d3.csv('readings-csv-csv.csv', function(d){
		dataset = d.map(function(data){
			//console.log([data['location'], data['value']]);
			return {location: data['location'], value: parseFloat(data['value']), measure: data['measure'], year: parseInt(data['year'])};



			//ataset = dataset.filter(filter);

			//console.log(dataset);

		});
		dataset = dataset.filter(function(x) { return x.measure == location;});
		dataset = dataset.filter(function(x) { return (x.location == 'Chai' || x.location == 'Kohsoom' || x.location == 'Somchair') && x.year > 2008});

		console.log(dataset);


		var svg = d3.select('.content')
		.append('svg')
		.attr('width', width)
		.attr('height', height);

		var defs = svg.append('pattern')
			.attr('id', 'krab')
			.attr('height', '100%')
			.attr('width', '100%')
			.attr('patternContentUnits', 'objectBoundingBox')
			.append('image')
			.attr('height', 1)
			.attr('width', 1)
			.attr('preserveAspectRatio', 'none')
			.attr('xlink:href', 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/Mr._Krabs.svg/220px-Mr._Krabs.svg.png');

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
				

				var g1 = svg.selectAll('.data1').data(location1)
				.enter()
				.append('g').attr('class', 'data1');
				


				g1.append('rect').attr("class", "bar")
				.attr('x',  function(d, i){
					return 110 + (25 * i) + (5 * i);
				})
				//.attr('y', '170')
				.attr('y', function(d){
					//console.log(d);
					var h = (((d.value / d.total) * 2));
					if (h > 100){
						h = 100;
					}
					return 170 + 30 - h;
				}) 
				.attr('width', '25')
				.attr("height", function(d) {
					var barHeight = (d.value / d.total) * 2;
					if (barHeight > 100)
					{
						barHeight = 100;
					}
					return barHeight + "";
				}).attr('fill', 'pink');//.attr('fill', function(d){

					g1.append('text').style("fill", "black").style('font-weight', 'bold')
				      .text(function(d) {
				      	console.log(d['value']);
				        return Number(d['value'].toFixed(1));
				      })
				      .attr('x',  function(d, i){
									return 110 + (25 * i) + (5 * i);
								})
				//.attr('y', '170')
				.attr('y', function(d){
					//console.log(d);
					var h = (((d.value / d.total) * 2));
					if (h > 100){
						h = 100;
					}
					return 170 + 35 - h;
				}) ;


				g1.append('text').style("fill", "black")
			      .text(function(d) {
			      	console.log(d['year']);
			        return Number(d['year']);
			      }).attr('x',  function(d, i){
								return 110 + (25 * i)  + (5 * i);
				})
				//.attr('y', '170')
				.attr('y', function(d){
					//console.log(d);
					var h = (((d.value / d.total) * 2));
					if (h > 100){
						h = 100;
					}
					return 170 + 45;
				}) ;

var g2 = svg.selectAll('.data2').data(location2)
				.enter()
				.append('g').attr('class', 'data2');
				


				g2.append('rect').attr("class", "bar")
				.attr('x',  function(d, i){
					return 300 + (25 * i)  + (5 * i);
				})
				//.attr('y', '170')
				.attr('y', function(d){
					//console.log(d);
					var h = (((d.value / d.total) * 2));
					if (h > 100){
						h = 100;
					}
					return 300 + 30 - h;
				}) 
				.attr('width', '25')
				.attr("height", function(d) {
					var barHeight = (d.value / d.total) * 2;
					if (barHeight > 100)
					{
						barHeight = 100;
					}
					return barHeight + "";
				}).attr('fill', 'pink');//.attr('fill', function(d){

					g2.append('text').style("fill", "black").style('font-weight', 'bold')
				      .text(function(d) {
				      	console.log(d['value']);
				        return Number(d['value'].toFixed(1));
				      })
				      .attr('x',  function(d, i){
									return 300 + (25 * i) + (5 * i);
								})
				//.attr('y', '170')
				.attr('y', function(d){
					//console.log(d);
					var h = (((d.value / d.total) * 2));
					if (h > 100){
						h = 100;
					}
					return 300 + 35 - h;
				}) ;


				g2.append('text').style("fill", "black")
			      .text(function(d) {
			      	console.log(d['year']);
			        return Number(d['year']);
			      }).attr('x',  function(d, i){
								return 300 + (25 * i)  + (5 * i);
				})
				//.attr('y', '170')
				.attr('y', function(d){
					//console.log(d);
					var h = (((d.value / d.total) * 2));
					if (h > 100){
						h = 100;
					}
					return 300 + 45;
				}) ;



				var g3 = svg.selectAll('.data3').data(location3)
				.enter()
				.append('g').attr('class', 'data3');
				


				g3.append('rect').attr("class", "bar")
				.attr('x',  function(d, i){
					return 510 + (25 * i)  + (5 * i);
				})
				//.attr('y', '170')
				.attr('y', function(d){
					//console.log(d);
					var h = (((d.value / d.total) * 2));
					if (h > 100){
						h = 100;
					}
					return 140 + 30 - h;
				}) 
				.attr('width', '25')
				.attr("height", function(d) {
					var barHeight = (d.value / d.total) * 2;
					if (barHeight > 100)
					{
						barHeight = 100;
					}
					return barHeight + "";
				}).attr('fill', 'pink');//.attr('fill', function(d){

				g3.append('text').style("fill", "black").style('font-weight', 'bold')
			      .text(function(d) {
			      	console.log(d['value']);
			        return Number(d['value'].toFixed(1));
			      }).attr('x',  function(d, i){
								return 510 + (25 * i) + (5 * i);
				})
				//.attr('y', '170')
				.attr('y', function(d){
					//console.log(d);
					var h = (((d.value / d.total) * 2));
					if (h > 100){
						h = 100;
					}
					return 140 + 35 - h;
				}) ;

				g3.append('text').style("fill", "black")
			      .text(function(d) {
			      	console.log(d['year']);
			        return Number(d['year']);
			      }).attr('x',  function(d, i){
								return 510 + (25 * i)  + (5 * i);
				})
				//.attr('y', '170')
				.attr('y', function(d){
					//console.log(d);
					var h = (((d.value / d.total) * 2));
					if (h > 100){
						h = 100;
					}
					return 140 + 45;
				}) ;

			


				//Create scale functions
			
					//if (d > 20){
				//		return 'red';
			//		}
			//		else{
			//			return 'green';
			//		}
			//	});


	});


	
/*
	var dataset2 = [];                        //Initialize empty array
	for (var i = 0; i < 3; i++) {           //Loop 25 times
	    var newNumber = Math.random() * 30;  //New random number (0-30)
	    dataset2.push(newNumber);             //Add new number to array
	}

	var dataset3 = [];                        //Initialize empty array
	for (var i = 0; i < 3; i++) {           //Loop 25 times
	    var newNumber = Math.random() * 30;  //New random number (0-30)
	    dataset3.push(newNumber);             //Add new number to array
	}

	var svg = d3.select('.content')
		.append('svg')
		.attr('width', width)
		.attr('height', height);

	var defs = svg.append('pattern')
		.attr('id', 'krab')
		.attr('height', '100%')
		.attr('width', '100%')
		.attr('patternContentUnits', 'objectBoundingBox')
		.append('image')
		.attr('height', 1)
		.attr('width', 1)
		.attr('preserveAspectRatio', 'none')
		.attr('xlink:href', 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/Mr._Krabs.svg/220px-Mr._Krabs.svg.png');

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

	svg.append('circle')
		.attr('fill', 'url(#krab)')
		.attr('height', '100')
		.attr('r', '50')
		.attr('cx', '140')
		.attr('cy', '170')
		.attr('width', '100');
		
				svg.selectAll('.data1').data(dataset1)
				.enter()
				.append('rect')
				.attr('class', 'data1')
				.attr("class", "bar")
				.attr('x',  function(d, i){
					return 110 + (25 * i);
				})
				//.attr('y', '170')
				.attr('y', function(d){
					//console.log(d);
					return 170 + (30 - (d * 5));
				}) 
				.attr('width', '25')
				.attr("height", function(d) {
					var barHeight = d * 5;
					return barHeight + "";
				}).attr('fill', function(d){
					if (d > 20){
						return 'red';
					}
					else{
						return 'green';
					}
				});

	svg.append('circle')
		.attr('fill', 'url(#krab)')
		.attr('height', '100')
		.attr('r', '50')
		.attr('cx', '540')
		.attr('cy', '140')
		.attr('width', '100');

	
	svg.selectAll('.data2').data(dataset1)
				.enter()
				.append('rect')
				.attr("class", "bar")
				.attr('class', 'data2')
				.attr('x',  function(d, i){
					return 510 + (25 * i);
				})
				//.attr('y', '140')
				.attr('y', function(d){
					return 140 + (30 - (d * 5));
				})
				.attr('width', '25')
				.attr("height", function(d) {
					var barHeight = d * 5;
					return barHeight + "";
				}).attr('fill', function(d){
					if (d > 20){
						return 'red';
					}
					else{
						return 'green';
					}
				});
		//svg.append(rect1);


	svg.append('circle')
		.attr('fill', 'url(#krab)')
		.attr('height', '100')
		.attr('r', '50')
		.attr('cx', '340')
		.attr('cy', '340')
		.attr('width', '100');

	
	svg.selectAll('.data3').data(dataset3)
				.enter()
				.append('rect')
				.attr("class", "bar")
				.attr('class', 'data2')
				.attr('x',  function(d, i){
					return 300 + (25 * i);
				})
				//.attr('y', '140')
				.attr('y', function(d){
					return 300 + (30 - (d * 5));
				})
				.attr('width', '25')
				.attr("height", function(d) {
					var barHeight = d * 5;
					return barHeight + "";
				}).attr('fill', function(d){
					if (d > 20){
						return 'red';
					}
					else{
						return 'green';
					}
				});


	//console.log(dataset);
}*/

}




function getDataSet(dataset, location){
	var adataset1 = dataset.filter(function(x) {return x.location == location});  
		                      //Initialize empty array
		var dataset1 = [];
		var set = new Set([]);
		for(var i = 0; i < adataset1.length; i++){
			var y = adataset1[i].year;
			set.add(y);
		}

		var tt = Array.from(set);
		console.log(tt);
		console.log(set);
		var temp = [];
		for(var i = 0; i < tt.length; i++){
			console.log(tt[i]);
			temp.push({year: tt[i], value: 0.0, total: 0});
		}
		
		console.log(temp);
		

		for(var i = 0; i < adataset1.length; i++){
			for (var j = 0; j < tt.length; j++){
				
				if (adataset1[i].year == tt[j]){
					temp[j].value += adataset1[i].value;
					temp[j].total = temp[j].total + 1;
					
				}
			}
			console.log(temp);
		}

		return temp;
}
























function init(){
	var width = 640;
	var height = 480;

	//var image = d3.select('.content')
	//	.append('img')
	//	.attr('id', 'krab')
	//	.attr('src', 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/Mr._Krabs.svg/220px-Mr._Krabs.svg.png');

	var dataset1 = [];                        //Initialize empty array
	for (var i = 0; i < 3; i++) {           //Loop 25 times
	    var newNumber = Math.random() * 30;  //New random number (0-30)
	    dataset1.push(newNumber);             //Add new number to array
	}

	var dataset2 = [];                        //Initialize empty array
	for (var i = 0; i < 3; i++) {           //Loop 25 times
	    var newNumber = Math.random() * 30;  //New random number (0-30)
	    dataset2.push(newNumber);             //Add new number to array
	}

	var dataset3 = [];                        //Initialize empty array
	for (var i = 0; i < 3; i++) {           //Loop 25 times
	    var newNumber = Math.random() * 30;  //New random number (0-30)
	    dataset3.push(newNumber);             //Add new number to array
	}

	var svg = d3.select('.content')
		.append('svg')
		.attr('width', width)
		.attr('height', height);

	var defs = svg.append('pattern')
		.attr('id', 'krab')
		.attr('height', '100%')
		.attr('width', '100%')
		.attr('patternContentUnits', 'objectBoundingBox')
		.append('image')
		.attr('height', 1)
		.attr('width', 1)
		.attr('preserveAspectRatio', 'none')
		.attr('xlink:href', 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/Mr._Krabs.svg/220px-Mr._Krabs.svg.png');

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

	svg.append('circle')
		.attr('fill', 'url(#krab)')
		.attr('height', '100')
		.attr('r', '50')
		.attr('cx', '140')
		.attr('cy', '170')
		.attr('width', '100');
		
				svg.selectAll('.data1').data(dataset1)
				.enter()
				.append('rect')
				.attr('class', 'data1')
				.attr("class", "bar")
				.attr('x',  function(d, i){
					return 110 + (25 * i);
				})
				//.attr('y', '170')
				.attr('y', function(d){
					//console.log(d);
					return 170 + (30 - (d * 5));
				}) 
				.attr('width', '25')
				.attr("height", function(d) {
					var barHeight = d * 5;
					return barHeight + "";
				}).attr('fill', function(d){
					if (d > 20){
						return 'red';
					}
					else{
						return 'green';
					}
				});

	svg.append('circle')
		.attr('fill', 'url(#krab)')
		.attr('height', '100')
		.attr('r', '50')
		.attr('cx', '540')
		.attr('cy', '140')
		.attr('width', '100');

	
	svg.selectAll('.data2').data(dataset1)
				.enter()
				.append('rect')
				.attr("class", "bar")
				.attr('class', 'data2')
				.attr('x',  function(d, i){
					return 510 + (25 * i);
				})
				//.attr('y', '140')
				.attr('y', function(d){
					return 140 + (30 - (d * 5));
				})
				.attr('width', '25')
				.attr("height", function(d) {
					var barHeight = d * 5;
					return barHeight + "";
				}).attr('fill', function(d){
					if (d > 20){
						return 'red';
					}
					else{
						return 'green';
					}
				});
		//svg.append(rect1);


	svg.append('circle')
		.attr('fill', 'url(#krab)')
		.attr('height', '100')
		.attr('r', '50')
		.attr('cx', '340')
		.attr('cy', '340')
		.attr('width', '100');

	
	svg.selectAll('.data3').data(dataset3)
				.enter()
				.append('rect')
				.attr("class", "bar")
				.attr('class', 'data2')
				.attr('x',  function(d, i){
					return 300 + (25 * i);
				})
				//.attr('y', '140')
				.attr('y', function(d){
					return 300 + (30 - (d * 5));
				})
				.attr('width', '25')
				.attr("height", function(d) {
					var barHeight = d * 5;
					return barHeight + "";
				}).attr('fill', function(d){
					if (d > 20){
						return 'red';
					}
					else{
						return 'green';
					}
				});
		//svg.append(rect1);


}

function demog () {
	// Setup svg using Bostock's margin convention

	var margin = {top: 20, right: 160, bottom: 35, left: 30};

	var width = 960 - margin.left - margin.right,
	    height = 500 - margin.top - margin.bottom;

	var svg = d3.select("body")
	  .append("svg")
	  .attr("width", width + margin.left + margin.right)
	  .attr("height", height + margin.top + margin.bottom)
	  .append("g")
	  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


	/* Data in strings like it would be if imported from a csv */

	var data = [
	  { year: "2006", redDelicious: "10", mcintosh: "15", oranges: "9", pears: "6" },
	  { year: "2007", redDelicious: "12", mcintosh: "18", oranges: "9", pears: "4" },
	  { year: "2008", redDelicious: "05", mcintosh: "20", oranges: "8", pears: "2" },
	  { year: "2009", redDelicious: "01", mcintosh: "15", oranges: "5", pears: "4" },
	  { year: "2010", redDelicious: "02", mcintosh: "10", oranges: "4", pears: "2" },
	  { year: "2011", redDelicious: "03", mcintosh: "12", oranges: "6", pears: "3" },
	  { year: "2012", redDelicious: "04", mcintosh: "15", oranges: "8", pears: "1" },
	  { year: "2013", redDelicious: "06", mcintosh: "11", oranges: "9", pears: "4" },
	  { year: "2014", redDelicious: "10", mcintosh: "13", oranges: "9", pears: "5" },
	  { year: "2015", redDelicious: "16", mcintosh: "19", oranges: "6", pears: "9" },
	  { year: "2016", redDelicious: "19", mcintosh: "17", oranges: "5", pears: "7" },
	];

	var parse = d3.time.format("%Y").parse;


	// Transpose the data into layers
	var dataset = d3.layout.stack()(["redDelicious", "mcintosh", "oranges", "pears"].map(function(fruit) {
	  return data.map(function(d) {
	    return {x: parse(d.year), y: +d[fruit]};
	  });
	}));


	// Set x, y and colors
	var x = d3.scale.ordinal()
	  .domain(dataset[0].map(function(d) { return d.x; }))
	  .rangeRoundBands([10, width-10], 0.02);

	var y = d3.scale.linear()
	  .domain([0, d3.max(dataset, function(d) {  return d3.max(d, function(d) { return d.y0 + d.y; });  })])
	  .range([height, 0]);

	var colors = ["b33040", "#d25c4d", "#f2b447", "#d9d574"];


	// Define and draw axes
	var yAxis = d3.svg.axis()
	  .scale(y)
	  .orient("left")
	  .ticks(5)
	  .tickSize(-width, 0, 0)
	  .tickFormat( function(d) { return d } );

	var xAxis = d3.svg.axis()
	  .scale(x)
	  .orient("bottom")
	  .tickFormat(d3.time.format("%Y"));

	svg.append("g")
	  .attr("class", "y axis")
	  .call(yAxis);

	svg.append("g")
	  .attr("class", "x axis")
	  .attr("transform", "translate(0," + height + ")")
	  .call(xAxis);


	// Create groups for each series, rects for each segment 
	var groups = svg.selectAll("g.cost")
	  .data(dataset)
	  .enter().append("g")
	  .attr("class", "cost")
	  .style("fill", function(d, i) { return colors[i]; });

	var rect = groups.selectAll("rect")
	  .data(function(d) { return d; })
	  .enter()
	  .append("rect")
	  .attr("x", function(d) { return x(d.x); })
	  .attr("y", function(d) { return y(d.y0 + d.y); })
	  .attr("height", function(d) { return y(d.y0) - y(d.y0 + d.y); })
	  .attr("width", x.rangeBand())
	  .on("mouseover", function() { tooltip.style("display", null); })
	  .on("mouseout", function() { tooltip.style("display", "none"); })
	  .on("mousemove", function(d) {
	    var xPosition = d3.mouse(this)[0] - 15;
	    var yPosition = d3.mouse(this)[1] - 25;
	    tooltip.attr("transform", "translate(" + xPosition + "," + yPosition + ")");
	    tooltip.select("text").text(d.y);
	  });


	// Draw legend
	var legend = svg.selectAll(".legend")
	  .data(colors)
	  .enter().append("g")
	  .attr("class", "legend")
	  .attr("transform", function(d, i) { return "translate(30," + i * 19 + ")"; });
	 
	legend.append("rect")
	  .attr("x", width - 18)
	  .attr("width", 18)
	  .attr("height", 18)
	  .style("fill", function(d, i) {return colors.slice().reverse()[i];});
	 
	legend.append("text")
	  .attr("x", width + 5)
	  .attr("y", 9)
	  .attr("dy", ".35em")
	  .style("text-anchor", "start")
	  .text(function(d, i) { 
	    switch (i) {
	      case 0: return "Anjou pears";
	      case 1: return "Naval oranges";
	      case 2: return "McIntosh apples";
	      case 3: return "Red Delicious apples";
	    }
	  });


	// Prep the tooltip bits, initial display is hidden
	var tooltip = svg.append("g")
	  .attr("class", "tooltip")
	  .style("display", "none");
	    
	tooltip.append("rect")
	  .attr("width", 30)
	  .attr("height", 20)
	  .attr("fill", "white")
	  .style("opacity", 0.5);

	tooltip.append("text")
	  .attr("x", 15)
	  .attr("dy", "1.2em")
	  .style("text-anchor", "middle")
	  .attr("font-size", "12px")
	  .attr("font-weight", "bold");


}



