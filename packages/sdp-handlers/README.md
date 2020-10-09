# sdp-handlers

This package contains a collection of SDP Handlers that can be used with the Kandy.js WebRTC SDK to allow applications to make custom modifications to the SDP at different stages.

## Compatiblity

The SDP handlers in this library are compatible with Kandy.js version 4.x and above.

## Installation

Add the package as a dependency in your project using `npm`:

```
npm install @kandy-io/kandy-js-support
```

or with `yarn`:

```
yarn add @kandy-io/kandy-js-support
```

## Usage

Import the desired SDP Handler:

```
import { createCodecRemover } from '@kandy-io/sdp-handlers'
```

Add the SDP Handler as part of the call configuration in the Kandy.js SDK `create` API:

```
kandy.create({
  ...,
  call: {
    ...,
    sdpHandlers: [
      createCodecRemover(['VP8'])
    ]
  }
})
```

or by using the `call.setSdpHandlers` API after kandy has been created:

```
kandy.call.setSdpHandlers([
  createCodecRemover(['VP8'])
])
```
