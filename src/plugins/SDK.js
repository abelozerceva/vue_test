export const SDK = {
    get: async function(symbol) {
        let glass = fetch(`https://www.binance.com/api/v1/depth?symbol=${symbol}&limit=100`)
            .then(response => response.json()).then(function(data) { return data; });
        return glass;
    },
    subscribe: function(symbol) {
        const { EventBus } = require('./EventBus');
        let ws = new WebSocket(`wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@depth`);
        return ws // возвращаем сокет
    }
};