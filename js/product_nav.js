//產品導覽列選單

// $(function(){
//     $("#dropdown_menu ul").hide();
//     $("#dropdown_menu>li>a").click(function(){
//         $(this).next().slideToggle();
//         $(".button .material-icons").toggleClass("active");
//     })
// });


//https://hsuchihting.github.io/jQuery/20200529/1660679567/

// $(function () {
//     $(".button").click(function (e) {
//       e.preventDefault();
//       $(".nav_item").slideToggle(500);
//       $(".button .material-icons").toggleClass("active");
//     });
//   });

$(function () {
  $(".button").click(function (e) {
    e.preventDefault();
    $(e.currentTarget.parentElement.parentElement).children(".nav_item").slideToggle(500);
    $(this).children(".button .material-icons").toggleClass("active");
  });
});
