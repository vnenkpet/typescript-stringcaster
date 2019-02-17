export { toBoolean, toArray, toNumber, toString, toObject } from "stringcaster";

interface ISource {
  [key: string]: string | undefined;
}

type CastFunction = (val: string) => any;

// envVar decorator
export function envVar({
  cast = (val: string) => val,
  defaultValue,
  source,
  sourceKey
}: {
  cast?: CastFunction;
  defaultValue?: any;
  source: ISource | NodeJS.ProcessEnv;
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

// backwards compatibility alias
export const inject = envVar;
