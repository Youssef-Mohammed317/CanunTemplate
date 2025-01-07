$(window).ready(function () {
  // start header

  //start search icon
  let searchBtn = $("header .search");
  let searchBox = $("header .search-box");
  searchBtn.click(function () {
    searchBox.toggleClass("active");
    searchBtn.toggleClass("active");
    searchBox.find("input").focus();
  });
  // end search icon

  // start shop icon
  let shopBtnOpen = $("header .shop-open-btn ");
  let shopBtnClose = $("header .shop-nav > .nav-close-btn");
  let shop = $("header .shop-nav");
  shopBtnOpen.click(function () {
    shop.addClass("active");
  });
  shopBtnClose.click(function () {
    shop.removeClass("active");
  });
  // end shop icon

  // navList
  let navList = $("header nav");
  let navOpenBtn = $("header .barger");
  let subLists = $("header nav ul > li > ul");
  let subListsLinks = $("header nav ul > li");
  let closeSubListsBtn = $(".nav-close-btn.main ");
  // reset on load
  navOpenBtn.click(function () {
    navList.addClass("active");
    subLists.slideUp();
    subListsLinks.removeClass("active");
    navOpenBtn.find(".icon").addClass("active");
  });

  subListsLinks.click(function () {
    $(this).next().find("> ul").slideToggle();
    $(this).toggleClass("active");
  });

  closeSubListsBtn.click(function () {
    subLists.slideUp();
    subListsLinks.removeClass("active");
    navList.removeClass("active");
    navOpenBtn.find(".icon").removeClass("active");
  });
  // navList
  // nav scroll
  let scrollFlag = false;
  let navBar = $("header .nav-bar");
  let navBarLimit = $("header + section");
  let navBarLimitNum = navBarLimit.height() + navBarLimit.offset().top + 60;
  let prevPos = navBar.offset().top;
  $(window).scroll(function () {
    if (!navList.hasClass("active")) {
      if ($(window).scrollTop() > $("header").height()) {
        navBar.addClass("active");
      } else {
        navBar.removeClass("active");
      }
      if (!scrollFlag) {
        if ($(window).scrollTop() > navBarLimitNum) {
          let currentPos = navBar.offset().top;
          if (currentPos > prevPos) {
            navBar.removeClass("show");
          } else {
            navBar.addClass("show");
          }
          prevPos = navBar.offset().top;
        }
      }
      if ($(window).scrollTop() == 0) {
        scrollFlag = false;
      }
    }
  });
  // end header

  // start hero
  // landing Adjust Height
  $(".landing").height($(window).height() - $("header").height());
  $(window).resize(function () {
    $(".landing").height($(window).height() - $("header").height());
  });
  // end hero landing

  // required
  let required = $(".required");
  required.each(function () {
    $(this).next().text($(this).data("required"));
    $(this).next().slideUp();
  });
  $("form").submit(function (e) {
    e.preventDefault();
    $(this)
      .find(".required")
      .each(function () {
        if ($(this).val() == null || $(this).val() == "") {
          $(this).next().slideDown();
        } else {
          $(this).next().slideUp();
        }
      });
  });

  // btn scroll up at 1010
  // start 150

  // width = (192 - 150)* scroll percent + 150

  // end 192
  let scrollUpBtn = $(".scroll-up");
  scrollUpBtn.fadeOut();
  $(window).scroll(function () {
    if ($(window).scrollTop() > 1010) {
      scrollUpBtn.fadeIn();
    } else {
      scrollUpBtn.fadeOut();
    }
    let scrollPercent =
      $(window).scrollTop() / ($("body").height() - $(window).height());
    $(".scroll-up circle").css(
      "stroke-dasharray",
      (192 - 150) * scrollPercent + 150
    );
  });

  scrollUpBtn.click(function () {
    scrollFlag = true;
    $(window).scrollTop(0);
  });
  // end btn scroll up at 1010

  // photo section
  let liPhoto = $(".photo ul li");
  let imgPhoto = $(".photo .img");

  liPhoto.click(function () {
    let liData = $(this).data("img");
    $(this).addClass("active").siblings().removeClass("active");
    imgPhoto.each(function () {
      if ($(this).data("img-value") == liData) {
        $(this).addClass("active").siblings().removeClass("active");
      }
    });
  });
  // end photo section

  // gallery section

  // adjust imgs position
  $(window).resize(function () {});
  function adjustGalleryImgs() {
    let imgsGallery = $(".gallery .img.active");
    let galleryBox = $(".gallery .cont-img");
    let totalHeightEven = 0;
    let totalHeightOdd = 0;
    let totalHeight = 0;
    if ($(window).width() > 575) {
      imgsGallery.each(function (i) {
        $(this).css("position", "absolute");
        if (i % 2 == 0) {
          //even
          $(this).css("left", "0");
          $(this).css("top", totalHeightEven);
          totalHeightEven += $(this).height();
          totalHeightEven += 15;
        } else {
          // odd
          $(this).css("left", "50%");
          $(this).css("top", totalHeightOdd);
          totalHeightOdd += $(this).height();
          totalHeightOdd += 15;
        }
      });
      if (totalHeightEven > totalHeightOdd) {
        galleryBox.css("height", totalHeightEven);
      } else {
        galleryBox.css("height", totalHeightOdd);
      }
    } else {
      imgsGallery.each(function () {
        $(this).css("position", "absolute");
        $(this).css("left", "0");
        $(this).css("top", totalHeight);
        totalHeight += $(this).height();
        totalHeight += 15;
        galleryBox.css("height", totalHeight);
      });
    }
  }
  adjustGalleryImgs();
  $(window).resize(adjustGalleryImgs);
  // active
  let liGallery = $(".gallery ul li");
  liGallery.click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    let liData = $(this).data("gallery");
    if (liData == "all") {
      $(".gallery .img").each(function () {
        $(this).addClass("active");
      });
    } else {
      $(".gallery .img").each(function () {
        if ($(this).data("gallery-value").split(" ").includes(liData)) {
          $(this).addClass("active");
        } else {
          $(this).removeClass("active");
        }
      });
    }
    adjustGalleryImgs();
  });
  // meet
  let socialIcon = $(".meet .card .social li:first-child");
  socialIcon.click(function () {
    $(this).toggleClass("active").siblings().toggleClass("active");
  });
  // meet
  // end gallery section
});

// start header

//start search icon
// let searchBtn = document.querySelector("header .search");
// searchBtn.addEventListener("click", function () {
//   if (searchBtn.classList.contains("active")) {
//     searchBtn.classList.remove("active");
//   } else {
//     searchBtn.classList.add("active");
//   }
// });
// end search icon

// start shop icon
// let shopBtnOpen = document.querySelector("header .shop-open-btn");
// let shopCloseBtn = document.querySelector("header .shop-nav > .nav-close-btn");
// shopBtnOpen.addEventListener("click", function () {
//   document.querySelector("header .shop-nav").classList.add("active");
// });
// shopCloseBtn.addEventListener("click", function () {
//   document.querySelector("header .shop-nav").classList.remove("active");
// });

// end shop icon

// end header
