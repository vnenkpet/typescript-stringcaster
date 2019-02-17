export { toBoolean, toArray, toNumber, toString, toObject } from "stringcaster";
interface ISource {
    [key: string]: string | undefined;
}
declare type CastFunction = (val: string) => any;
export declare function envVar({ cast, defaultValue, source, sourceKey }: {
    cast?: CastFunction;
    defaultValue?: any;
    source: ISource | NodeJS.ProcessEnv;
    sourceKey?: string;
}): Function;
export declare const inject: typeof envVar;
