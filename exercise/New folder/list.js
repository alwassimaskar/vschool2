$(document).ready(function () {
   $("#badd").click(function () {
       var shoppingList= $("#bbadd").val();
       $("#list").append("<li id=" + listt + ">" + listt + "<button class='btn btn-danger btn-xs' id=" + listt +  " onclick=Delete(" + listt + ")> Delete </button></li>");
       $("#bdel").val("");
       



   });

});


function Delete(item){
   $(item).remove();
}