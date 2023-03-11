# Iran Lisence Plate

![npm](https://img.shields.io/npm/dt/iran-license-plate)
![GitHub issues](https://img.shields.io/github/issues/MajidAlinejad/Iran-License-Plate)
![npm](https://img.shields.io/npm/v/iran-license-plate)
![GitHub Repo stars](https://img.shields.io/github/stars/MajidAlinejad/Iran-License-Plate?style=social)

<div align="center">
<img src="https://raw.githubusercontent.com/MajidAlinejad/Iran-License-Plate/main/public/Screenshot.png" alt="Iran License Plate" title="Iran License Plate" width="300">
</div>

Iran Lisence Plate is a React component to display Iran car plaque appropriately depending on the serial number.

## Features

- ⚛ React Component
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

```
import React from "react";
import IranLicensePlate from "iran-license-plate/dist/IranLicensePlate";

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
