
// /**
//  * API类型
//  */
// export type API_TYPE = 'WS' | 'HTTP';

// /**
//  * api 分组
//  */
// export interface IAPI_GROUP {
//     [apiName: string]: IAPI_BASE
// }

// /**
//  * api 基础类型
//  */
// export interface IAPI_BASE {
//     (req: any): any,
//     on: (req: any) => any,
//     type: API_TYPE,
// }

// /**
//  * 标准api请求
//  */
// export interface IAPI<REQ_T, RES_T> extends IAPI_BASE {
//     (req: REQ_T): Promise<RES_T>,
//     on: (req: REQ_T) => Promise<RES_T>
//     type: API_TYPE,
// }


// /**
//  * 缺省 http Json请求
//  */
// export function HTTP<REQ_T, RES_T>() {
//     const func = (req: any): any => {
//         throw new Error('INVALID HTTP API');
//     }
//     const http = func as IAPI<REQ_T, RES_T>;
//     http.type = 'HTTP';
//     http.on = (req: REQ_T): Promise<RES_T> => {
//         throw new Error('HTTP API no on FUNC');
//     }
//     return http;
// }

// /**
//  * 缺省ws请求
//  */
// export function WS<REQ_T, RES_T>() {
//     const func = (req: any): any => {
//         throw new Error('INVALID WS API');
//     }
//     const ws = func as IAPI<REQ_T, RES_T>;
//     ws.type = 'WS';
//     ws.on = (req: REQ_T): Promise<RES_T> => {
//         throw new Error('INVALID WS on API');
//     }
//     return ws;
// }


export interface IAPI<REQ_T, RES_T> {
    (req: REQ_T): Promise<RES_T>,
}
export function HTTP<REQ_T, RES_T>() {
    const func: IAPI<REQ_T, RES_T> = function () { throw new Error('INVALID HTTP API'); };
    return func;
}

