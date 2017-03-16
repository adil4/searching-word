
function mysearch(){
    var compeletparagraph = document.getElementById("paragraph-id").value;
    console.log(compeletparagraph);
    var searchWord = document.getElementById("search-id").value;

    var paragraph = new RegExp(searchWord,"gi");

    var matchWord = compeletparagraph.match(paragraph);
    if(matchWord == null && " "){
        alert("Not Found");
    }
    else{
        document.getElementById("result").innerHTML = matchWord;
    }
    console.log(result)
}