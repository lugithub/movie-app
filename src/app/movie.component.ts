import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Actor } from './actor.model';

@Component({
  // changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-movie',
  template: `
    <div>
      <h3>{{ title }}</h3>
      <p>
        <label>Actor:</label>
        <span>{{actor.firstName}} {{actor.lastName}}</span>
      </p>
    </div>`
})
export class MovieComponent {
  @Input() title: string;
  @Input() actor: Actor;

  constructor(public cd: ChangeDetectorRef) {
    setTimeout(() => {
      this.cd.detach();
      this.actor.firstName = 'foo';
    }, 2000);
  }
}
