// $(".btn").on("click", function() {

//   const $button = $(this);
//   var oldValue = $button.parent().find("input").val();

//   if ($button.text() == "+") {
// 	  var newVal = parseFloat(oldValue) + 1;
// 	} else {
   
//     if (oldValue > 0) {
//       var newVal = parseFloat(oldValue) - 1;
//     } else {
//       newVal = 0;
//     }
//   }

//   $button.parent().find("input").val(newVal);

// });


function num(id){
  return document.getElementById(id)
}