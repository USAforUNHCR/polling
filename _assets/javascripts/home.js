var DATA = [
  {category: "UNHCR", fact: "Number of people who flee their homes daily:", number: "42,500", color:"blue"},
  {category: "HIVE", fact: "How many people support refugee resettlement?:", number: "60%", color: "red"}
]

var dataObjects = {categories: ['unhcr','hive','refugee']};

var data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri','Sat','Sun'],
  series: [
    [5, 2, 4, 2.5, 1, 0, 0],[0, 1, 2, 2.5, 4, 4.5, 4.5]
  ]
}

$(document).ready(function(){
  var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    layoutMode: 'fitRows'
  });

  createDataObjects();
  showListeners();

  var lineChart = new Chartist.Line('#line-chart',data,
    {axisY: {
      onlyInteger: true
    }
  });

  lineChart.on('created',function(){
    createHover();
  })

  biPolar();
  lineArea();
  donut();
});

function showListeners(){
  unhcrListener();
  hiveListener();
  allListener();
}

function unhcrListener(){
  $('[data-type="unhcr"]').click(function(event){
    event.preventDefault();
    dataObjects.toggle('unhcr')
  });
}

function hiveListener(){
  $('[data-type="hive"]').click(function(event){
    event.preventDefault();
    dataObjects.toggle('hive');
  });
}

function allListener(){
  $('[data-type="all"]').click(function(event){
    event.preventDefault();
    dataObjects.showAll();
  });
}

function createDataObjects(){
  dataObjects.unhcr = $('.unhcr');
  dataObjects.hive = $('.hive');
}

dataObjects.toggle = function(category){
  for(var i = 0; i < this.categories.length ; i++){

    if(this.categories[i] != category){
    var  elements = this[this.categories[i]];
    elements.fadeOut('slow');
    }
    else if(this.categories[i] === category){
      var  elements = this[this.categories[i]];
      elements.fadeIn('slow');
    }
  } 
}

dataObjects.showAll = function(){
  for(var i=0 ; i < this.categories.length ; i++){
    this[this.categories[i]].fadeIn('slow');
  }
}

function createHover(){
  
  var point = $('#line-chart').eq(0).find('.ct-series-b').eq(0).find(':nth-child(5)').eq(0);
  debugger;
  point.attr('data-toggle','tooltip');
  point.attr('title','look, a tooltip!');
  $('[data-toggle="tooltip"]').tooltip();
  debugger;
}

function biPolar(){
  var data = {
  labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
  series: [
    [1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
  ]
};

var options = {
    high: 10,
    low: -10,
    axisX: {
      labelInterpolationFnc: function(value, index) {
        return index % 2 === 0 ? value : null;
      }
    }
  };

  new Chartist.Bar('#bi-polar', data, options);
}

function lineArea(){
  new Chartist.Line('#area', {
  labels: [1, 2, 3, 4, 5, 6, 7, 8],
  series: [
    [5, 9, 7, 8, 5, 3, 5, 4]
  ]
}, {
  low: 0,
  showArea: true,
  axisY: {
      onlyInteger: true
    }
  });
}

function donut(){
    var chart = new Chartist.Pie('#donut', {
    series: [10, 20, 50, 20, 5, 50, 15],
    labels: [1, 2, 3, 4, 5, 6, 7]
  }, {
    donut: true,
    showLabel: false
});
}