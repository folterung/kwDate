function kwDate(date) {
    var _day = 24 * 60 * 60 * 1000;

    date = typeof date !== 'undefined' ? _forceDate(date) : new Date();
    date = _extend(date);

    function isBetween(d1, d2) {
        var output1 = compare.call(this, d1);
        var output2 = compare.call(this, d2);

        return (output1 >= 0 && output2 <= 0);
    }

    function isEqual(d) {
        return compare.call(this, d) === 0;
    }

    function isAfter(d) {
        return compare.call(this, d) === 1;
    }

    function isBefore(d) {
        return compare.call(this, d) === -1;
    }

    function compare(d) {
        var thisDateUTC = _getUTC(this);
        var dUTC = _getUTC(normalize.call(_forceDate(d)));

        if(thisDateUTC > dUTC) {
            return 1;
        } else if(thisDateUTC < dUTC) {
            return -1;
        } else {
            return 0;
        }
    }

    function normalize(isEnd) {
        var d = new Date(this);

        if(isEnd) {
            d.setHours(23);
            d.setMinutes(59);
            d.setSeconds(59);
            d.setMilliseconds(999);
        } else {
            d.setHours(0);
            d.setMinutes(0);
            d.setSeconds(0);
            d.setMilliseconds(0);
        }

        return d;
    }

    function daysBetween(d) {
        var d1 = normalize.call(this);
        var d2 = normalize.call(_forceDate(d));

        return Math.round(Math.abs(_getUTC(d1) - _getUTC(d2)) / _day);
    }

    function getDateAt(days) {
        var tempDate = new Date(normalize.call(this));
        tempDate.setDate(tempDate.getDate() + days);
        return _extend(tempDate);
    }

    function _getUTC(d) {
        return Date.UTC(d.getFullYear(), d.getMonth(), d.getDate());
    }

    function _extend(d) {
        if(_def(d.normalize) && _def(d.daysBetween) && _def(d.getDateAt) && _def(d.compare)) { return d; }

        d.normalize = normalize;
        d.daysBetween = daysBetween;
        d.getDateAt = getDateAt;
        d.compare = compare;
        d.isBefore = isBefore;
        d.isAfter = isAfter;
        d.isEqual = isEqual;
        d.isBetween = isBetween;

        return d;
    }

    function _def(val) {
        return val !== undefined;
    }

    function _forceDate(d) {
        return typeof d === 'string' ? new Date(d.replace('-', '/')) : d;
    }

    return date;
}