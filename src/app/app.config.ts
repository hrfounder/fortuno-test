import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import {
  GoogleLoginProvider,
} from '@abacritt/angularx-social-login';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            '175788529847-1qi3ikhpviodtoua65c7a637vaifevus.apps.googleusercontent.com'
          )
        }
      ],
      onError: (error) => {
        console.error(error);
      }
    } as SocialAuthServiceConfig},provideRouter(routes), provideClientHydration()]

};
