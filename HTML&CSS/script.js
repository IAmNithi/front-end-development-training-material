// function addList(name, company){
//     var daString="<li "+ 'id="'+ name + '"' +" class=\'list-group-item\' onclick=\'removeList(event)\'>"+ name +' from '+ company +"</li>";
//     var daParent=document.getElementById("list");
//     daParent.innerHTML+=daString;
// }
function addList(name, company){
    var daString="<li>"+ name +' from '+ company +"</li>";
    var daParent=document.getElementById("list");
    daParent.innerHTML+=daString;
}

function removeList(event){
    var elem = document.getElementById(event.target.id);
    elem.parentNode.removeChild(elem);
}