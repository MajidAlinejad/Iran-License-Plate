# Iran Lisence Plate

![npm](https://img.shields.io/npm/dt/iran-license-plate)
![GitHub issues](https://img.shields.io/github/issues/MajidAlinejad/Iran-License-Plate)
![npm](https://img.shields.io/npm/v/iran-license-plate)
[![GitHub contributors](https://img.shields.io/github/contributors/MajidAlinejad/Iran-License-Plate.svg)](https://GitHub.com/MajidAlinejad/Iran-License-Plate/contributors/)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/MajidAlinejad/Iran-License-Plate/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-orange.svg)](https://github.com/MajidAlinejad/Iran-License-Plate/compare)
![GitHub Repo stars](https://img.shields.io/github/stars/MajidAlinejad/Iran-License-Plate?style=social)

<br />
<div align="center">
  <img src="./images/banner.gif" alt="Iran License Plate" title="Iran License Plate"  width="300">
</div>
<br />
<br />

Iran Lisence Plate is a `React Component` based on `Typescript` to display Iran car plaque appropriately depending on the serial number.

## Features

- ⚛ React Component.
- ☑ Typescript.
- 👌 Validating license serial.
- 🎈 Include free city license plate.
- 📐 Responsive and mobile friendly.
- 🌈 Colorize plate.

## Installation

This module is distributed via npm which is bundled with node and should be installed as one of your project's `dependencies`:

```
npm i iran-license-plate
```

> This package also depends on `react`. Please make sure you have it installed
> as well.

**🚨Shortcut: you can see all options by visiting : [storybook](https://majidalinejad.github.io/Iran-License-Plate/)🚨**

## Usage

```JSX
import IranLicensePlate from "iran-license-plate";
import "iran-license-plate/dist/License.css";

function App() {
    return (
        <div>
            <IranLicensePlate serial="IR15-546T55" />
        </div>
    );
}
```

## Avalilible Params

| property    | type                  | description                                                                                                           |
| ----------- | --------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `isLoading` | `boolean`/`undefined` | isshow loading indicator                                                                                              |
| `isUnknown` | `boolean`/`undefined` | preserve unknown situation                                                                                            |
| `serial`    | `string`              | the serial number of license plate for all options please visit : https://majidalinejad.github.io/Iran-License-Plate/ |

## Contributors

<a href="https://github.com/MajidAlinejad"  >
<img style="border-radius:100%" width="40" alt="Majid Alinejad" src="https://avatars.githubusercontent.com/u/25850003?s=400&u=bd3ade163371339aca49cb094759232a416077d4&v=4">
</a>
<a href="https://github.com/farhadrezvani"  >
<img style="border-radius:100%" width="40" alt="Farhad Rezvani" src="https://avatars.githubusercontent.com/u/10855997?v=4">
</a>
<a href="https://github.com/moh3n9595"  >
<img style="border-radius:100%" width="40" alt="Mohsen" src="https://avatars.githubusercontent.com/u/20948388?v=4">
</a>

This project follows the all contributors specification.
Contributions of any kind welcome!

</br>

**_Documented with :_**
<br>
<img width="150" src="https://user-images.githubusercontent.com/321738/63501763-88dbf600-c4cc-11e9-96cd-94adadc2fd72.png">

<br>

## WIKI PAGE

for more information please visit [wiki page ](https://github.com/MajidAlinejad/Iran-License-Plate/wiki)

## LICENSE

MIT
