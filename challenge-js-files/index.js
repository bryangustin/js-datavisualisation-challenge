// graph 1

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

let ctx = document.getElementById('graph1').getContext('2d');

let years = document.querySelectorAll('#table1 tbody tr')[0];
let yearsLabels = [];

Array.from(years.children).forEach(function(years){
	if(years.innerText.length > 0){
		yearsLabels.push(parseInt(years.innerText));
	}
})

let datasetsCrime = [];

let datasets = Array.from(document.querySelectorAll('#table1 tbody tr'));

datasets.shift();

datasets.forEach(function(datas){
	let object = {};
	let arrData = [];
	let data = Array.from(datas.children);
	data.shift();
	data.shift();
	data.forEach(function(axe){
		arrData.push(parseInt(axe.innerText));
	})
	object.data = arrData;
	object.label = datas.children[1].innerText;
	object.borderColor = getRandomColor();
	object.backgroundColor = 'transparent';
	datasetsCrime.push(object);
})

let data = {
	labels: yearsLabels,
	datasets: datasetsCrime
}

let options

let config = {
	type:'line',
	data: data,
	options: options
}

let graph1 = new Chart(ctx, config);





 // graph 2

let trCountries = Array.from(document.querySelectorAll("#table2 tbody tr"));
let arCountry = [];


trCountries.forEach(function(trcountry){
  arCountry.push(trcountry.children[1].innerText);
});

let arDataOne = [];
let arDataTwo = [];

trCountries.forEach(function(trcountry){

  arDataOne.push(parseInt(trcountry.children[2].innerText));
  arDataTwo.push(parseInt(trcountry.children[3].innerText));
});

let labelOne = document.querySelector("#table2 thead tr").children[2].innerText;
let labelTwo = document.querySelector("#table2 thead tr").children[3].innerText;


let context = document.getElementById('barChart').getContext('2d');
let myChart = new Chart(context, {
    type: 'bar',
    data: {
        labels: arCountry,
        datasets: [
          {
            label: labelOne,
            data: arDataOne ,
            backgroundColor: 'rgb(65, 212, 146)'
          },
          {
            label: labelTwo,
            data: arDataTwo
          }
        ]
    },
    options: {
      legend: {
        display: true
      },
      scales: {
        xAxes: [{
          gridLines: {
            display: false
          }
        }],
        yAxes: [{
          gridLines: {
            display: false
          }
        }]
      }
    }
});


// graph 3

  document.getElementById("firstHeading").insertAdjacentHTML("afterend",'<canvas id="graphiqueZero"></canvas>');
  
  setInterval(function(){

    fetch("https://canvasjs.com/services/data/datapoints.php?xstart=1&ystart="+Math.floor(Math.random()*10)+"&length=20&type=json")
    .then(response => response.json())
    .then((data) => {
   
      let arr = [];

      arr.push(data);

      let labels0 = [];
      let data0 = [];

      arr[0].forEach(element => {
        labels0.push(element[0]);
        data0.push(element[1]);
      });
    
      new Chart(document.getElementById("graphiqueZero"), {
        type: 'line',
        data: {
          labels: labels0,
          datasets: [{ 
            data: data0, 
            borderColor: "red",
            fill: false
          }]
        }
      })
    })

  }, 1000);

