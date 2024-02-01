(function ($) {
    $(document).ready(function () {
        // Navigation scroll
        $(".navbar .nav-link").on('click', function (event) {
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                var targetElement = $(hash);
                if (targetElement.length) {
                    $('html, body').animate({
                        scrollTop: targetElement.offset().top
                    }, 700, function () {
                        window.location.hash = hash;
                    });
                }
                // Close the hamburger menu if open
                $('#nav-toggle').removeClass('is-active');
                $('ul.nav').removeClass('show');
            }
        });

        // Navbar toggle
        $('#nav-toggle').on('click', function () {
            $(this).toggleClass('is-active');
            $('ul.nav').toggleClass('show');
        });

        // Read more link
        $("#readMoreLink").on("click", function (e) {
            e.preventDefault();
            $(".extended-content").toggleClass("show");
        });
    });
})(jQuery);
document.addEventListener('DOMContentLoaded', function () {
  animateLogo('leftLogo');
  animateLogo('rightLogo');
});

//function animateLogo(logoId) {
  //const logo = document.getElementById(logoId);

  //if (logo) {
    //logo.style.animation = 'logoAnimation 2s ease-in-out infinite'; // Adjust animation properties
  //}
//}
  
// <![CDATA[  <-- For SVG support
if ('WebSocket' in window) {
    (function () {
      function refreshCSS() {
        var sheets = [].slice.call(document.getElementsByTagName("link"));
        var head = document.getElementsByTagName("head")[0];
        for (var i = 0; i < sheets.length; ++i) {
          var elem = sheets[i];
          var parent = elem.parentElement || head;
          parent.removeChild(elem);
          var rel = elem.rel;
          if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
            var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
            elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
          }
          parent.appendChild(elem);
        }
      }
      var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
      var address = protocol + window.location.host + window.location.pathname + '/ws';
      var socket = new WebSocket(address);
      socket.onmessage = function (msg) {
        if (msg.data == 'reload') window.location.reload();
        else if (msg.data == 'refreshcss') refreshCSS();
      };
      if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
        console.log('Live reload enabled.');
        sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
      }
    })();
  }
  else {
    console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
  }