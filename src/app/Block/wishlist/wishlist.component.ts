import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  @Input() gameId: string = "";

  wishlistForm: FormGroup = this.fb.group({
    gameId: '',
    email: 'joe@gamer.com'
  });

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.wishlistForm.patchValue({
      gameId: this.gameId
    });
  }

  onSubmit(): void {
    console.log('wishlist added', this.wishlistForm.value);
  }

}
