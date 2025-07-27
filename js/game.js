// Value categories, words, and puzzle_words are stored in the wordbank.js
//Function getCookie(name) and setCookieMidnight() from cookie.js
var words_tried = [];
var cookie_categories = [];
var cookie_tries = 4;
// start up & scaling
startup();

function startup() {
  addWords();
  resizeWords();
  readCookie();
  checkSelectedBoxes();
}

function addWords() {
  for (var i = 0; i < puzzle_words.length; i++) {
    $(`#box${i + 1}`).text(puzzle_words[i]);
  }
}

function resizeWords() {
  var game_boxes = $(".game_box");
  var containerWidth = window.matchMedia(
    "only screen and (max-width: 64em) and (orientation: landscape)"
  ).matches
    ? game_boxes[0].offsetHeight + 8
    : game_boxes[0].offsetWidth;
  var font_size = parseFloat(window.getComputedStyle(game_boxes[0]).fontSize);

  game_boxes.each(function () {
    var text = this.textContent.trim();
    var text_ratio = 1;

    if (text.includes(" ")) {
      var text_array = text.split(" ");
      for (var i = 0; i < text_array.length; i++) {
        textWidth = text_array[i].length * font_size * 0.75;
        if (containerWidth / textWidth < text_ratio) {
          text_ratio = containerWidth / textWidth;
        }
      }
      var newFontSize = Math.round(font_size * text_ratio);
      $(this).css("font-size", `${newFontSize}px`);
    } else if (text.includes("-")) {
      var text_array = text.split("-");
      for (var i = 0; i < text_array.length; i++) {
        textWidth = text_array[i].length * font_size * 1.01;
        if (containerWidth / textWidth < text_ratio) {
          text_ratio = containerWidth / textWidth;
        }
      }
      var newFontSize = Math.round(font_size * text_ratio);
      $(this).css("font-size", `${newFontSize}px`);
    } else {
      textWidth = text.length * font_size * 0.79;
      if (textWidth > containerWidth) {
        var newFontSize = Math.round(font_size * (containerWidth / textWidth));
        $(this).css("font-size", `${newFontSize}px`);
      }
    }
  });

  var main = $("main");
  var mainGameWrapper = $(".main_game_wrapper")[0];

  var main_width = window.matchMedia(
    "only screen and (max-width: 64em) and (orientation: landscape)"
  ).matches
    ? mainGameWrapper.offsetHeight + 6
    : mainGameWrapper.offsetWidth + 6;
  main.css("width", `${main_width}px`);
}

function readCookie() {
  var categoryCookie = getCookie("category_apaids");
  if (categoryCookie) {
    var categoryArray = JSON.parse(categoryCookie);

    if (categoryArray[0] == 0 || categoryArray.length == 5) {
      for (var i = 0; i < categories.length; i++) {
        if ($(`#category${i}`).length === 0) {
          var game_boxes = $();

          words[i].forEach((id) => {
            game_boxes = $.merge(game_boxes, $(`#box${id}`));
          });

          CreateCategoryFast(game_boxes, i);
        }
      }
      $(".start_button").text("Reseult");
      $(".game_tries_wrapper").remove();
      $(".game_button_wrapper").text("Please Come Again tommorrow!");
      return "";
    }

    if (categoryArray[0] != 4) {
      cookie_tries = categoryArray[0];
      for (var i = 4; i > cookie_tries; i--) {
        Trypop();
      }
    }
    for (var i = 1; i < categoryArray.length; i++) {
      category_id = categoryArray[i];
      if ($(`#category${categories[category_id]}`).length === 0) {
        var game_boxes = $();
        words[category_id].forEach((id) => {
          game_boxes = $.merge(game_boxes, $(`#box${id}`));
        });
        CreateCategoryFast(game_boxes, category_id);
        cookie_categories.push(i);
      }
    }
    $(".start_button").text("Continue");
  }
}

// Listeners
function checkSelectedBoxes() {
  var selectedBoxes = $(".game_box_selected").length;

  if (selectedBoxes == 4) {
    $("#Submit").addClass("ready");
    $("#Submit").prop("disabled", false);
  } else {
    $("#Submit").removeClass("ready");
    $("#Submit").prop("disabled", true);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var game_boxes = $(".game_box");
  var maxSelected = 4;

  game_boxes.each(function () {
    this.addEventListener("click", () => {
      if ($(this).hasClass("game_box_selected")) {
        $(this).removeClass("game_box_selected");
      } else {
        var selectedBoxes = $(".game_box_selected").length;
        if (selectedBoxes < maxSelected) {
          $(this).addClass("game_box_selected");
        }
      }

      checkSelectedBoxes();
    });
  });
});

// Buttons
function Start() {
  var wrapper = $(".startingwrapper");
  wrapper.removeClass("animate_end").addClass("animate_start");
}

function Shuffle() {
  var wrapper = $(".main_game_wrapper");
  var boxes = $(".game_box");
  wrapper.empty();
  while (boxes.length) {
    wrapper.append(
      boxes.splice(Math.floor(Math.random() * boxes.length), 1)[0]
    );
  }
  wrapper.append("<span></span>");
}

function DeselectAll() {
  var selectedBoxes = $(".game_box_selected");
  selectedBoxes.each(function () {
    $(this).removeClass("game_box_selected");
  });
}

