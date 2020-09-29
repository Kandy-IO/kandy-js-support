# link-config-emea
This is a default configuration for the Kandy SDK.
Platform: link

## Usage

 1. Add this package as a dependency to your project.
 `yarn add @kandy-io/link-config-emea`
 2. Import the config into your project.
 `import { config as linkConfig } from '@kandy-io/link-config-emea'`
3. Create the Kandy SDK by passing `linkConfig` to the Kandy SDK create function.
`import { create } from 'kandy'`
`const kandy = create(linkConfig)`
