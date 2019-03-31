import { NgModule, LOCALE_ID } from '@angular/core';
import { DatePipe, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import locale from '@angular/common/locales/en';

import { FindLanguageFromKeyPipe } from 'app/shared';
@NgModule({
    imports: [HttpClientModule],
    exports: [],
    declarations: [],
    providers: [
        Title,
        {
            provide: LOCALE_ID,
            useValue: 'en'
        },
        FindLanguageFromKeyPipe,
        DatePipe
    ]
})
export class RuntimeVerificationHipsterWebSiteCoreModule {
    constructor() {
        registerLocaleData(locale);
    }
}
