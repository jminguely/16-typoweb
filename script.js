function ToggleItalic() {
  document.getElementById("toggle-italic").classList.toggle('italic-active');
}

function ItalicToggle() {
  document.getElementById("italic-toggle").classList.toggle('italic-active');
}

function WidthModifier(e) {
  console.log('width', e);
  document.getElementById("editable-content").style.setProperty(`--text-width`, e);
}

function WeightModifier(a) {
  console.log('weight', a);
  document.getElementById("editable-content").style.setProperty(`--text-weight`, a);
}

function ItalicModifier(l) {
  console.log('italic', l);
  document.getElementById("editable-content").style.setProperty(`--text-italic`, l);
}

function MenuSliderOpen() {
  document.getElementById("menu-slider").classList.toggle('open');
}