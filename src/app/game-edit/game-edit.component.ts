import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-game-edit',
  templateUrl: './game-edit.component.html',
  styleUrls: ['./game-edit.component.css']
})
export class GameEditComponent implements OnInit {

  id: string = "";

  gameForm: FormGroup = this.fb.group({
    gameId: ['', Validators.required],
    title: ['', Validators.required],
    shortDescription: ['', Validators.required],
    description: ['', Validators.required],
    image: ['/assets/images/placeholder.png', Validators.required],
    features: this.fb.array([])
  });

  constructor(
    private data: DataService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => {
        this.id = params.get('id') || "";
        return this.data.getOneGame(this.id);
      })
    ).subscribe(result => {
      console.log("the game", result);
      this.initForm(result);
      console.log("the form", this.gameForm.value);
    })
  }

  initForm(game: any): void {
    console.log("inside initform", game.features);

    this.gameForm.patchValue({
     gameId: game.gameId,
     title: game.title,
     shortDescription: game.shortDescription,
     description: game.description,
     image: game.image
    });

    // TODO add all features into the features array
    game.features.forEach((gameFeature: any) => {
      this.features.push(this.makeFeatureGroup(gameFeature));
    });
    
  }

  get features() {
    return this.gameForm.get('features') as FormArray;
  }

  makeFeatureGroup(gameFeature: any): FormGroup {
    return this.fb.group({
      gameFeatureId: [gameFeature.gameFeatureId, Validators.required],
      gameId: [gameFeature.gameId, Validators.required],
      name: [gameFeature.name, Validators.required],
      description: [gameFeature.description, Validators.required],
      image: [gameFeature.image, Validators.required]
    });
  }

  addNewFeature(): void {
    this.features.push(this.fb.group({
      gameFeatureId: ['', Validators.required],
      gameId: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
      image: ['/assets/images/placeholder.png', Validators.required]
    }))
  }

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

    // if we are not editing
    if (this.id == "") {
      this.data.createGame(game);
      this.router.navigate(['']);
    }
    else {
      this.data.updateGame(game);
      this.router.navigate(['games', game.gameId]);
    }      


  }
}
