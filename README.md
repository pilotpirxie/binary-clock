# Binary Clock
DOM manipulated binary clock widget.

### Demo
```
https://herbaciarz.github.io/binary-clock/demo.html
```

### How to use
* Download ZIP file or clone repository.
* Attach the script at the end of file.
* Create a new instance of object.
* Run it or check the demo.

### Setup
```js
function(){
    /**
    * BinaryClock constructor accepts two parameteres.
    * First is an id of div to append, second is a font size.
    ***/
    const clock = new BinaryClock('binary-clock',32);
    clock.start(1000);
})();
```

### License
```
MIT
```
