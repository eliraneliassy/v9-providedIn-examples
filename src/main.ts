import { MyElementComponent } from 'my-element';
import { createCustomElement } from '@angular/elements';
import { enableProdMode, NgModuleRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule, { ngZoneEventCoalescing: true }).then((ref: NgModuleRef<AppModule>) => {
  const myElement = createCustomElement(MyElementComponent, {
    injector: ref.injector
  });

  customElements.define('my-element', myElement as any);
})
  .catch(err => console.error(err));
