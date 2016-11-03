

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { AppModule } from "./app/app.module";
import {enableProdMode} from "@angular/core";
import {bootloader} from "@angularclass/hmr";

require('./assets/app.scss');

if (process.env.NODE_ENV == 'production') {
  enableProdMode();
}

export function main() {
  return platformBrowserDynamic().bootstrapModule(AppModule);
}

bootloader(main);
