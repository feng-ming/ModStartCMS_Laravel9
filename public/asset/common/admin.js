!function(n){var i={};function r(t){if(i[t])return i[t].exports;var e=i[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=n,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/asset//",r(r.s=285)}({285:function(t,e,n){!function(a){a(window).on("load",function(){a(".ub-panel-frame > .right > .content.fixed, .ub-panel-dialog .panel-dialog-body").scroll(function(){var t=document.createEvent("HTMLEvents");t.initEvent("scroll",!1,!0),window.dispatchEvent(t)});var t=a(window).width()<600,e=a(".ub-panel-frame");e.find(".menu-expand-all").on("click",function(){e.find(".left .menu .title").addClass("open")}),t?(e.find(".left-menu-shrink").on("click",function(){e.removeClass("left-toggle")}),e.find(".left-trigger").on("click",function(){e.addClass("left-toggle")})):e.find(".left-trigger").on("click",function(){e.toggleClass("left-toggle"),window.api.base.postSuccess(window.__msAdminRoot+"util/frame",{frameLeftToggle:e.is(".left-toggle")},function(t){})});var n=e.find(".left .menu"),i=null;e.find("#menuSearchKeywords").on("keyup",function(){var t=a(this).val();i&&clearTimeout(i),i=setTimeout(function(){var o;(o=a.trim(t))?(n.find(".title").addClass("open"),n.find("[data-keywords-filter]").attr("data-keywords-filter","hide"),n.find("[data-keywords-item]").attr("data-keywords-item","hide"),n.find("[data-keywords-filter]").each(function(t,e){var n=a(e).text().trim(),i=PinyinMatch.match(n,o),r=n;!1!==i&&(i=i,r=(n=n).substring(0,i[0])+"<mark>"+n.substring(i[0],i[1]+1)+"</mark>"+n.substring(i[1]+1),a(e).attr("data-keywords-filter","show"),a(e).attr("data-keywords-item","show")),a(e).find("span").html(r)}),n.find(">.menu-item>.children>.menu-item>.children").each(function(t,e){0<a(e).find("[data-keywords-filter=show]").length&&a(e).attr("data-keywords-item","show").prev().attr("data-keywords-item","show")}),n.find(">.menu-item>.children").each(function(t,e){0<a(e).find("[data-keywords-filter=show]").length&&a(e).attr("data-keywords-item","show").prev().attr("data-keywords-item","show")})):(n.find("[data-keywords-filter]").attr("data-keywords-filter","show"),n.find("[data-keywords-item]").attr("data-keywords-item","show"),n.find("[data-keywords-filter]").each(function(t,e){var n=a(e).text().trim();a(e).find("span").html(n)}))},200)})})}.call(this,n(6))},6:function(t,e){t.exports=window.$}});