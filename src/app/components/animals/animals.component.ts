import { Component, OnInit } from '@angular/core';
import {AnimalService} from '../../services/animal.service'

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {

  private animals:any;  
  constructor(private service: AnimalService) {}

  ngOnInit() {
    this.getAnimals();
  }
  public getAnimals(){
    this.service.getAnimals().subscribe(animals => this.animals = animals);
  }
  public deleteAnimal(id:number){
    this.service.deleteAnimal(id).subscribe(wynik => 
      {
        if(wynik) this.service.getAnimals().subscribe(animals => this.animals = animals);
        else console.log("Nie udało się usunąć");
      })
      
  }
}
