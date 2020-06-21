var pageCounter=1;
var button = document.querySelector(".btn");
var animalContainer = document.querySelector(".animal-info");

button.addEventListener('click',function(){
    var ourRequest = new XMLHttpRequest();
    
    ourRequest.open("GET",'https://learnwebcode.github.io/json-example/animals-'+pageCounter+'.json');
    

    ourRequest.onload = function(){
    var ourData= JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
};


    ourRequest.send();
    pageCounter++;
});

function renderHTML(data){
    var htmlString="";

    for(let i=0;i<data.length;i++){
        htmlString+="<p> "+data[i].name + " is a " + data[i].species + ".<p>"
    }

    animalContainer.insertAdjacentHTML('beforeend',htmlString)
}








