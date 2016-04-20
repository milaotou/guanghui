// @loncus 2015
var util=(function() {
    exports={}
    var PI, config, crypto, getRad, guid, moment, orm, querystring, removeNulls, request, url,
        indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

    Array.prototype.S = String.fromCharCode(2);

    Array.prototype.in_array = function(e) {
        var r;
        r = new RegExp(this.S + e + this.S);
        return r.test(this.S + this.join(this.S) + this.S);
    };

    Array.prototype.unique = function() {
        var j, key, output, ref, results, value;
        output = {};
        for (key = j = 0, ref = this.length; 0 <= ref ? j < ref : j > ref; key = 0 <= ref ? ++j : --j) {
            output[this[key]] = this[key];
        }
        results = [];
        for (key in output) {
            value = output[key];
            results.push(value);
        }
        return results;
    };

    Array.prototype.removeempty = function() {
        var item, j, len, output;
        output = [];
        for (j = 0, len = this.length; j < len; j++) {
            item = this[j];
            if (item) {
                output.push(item);
            }
        }
        return output;
    };

    Array.prototype.remove = function(val) {
        var index;
        index = this.indexOf(val);
        if (index > -1) {
            return this.splice(index, 1);
        }
    };

    exports.clone = function(obj) {
        var flags, key, newInstance;
        if ((obj == null) || typeof obj !== 'object') {
            return obj;
        }
        if (obj instanceof Date) {
            return new Date(obj.getTime());
        }
        if (obj instanceof RegExp) {
            flags = '';
            if (obj.global != null) {
                flags += 'g';
            }
            if (obj.ignoreCase != null) {
                flags += 'i';
            }
            if (obj.multiline != null) {
                flags += 'm';
            }
            if (obj.sticky != null) {
                flags += 'y';
            }
            return new RegExp(obj.source, flags);
        }
        newInstance = new obj.constructor();
        for (key in obj) {
            newInstance[key] = exports.clone(obj[key]);
        }
        return newInstance;
    };

    removeNulls = function(obj) {
        var isArray, k, results;
        isArray = obj instanceof Array;
        results = [];
        for (k in obj) {
            if (obj[k] === null) {
                if (isArray) {
                    results.push(obj.splice(k, 1));
                } else {
                    results.push(delete obj[k]);
                }
            } else if (typeof obj[k] === "object") {
                results.push(removeNulls(obj[k]));
            } else {
                results.push(void 0);
            }
        }
        return results;
    };

    exports.isArray = function(v) {
        return toString.apply(v) === '[object Array]';
    };

    exports.isFunction = function(functionToCheck) {
        var getType;
        getType = {};
        return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
    };

    exports.compare_option = function(obj1, obj2) {
        var attrname, j, len, notadd, o, ref, ref1, result;
        result = [];
        notadd = false;
        if (exports.isArray(obj1)) {
            for (j = 0, len = obj1.length; j < len; j++) {
                o = obj1[j];
                notadd = false;
                for (attrname in obj2) {
                    if (exports.isArray(obj2[attrname])) {
                        if (ref = o[attrname], indexOf.call(obj2[attrname], ref) < 0) {
                            notadd = true;
                            break;
                        }
                    } else {
                        if (o[attrname] !== obj2[attrname]) {
                            notadd = true;
                            break;
                        }
                    }
                }
                if (!notadd) {
                    result.push(o);
                }
            }
        } else {
            notadd = false;
            for (attrname in obj2) {
                if (exports.isArray(obj2[attrname])) {
                    if (ref1 = o[attrname], indexOf.call(obj2[attrname], ref1) < 0) {
                        notadd = true;
                        break;
                    }
                } else {
                    if (o[attrname] !== obj2[attrname]) {
                        notadd = true;
                        break;
                    }
                }
            }
            if (!notadd) {
                result = obj1;
            }
        }
        return result;
    };

    exports.computepassword = function(password) {
        var content, d, shasum;
        content = password;
        console.log(content);
        shasum = crypto.createHash('sha1');
        shasum.update(content);
        return d = shasum.digest('hex');
    };

    exports.execobjtoarray = function(data) {
        var i, j, k, len, result;
        result = [];
        if (data) {
            for (i = j = 0, len = data.length; j < len; i = ++j) {
                k = data[i];
                result.push(k);
            }
        }
        return result;
    };

    exports.remove_empty = function(target) {
        Object.keys(target).map(function(key) {
            if (target[key] instanceof Object) {
                if (!Object.keys(target[key]).length && typeof target[key].getMonth !== 'function') {
                    return delete target[key];
                } else {
                    return exports.remove_empty(target[key]);
                }
            } else if (target[key] === null || typeof target[key] === 'undefined') {
                return delete target[key];
            } else if (exports.isArray(target[key])) {
                return target[key] = target[key].removeempty();
            }
        });
        return target;
    };

    exports.merge_options = function(obj1, obj2, ignorenull) {
        var attrname, obj3;
        if (ignorenull == null) {
            ignorenull = false;
        }
        obj3 = {};
        if (obj1 != null) {
            obj3 = obj1;
        }
        if (obj2 != null) {
            for (attrname in obj2) {
                if (!ignorenull || (obj2[attrname] != null)) {
                    obj3[attrname] = obj2[attrname];
                }
            }
        }
        return obj3;
    };

    exports.md5 = function(str) {
        var md5sum;
        md5sum = crypto.createHash('md5');
        md5sum.update(str);
        str = md5sum.digest('hex');
        return str;
    };

    PI = Math.PI;

    getRad = function(d) {
        return d * PI / 180.0;
    };

    exports.getFlatternDistance = function(lat1, lng1, lat2, lng2) {
        var a, c, d, f, fl, g, h1, h2, l, r, s, sf, sg, sl, w;
        f = getRad((lat1 + lat2) / 2);
        g = getRad((lat1 - lat2) / 2);
        l = getRad((lng1 - lng2) / 2);
        sg = Math.sin(g);
        sl = Math.sin(l);
        sf = Math.sin(f);
        a = 6378137.0;
        fl = 1 / 298.257;
        sg = sg * sg;
        sl = sl * sl;
        sf = sf * sf;
        s = sg * (1 - sl) + (1 - sf) * sl;
        c = (1 - sg) * (1 - sl) + sf * sl;
        w = Math.atan(Math.sqrt(s / c));
        r = Math.sqrt(s * c) / w;
        d = 2 * w * a;
        h1 = (3 * r - 1) / 2 / c;
        h2 = (3 * r + 1) / 2 / s;
        return d * (1 + fl * (h1 * sf * (1 - sg) - h2 * (1 - sf) * sg));
    };

    exports.nativeConvertAscii = function(str) {
        var ascii, charAscii, code, i, j, len, nativecode;
        nativecode = str;
        ascii = "";
        for (i = j = 0, len = nativecode.length; j < len; i = ++j) {
            code = nativecode[i];
            code = Number(nativecode[i].charCodeAt(0));
            if (code > 127) {
                charAscii = code.toString(16);
                charAscii = new String("0000").substring(charAscii.length, 4) + charAscii;
                ascii += "\\u" + charAscii;
            } else {
                ascii += nativecode[i];
            }
        }
        return ascii;
    };

    exports.asciiConvertNative = function() {
        var asciicode, code, i, j, len, nativeValue;
        asciicode = getid("asciicode").value.split("\\u");
        nativeValue = asciicode[0];
        for (i = j = 0, len = asciicode.length; j < len; i = ++j) {
            code = asciicode[i];
            code = asciicode[i];
            nativeValue += String.fromCharCode(parseInt("0x" + code.substring(0, 4)));
            if (code.length > 4) {
                nativeValue += code.substring(4, code.length);
            }
        }
        return nativeValue;
    };

    exports.str2int = function(str) {
        if (!isNaN(str)) {
            return parseInt(str);
        } else {
            return 0;
        }
    };

    exports.str2bool = function(str) {
        if (typeof str === "string") {
            if (str.toLowerCase() === 'true') {
                return true;
            } else if (str.toLowerCase() === 'false') {
                return false;
            }
        } else if (!isNaN(str)) {
            str = parseInt(str);
            if (str >= 1) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    };

    exports.endWith = function(str1, str2) {
        if (str1 === null || str2 === null) {
            return false;
        }
        if (str1.length < str2.length) {
            return false;
        } else if (str1 === str2) {
            return true;
        } else if (str1.substring(str1.length - str2.length) === str2) {
            return true;
        }
        return false;
    };

    exports.startWith = function(str1, str2) {
        if (str1 === null || str2 === null) {
            return false;
        }
        if (str1.length < str2.length) {
            return false;
        } else if (str1 === str2) {
            return true;
        } else if (str1.substr(0, str2.length) === str2) {
            return true;
        }
        return false;
    };

    exports.randArray = function(data) {
        var arrlen, i, j, m, n, ref, ref1, ref2, try1, try2, try3;
        arrlen = data.length;
        try1 = new Array();
        for (i = j = 0, ref = arrlen; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
            try1[i] = i;
        }
        try2 = new Array();
        for (i = m = 0, ref1 = arrlen; 0 <= ref1 ? m <= ref1 : m >= ref1; i = 0 <= ref1 ? ++m : --m) {
            try2[i] = try1.splice(Math.floor(Math.random() * try1.length), 1);
        }
        try3 = new Array();
        for (i = n = 0, ref2 = arrlen; 0 <= ref2 ? n <= ref2 : n >= ref2; i = 0 <= ref2 ? ++n : --n) {
            try3[i] = data[try2[i]];
        }
        return try3;
    };

    exports.changeobjkey = function(obj, key, newkey) {
        var value;
        if (obj) {
            value = obj[key];
            if (value != null) {
                obj[newkey] = obj[key];
                return delete obj[key];
            }
        }
    };

    exports.createuuid = function() {
        var id, value;
        id = guid.create();
        return value = id.toString().replace(new RegExp(/-/g), '');
    };

    exports.inttoletter = function(intcode) {
        var ic, j, len, length, ref, result;
        length = intcode.toString().length;
        result = "";
        ref = intcode.toString();
        for (j = 0, len = ref.length; j < len; j++) {
            ic = ref[j];
            result += String.fromCharCode(65 + parseInt(ic));
        }
        return result.toLowerCase();
    };
    return exports;
}).call(this);