// Submit Machenism
function CheckWin() {
  var selectedBoxes = $(".game_box_selected");
  var selectedID = selectedBoxes
    .map(function () {
      return parseInt($(this).attr("id").slice(3));
    })
    .get();

  // Check if combination tried
  for (var i = 0; i < words_tried.length; i++) {
    if (words_tried[i].every((id) => selectedID.includes(id))) {
      $(".message")
        .text("You Tried This Already...")
        .addClass("animate_message");
      setTimeout(function () {
        $(".message").text("").removeClass("animate_message");
      }, 2500);
      DeselectAll();
      return;
    }
  }

  words_tried[words_tried.length] = selectedID;

  $("#Submit").removeClass("ready");
  $("#Submit").prop("disabled", true);
  for (var i = 0; i < categories.length; i++) {
    var targetIds = words[i].map(function (id) {
      return id;
    });

    var correct_words = targetIds.filter((id) =>
      selectedID.includes(id)
    ).length;

    //check if form category
    if (correct_words === 4) {
      if ($(".category").length == 3) {
        Confetti();
        CreateCategory(selectedBoxes, i);
        cookie_categories.push(i);
        setCookieMidnight(
          "category_apaids",
          JSON.stringify([cookie_tries, ...cookie_categories])
        );
        $(".message").text("Great Job!").addClass("animate_message");
        setTimeout(function () {
          $(".start_button").text("Reseult");
          $(".startingwrapper")
            .removeClass("animate_start")
            .addClass("animate_end");
        }, 3000);
        $(".game_tries_wrapper").remove();
        $(".game_button_wrapper").text("Please Come Again tommorrow!");
        return;
      }
      cookie_categories.push(i);
      setCookieMidnight(
        "category_apaids",
        JSON.stringify([cookie_tries, ...cookie_categories])
      );
      CreateCategory(selectedBoxes, i);
      return;
    } else if (correct_words === 3) {
      $(".message").text("One Away...").addClass("animate_message");
      setTimeout(function () {
        $(".message").text("").removeClass("animate_message");
      }, 2500);
    }
  }

  Fail(selectedBoxes);

  if ($(".try").length == 1) {
    setTimeout(function () {
      Lose();
    }, 700);
    return;
  }
}

function CreateCategory(game_boxes, position) {
  var new_category = MoveBoxes(game_boxes, position);
  var Texts = $(game_boxes)
    .map(function () {
      return $(this).text().trim();
    })
    .get();
  setTimeout(function () {
    RemoveBoxes(game_boxes);
    new_category
      .removeClass("animate_fade")
      .addClass("animate_appear")
      .append(`<h3>${categories[position]}</h3><p>${Texts.join(", ")}</p>`);
  }, 900);
}

function CreateCategoryFast(game_boxes, position) {
  var new_category = MoveBoxes(game_boxes, position);
  var Texts = $(game_boxes)
    .map(function () {
      return $(this).text().trim();
    })
    .get();
  RemoveBoxes(game_boxes);
  new_category
    .removeClass("animate_fade")
    .append(`<h3>${categories[position]}</h3><p>${Texts.join(", ")}</p>`);
}

function RemoveBoxes(game_boxes) {
  game_boxes.each(function () {
    $(this).remove();
  });
}

function MoveBoxes(game_boxes, position) {
  $(".game_category_wrapper").append(
    `<div class="category animate_fade" id="category${position}" style="height: ${game_boxes[0].offsetHeight}px"></div>`
  );
  for (let i = 0; i < selected_boxes.length; i++) {
    new_category.append(selected_boxes[i]);
  }
  var new_category = $(`#category${position}`);
  return new_category;
}

function Fail(game_boxes) {
  game_boxes.each(function () {
    $(this).addClass("animate_fail");
  });
  setTimeout(function () {
    Trypop();
    CleanBoxes();
    setCookieMidnight(
      "category_apaids",
      JSON.stringify([$(".try").length, ...cookie_categories])
    );
  }, 700);
}

function Trypop() {
  var tries = $(".try");
  var pop_try = $(`#try${tries.length}`);
  pop_try.addClass("try_pop").addClass("animate_pop");
  pop_try.removeClass("try");
}

function CleanBoxes() {
  needed_clean_boxes = $(".animate_fail");
  needed_clean_boxes.each(function () {
    $(this).removeClass("animate_fail");
  });
}

//Losing Animation
function Lose() {
  DeselectAll();
  for (var i = 0; i < categories.length; i++) {
    if ($(`#category${i}`).length === 0) {
      var game_boxes = $();

      words[i].forEach((id) => {
        game_boxes = $.merge(game_boxes, $(`#box${id}`));
      });

      CreateCategory(game_boxes, i);
    }
  }
  $(".message")
    .text("Try Another Day...")
    .removeClass("animate_message")
    .addClass("animate_message");
  setTimeout(function () {
    $(".start_button").text("Reseult");
    $(".startingwrapper").removeClass("animate_start").addClass("animate_end");
  }, 4000);
  $(".game_tries_wrapper").remove();
  $(".game_button_wrapper").text("Please Come Again tommorrow!");
}

// Generate confetti
function Confetti() {
  const confettiWrapper = document.querySelector(".confetti_wrapper");
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti-piece");
    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.setProperty("--fall-duration", `${Math.random() * 3 + 3}s`);
    confetti.style.setProperty("--confetti-color", getRandomColor());
    confettiWrapper.appendChild(confetti);
  }
  function getRandomColor() {
    const colors = ["#ff6347", "#ffa500", "#32cd32", "#1e90ff", "#ff69b4"];
    return colors[Math.floor(Math.random() * colors.length)];
  }
}

