import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { NgbDateMomentAdapter } from './util/datepicker-adapter';
import {
    RuntimeVerificationHipsterWebSiteSharedLibsModule,
    RuntimeVerificationHipsterWebSiteSharedCommonModule,
    JhiLoginModalComponent,
    HasAnyAuthorityDirective
} from './';

@NgModule({
    imports: [RuntimeVerificationHipsterWebSiteSharedLibsModule, RuntimeVerificationHipsterWebSiteSharedCommonModule],
    declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
    entryComponents: [JhiLoginModalComponent],
    exports: [RuntimeVerificationHipsterWebSiteSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RuntimeVerificationHipsterWebSiteSharedModule {
    static forRoot() {
        return {
            ngModule: RuntimeVerificationHipsterWebSiteSharedModule
        };
    }
}
