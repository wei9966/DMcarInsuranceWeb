/*-
 * 封装的公共功能
 * 
 */
var owner = {};
(function ($, owner) {
  
    owner.input_Name = function () {
        var _inputPay = $(".S-Checkbox-Radio1")||'';
        _inputPay.click(function () {
        var _inputjug = $(this).attr("data-type");
        if (_inputjug=='s-checkbox-multiple-yes') {
             var _ckeckClass = $(this).is("."+_inputjug);
            _ckeckClass ? $(this).attr('class', 's-checkbox S-Checkbox-Radio s-checkbox-multiple-no S-Checkbox-Radio1') : $(this).attr('class', 's-checkbox S-Checkbox-Radio s-checkbox-multiple-yes S-Checkbox-Radio1');
        }else{
            _inputPay.removeClass(_inputjug); $(this).addClass(_inputjug)
        }
        });
    }
    owner._toggle = function (obj) {
        var _inputPay = $(".s-tap-index");
        _inputPay.click(function (e) {
            var val = $(this).attr("data-val");
            $('.'+val).toggle();
        });
    }
    owner._toggle_txt = function (obj) {
        var _inputPay = $(".panel-info");
        _inputPay.click(function (e) {
            var val = $(this).attr("data-val");
            $('.'+val).toggle();
        });
    }
    owner.customdropdown = function (ele) {
        this.dropdown = ele;
        this.placeholder = this.dropdown.find(".dropdown-toggle");
        this.options = this.dropdown.find("ul.dropdown-menu > li");
        this.val = '';
        this.index = -1;//默认为-1;
        this.initevents();
    }

    owner.customdropdown.prototype = {
        initevents: function () {
            var obj = this;
            obj.options.on("click", function () {
                var opt = $(this);
                obj.text = opt.find("a").text();
                obj.val = opt.attr("value");
                obj.index = opt.index();
                obj.placeholder.html(obj.text + '<span class="caret"></span>');
            });
        },
        gettext: function () {
            return this.text;
        },
        getvalue: function () {
            return this.val;
        },
        getindex: function () {
            return this.index;
        }
    }
    
}(jQuery, window.app = {}));

