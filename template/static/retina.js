(function (window, document) {
  var docEl = document.documentElement
  var dpr = window.devicePixelRatio || 1
  var scale = 1 / dpr

  // set viewport
  document.querySelector('meta[name=viewport]').setAttribute('content', 'width=device-width,initial-scale='+scale+',maximum-scale='+scale+',minimum-scale='+scale+',user-scalable=no');

  // set 1rem based on iPhone6 750px width
  function setRemUnit () {
    var rem = docEl.clientWidth / 7.5 // 750/7.5=100
    docEl.style.fontSize = rem + 'px'
  }

  setRemUnit()

  // reset rem unit on page resize
  window.addEventListener('resize', setRemUnit)
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      setRemUnit()
    }
  })

}(window, document))
