# Change Log

All notable changes to the "ZH-HiLi" extension will be documented in this file.

## [Unreleased]

## [1.0.0-beta.1]

### Added
- Object: OverrideableByLikeKind and InheritableModule now gets captured.
- Misc Classes: Highlighter now also captures files not changeable by map.ini.
- Misc: Illigal start characters gets marked. 
- Misc: Parameters with specific allowed values have special marking. See set weapon in Object, or AudioEvent.

### Changed
- Misc Classes: Redesigned syntax capture file to use look ahead/behind.



## [0.2.0]

### Added
- Lonely End statements now gets captured as illigal characters
- ObjectReskin class now has highlighting
- DamageFX class now has highlighting

### Fixes
- AltTurret added to AIUpdateInterfaces
- Numbers with leading . (period) now gets captured
- Now captures multiple numbers sperated by spaces
- Updated Readme

## [0.1.0]

- Initial release