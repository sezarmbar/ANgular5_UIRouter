import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `
  <a uiSref="hello" uiSrefActive="active">Hello</a>
  <a uiSref="about" uiSrefActive="active">About</a>
  <a uiSref="people" uiSrefActive="active">People</a>
  <ui-view></ui-view>
   
`})
export class AppComponent {}
