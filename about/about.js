$(document).ready(function () {
    var api_key = "563492ad6f917000010000017690ecfff6ab4c5b9dcffa5f3544647c";
    var image = "";
  
    $("#form").submit(function (event) {
      event.preventDefault();
  
      var search = $("#search").val();
  
      imagesearch();
    });
    function imagesearch() {
      $.ajax({
        method: "GET",
        beforeSend: function (xhr) {
          xhr.setRequestHeader("Authorization", api_key);
        },
        url:
          "https://api.pexels.com/v1/search?query=" +
          $("#search").val() +
          "&per_page=6&page=1",
  
        success: function (data) {
          console.log(data);
  
          data.photos.forEach((photo) => {
            image = `
                    <img src = "${photo.src.original}" width = "400" height = "300"/>
                    `;
            $("#images").append(image);
          });
        },
        error: function (error) {
          console.error();
        },
      });
    }
  });



  $(document).ready(function () {
    $(window).scroll(function () {
      // sticky navbar on scroll script
      if (this.scrollY > 100) {
        $(".navbar").addClass("apear");
      } else {
        $(".navbar").removeClass("apear");
      }
    });
    // toggle menu/navbar script
    $(".menu-btn").click(function () {
      $(".navbar .menu").toggleClass("active");
      $(".menu-btn i").toggleClass("active");
    });
    // typing text animation script
    var typed = new Typed(".typing", {
      strings: [
        "Ethiopia",
        "The Mother Continent",
        "Owner of Nature",
        "Land of Diversity",
      ],
      typeSpeed: 90,
      backSpeed: 60,
      loop: true,
    });
    var typed = new Typed(".typing-2", {
      strings: ["Traveling", "Photography", "Sport", "Designing", "Football"],
      typeSpeed: 90,
      backSpeed: 60,
      loop: true,
    });
  });
  
  