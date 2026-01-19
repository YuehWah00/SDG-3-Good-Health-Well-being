$(function () {
  // Card hover: CSS handles most of the effect,
  // keep this for extra transform fallback.
  $(".card").hover(
    function () { $(this).css("transform", "scale(1.03)"); },
    function () { $(this).css("transform", "scale(1)"); }
  );

  // File input: show chosen filename
  const $file = $("#file");
  const $fileName = $(".file-name");
  $file.on("change", function () {
    const files = this.files;
    if (!files || files.length === 0) {
      $fileName.text("No file chosen");
      return;
    }
    $fileName.text(files[0].name);
  });

  // Form submission: prevent default and show a simple message (replace with real submit logic)
  $("#contact-form").on("submit", function (e) {
    e.preventDefault();
    // You can replace this with AJAX or normal submission
    alert("Thanks! Your form has been received (demo).");
    this.reset();
    $fileName.text("No file chosen");
  });

  // Simple mobile nav toggle
  $(".nav-toggle").on("click", function () {
    $(".main-nav a").toggle();
  });
});

const $fileName = $(".file-name");
