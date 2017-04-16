# Binary Clock
DOM manipulated binary clock widget.

### Demo
```
https://herbaciarz.github.io/binary-clock/demo.html
```

### How to use
* Download ZIP file or clone repository.
* Attach script at the end of file.
* Create new instance of object.
* Run it.

### Setup
```js
function(){
    /**
    * BinaryClock constructor accepts two parameteres.
    * First was id of div to append, second is font size.
    ***/
    const clock = new BinaryClock('binary-clock',32);
    clock.start(1000);
})();
```

### License
```
MIT
```
