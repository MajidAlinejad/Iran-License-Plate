# Iran Lisence Plate

<h1 align="center">
<img src="https://raw.githubusercontent.com/MajidAlinejad/Iran-License-Plate/main/public/Screenshot.png" alt="downshift logo" title="downshift logo" width="300">
</h1>

## Installation

This module is distributed via npm which is bundled with node and should be installed as one of your project's `dependencies`:

```
npm i iran-license-plate
```

> This package also depends on `react`. Please make sure you have it installed
> as well.

**🚨Shortcut: you can see all options by visiting : [storybook](https://majidalinejad.github.io/Iran-License-Plate/) 🚨**

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

<img style="border-radius:100%;width:70px;" src="https://avatars.githubusercontent.com/u/25850003?s=400&u=bd3ade163371339aca49cb094759232a416077d4&v=4">

This project follows the [all-contributors][all-contributors] specification.
Contributions of any kind welcome!

## LICENSE

MIT
