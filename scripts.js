function toggleSummary(element) {
  const summary = element.querySelector(".summary");
  if (summary.style.display === "block") {
    summary.style.display = "none";
  } else {
    summary.style.display = "block";
  }
}
