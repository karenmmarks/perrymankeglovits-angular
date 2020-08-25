// Creating a button:
//                 REQUIRED                    OPTIONAL           DEFAULT         OPTIONAL    DEFAULT OPTIONAL           DEFAULT  REQUIRED      
// <generic-button title="TITLE OF THE BUTTON" size?="extraSmall | small | large" block?="true|false" color="secondary | primary" onclick="FUNCTION FOR WHEN CLICKED"></generic-button>
// <generic-button title="Button" onclick="console.log('clicked)"></generic-button>

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'generic-button',
  template: `
      <button class="btn {{props}}" (click)="onclick">
        {{title}}
      </button>
  `,
  styleUrls: ['./button.component.css']
})
export class GenericButton implements OnInit{
  private sizing = {
    extraSmall: 'btn-xs',
    small: 'btn-sm',
    large: 'btn-lg',
  }

  private coloring = {
    primary: 'btn-primary',
    seconardy: 'btn-secondary',
  }

  // I know I know this looks very dumb but it won't work otherwise
  private bools = {
    true: true,
    false: false,
  }

  @Input() title: string;
  @Input() onclick: Function;
  @Input() size?: string = 'small';
  @Input() block?: string = 'false';
  @Input() color?: string = 'primary';

  public props: String;

  ngOnInit() {
    const properties = {
      size: this.sizing[this.size],
      block: this.bools[this.block] ? 'btn-block' : '',
      color: this.coloring[this.color],
    }

    this.props = `${Object.keys(properties).map(key => {
      return properties[key] ? properties[key] : '';
    }).join(' ')}`
  }
}
