# sdp-handlers

This package contains a collection of SDP Handlers that can be used with the Kandy.js WebRTC SDK to make modifications to the SDP.

## Compatiblity

The handlers are compatible with both the old callstack pipeline (3.x/FCS) and the new callstack pipeline (4.x).

## Installation

Add the package as a dependency in your project:

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
