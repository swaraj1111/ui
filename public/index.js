// (() => {
//   function n(t) {
//     for (
//       var e = t + "=", s = document.cookie.split(";"), i = 0;
//       i < s.length;
//       i++
//     ) {
//       for (var r = s[i]; r.charAt(0) === " "; ) r = r.substring(1);
//       if (r.indexOf(e) === 0) return r.substring(e.length, r.length);
//     }
//     return "";
//   }
//   function o(t, e, s) {
//     var i = new Date();
//     i.setTime(i.getTime() + s * 24 * 60 * 60 * 1e3);
//     var r = "expires=" + i.toUTCString();
//     document.cookie = t + "=" + e + ";" + r + ";path=/";
//   }
//   if (!n("sitevisitor")) {
//     let t = new Object(),
//       e = new Date();
//     (t.referer = document.referrer),
//       (t.request = location.pathname.substring(1)),
//       (t.time =
//         e.getFullYear() +
//         "-" +
//         (e.getMonth() + 1) +
//         "-" +
//         e.getDate() +
//         " " +
//         e.getHours() +
//         ":" +
//         e.getMinutes() +
//         ":" +
//         e.getSeconds()),
//       o("sitevisitor", btoa(JSON.stringify(t)), 365);
//   }
//   document.addEventListener("DOMContentLoaded", () => {
//     "use strict";
//     document.querySelectorAll(".preview-test").forEach((e) => {
//       e.addEventListener("click", function (s) {
//         s.preventDefault(),
//           document
//             .querySelector(".preview-devices-active")
//             .classList.remove("preview-devices-active"),
//           this.classList.add("preview-devices-active"),
//           (document.querySelector("#preview-frame").className = this.id.replace(
//             "-test",
//             ""
//           ));
//       });
//     });
//   });
// })();
let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;


valueDisplays.forEach((valueDisplay)=> {
let startValue = 0;
let endValue= parseInt(valueDisplay.getAttribute("data-val"));
let duration= Math.floor(interval / endValue);
let counter= setInterval(function(){
  startValue +=1;
  valueDisplay.textContent = startValue;
  if(startValue == endValue){
    clearInterval(counter);
  }
},duration)
});