exports.decreasingBlur = function (state, obj, debug) {
  var blur = null;
  switch (Number(state)) {
    case 0:
      blur = 'blur(10px)';
      break;
    case 1:
      blur = 'blur(8px)';
      break;
    case 2:
      blur = 'blur(6px)';
      break;
    case 3:
      blur = 'blur(4px)';
      break;
    case 4:
      blur = 'blur(0px)';
      break;
  }
  if (blur !== null) {
    obj.style.WebkitFilter = blur;
    obj.style.Filter = blur;
  }
  if (debug !== undefined && debug !== false) {
    console.log('decreasingBlur', state, blur, obj);
  }
}
