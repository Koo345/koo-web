//////////////////////// create pie chart //////////////////
const pieUrl = "https://api.sheety.co/6b28d0ddf29f89bbb1595d1a623d84b9/mockDataProduct/sheet1";
d3.json(pieUrl).then(data=> {
    console.log(data.sheet1)
    const pieData=data.sheet1;

    //create colorscame for oie cahrt
    //each of the section has diff colour
    const color = d3.scaleOrdinal(d3.schemeSet2);

    const pieWidth = 500;
    const pieHeight = 500;
    const pieRadius = Math.min(pieWidth, pieHeight)/2 - 20; //20 is the padding

    //create svg element with id-pie-chart
    //set the width and height of svg element with pieWidth and pieHeight
    //append a group element to the svg
    //translate the group element to the center of svg )center of the circle) 
    const svg = d3.select("#pie-chart")
    .attr("width", pieWidth)
    .attr("height",pieHeight)
    .append("g")
    .attr("transform", `translate(${pieWidth/2}, ${pieHeight/2})`);

    //create pie function
    const pie = d3.pie().value(d => d.stock)  //d.stop is the value of the data(stock)

    //create the arc geometry
    const arc = d3.arc().innerRadius(0).outerRadius(pieRadius)

    //create expanded arc geometry for hover effect
    const arcHover = d3.arc().innerRadius(0).outerRadius(pieRadius + 10)

    //draw the pie chart
    //select all or create <path> element inside the svg element
    //base on the data given in pieData
    const slices = svg.selectAll("path")
    .data(pie(pieData))
    .enter()
    .append("path")
    .attr("d", arc)  //d is the path attr
    .attr("fill", (d,i) => color(i))  // the color is base on colorScale
    .attr("stroke","#fff")
    .style ("stroke-width","2px")
    .style("cursor", "pointer")
    .on("mouseover", function(event,data){
        d3.select(this)
        .transition()
        .duration(1000)
        .attr("d",arcHover)

        //to show this on tooltip
        console.log(data[0])
        console.log(data[1])
        console.log(data[4])  //not working
      
        
        //show it inside tooltip
        d3.select("#tooltip")
        .style("display","block") //show the tooltip
        .style("left",(event.pageX + 10) + "px")  //positon the tooltip
        .style("top",(event.pageY - 10) + "px")
        .html(`Category: ${data[0]}  <br/>Type: ${data[0]} <br/> Stocks: ${data[0]}`)  //not working
    })
    .on("mouseout", function(event, data){
        //when the mouse is hovered, make the arc normal
        d3.select(this)
        .transition()
        .duration(1000)
        .attr("d",arc)

        d3.select("#tooltip")
        .style("display","none")  //hide the tooltip
    })


})