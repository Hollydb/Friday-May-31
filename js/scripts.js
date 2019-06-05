$(document).ready(function(){
  console.log('jquery enabled');
  $("form#form").submit(function(event){
    event.preventDefault();
    var name = $("#name").val();
    if($('#gridCheck1').is(":checked")) {
      alert('why did you check the box?');
    } else {
      alert('Thank you for your feedback ' + name + '!');
    };
  });

});
