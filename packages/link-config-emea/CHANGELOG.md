# Changelog

@kandy-io/link-config-emea changelog.

- This project adheres to [Semantic Versioning](http://semver.org/).
- This change log follows [keepachangelog.com](http://keepachangelog.com/) recommendations.

## 2.0.0 - 2021-11-09

### Changed

- Moved the location of ICE servers configuration within the overall configuration object, so that they are now part of a new property `defaultPeerConfig`. This new property will represent configuration for a native peer connection, thus it ensures support for full configuration on a given RTCPeerConnection. See [RTCPeerConfiguration properties](https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/RTCPeerConnection). `KJS-379`

## 1.2.0 - 2021-06-17

### Changed

- Changed the domain name used in configuration for all turn/stun servers.

## 1.1.0 - 2020-10-27

### Added

- Added CommonJS version which should allow this package to be required instead of imported.

### Changed

- Fixed the import statement of the example code in the README.

## 1.0.0 - 2020-10-13

### Added

- Initial release.
