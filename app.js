const filterFenderConfig = { serverId: 9123, active: true };

const filterFenderHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_9123() {
    return filterFenderConfig.active ? "OK" : "ERR";
}

console.log("Module filterFender loaded successfully.");