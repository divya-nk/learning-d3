var dataArray =[{x:5, y:5}, {x:10, y:15}, {x:25, y:7}, {x:30, y:16}, {x:45, y:22}];

var svg = d3.select("body").append("svg").attr("height", "100%").attr("width", "100%");

var line = d3.line()		//this is function - line() generator
				.x(function(d,i){return d.x*6;})
				.y(function(d,i){return d.y*4;})
				.curve(d3.curveCardinal);

//svg line is an element - can only be straight with one section
// d3 line is a generator - it doesn't generate a line element, generate a path element 

svg.append("path")
	.attr("fill", "none")
	.attr("stroke", "blue")
	.attr("d", line(dataArray))