exports.decreasingBlur = function(state, obj, debug) {
  var httpStatusBlur = [
    6, //status 0
    4, //status 1
    2, //status 2
    0, //status 4 DONE
  ];
  var blur = 'blur(' + httpStates[state] + 'px)';
  obj.style.WebkitFilter = blur;
  obj.style.Filter = blur;
  if (debug !== undefined && debug !== false) {
    console.log('decreasingBlur', state, blur, obj);
  }
}
