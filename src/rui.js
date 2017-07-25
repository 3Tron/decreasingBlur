exports.decreasingBlur = function(state, obj, debug) {
  var httpStatusBlur = [
    8, //status 0
    6, //status 1
    4, //status 2
    2, //status 3
    0, //status 4 DONE
  ];
  var blur = 'blur(' + httpStatusBlur[state] + 'px)';
  obj.style.WebkitFilter = blur;
  obj.style.Filter = blur;
  if (debug !== undefined && debug !== false) {
    console.log('decreasingBlur', state, blur, obj);
  }
}
