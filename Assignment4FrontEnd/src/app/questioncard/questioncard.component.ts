import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-questioncard',
  templateUrl: './questioncard.component.html',
  styleUrls: ['./questioncard.component.css']
})
export class QuestioncardComponent {
  @Input() cardTitle: string = '';
  @Input() cardText: string = '';
}
