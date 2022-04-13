function ToggleItalic() {
  document.getElementById("toggle-italic").classList.toggle('italic-active');
}

function ItalicToggle() {
  document.getElementById("italic-toggle").classList.toggle('italic-active');
}

function WidthModifier(e) {
  console.log('width', e);
  // if (e = 25) {
  //  document.getElementById("editable-content").style.fontWeight('25')
  // }
}

function WeightModifier(e) {
  console.log('weight', e);
  document.getElementById("editable-content").style.setProperty(`--text-weight`, e);
  if (e = 120) {
    // document.getElementById("editable-content").classList.toggle('weight-120');
  }
}

function ItalicModifier(e) {
  console.log('italic', e);
  // document.getElementById("editable-content").style.fontVariationSettings('"wdth" 10')
}

function MenuSliderOpen() {
  document.getElementById("menu-slider").classList.toggle('open');
}