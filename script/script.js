var div = document.getElementById("container");
var input = document.getElementById("userinput");
var button = document.getElementById("button");

button.addEventListener("click", function(){
    var img = document.createElement("img");
    img.src = input.value;
    input.value = "";
    console.log(img.src);
    div.appendChild(img);
});