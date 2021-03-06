var ido, keido;

function loc_print(pos) {
  //alert("緯度: " + pos.coords.latitude + ", 経度: " + pos.coords.longitude);
  ido = pos.coords.latitude;
  keido = pos.coords.longitude;
  document.getElementById("yourlocation").innerHTML = "あなたの現在位置は緯度"+ ido +"，経度"+ keido + "です。";
}

function loc_error(err) {
  if (err.code == err.POSITION_UNAVAILABLE) {
    console.log("位置情報の取得ができませんでした。");
  } else if (err.code == err.PERMISSION_DENIED) {
    console.log("位置情報取得の使用許可がされませんでした。");
  } else if (err.code == err.PERMISSION_DENIED_TIMEOUT) {
    console.log("位置情報取得中にタイムアウトしました。");
  }
}

function getlocation(){
navigator.geolocation.getCurrentPosition(loc_print, loc_error);
}

function loadmap(){
var mapurl, text, tweetbutton
mapurl = '<img src = "http://maps.google.com/maps/api/staticmap?center='+ido+','+keido+'&size=400x400&zoom=15&markers='+ido+','+keido+'&sensor=true">'
//text = encodeURI(ここにいます)
tweetbutton = '<A href="https://twitter.com/intent/tweet?text=ここにいます+http://maps.google.co.jp/maps?f=q&hl=ja&q='+ido+','+keido+'&ie=UTF8&ll='+ido+','+keido+'&z=14">ツイートする</A>'
  document.getElementById("map").innerHTML = mapurl;
  document.getElementById("tweetbutton").innerHTML = tweetbutton;
}
