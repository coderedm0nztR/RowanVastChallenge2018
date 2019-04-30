
const CONTENT = '.content';	//the content tag that we will be targetting for d3


$(document).ready(function(){
	init();
});


function init(){
	//Width and height
			var w = 640;
			var h = 480;
			var padding = 50;

			var dataset1 = [];

			for (var i = 0; i < 25; i++) {           //Loop 25 times
			    var x = (Math.random() * 100).toFixed(2);  //New random number (0-30)
			   	var y = (Math.random() * 100).toFixed(2);
			   	//var s = Math.random() * 50;
			   	var newNumber = [x, y];
			    dataset1.push(newNumber);             //Add new number to array
			}

			var dataset2 = [];
			for (var i = 0; i < 25; i++) {           //Loop 25 times
			    var x = (Math.random() * 100).toFixed(2);  //New random number (0-30)
			   	var y = (Math.random() * 100).toFixed(2);
			   	//var s = Math.random() * 50;
			   	var newNumber = [x, y];
			    dataset2.push(newNumber);             //Add new number to array
			}
			console.log(dataset2);
			
			var dataset = [
							[5, 20], [480, 90], [250, 50], [100, 33], [330, 95],
							[410, 12], [475, 44], [25, 67], [85, 21], [220, 88],
							[600, 150]
						  ];

			

			var maxX1 = d3.max(dataset1, function(d) {console.log(d[0]); return d[0]; });
			var maxX2 = d3.max(dataset2, function(d) {console.log(d[0]); return d[0]; });
			var maxX = maxX1 > maxX2 ? maxX1 : maxX2;

			var maxY1 = d3.max(dataset1, function(d) {console.log(d[1]); return d[1]; });
			var maxY2 = d3.max(dataset2, function(d) {console.log(d[1]); return d[1]; });
			var maxY = maxY1 > maxY2 ? maxY1 : maxY2;

			var maxS1 = d3.max(dataset1, function(d) {console.log(d[0]); return d[0]; });
			var maxS2 = d3.max(dataset2, function(d) {console.log(d[0]); return d[0]; });
			var maxS = maxY1 > maxX2 ? maxY1 : maxY2;
			console.log(maxX + ', ' + maxY);

			//Create scale functions
			var xScale = d3.scale.linear()
								 .domain([0, maxX])
								 .range([padding, w - padding * 2]);



			var yScale = d3.scale.linear()
								 .domain([0, maxY])
								 .range([h - padding, padding]);

			var sizeScale = d3.scale.linear()
								 .domain([0, maxS])
								 .range([5, 50]);

			//Define X axis
			var xAxis = d3.svg.axis()
							  .scale(xScale)
							  .orient("bottom")
							  .ticks(5);

			//Define Y axis
			var yAxis = d3.svg.axis()
							  .scale(yScale)
							  .orient("left")
							  .ticks(5);

			//Create SVG element
			var svg = d3.select(".content")
						.append("svg")
						.attr("width", w)
						.attr("height", h);

			//Create circles
			var te =  d3.svg.symbol().type('triangle-down');
			te.type = 'triangle-down';
			svg.selectAll(".dataset2ircle")
			   .data(dataset2)
			   .enter()
			   .append("path")
			   .attr('class', 'dataset2circle')
			   .attr('fill', 'red')
			   .attr("transform", function(d) {
			  		 return "translate(" + xScale(d[0]) + "," + yScale(d[1]) + ")"; }
			  	)
    			.attr("d", d3.svg.symbol().type('triangle-down')
					.size(function(d){ return sizeScale(d[0]); }))
			  ;

			//Create labels
			/*
			svg.selectAll(".dataset2label")
			   .data(dataset2)
			   .enter()
			   .append("text")
			   .attr('class', 'dataset2label')
			   .text(function(d) {
			   		return d[0][0] + "," + d[0][1];
			   })
			   .attr("x", function(d) {
			   		return xScale(d[0][0]);
			   })
			   .attr("y", function(d) {
			   		return yScale(d[0][1]);
			   })
			   .attr("font-family", "sans-serif")
			   .attr("font-size", "11px")
			   .attr("fill", "red");
*/

			//Create circles
			svg.selectAll(".dataset1circle")
			   .data(dataset1)
			   .enter()
			   .append("path")
			   .attr('class', 'dataset1circle')
			    .attr("transform", function(d) {
			  		 return "translate(" + xScale(d[0]) + "," + yScale(d[1]) + ")"; }
			  	).attr('fill', 'green')
    			.attr("d", d3.svg.symbol().type('circle')
					.size(function(d){ return sizeScale(d[0]); }))
			  ;


			//Create labels
			/*
			svg.selectAll(".dataset1label")
			   .data(dataset1)
			   .enter()
			   .append("text")
			   .attr('class', 'dataset1label')
			   .text(function(d) {
			   		return d[0][0] + "," + d[0][1];
			   })
			   .attr("x", function(d) {
			   		return xScale(d[0][0]);
			   })
			   .attr("y", function(d) {
			   		return yScale(d[0][1]);
			   })
			   .attr("font-family", "sans-serif")
			   .attr("font-size", "11px")
			   .attr("fill", "red");*/
			
			//Create X axis
			svg.append("g")
				.attr("class", "axis")
				.attr("transform", "translate(0," + (h - padding) + ")")
				.call(xAxis);
			
			//Create Y axis
			svg.append("g")
				.attr("class", "axis")
				.attr("transform", "translate(" + padding + ",0)")
				.call(yAxis);
}

function init1 () {

	var data = [ 5, 10, 15, 20, 25 ];

	//d3.select(CONTENT).append('p').text('New Paragraph!');

	d3.select(CONTENT).selectAll('p')
		.data(data)
		.enter()
		.append('p')
		.text(function(element){
			return element;
		})
		.style('color', function(element){
			if (element > 15){	//demo threshold of 15
				return 'red';
			}
			else{
				return 'green';
			}
		});


	d3.select(CONTENT).selectAll('div')
		.data(data)
		.enter()
		.append('div')
		.attr('class', 'bar')
		.style('height', function(d) {
			var barHeight = d * 5;
			return barHeight + 'px';
		});

}



