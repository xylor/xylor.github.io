function openBottomOverlay(overlayView) {
  document.getElementById(overlayView).style.bottom = "0";
  document.getElementById(overlayView).style.height = "100%";
}

function closeLeftRightOverlay(overlayView) {
  document.getElementById(overlayView).style.width = "0%";
}
