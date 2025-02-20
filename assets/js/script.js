document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "visible") {
    document.title = "Submissionku";
    $("#favicon").attr("href", "../assets/img/logo.png");
  } else {
    document.title = "Submissionku";
    $("#favicon").attr("href", "../assets/img/logo.png");
  }
});