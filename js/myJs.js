const textConfig = {
  text1: "Hello Quỳnh!",
  text2: "Năm 2023 đến rồi anh có cái này cho em ^^",
  text3: "Chúc em có một năm thật cháy từng bước hoàn thành dự định của bản thân nhé",
  text4: "Em thấy trai Nam Định chúc mừng năm mới như thế nào",
  text6: "Toẹt vời!!!",
  text5: "Dở tệ á =))",
  text7: "Anh cũng có dự định cho năm 2023 về công việc những chuyến đi, hình xăm và cả những chiếc áo đôi nữa, em có muốn tham gia cùng anh không :vvvv",
  text8: "Gửi cho anh <3",
  text9: "Em đồng ý hai tay hai chân luôn",
  text10: "Anh biết mà ^^",
  text11:
    "Anh rất vui vì mình đã kết bạn với nhau thời gian sắp tới mình lên kèo bi a nha",
  text12: "<3 <3 <3",
};

$(document).ready(function () {
  // process bar
  setTimeout(function () {
    firstQuestion();
    $(".spinner").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
    $("body").delay(350).css({
      overflow: "visible",
    });
  }, 600);

  $("#text3").html(textConfig.text3);
  $("#text4").html(textConfig.text4);
  $("#no").html(textConfig.text5);
  $("#yes").html(textConfig.text6);

  function firstQuestion() {
    $(".content").hide();
    Swal.fire({
      title: textConfig.text1,
      text: textConfig.text2,
      imageUrl: "img/cuteCat.jpg",
      imageWidth: 300,
      imageHeight: 300,
      background: '#fff url("img/iput-bg.jpg")',
      imageAlt: "Custom image",
    }).then(function () {
      $(".content").show(200);
    });
  }

  // switch button position
  function switchButton() {
    var audio = new Audio("sound/duck.mp3");
    audio.play();
    var leftNo = $("#no").css("left");
    var topNO = $("#no").css("top");
    var leftY = $("#yes").css("left");
    var topY = $("#yes").css("top");
    $("#no").css("left", leftY);
    $("#no").css("top", topY);
    $("#yes").css("left", leftNo);
    $("#yes").css("top", topNO);
  }
  // move random button póition
  function moveButton() {
    var audio = new Audio("sound/Swish1.mp3");
    audio.play();
    if (screen.width <= 600) {
      var x = Math.random() * 300;
      var y = Math.random() * 500;
    } else {
      var x = Math.random() * 500;
      var y = Math.random() * 500;
    }
    var left = x + "px";
    var top = y + "px";
    $("#no").css("left", left);
    $("#no").css("top", top);
  }

  var n = 0;
  $("#no").mousemove(function () {
    if (n < 1) switchButton();
    if (n > 1) moveButton();
    n++;
  });
  $("#no").click(() => {
    if (screen.width >= 900) switchButton();
  });

  // generate text in input
  function textGenerate() {
    var n = "";
    var text = " " + textConfig.text9;
    var a = Array.from(text);
    var textVal = $("#txtReason").val() ? $("#txtReason").val() : "";
    var count = textVal.length;
    if (count > 0) {
      for (let i = 1; i <= count; i++) {
        n = n + a[i];
        if (i == text.length + 1) {
          $("#txtReason").val("");
          n = "";
          break;
        }
      }
    }
    $("#txtReason").val(n);
  }

  // show popup
  $("#yes").click(function () {
    var audio = new Audio("sound/tick.mp3");
    audio.play();
    Swal.fire({
      title: textConfig.text7,
      html: true,
      width: 900,
      padding: "3em",
      html: "<input type='text' class='form-control' id='txtReason'  placeholder=''>",
      background: '#fff url("img/iput-bg.jpg")',
      backdrop: `
                    rgba(0,0,123,0.4)
                    url("img/giphy2.gif")
                    left top
                    no-repeat
                  `,
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonColor: "#fe8a71",
      cancelButtonColor: "#f6cd61",
      confirmButtonText: textConfig.text8,
    }).then((result) => {
      if (result.value) {
        var audio = new Audio("sound/baby-baby-chi-can-nhin-thay-em-cuoi-chut-thoi-babybaby-monstar.mp3");
        audio.play();
        Swal.fire({
          width: 900,
          confirmButtonText: textConfig.text12,
          background: '#fff url("img/iput-bg.jpg")',
          title: textConfig.text10,
          text: textConfig.text11,
          confirmButtonColor: "#83d0c9",
          onClose: () => {
            window.location = "https://www.google.com/search?q=%C3%A1o+%C4%91%C3%B4i+m%C3%B9a+%C4%91%C3%B4ng&tbm=isch&ved=2ahUKEwj47_LqlqT8AhUSJqYKHRvcBgoQ2-cCegQIABAA&oq=%C3%A1o+%C4%91%C3%B4i&gs_lcp=CgNpbWcQARgHMgQIIxAnMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgQIABBDMgUIABCABDIFCAAQgARQAFgAYM8qaABwAHgAgAGaAYgBmgGSAQMwLjGYAQCqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=ElawY_ieIpLMmAWbuJtQ&bih=689&biw=1440";
          },
        });
      }
    });

    $("#txtReason").focus(function () {
      var handleWriteText = setInterval(function () {
        textGenerate();
      }, 10);
      $("#txtReason").blur(function () {
        clearInterval(handleWriteText);
      });
    });
  });
});
