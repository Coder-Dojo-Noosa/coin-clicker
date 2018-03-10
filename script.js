function save() {
    localStorage.setItem("coins",coins);
  localStorage.setItem("clickcoin",clickcoin);
}
if(localStorage.getItem("coins") == null){
  var coins = 0;
}else{
  var coins = parseInt(localStorage.getItem("coins"));
  }
if(localStorage.getItem("clickcoin") == null){
  var clickcoin = 1;
}else{
  var clickcoin = parseInt(localStorage.getItem("clickcoin"));
  }
var BTCM_price = 10;
var bank_price = 100;
var fast_food_price = 1000;
var software_price = 10000;
$(".colorbox li").on("click",function(){
  var BC = $(this).css("background");
  $("body").css("background" ,BC);
});
$(".money").on("click",function(){
  coins = coins + clickcoin;
  save();
  console.log("clicked", coins, clickcoin);
$(".total").html(coins);
});
$(".BTCMprice").on("click",function(){
  if (coins >= BTCM_price) {
    coins = (coins-BTCM_price);
    BTCM_price = parseFloat(BTCM_price*1.1).toFixed(2);
    clickcoin = (clickcoin+0.1);
    save();
    $(".BTC_price_list").html(BTCM_price + "c");
  }
  $(".total_coins_per_click").html(clickcoin);
  $(".total").html(coins);
});
$(".bankprice").on("click",function(){
  if (coins >= bank_price) {
    coins = (coins-bank_price);
    bank_price = parseFloat(bank_price*1.1).toFixed(2);
    clickcoin = (clickcoin+1);
    $(".bank_price_list").html(bank_price + "c");
    localStorage.setItem("coins",coins);
  }
  $(".total_coins_per_click").html(clickcoin);
  $(".total").html(coins);
});
$(".fast_foodPrice").on("click",function(){
  if (coins >= fast_food_price) {
    coins = (coins-fast_food_price);
    fast_food_price = parseFloat(fast_food_price*1.1).toFixed(2);
    clickcoin = (clickcoin+10);
    $(".fast_food_list").html(fast_food_price + "c");
    localStorage.setItem("coins",coins);
  }
  $(".total_coins_per_click").html(clickcoin);
  $(".total").html(coins);
});
$(".software_price").on("click",function(){
  if (coins >= software_price) {
    coins = (coins-software_price);
    software_price = parseFloat(software_price*1.1).toFixed(2);
    clickcoin = (clickcoin+100);
    $(".software_list").html(software_price + "c");
    localStorage.setItem("coins",coins);
  }
  $(".total_coins_per_click").html(clickcoin);
  $(".total").html(coins);
});
