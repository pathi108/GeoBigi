var width =  1000, height = 1000; //height and width of the map
var scale=0;					//scale of the map
var center_x=0,center_y=0; 		//which part of world map are we uploading
var projection;         
var path;


function set_dimensions(wdth,heght,scle,x,y) //setting demnsions of the map
{
	width=wdth;
	height=heght;
	scale=scle;
	center_x=x;
	center_y=y;
}
function translate_Coordinates()	//translate sperical corrdinates into flat corrdinates
{
	
console.log(scale);
var projection = d3.geo.equirectangular()
    .scale(scale)
    .center([center_x,center_y])
    .precision(.1);
 var path = d3.geo.path()
    .projection(projection);

}


	

function select_On_Click() //onclick
{
	 svg.selectAll('path').on("click",function() 
            { 
                
                d3.select(this).style({fill : 'green'});

                 });

}
function draw_map(id,geojson,svg) //draw map on jason
{
console.log(center_x);
	svg = d3.select(id).append("svg")
    .attr("width", width)
    .attr("height", height);
   
svg.selectAll("path")
        .data(geojson.features)
        .enter()
        .append("path")
        .attr("d", path)
        .style("fill", function(d) {
                                var value = d.properties.value;
                                //console.log(value);
                                if (value) {
                                    
                                        return "steelblue";
                                } else {
                                    
                                        return "Black";
                                }
                   });
}