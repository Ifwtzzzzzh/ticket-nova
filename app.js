$(document).ready(function () {
  console.log("🎫 TicketNova Ready");

  /* =========================
     CHECK LOGIN STATUS
  ========================= */

  if (localStorage.getItem("login") === "true") {
    $(".btn-login").text("Dashboard");
  }

  /* =========================
     BUTTON ANIMATION GLOBAL
  ========================= */

  $("button, .btn").hover(
    function () {
      $(this).css({
        transform: "scale(1.05)",
        transition: "0.2s",
      });
    },
    function () {
      $(this).css({
        transform: "scale(1)",
      });
    },
  );

  /* =========================
     SMOOTH SCROLL
  ========================= */

  $("a[href^='#']").on("click", function (e) {
    e.preventDefault();
    let target = $(this.getAttribute("href"));
    if (target.length) {
      $("html, body").animate(
        {
          scrollTop: target.offset().top,
        },
        500,
      );
    }
  });

  /* =========================
     AUTO LOAD WISHLIST COUNT
  ========================= */

  updateWishlistBadge();

  /* =========================
     NOTIFICATION SYSTEM SIMPLE
  ========================= */

  window.showNotif = function (message) {
    let notif = $(
      <div class="alert alert-info position-fixed top-0 end-0 m-3 shadow">
        ${message}
      </div>,
    );

    $("body").append(notif);

    setTimeout(() => {
      notif.fadeOut(500, function () {
        $(this).remove();
      });
    }, 2000);
  };
});

/* =========================
   WISHLIST FUNCTIONS GLOBAL
========================= */

function getWishlist() {
  return JSON.parse(localStorage.getItem("wishlist")) || [];
}

function saveWishlist(data) {
  localStorage.setItem("wishlist", JSON.stringify(data));
}

function addToWishlist(eventName) {
  let wishlist = getWishlist();

  if (!wishlist.includes(eventName)) {
    wishlist.push(eventName);
    saveWishlist(wishlist);

    showNotif("❤️ Added to Wishlist");
  } else {
    showNotif("⚠ Already in Wishlist");
  }
}

function updateWishlistBadge() {
  let wishlist = getWishlist();

  $("#wishCount, .wishCount").text(wishlist.length);
}

/* =========================
   LOGIN HELPERS
========================= */

function isLoggedIn() {
  return localStorage.getItem("login") === "true";
}

function logout() {
  localStorage.removeItem("login");
  showNotif("Logged out");
  setTimeout(() => {
    window.location.href = "login.html";
  }, 1000);
}
