"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 缺省 http Json请求
 */
function HTTP() {
    const func = (req) => {
        throw new Error('INVALID HTTP API');
    };
    const http = func;
    http.type = 'HTTP';
    http.on = (req) => {
        throw new Error('HTTP API no on FUNC');
    };
    return http;
}
exports.HTTP = HTTP;
/**
 * 缺省ws请求
 */
function WS() {
    const func = (req) => {
        throw new Error('INVALID WS API');
    };
    const ws = func;
    ws.type = 'WS';
    ws.on = (req) => {
        throw new Error('INVALID WS on API');
    };
    return ws;
}
exports.WS = WS;
//# sourceMappingURL=webapi.js.map