var week = [
  "Chủ Nhật",
  "Thứ Hai",
  "Thứ Ba",
  "Thứ Tư",
  "Thứ Năm",
  "Thứ Sáu",
  "Thứ Bảy",
];
var months = [
  "Tháng Một",
  "Tháng Hai",
  "Tháng Ba",
  "Tháng Tư",
  "Tháng Năm",
  "Tháng Sáu",
  "Tháng Bảy",
  "Tháng Tám",
  "Tháng Chín",
  "Tháng Mười",
  "Tháng Mười Một",
  "Tháng Mười Hai",
];
function zeroPadding(num) {
  return num < 10 ? "0" + num : num;
}

function showtime() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  var session = "AM";

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }
  h = zeroPadding(h);
  m = zeroPadding(m);
  s = zeroPadding(s);

  var time = h + ":" + m + ":" + s + " " + session;
  var dateS =
    week[date.getDay()] +
    ", " +
    months[date.getMonth()] +
    " " +
    zeroPadding(date.getDate());

  document.querySelector(".time").innerHTML = time;
  document.querySelector(".date").innerHTML = dateS;
}
var interval = setInterval(showtime, 1000);
