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

**Note:** by default, React will be in development mode. The development version includes extra warnings about common mistakes, whereas the production version includes extra performance optimizations and strips all error messages. Don't forget to use the [production build](https://reactjs.org/docs/optimizing-performance.html#use-the-production-build) when deploying your application.

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
