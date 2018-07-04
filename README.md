# Stringcaster for Typescript

Implementation of [stringcaster](https://www.npmjs.com/package/stringcaster) package for use with Typescript classes and decorators.

See [stringcaster](https://www.npmjs.com/package/stringcaster) docs for cast options.
This package includes all the functionality of *stringcaster* and
adds the `inject` property decorator on top of it.

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
Now using the `inject` decorator you can do the following:

```typescript
// /config.ts

import { inject, toBoolean, toString, toNumber, toArray, toObject } from "typescript-stringcaster";
import * as dotenv from "dotenv";
dotenv.config();

const source = process.env;

class Config {
  @inject({ cast: toBoolean, defaultValue: false, source })
  MINIFY: boolean;

  @inject({ cast: toString, defaultValue: "en-US", source })
  DEFAULT_LOCALE: string;

  @inject({ cast: toArray, source })
  SUPPORTED_LOCALES: [string];

  @inject({ cast: toNumber, source })
  PORT: number;
  
  @inject({ cast: toObject, source, sourceKey: "INFO_OBJECT" })
  INFO: object;
}

export default new Config();
```
