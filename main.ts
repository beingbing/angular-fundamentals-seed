import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// to compile in the browser
// dynamic -> client side code

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
