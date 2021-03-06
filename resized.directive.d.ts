import { ElementRef, EventEmitter, OnInit } from '@angular/core';
import { ResizedEvent } from './resized-event';
export declare class ResizedDirective implements OnInit {
    private readonly element;
    readonly resized: EventEmitter<ResizedEvent>;
    private oldWidth;
    private oldHeight;
    constructor(element: ElementRef);
    ngOnInit(): void;
    private onResized();
}
