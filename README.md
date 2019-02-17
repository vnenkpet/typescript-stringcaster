# Stringcaster for Typescript

Implementation of [stringcaster](https://www.npmjs.com/package/stringcaster) package for use with Typescript classes and decorators.

See [stringcaster](https://www.npmjs.com/package/stringcaster) docs for cast options.
This package includes all the functionality of _stringcaster_ and
adds the `envVar` property decorator on top of it.

## Getting Started

Let's say you have .env files like this:

```dotenv
# /.env

MINIFY=true
DEFAULT_LOCALE=en-GB
SUPPORTED_LOCALES=en-GB,en-US,es,jp
PORT=3000
INFO_OBJECT=date: 2017, author: John Doe
```

And you need to create a `config` object using this data.
Now using the `envVar` decorator you can do the following:

```typescript
// /config.ts

import {
  envVar,
  toBoolean,
  toString,
  toNumber,
  toArray,
  toObject
} from "typescript-stringcaster";
import * as dotenv from "dotenv";
dotenv.config();

const source = process.env; // you actually have to pass this

class Config {
  @envVar({ cast: toBoolean, defaultValue: false, source })
  MINIFY: boolean;

  @envVar({ cast: toString, defaultValue: "en-US", source })
  DEFAULT_LOCALE: string;

  @envVar({ cast: toArray, source })
  SUPPORTED_LOCALES: [string];

  @envVar({ cast: toNumber, source })
  PORT: number;

  @envVar({ cast: toObject, source, sourceKey: "INFO_OBJECT" })
  INFO: object;
}

export default new Config();
```

## Docs

### @envVar decorator

#### Parameters:

- `source` _(required)_ - A object containing the values source (e. g. process.env)
- `defaultValue` _optional_ - default value that will be provided if `source` does not contain the value for this key
- `sourceKey` _optional_ - Use if the key in `source` object is different from the property name
- `cast` _optional_ - A convert function, will be called on the property value. Can be either a cast function from stringcaster or custom function.
