import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-edit',
  templateUrl: './game-edit.component.html',
  styleUrls: ['./game-edit.component.css']
})
export class GameEditComponent {

  gameForm: FormGroup = this.fb.group({
    gameId: ['', Validators.required],
    title: ['', Validators.required],
    shortDescription: ['', Validators.required],
    description: ['', Validators.required],
    image: ['/assets/images/placeholder.png', Validators.required],
    features: this.fb.array([
      this.fb.group({
        gameFeatureId: [''],
        gameId: [''],
        name: ['new feature'],
        description: ['description of feature'],
        image: ['/assets/images/placeholder.png']
      })
    ])
  });

  constructor(private data: DataService, private fb: FormBuilder, private router: Router) {}

  submitForm(): void {
    console.log(this.gameForm.value);

    let game = {
      gameId: this.gameForm.value.gameId,
      title: this.gameForm.value.title,
      shortDescription: this.gameForm.value.shortDescription,
      description: this.gameForm.value.description,
      image: this.gameForm.value.image,
      features: this.gameForm.value.features
    }

    this.data.createGame(game);

    this.router.navigate(['']);
  }
}
