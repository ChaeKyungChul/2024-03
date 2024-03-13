$(function(){
   $(".submit").click(function(){
      if($("#username").val() == ""){
         alert("이름을 입력하세요.");
         $("#username").focus();
         return;
      }
      $("#loginform").submit();
   });
   
  $("#talk").on("keyup", function(e){
   e.preventDefault();
    //console.log(e.keyCode);
    if(e.keyCode == 13) {
     $.ajax({
      url : "talk",
      data : formData,
      type : "post",
      success: function(data){
         $('#talk').val("");
         $('#talk').focus();
      },
      error: function(){}
     })

    }
  });
});