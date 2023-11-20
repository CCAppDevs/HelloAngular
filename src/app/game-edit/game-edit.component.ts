import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
        name: [''],
        description: [''],
        image: ['/assets/images/placeholder.png']
      })
    ])
  });

  constructor(private data: DataService, private fb: FormBuilder) {}

  submitForm(): void {
    console.log(this.gameForm.value);
  }
}
