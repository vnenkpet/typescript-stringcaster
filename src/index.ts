export { toBoolean, toArray, toNumber, toString, toObject } from "stringcaster";

// inject decorator
export function inject({
  cast = (val: string) => val,
  defaultValue,
  source,
  sourceKey
}: {
  cast?: any;
  defaultValue?: any;
  source: any;
  sourceKey?: string;
}): Function {
  return function(target: any, propertyKey: string) {
    const targetKey = sourceKey ? sourceKey : propertyKey;

    if (
      typeof defaultValue !== "undefined" &&
      typeof source[targetKey] === "undefined"
    ) {
      target[targetKey] = defaultValue;
      return;
    }

    target[targetKey] = cast(source[targetKey]);
  };
}
