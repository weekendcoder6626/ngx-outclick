## Description

ngx-outclick enables angular developers to detect clicks outside elements with ease.

A centralised service is used to detect clicks outside and therefore a new _document:click_ event won't be created everytime. Moreover, rxjs has been used to its fullest potential to ensure reactiveness.

ENJOY

## Usage

Import **_OutclickModule_** in the _.module_ file

_**app.module.ts**_

    import { NgModule } from '@angular/core';
    import { OutclickModule } from 'ngx-outclick';

    import { AppComponent } from './app.component';

    @NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        ...,
        OutclickModule
    ],
    providers: [],
    bootstrap: [AppComponent]
    })
    export class AppModule { }

Use it in any element/component in that module.<br>
Add **_outclick_** inside the opening tag to create the directive.<br>
Use the **_(out-click)_** event which emits an **_Event_** object

_**app.component.html**_

    <div outclick (out-click)="func($event)" style="height: 100px; width: 100px; background-color:black"></div>

_**app.component.ts**_

    import { Component } from '@angular/core';

    @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        title = 'outclick-test';

        func(event: Event) {

            console.log(event);
            //do whatever you want with the event
        }
    }
