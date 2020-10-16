# @kandy-io/link-config-emea

This package contains standard configuration for the [Kandy Link JS SDK](https://github.com/Kandy-IO/kandy-link-js-sdk) to connect to the Kandy platform in the EMEA region.

## Installation

via npm:

```bash
$ npm install @kandy-io/link-config-emea
```

via yarn:

```bash
$ yarn add @kandy-io/link-config-emea
```

## Usage

You can use the package simply by importing it and providing the configuration to the [Kandy Link JS SDK](https://github.com/Kandy-IO/kandy-link-js-sdk).

```javascript
import { config } from '@kandy-io/link-config-emea'
import { create } from '@kandy-io/link-sdk'

const client = create(config)

// Use the SDK.
```

The configuration object can also be used as a base for your own custom configuration.

```javascript
import { config as defaultConfig } from '@kandy-io/link-config-emea'
import { create } from '@kandy-io/link-sdk'

const config = {
  ...defaultConfig,
  logs: {
    logLevel: 'debug'
  }
}

const client = create(config)

// Use the SDK.
```

## See Also

- [Kandy.js SDK Tutorial](https://kandy-io.github.io/kandy-link-js-sdk/tutorials/?config=emea#/Configurations)
- [Kandy.js SDK Documentation](https://kandy-io.github.io/kandy-link-js-sdk/docs/)
