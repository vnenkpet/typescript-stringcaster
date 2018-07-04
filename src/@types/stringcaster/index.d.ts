declare module "stringcaster" {
  export function toBoolean(val: string): ((val: string) => boolean) | boolean;
  export function toNumber(val: string): ((val: string) => number) | number;
  export function toString(val: string): ((val: string) => string) | string;
  export function toObject(val: string): ((val: string) => object) | object;
  export function toArray(val: string): ((val: string) => [string]) | string;

  export namespace toBoolean {
    function withDefault(
      defaultValue: string
    ): boolean | ((val: string) => boolean);
  }

  export namespace toNumber {
    function withDefault(defaultValue: string): number | ((val: string) => any);
  }

  export namespace toString {
    function withDefault(defaultValue: string): string | ((val: string) => any);
  }

  export namespace toArray {
    function withDefault(
      defaultValue: string
    ): [string] | ((val: string) => any);
  }

  export namespace toObject {
    function withDefault(defaultValue: string): object | ((val: string) => any);
  }

  export function conform(val: any, schema: any): any;
}
