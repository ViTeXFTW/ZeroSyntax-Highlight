# Change Log

All notable changes to the "ZH-HiLi" extension will be documented in this file.

## [1.0.3]
### Fixed
- Object: Conditionstate now gets captured correctly even if there isn't an equal sign after it.
- Property: Fixed issue where string starting with #f got captured as a number instead of a string.

## [1.0.2]
### Added
- Misc: File with to many end statement now gets marked as illigal

### Fixed
- Misc: Updated string capture so that vscode built in completion works

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