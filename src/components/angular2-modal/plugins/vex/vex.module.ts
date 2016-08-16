import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Modal } from './modal';

import { ModalModule, Modal as BaseModal } from '../../../angular2-modal';


import { DialogFormModal, FormDropIn, VEXDialogButtons } from './dialog-form-modal';

function getProviders(): any[] {
  return [
    { provide: BaseModal, useClass: Modal },
    { provide: Modal, useClass: Modal }
  ];
}

@NgModule({
  imports: [ ModalModule, CommonModule ],
  declarations: [
    DialogFormModal,
    FormDropIn,
    VEXDialogButtons
  ],
  providers: getProviders(),
  entryComponents: [
    DialogFormModal,
    FormDropIn
  ]
})
export class VexModalModule {

  static getProviders(): any[] {
    return getProviders();
  }

}
