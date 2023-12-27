//  ----------------------------------按鈕切換內容
$(document).ready(function () {
  $(".tabs").bind("click", function () {
    $(".tab-inner").hide();
    $("#" + $(this).attr("id") + "-content").show();
    $(".tabs").removeClass("tabs-selected");
    $(this).addClass("tabs-selected");
  });
});

// id 要加上去
// .tab-inner  = 切換的內容
// .tabs = 標題
// .tabs-selected = 標題點擊後的效果
// removeClass >> ('tabs-selected')  裡面不用加點

// note顯示down箭頭
// $(".down").hide();
$(".note").on("scroll", function (e) {
  e.preventDefault();
  if ($(".note").scrollTop() >= 50) {
    $(".down").fadeOut(300);
  } else {
    $(".down").fadeIn(300);
  }
});
