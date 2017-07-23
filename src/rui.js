exports.decreasingBlur = function (state, obj, debug) {
  if (debug !== undefined && debug !== false) {
    console.log('decreasingBlur', state, obj);
  }
  if (state == 0) {
    obj.style.WebkitFilter = 'blur(10px)';
    obj.style.Filter = 'blur(10px)';
  }
  if (state == 1) {
    obj.style.WebkitFilter = 'blur(8px)';
    obj.style.Filter = 'blur(8px)';
  }
  if (state == 1) {
    obj.style.WebkitFilter = 'blur(6px)';
    obj.style.Filter = 'blur(6px)';
  }
  if (state == 2) {
    obj.style.WebkitFilter = 'blur4px)';
    obj.style.Filter = 'blur(4px)';
  }
  if (state == 3) {
    obj.style.WebkitFilter = 'blur(2px)';
    obj.style.Filter = 'blur(2px)';
  }
  if (state == 4) {
    obj.style.WebkitFilter = 'blur(0px)';
    obj.style.Filter = 'blur(0px)';
  }
}