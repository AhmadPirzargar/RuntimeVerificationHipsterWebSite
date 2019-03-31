import { NgModule } from '@angular/core';

import { RuntimeVerificationHipsterWebSiteSharedLibsModule, FindLanguageFromKeyPipe, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [RuntimeVerificationHipsterWebSiteSharedLibsModule],
    declarations: [FindLanguageFromKeyPipe, JhiAlertComponent, JhiAlertErrorComponent],
    exports: [RuntimeVerificationHipsterWebSiteSharedLibsModule, FindLanguageFromKeyPipe, JhiAlertComponent, JhiAlertErrorComponent]
})
export class RuntimeVerificationHipsterWebSiteSharedCommonModule {}
