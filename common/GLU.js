var GLU = function () {
  var names = ['webgl', 'experimental-webgl', 'webkit-3d', 'moz-webgl'];

  function getContext(canvas) {
    var cxt = null;
    for (var i = 0; i < names.length; ++i) {
      try {
        cxt = canvas.getContext(names[i]);
      } catch (e) {
        if (i == names.length - 1) {
          alert('no WebGL');
        }
      }
      if (cxt) break;
    }
    return cxt;
  }

  return {
    getContext: getContext
  }
}();