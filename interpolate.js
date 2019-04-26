var dataArray =[{x:5, y:5}, {x:10, y:15}, {x:25, y:7}, {x:30, y:16}, {x:45, y:22}];
var interpolateTypes = [d3.curveLinear, d3.curveNatural, d3.curveStep, d3.curveBasis, d3.curveBundle , d3.curveCardinal];



var svg = d3.select("body").append("svg").attr("height", "100%").attr("width", "100%");


for (var p=0; p<6; p++) {

		var line = d3.line()		//this is function - line() generator
						.x(function(d,i){return d.x*6;})
						.y(function(d,i){return d.y*4;})
						.curve(interpolateTypes[p]);

		//svg line is an element - can only be straight with one section
		// d3 line is a generator - it doesn't generate a line element, generate a path element 

		var shiftX = p*250;
		var shiftY = 0;
		var chartGroup = svg.append("g")
								.attr("class", "group"+p) 	//go to style.css for styling individual groups
								.attr("transform", "translate("+shiftX+",0)");

		chartGroup.append("path")
			.attr("fill", "none")
			.attr("stroke", "blue")
			.attr("d", line(dataArray));


		chartGroup.selectAll("circle.grp"+p)
			.data(dataArray)
			.enter().append("circle")
						.attr("class", function(d,i){return "grp"+i})
						.attr("cx", function(d,i){return d.x*6;})
						.attr("cy", function(d,i){return d.y*4;})
						.attr("r", 2);
	}