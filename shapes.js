console.log("hello");
var dataArray = [5,11,18];

var svg = d3.select("body").append("svg").attr("height", "100%").attr("width", "100%");

svg.selectAll("rect") /* looks for "rect" element in SVG  and returns them in a selection. here, we don't have any, so it'll return empty selection */
		.data(dataArray) /*since dataArray has 3 elements - and no associated "rect", all 3 elements are put in an enter selection*/
		.enter().append("rect") /* now, enter selection has 3 elements from the dataArray, which is appended to rect element*/
		/*.attr("height", "200") */
		.attr("height", function(d,i){return d*15;})
		.attr("width", "50")
		/*.attr("x", "20")
		.attr("y", "100");*/
		.attr("x", function(d, i){return 60*i;}) /* d and i are convention, denoting datapoint and index - in this case, d: 5, 11, 19 and i: 0,1,2 */
		/*.attr("y", "100")*/
		.attr("y", function(d, i){return 300-(d*15);})
		.attr("fill", "pink");

svg.selectAll("circle.first")
		.data(dataArray)
		.enter().append("circle")
					.attr("class", "first")
					.attr("cx", function(d,i){return 300+(100*i);})
					.attr("cy", "100")
					.attr("r", function(d,i){return d;});


var newX = 600;
svg.selectAll("circle.second")
		.data(dataArray)
		.enter().append("circle")
					.attr("class", "second")
					.attr("cx", function(d,i){ newX+=(d*6) + (i*20); return newX;})
					.attr("cy", "100")
					.attr("r", function(d,i){return d*3;});

var newX = 600;
svg.selectAll("ellipse")
		.data(dataArray)
		.enter().append("ellipse")
					.attr("class", "second")
					.attr("cx", function(d,i){ newX+=(d*6) + (i*20); return newX;})
					.attr("cy", "200")
					.attr("rx", function(d,i){return d*3;})
					.attr("ry", "30");

var newX = 700;
svg.selectAll("line")
		.data(dataArray)
		.enter().append("line")
					.attr("x1", newX)
					//.attr("stroke", "blue")
					//.style("stroke", "green")
					.attr("stroke-width", "2")
					.attr("y1", function(d,i){return 80+(i*20);})
					.attr("x2", function(d){return newX+d*15;})
					.attr("y2", function(d,i){return 80+(i*20);});


	// Order of precedence:
		// style >> css >> attr
		// it's wiser to use CSS over style
		// style or attr bulks the .js file since they're added at element level

var textPosition = 500
svg.append("text")
		.attr("x", textPosition)
		.attr("y", 150)
		.attr("fill", "none")
		.attr("stroke", "blue")
		.attr("text-anchor", "start") // aligns horizontly
		.attr("dominant-baseline", "middle") //aligns vertically
		.attr("stroke-width", "2")
		.attr("font-size", 30)
		.text("start");

svg.append("text")
		.attr("x", textPosition)
		.attr("y", 180)
		.attr("fill", "blue")
		.attr("stroke", "none")
		.attr("text-anchor", "middle")
		.attr("dominant-baseline", "middle")
		.attr("font-size", 30)
		.text("middle");

svg.append("text")
		.attr("x", textPosition)
		.attr("y", 210)
		.attr("stroke", "blue")
		.attr("fill", "none")
		.attr("text-anchor", "end")
		.attr("dominant-baseline", "middle")
		.attr("font-size", 30)
		.text("end");
svg.append("line")
		.attr("x1", textPosition)
		.attr("y1", "150")
		.attr("x2", textPosition)
		.attr("y2", "210");


//Adding 3 texts with one set of svg element, using tspan

var textArray = ["start", "middle", "end"];

svg.append("text").selectAll("tspan")
		.data(textArray)
		.enter().append("tspan")
		.attr("x", textPosition - 100)
		.attr("y", function(d,i){return(150 + i*30) ;})
		.attr("stroke", "blue")
		.attr("fill", "none")
		.attr("text-anchor", "end")
		.attr("dominant-baseline", "middle")
		.attr("font-size", 30)
		.text(function(d){return d;});