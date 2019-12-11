import { KV } from '../types';
export declare const getQuery: (name: string, url?: string) => string | false;
export declare const getHash: (name: string) => string;
export declare const removeParam: (key: string, sourceURL: string) => string;
export declare const createPromiseCallback: () => any;
export declare const getWeixinCode: () => string;
export declare const getMiniAppCode: () => Promise<string>;
export declare function isString(val: any): boolean;
export declare function isUndefined(val: any): boolean;
export declare function isInstanceOf(instance: any, construct: any): boolean;
export declare function isFormData(val: any): boolean;
export declare function genSeqId(): string;
export declare function getArgNames(fn: Function): RegExpMatchArray;
export declare function formatUrl(protocol: string, url: string, query?: KV<any>): string;
