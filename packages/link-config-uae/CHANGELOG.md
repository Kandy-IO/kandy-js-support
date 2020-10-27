# Changelog

@kandy-io/link-config-uae changelog.

- This project adheres to [Semantic Versioning](http://semver.org/).
- This change log follows [keepachangelog.com](http://keepachangelog.com/) recommendations.

## 1.1.0 - 2020-10-27

### Added

- Added CommonJS version which should allow this package to be required instead of imported.

### Changed

- Set the `removeH264Codecs` setting to `false` in the call config.
- Added an SDP handler that will remove certain codecs when setting local offers in the call config.
- Updated unit tests for the newly added changes.
- Fixed the import statement as part of example code used in README.

## 1.0.0 - 2020-10-13

### Added

- Initial release.
