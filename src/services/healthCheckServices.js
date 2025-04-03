exports.calculateUptime = function () {
    var uptimeMs = process.uptime() * 1000;
    var days = Math.floor(uptimeMs / (1000 * 60 * 60 * 24));
    var hours = Math.floor((uptimeMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((uptimeMs % (1000 * 60 * 60)) / (1000 * 60));
    return {
        uptime: "".concat(days, " day(s), ").concat(hours, " hr(s), ").concat(minutes, " min(s)"),
    };
};
