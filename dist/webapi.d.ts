export interface IAPI<REQ_T, RES_T> {
    (req: REQ_T): Promise<RES_T>;
}
export declare function HTTP<REQ_T, RES_T>(): IAPI<REQ_T, RES_T>;
