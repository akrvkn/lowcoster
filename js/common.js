$(function(){$("[js-info-item-tooltip]").infoTooltip(),$("[js-info-item-collapse]").infoCollapse(),$("[js-ship]").shipInit(),$("[js-polaroid]").polaroid(),$("[js-scrollto]").scrollto()}),$(function(){var i=$(window),o=i.scrollTop(),e=i.height(),s=$("[js-intro]");s.addClass("is-loading"),s.imagesLoaded({background:".intro__bg-back-item, .intro__bg-ship, .intro__bg-river"}).always(function(i){s.removeClass("is-loading").addClass("is-inview")}),i.off(".intro-scroll").on({"scroll.intro-scroll":function(t){o=i.scrollTop(),s.hasClass("is-inview")&&o>e+e/2?s.removeClass("is-inview"):!s.hasClass("is-inview")&&o<e/2&&s.addClass("is-inview")}})}),$(function(){var i=$("[data-scrollhash]"),o=document.location.hash.slice(1);o&&i.filter('[data-scrollhash="'+o+'"]').length&&$$.scrollTo(i.filter('[data-scrollhash="'+o+'"]'),500)}),$(function(){function i(){e=o.height(),s.each(function(i,o){var t=s.eq(i);t.data("scrolltop",t.offset().top-e+e/5)})}var o=$(window),e=0,s=$("[js-isinview]");s.length&&(i(),s.off(".isinview").on({"checkView.isinview":function(i,o){$(this);o&&o.scrollTop&&o.scrollTop>$(this).data("scrolltop")&&$(this).addClass("is-inview").off("checkView")}}),o.off(".isinview").on({"scroll.isinview":function(i){s.trigger("checkView",{scrollTop:o.scrollTop()})},"resize.isinview":function(o){i()},"load.isinview":function(e){i(),s.trigger("checkView",{scrollTop:o.scrollTop()})}}))}),$(function(){function i(){a=l,l=0,e.filter(":checked").not('[name="constructor[time]"]').each(function(i,o){l+=parseInt($(o).val())}),l*=parseInt(e.filter('[name="constructor[time]"]:checked').val()),t.html(a),n.html(l),s.removeClass("is-changing").offset(),s.addClass("is-changing")}var o=$("[js-constructor]"),e=o.find("[js-constructor-option-input]"),s=o.find("[js-constructor-price]"),t=s.find(".constructor-buy__price-current"),n=(s.find(".constructor-buy__price-old"),s.find(".constructor-buy__price-new")),a=0,l=0;s.addClass("is-changing"),e.on("change.constructor",function(o){i()}),i()}),$(function(){if($$.isMobile){var i=$("body"),o=$("[js-lang]");o.each(function(o,e){var s=$(e),t=s.closest("[js-header-fixed]"),n=s.find("[js-lang-trigger]");t.length&&t.off(".lang-close").on("headerHide.lang-close",function(i){s.trigger("langClose")}),s.off(".lang").on({"click.lang":function(i){i.stopPropagation()},"langOpen.lang":function(o){s.addClass("is-open"),setTimeout(function(){i.off(".lang-close").on("click.lang-close",function(i){s.trigger("langClose")})},10)},"langClose.lang":function(o){s.removeClass("is-open"),i.off(".lang-close")},"langToggle.lang":function(i){s.hasClass("is-open")?s.trigger("langClose"):s.trigger("langOpen")}}),n.off(".lang").on({"click.lang":function(i){i.preventDefault(),s.trigger("langToggle")}})})}}),$(function(){var i=$$.window,o=$("[js-start]"),e=(o.find("[js-start-bg-ship]"),o.offset().top-i.height()/8);i.off(".start-ship").on({"resize.start-ship":function(s){e=o.offset().top-i.height()/8},"scroll.start-ship startShip.start-ship":function(s){!o.hasClass("is-inview")&&i.scrollTop()>e&&o.addClass("is-inview")}}).trigger("startShip")}),$(function(){var i=$$.window,o=i.height(),e=i.width();if(!(e<700)){var s,t,n,a,l=$(".paths__river"),r=(l.width(),Snap("#svg-doc")),c=$(".paths"),f=c.find(".path"),d=c.find(".paths__river-ship"),h=c.height(),g=r.path("M0,46.3h1703.9c0,0,150,7.7,151.9,130.8s0,336.5,0,336.5s-15.4,103.7-126.9,113.4s-830.8,0-830.8,0 s-126.9,9.7-130.8,138.5c-3.8,128.8-5.8,334.6-5.8,334.6s48.1,117.3,134.6,111.5c86.5-5.8,1478.8,0.2,1478.8,0.2").attr({fill:"none",stroke:"none"}),p=Snap.path.getTotalLength(g),u=0,v=.5,m=c.offset().top-o/2,w=20*p/100,_=50*p/100,C=70*p/100;i.off(".paths-ship").on("resize.paths-ship",function(){h=c.height(),e=i.width(),o=i.height(),m=c.offset().top-o/2}),i.off(".paths-ship").on("scroll.paths-ship shipRiver",function(){if(s=i.scrollTop(),!(s<m||s>m+h+o)){var e=(s-m)*(p/(h-o/2)*1);e>w&&(e=w*(1-v)+(s-m)*(p/(h-o/2)*v)),!f.eq(0).hasClass("is-active")&&e>w?f.eq(0).addClass("is-active"):!f.eq(1).hasClass("is-active")&&e>_?f.eq(1).addClass("is-active"):!f.eq(2).hasClass("is-active")&&e>C&&f.eq(2).addClass("is-active"),moveToPoint=g.getPointAtLength(e),t=moveToPoint.x-d.width()/2,n=moveToPoint.y-d.height()/2,a=u==e?a:u<e?moveToPoint.alpha:moveToPoint.alpha+180,d.css({transform:"translate("+t+"px, "+n+"px) rotate("+a+"deg)"}),u=e}}).trigger("shipRiver")}}),$(function(){$("[js-open-food]").on("click",function(i){$$.openModal($(".modal_food"),{beforeOpen:function(i,o){o.closest(".arcticmodal-container").addClass("arcticmodal-container_full")}})}),$("[js-open-menu]").on("click",function(i){$$.openModal($(".modal_menu"),{beforeOpen:function(i,o){o.addClass("modal-box_menu").closest(".arcticmodal-container").addClass("arcticmodal-container_full arcticmodal-container_full_no-bg"),$("[js-scrollto]",o).scrollto()}})}),$("[js-open-reg]").on("click",function(i){$$.openModal($(".modal_reg"),{beforeOpen:function(i,o){},afterOpen:function(i,o){o.find("form[js-registration]").formHandle({success:function(i,o){o.slideUp(300,function(){o.html(i.message).slideDown()})}})}})}),$("[js-open-gallery]").on("click",function(i){i.preventDefault(),$$.openModal($(".modal_gallery"),{beforeOpen:function(i,o){o.closest(".arcticmodal-container").addClass("arcticmodal-container_full")},afterOpen:function(i,o){var e,s,t=$("[js-gallery-main-list]",o),n=$("[js-gallery-thumbs-list]",o),a=$("[js-gallery-nav]",o),l=a.find("[js-gallery-nav-title]"),r=a.find("[js-gallery-nav-prev]"),c=a.find("[js-gallery-nav-count]"),f=a.find("[js-gallery-nav-next]"),d=0;t.flickity({lazyLoad:3,pageDots:!1,prevNextButtons:!1}),e=t.data("flickity"),d=e.selectedIndex,s=e.cells.length,n.flickity({asNavFor:t[0],contain:!0,pageDots:!1,prevNextButtons:!1,lazyLoad:20}),t.on({"select.flickity":function(i){d!=e.selectedIndex&&(d=e.selectedIndex,a.trigger("updateNav"))},"staticClick.flickity":function(i,o,s,t){"number"==typeof t&&e.selectedIndex!=t&&e.select(t)}}),a.off(".gallery").on({"updateNav.gallery":function(i,o){c.html("<b>"+(d+1)+"</b>/"+s);var t=$(e.cells[d].element).data("title");l.html(t?t:"")}}).trigger("updateNav"),f.off(".gallery").on({"click.gallery":function(i){i.preventDefault(),d==s-1?e.select(0):e.next()}}),r.off(".gallery").on({"click.gallery":function(i){i.preventDefault(),0==d?e.select(s-1):e.previous()}})}})})}),$(function(){function i(){e||(e=setTimeout(function(){s=$$.window.scrollTop(),s>t?s>scrollTop_was&&o.hasClass("header_fixed_show")?o.removeClass("header_fixed_show").trigger("headerHide"):s<scrollTop_was&&!o.hasClass("header_fixed_show")&&o.addClass("header_fixed_show").trigger("headerShow"):o.hasClass("header_fixed_show")&&o.removeClass("header_fixed_show").trigger("headerHide"),scrollTop_was=s,clearTimeout(e),e=null},200))}var o=$("[js-header-fixed]");if(o.length){var e,s=scrollTop_was=$$.window.scrollTop(),t=screen.height;$$.window.off(".header-top-scroll").on({"scroll.header-top-scroll":function(o){i()}}),i()}}),$(function(){var i,o=$$.window,e=o.width(),s=$("[js-kit-stacking]"),t=null,n=$("[js-header-fixed]"),a=n.outerHeight(),l=0,r=0,c=!1;o.on({"scroll.kit-stacking":function(i){e>1e3&&(l=o.scrollTop(),c=l>r,s.trigger("positionKit"))},"resize.kit-stacking load.kit-stacking":function(t){clearTimeout(i),e=o.width(),e>1e3&&(i=setTimeout(function(){s.trigger("recalcKit")},350))}}),s.each(function(i,e){var f=$(e),d=f.closest(".section").children(".section__wrapper"),h=0,g=f.height()*i+0*i,p=0,u=parseInt(f.css("top"));n.on({headerShow:function(i){h-=a,f.trigger("positionKit")},headerHide:function(i){h+=a,f.trigger("positionKit")}}),f.off(".kit").on({"recalcKit.kit":function(e){h=d.offset().top-g,p=o.width()-(d.offset().left+d.outerWidth()),n.hasClass("header_fixed_show")&&(h-=a),i==s.length-1&&(r=h+d.height()-120),!c&&f.hasClass("is-fixed")&&f.css({top:g+u,right:p})},"positionKit.kit":function(i){c&&f.hasClass("is-fixed")?f.css({top:g+u-(l-r),right:p}):l>h?(s.filter(".mod-last").removeClass("mod-last"),t=s.filter(".is-fixed"),t.eq(t.length-1).addClass("mod-last"),f.addClass("is-fixed").css({top:g+u,right:p}),n.hasClass("header_fixed_show")?f.css({marginTop:a}):f.css({marginTop:0})):l<h&&f.hasClass("is-fixed")&&(f.removeClass("is-fixed").offset(),f.css({top:"",right:"",marginTop:0}))}}).trigger("recalcKit")})});