var DATA = [
  {category: "UNHCR", fact: "Number of people who flee their homes daily:", number: "42,500", color:"blue"},
  {category: "HIVE", fact: "How many people support refugee resettlement?:", number: "60%", color: "red"}
]

var dataObjects = {categories: ['unhcr','hive']};

$(document).ready(function(){
  createDataObjects();
  showListeners();
})

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
    elements.collapse('hide');
    }
    else if(this.categories[i] === category){
      var  elements = this[this.categories[i]];
      elements.collapse('show');
    }
  } 
}

dataObjects.showAll = function(){
  for(var i=0 ; i < this.categories.length ; i++){
    this[this.categories[i]].collapse('show');
  }
}