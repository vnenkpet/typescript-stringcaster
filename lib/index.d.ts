export { toBoolean, toArray, toNumber, toString, toObject } from "stringcaster";
export declare function inject({ cast, defaultValue, source, sourceKey }: {
    cast?: any;
    defaultValue?: any;
    source: any;
    sourceKey?: string;
}): Function;
