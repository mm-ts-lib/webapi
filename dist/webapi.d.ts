/**
 * API类型
 */
export declare type API_TYPE = 'WS' | 'HTTP';
/**
 * api 分组
 */
export interface IAPI_GROUP {
    [x: string]: {
        [x: string]: any;
    };
}
/**
 * api 基础类型
 */
export interface IAPI_BASE {
    (req: any): any;
    on: (req: any) => any;
    type: API_TYPE;
}
/**
 * 标准api请求
 */
export interface IAPI<REQ_T, RES_T> {
    (req: REQ_T): Promise<RES_T>;
    on: (req: REQ_T) => Promise<RES_T>;
    type: API_TYPE;
}
/**
 * 缺省 http Json请求
 */
export declare function HTTP<REQ_T, RES_T>(): IAPI<REQ_T, RES_T>;
/**
 * 缺省ws请求
 */
export declare function WS<REQ_T, RES_T>(): IAPI<REQ_T, RES_T>;
