import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { landing_PageModule } from './app/landing-page/landing_page.module';


platformBrowserDynamic().bootstrapModule(landing_PageModule)
  .catch(err => console.error(err));
