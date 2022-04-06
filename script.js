function ToggleItalic() {
  document.getElementById("toggle-italic").classList.toggle('italic-active');
}

function ItalicToggle() {
  document.getElementById("italic-toggle").classList.toggle('italic-active');
}

function WidthModifier(e) {
  console.log('ici', e);
  // document.getElementById("editable-content").style.fontVariationSettings('"wdth" 10')
}

function WeightModifier(e) {
  console.log('ici', e);
  // document.getElementById("editable-content").style.fontVariationSettings('"wdth" 10')
}

function ItalicModifier(e) {
  console.log('ici', e);
  // document.getElementById("editable-content").style.fontVariationSettings('"wdth" 10')
}

function MenuSliderOpen() {
  document.getElementById("menu-slider").classList.toggle('open');
}