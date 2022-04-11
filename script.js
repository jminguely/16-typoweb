function ToggleItalic() {
  document.getElementById("toggle-italic").classList.toggle('italic-active');
}

function ItalicToggle() {
  document.getElementById("italic-toggle").classList.toggle('italic-active');
}

function WidthModifier(e) {
  console.log('width', e);
  if (e = 25) {
    document.getElementById("editable-content").style.fontVariationSettings('"wdth" 25')
  }

  if (e > 26) {
    document.getElementById("editable-content").style.fontVariationSettings('"wdth" 26')
  }

  if (e > 27) {
    document.getElementById("editable-content").style.fontVariationSettings('"wdth" 27')
  }

  if (e > 28) {
    document.getElementById("editable-content").style.fontVariationSettings('"wdth" 28')
  }

  if (e > 29) {
    document.getElementById("editable-content").style.fontVariationSettings('"wdth" 29')
  }

  if (e > 30) {
    document.getElementById("editable-content").style.fontVariationSettings('"wdth" 30')
  }

  if (e > 31) {
    document.getElementById("editable-content").style.fontVariationSettings('"wdth" 31')
  }

  if (e > 32) {
    document.getElementById("editable-content").style.fontVariationSettings('"wdth" 32')
  }

  if (e > 200) {
    document.getElementById("editable-content").style.fontVariationSettings('"wdth" 200')
  }
}

function WeightModifier(e) {
  console.log('weight', e);
  // document.getElementById("editable-content").style.fontVariationSettings('"wdth" 10')
}

function ItalicModifier(e) {
  console.log('italic', e);
  // document.getElementById("editable-content").style.fontVariationSettings('"wdth" 10')
}

function MenuSliderOpen() {
  document.getElementById("menu-slider").classList.toggle('open');
}