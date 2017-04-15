class BinaryClock {
    constructor (id = 'binary-clock'){
        this.clockObj = document.getElementById(id);

        this.clockObj.innerHTML = `
            <div id="" style="display: inline; color: transparent;">O</div>
            <div id="h10" style="display: inline;">O</div>
            <div id="" style="display: inline; color: transparent;">O</div>
            <div id="m10" style="display: inline;">O</div>
            <div id="" style="display: inline; color: transparent;">O</div>
            <div id="s10" style="display: inline;">O</div>
            <br>
            <div id="" style="display: inline; color: transparent;">O</div>
            <div id="h11" style="display: inline;">O</div>
            <div id="m00" style="display: inline;">O</div>
            <div id="m11" style="display: inline;">O</div>
            <div id="s00" style="display: inline;">O</div>
            <div id="s11" style="display: inline;">O</div>
            <br>
            <div id="h00" style="display: inline;">O</div>
            <div id="h12" style="display: inline;">O</div>
            <div id="m01" style="display: inline;">O</div>
            <div id=m12" style="display: inline;">O</div>
            <div id="s01" style="display: inline;">O</div>
            <div id="s12" style="display: inline;">O</div>
            <br>
            <div id="h01" style="display: inline;">O</div>
            <div id="h13" style="display: inline;">O</div>
            <div id="m02" style="display: inline;">O</div>
            <div id="m13" style="display: inline;">O</div>
            <div id="02" style="display: inline;">O</div>
            <div id="s13" style="display: inline;">O</div>
        `;

        this.hoursEl1 = ['h00', 'h01'];
        this.hoursEl2 = ['h10', 'h11', 'h12', 'h13'];

        this.minutesEl1 = ['m00', 'm01', 'm02'];
        this.minutesEl2 = ['m10', 'm11', 'm12', 'm13'];

        this.secondsEl1 = ['s00', 's01', 's02'];
        this.secondsEl2 = ['s10', 's11', 's12', 's13'];

    }

    // zeroFill( number, width ) {
    //     width -= number.toString().length;
    //     if (width > 0) {
    //         return new Array(width + (/\./.test(number) ? 2 : 1)).join('0') + number;
    //     }
    //     return number + "";
    // }

    start(interval){

        var date;

        setInterval(function(){

            date = new Date();

            let hours2 = this.parseInt(parseInt(date.getHours().toString().slice('')[0]).toString(2));
            if(date.getHours()>9){
                var hours1 = parseInt(parseInt(date.getHours().toString().slice('')[1]).toString(2));
            } else {
                var hours1 = 0;
            }

            let minutes1 = parseInt(parseInt(date.getMinutes().toString().slice('')[0]).toString(2));
            if(date.getMinutes()>9){
                var minutes2 = parseInt(parseInt(date.getMinutes().toString().slice('')[1]).toString(2));
            } else {
                var minutes2 = 0;
            }

            let seconds2 = parseInt(parseInt(date.getSeconds().toString().slice('')[0]).toString(2));
            if(date.getSeconds()>9){
                var seconds1 = parseInt(parseInt(date.getSeconds().toString().slice('')[1]).toString(2));
            } else {
                var seconds1 = 0;
            }



            console.log(hours1, hours2, minutes1, minutes2, seconds1, seconds2);
        }, interval);
    }

}