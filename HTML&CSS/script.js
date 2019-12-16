function printMessage(name, company){
    console.log('printing message in console on click', name, company);
    var daString="<li "+ 'id="'+ name + '"' +" class=\'list-group-item\' onclick=\'removeList(event)\'>"+ name +' from '+ company +"</li>";
    var daParent=document.getElementById("list");
    daParent.innerHTML+=daString;
}

function removeList(event){
    // console.log(event.target);
    // var list = event.target.id;
    // console.log(list);
    // var daParent=document.getElementById("list");
    // daParent.getElementById("list").remove();
    var elem = document.getElementById(event.target.id);
    elem.parentNode.removeChild(elem);
}