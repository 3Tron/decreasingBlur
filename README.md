# decreasingBlur
Unblur progressively an object depending on load state

## e.g. ##
```
import {decreasingBlur} from 'decreasingblur';

const debugMode = false;

load(url) {
    let xobj = new XMLHttpRequest();
    xobj.overrideMimeType('application/json');
    xobj.open('GET', url, true);
    xobj.onreadystatechange = function () {
        
        decreasingBlur(xobj.readyState, this.refs.toggle, debugMode);
        
        if (xobj.readyState < 4) {
            //do nothing or something
        }
        if (xobj.readyState == 4 && xobj.status == '200') {
            //do your things
        }
    }.bind(this);
}
```
1.0.15
added third optional bool parameter for debugging.