$("#register").click(function() {
    var firstname = $("#fn").val();
    var lastname = $("#ln").val();
    var age = $("#age").val();
    var gender= $("input:radio[name=gender]:checked").val();
    var location = $("#location").val();
    var food= $("input[type='checkbox']:checked").val();
    var comment = $("#comment").val();
    alert("firstname: " + firstname  + "\n" + " Lastname: " + lastname + "\n" + " Age: " + age + "\n" + "Gender: " + gender  + "\n" +  " location: " + location + "\n" + " Diet: " + food + "\n" + "comment:" + comment + "\n");
});