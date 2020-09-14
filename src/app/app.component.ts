import { Component, ElementRef, OnInit, OnDestroy  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  private routeSub: Subscription;

  constructor(private elementRef: ElementRef,private route: ActivatedRoute){

  }
    ngOnInit(){

    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#D5EFEA';

 }


}

