function topFunction(time) {
  timer = setInterval(() => {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var speed = Math.floor(-scrollTop / 5);
    document.documentElement.scrollTop = document.body.scrollTop = scrollTop + speed;
    isTop = true; //用於阻止滾動事件清除定時器
    /*修正無限回彈*/
    document.onmousedown = function (e) { clearInterval(timer); };
    document.onmousewheel = function (e) { clearInterval(timer); };
    document.ontouchmove = function () { clearInterval(timer); };
    /*到頁面頂部離開*/
    if (scrollTop == 0) {
      clearInterval(timer);
    }
  }, time);
}
