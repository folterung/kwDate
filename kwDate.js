function kwDate(date) {
    var _day = 24 * 60 * 60 * 1000;

    date = typeof date !== 'undefined' ? _forceDate(date) : new Date();
    date = _extend(date);

    function compare(thisDate) {
        var context = thisDate;
        var curDateUTC;
        var targetDateUTC;

        return {
            before: function(d) {
                d = normalize.call(_forceDate(d));
                curDateUTC = Date.UTC(context.getFullYear(), context.getMonth(), context.getDate());
                targetDateUTC = Date.UTC(d.getFullYear(), d.getMonth(), d.getDate());
                return curDateUTC < targetDateUTC;
            },
            after: function(d) {
                d = normalize.call(_forceDate(d));
                curDateUTC = Date.UTC(context.getFullYear(), context.getMonth(), context.getDate());
                targetDateUTC = Date.UTC(d.getFullYear(), d.getMonth(), d.getDate());
                return curDateUTC > targetDateUTC;
            },
            equal: function(d) {
                d = normalize.call(_forceDate(d));
                curDateUTC = Date.UTC(context.getFullYear(), context.getMonth(), context.getDate());
                targetDateUTC = Date.UTC(d.getFullYear(), d.getMonth(), d.getDate());
                return curDateUTC === targetDateUTC;
            }
        };
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
        var d2 = normalize.call(d);

        var d1UTC = Date.UTC(d1.getFullYear(), d1.getMonth(), d1.getDate());
        var d2UTC = Date.UTC(d2.getFullYear(), d2.getMonth(), d2.getDate());

        return Math.round(Math.abs(d1UTC - d2UTC) / _day);
    }

    function getDateAt(days) {
        var tempDate = new Date(normalize.call(this));
        tempDate.setDate(tempDate.getDate() + days);
        return _extend(tempDate);
    }

    function _extend(d) {
        if(_def(d.normalize) && _def(d.daysBetween) && _def(d.getDateAt) && _def(d.compare)) { return d; }

        d.normalize = normalize;
        d.daysBetween = daysBetween;
        d.getDateAt = getDateAt;
        d.compare = compare(date);

        return d;
    }

    function _def(val) {
        return val !== undefined;
    }

    function _forceDate(d) {
        return typeof d === 'string' ? new Date(d) : d;
    }

    return date;
}