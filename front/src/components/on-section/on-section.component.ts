import { Component, Input } from '@angular/core';

@Component({
  selector: 'on-section',
  standalone: true,
  imports: [],
  templateUrl: './on-section.component.html',
  styleUrls: ['./on-section.component.scss'] 
})
export class OnSectionComponent {
  @Input() backgroundColor: string = '';
  @Input() class: string = '';
}
