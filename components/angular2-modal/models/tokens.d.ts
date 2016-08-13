import { ComponentRef, ViewContainerRef, ResolvedReflectiveProvider } from '@angular/core';
import { ModalOverlay } from '../overlay';
import { DialogRef } from './dialog-ref';
import { OverlayContext } from '../models/overlay-context';
import { Maybe } from '../framework/utils';
export declare enum DROP_IN_TYPE {
    alert = 0,
    prompt = 1,
    confirm = 2,
}
export declare type WideVCRef = ViewContainerRef | string;
export interface OverlayPlugin extends Function {
    <T>(component: any, dialogRef: DialogRef<T>, config: OverlayConfig): Maybe<DialogRef<any>>;
}
export interface OverlayConfig {
    /**
     * The context for the modal, attached to the dialog instance, DialogRef.context.
     * Default: {}
     */
    context?: OverlayContext;
    /**
     * Resolved providers that will inject into the component provided.
     */
    bindings?: ResolvedReflectiveProvider[];
    /**
     *  The element to block using the modal.
     *  Default: The value set in defaultViewContainer.
     */
    viewContainer?: WideVCRef;
    /**
     * If true, render's the component inside the ViewContainerRef,
     * otherwise render's the component in the root element (body in DOM)
     * Default: true if ViewContainer supplied, false if not supplied.
     */
    inside?: boolean;
    renderer?: OverlayRenderer;
    /**
     * Not used yet.
     */
    overlayPlugins?: OverlayPlugin | Array<OverlayPlugin>;
}
export interface ModalComponent<T> {
    dialog: DialogRef<T>;
}
export interface CloseGuard {
    /**
     * Invoked before a modal is dismissed.
     * @return true or a promise that resolves to true to cancel dismissal.
     */
    beforeDismiss?(): boolean | Promise<boolean>;
    /**
     * Invoked before a modal is closed.
     * @return true or a promise that resolves to true to cancel closing.
     */
    beforeClose?(): boolean | Promise<boolean>;
}
export declare abstract class OverlayRenderer {
    abstract render(dialogRef: DialogRef<any>, vcRef: ViewContainerRef): ComponentRef<ModalOverlay>;
}