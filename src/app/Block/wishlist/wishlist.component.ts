import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  @Input() gameId: string = "";

  hasWishlisted: boolean = false;

  wishlistForm: FormGroup = this.fb.group({
    gameId: ['', Validators.required],
    email: ['placeholder', [Validators.required, Validators.email]]
  });

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.wishlistForm.patchValue({
      gameId: this.gameId
    });
  }

  onSubmit(): void {
    console.log('wishlist added', this.wishlistForm);
    this.hasWishlisted = true;
  }

}
