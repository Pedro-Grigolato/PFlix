import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app'; // ou o nome correto da classe exportada no seu app.ts

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));