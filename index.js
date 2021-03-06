import { Directive, ElementRef, EventEmitter, NgModule, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResizeSensor } from 'css-element-queries';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ResizedEvent = (function () {
    function ResizedEvent(element, newWidth, newHeight, oldWidth, oldHeight) {
        this.element = element;
        this.newWidth = newWidth;
        this.newHeight = newHeight;
        this.oldWidth = oldWidth;
        this.oldHeight = oldHeight;
    }
    return ResizedEvent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ResizedDirective = (function () {
    function ResizedDirective(element) {
        this.element = element;
        this.resized = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ResizedDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // tslint:disable-next-line:no-unused-expression
        new ResizeSensor(this.element.nativeElement, function (x) { return _this.onResized(); });
        this.onResized();
    };
    /**
     * @return {?}
     */
    ResizedDirective.prototype.onResized = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ newWidth = this.element.nativeElement.clientWidth;
        var /** @type {?} */ newHeight = this.element.nativeElement.clientHeight;
        if (newWidth === this.oldWidth && newHeight === this.oldHeight) {
            return;
        }
        var /** @type {?} */ event = new ResizedEvent(this.element, newWidth, newHeight, this.oldWidth, this.oldHeight);
        this.oldWidth = this.element.nativeElement.clientWidth;
        this.oldHeight = this.element.nativeElement.clientHeight;
        this.resized.next(event);
    };
    ResizedDirective.decorators = [
        { type: Directive, args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: '[resized]'
                },] },
    ];
    /** @nocollapse */
    ResizedDirective.ctorParameters = function () { return [
        { type: ElementRef, },
    ]; };
    ResizedDirective.propDecorators = {
        "resized": [{ type: Output, args: ['resized',] },],
    };
    return ResizedDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AngularResizedEventModule = (function () {
    function AngularResizedEventModule() {
    }
    /**
     * @return {?}
     */
    AngularResizedEventModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: AngularResizedEventModule
        };
    };
    AngularResizedEventModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        ResizedDirective
                    ],
                    exports: [
                        ResizedDirective
                    ]
                },] },
    ];
    /** @nocollapse */
    AngularResizedEventModule.ctorParameters = function () { return []; };
    return AngularResizedEventModule;
}());

export { AngularResizedEventModule };
