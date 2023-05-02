import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-questioncard',
  templateUrl: './questioncard.component.html',
  styleUrls: ['./questioncard.component.css']
})
export class QuestioncardComponent {
  @Input() cardTitle: string = '';
  @Input() cardText: string = '';
  @Input() cardData: any = '';
  @Input() cardRating: number = 0;
  @Input() cardId: string = '';

  showCardPage() {
    window.location.href = '/detailpost/' + this.cardId;
  }
}
