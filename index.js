export function decreasingBlur(state, obj) {
    if (state === 0) {
      obj.style.WebkitFilter = 'blur(6px)';
      obj.style.Filter = 'blur(5px)';
    }
    if (state === 1) {
      obj.style.WebkitFilter = 'blur(4px)';
      obj.style.Filter = 'blur(4px)';
    }
    if (state === 1) {
      obj.style.WebkitFilter = 'blur(3px)';
      obj.style.Filter = 'blur(3px)';
    }
    if (state === 2) {
      obj.style.WebkitFilter = 'blur(2px)';
      obj.style.Filter = 'blur(2px)';
    }
    if (state === 3) {
      obj.style.WebkitFilter = 'blur(1px)';
      obj.style.Filter = 'blur(1px)';
    }
    if (state === 4) {
      obj.style.WebkitFilter = 'blur(0px)';
      obj.style.Filter = 'blur(0px)';
    }
  }