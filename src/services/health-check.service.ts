function calculateUptime() {
    const uptimeMs = process.uptime() * 1000;
    const days = Math.floor(uptimeMs/(1000 * 60 * 60 * 24));
    const hours = Math.floor((uptimeMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((uptimeMs % (1000 * 60 * 60)) / (1000 * 60));
    return {
        uptime: `${days} day(s), ${hours} hour(s), ${minutes} minute(s)`,
    };
};

export { calculateUptime } 