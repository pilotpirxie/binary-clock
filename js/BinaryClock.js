/**
 * @file Binary Clock.
 * @author pilotpirxie
 * @license MIT
 */

class BinaryClock {
    /**
     * @constructor
     * @param {string} id - Id for widget append
     * @param {number} size - Size of font
     */
    constructor(id = 'binary-clock', size = 32) {
        this.clockObj = document.getElementById(id);
        this.size = size;
        this.clockObj.innerHTML =
            `
            <div class="binary-clock-el" id="h0-2">O</div>
            <div class="binary-clock-el" id="h10">O</div>
            <div class="binary-clock-el" id="m0-1">O</div>
            <div class="binary-clock-el" id="m10">O</div>
            <div class="binary-clock-el" id="s0-1">O</div>
            <div class="binary-clock-el" id="s10">O</div>
            <br>
            <div class="binary-clock-el" id="h0-1">O</div>
            <div class="binary-clock-el" id="h11">O</div>
            <div class="binary-clock-el" id="m00">O</div>
            <div class="binary-clock-el" id="m11">O</div>
            <div class="binary-clock-el" id="s00">O</div>
            <div class="binary-clock-el" id="s11">O</div>
            <br>
            <div class="binary-clock-el" id="h00">O</div>
            <div class="binary-clock-el" id="h12">O</div>
            <div class="binary-clock-el" id="m01">O</div>
            <div class="binary-clock-el" id="m12">O</div>
            <div class="binary-clock-el" id="s01">O</div>
            <div class="binary-clock-el" id="s12">O</div>
            <br>
            <div class="binary-clock-el" id="h01">O</div>
            <div class="binary-clock-el" id="h13">O</div>
            <div class="binary-clock-el" id="m02">O</div>
            <div class="binary-clock-el" id="m13">O</div>
            <div class="binary-clock-el" id="s02">O</div>
            <div class="binary-clock-el" id="s13">O</div>
            `;
        this.timEl = ['h0-2', 'h0-1', 'h00', 'h01', 'h10', 'h11', 'h12', 'h13'
            , 'm0-1', 'm00', 'm01', 'm02', 'm10', 'm11', 'm12', 'm13', 's0-1'
            , 's00', 's01', 's02', 's10', 's11', 's12', 's13'
        ];
        let style = document.createElement('style');
        style.appendChild(document.createTextNode(
            `
            .binary-clock-el {
                display: inline;
                color: transparent;
                font-size: `+this.size+`px;
            }
         `
        ));
        document.getElementsByTagName('head')[0].appendChild(style);
    }

    /**
     * Add leading zeros to numbers
     *
     * @param {number} number- Number to add zeros
     * @param {number} width - Requested total length of number with leading zeros
     * @return {string}
     */
    zeroFill(number, width) {
        width -= number.toString().length;
        if (width > 0) {
            return new Array(width + (/\./.test(number) ? 2 : 1)).join('0') + number;
        }
        return number + "";
    }

    /**
     * Get new time and update 'diodes'
     */
    refresh() {
        const date = new Date();
        let times = date.toTimeString().substr(0, 2).replace(':', '').replace(':', '');
        let timem = date.toTimeString().substr(3, 2).replace(':', '').replace(':', '');
        let timeh = date.toTimeString().substr(6, 2).replace(':', '').replace(':', '');
        let time = (times + timem + timeh).split('');
        var binaryTime = '';
        for (let el of time) {
            binaryTime += this.zeroFill(Number.parseInt(el).toString(2), 4);
        }
        for (let index in binaryTime.split('')) {
            if (binaryTime[index] == 0) {
                document.getElementById(this.timEl[index]).style.backgroundColor = 'black';
            } else {
                document.getElementById(this.timEl[index]).style.backgroundColor = 'yellow';
            }
        }
    }

    /**
     * Start interval
     */
    start(interval) {
        var self = this;
        setInterval(function() {
            self.refresh();
        }, interval);
    }
}
