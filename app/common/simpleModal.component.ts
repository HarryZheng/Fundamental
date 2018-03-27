import { Component, Input, ViewChild, ElementRef, Inject } from "@angular/core";
import { JQUERY_TOKEN } from "./jQuery.service";

@Component({
   selector:'simple-modal',
    templateUrl: 'app/common/simpleModal.component.html',
    styles:[`
        ./modal.body { height:250px; overflow-y:scroll;}
    `]
})

export class SimpleModalComponent{
    @Input() title: string;
    @Input() elementId: string;
    @ViewChild('modalContainer') containerEl: ElementRef;

    constructor(@Inject(JQUERY_TOKEN) private $: any) {
    }
    closeModal(){
        this.$(this.containerEl.nativeElement).modal('hide');
    }
}