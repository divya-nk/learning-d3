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


var newX = 600
svg.selectAll("circle.second")
		.data(dataArray)
		.enter().append("circle")
					.attr("class", "second")
					.attr("cx", function(d,i){ newX+=(d*6) + (i*20); return newX;})
					.attr("cy", "100")
					.attr("r", function(d,i){return d*3;});

var newX = 600
svg.selectAll("ellipse")
		.data(dataArray)
		.enter().append("ellipse")
					.attr("class", "second")
					.attr("cx", function(d,i){ newX+=(d*6) + (i*20); return newX;})
					.attr("cy", "200")
					.attr("rx", function(d,i){return d*3;})
					.attr("ry", "30");