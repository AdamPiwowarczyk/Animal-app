import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AnimalService} from '../../services/animal.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  private animalId;
  pictures = [
    {
      address:"../assets/sum-ryba.jpg",
      name:"Sum, król wód"
    },
    {
      address:"../assets/lion.jpg",
      name:"Lion"
    },
    {
      address:"../assets/elephant.jpg",
      name:"Elephant"
    },
    {
      address:"../assets/snake.jpg",
      name:"Snake"
    }
  ]
  private animal = {
    "id":0,
    "name":'',
    "weight":0,
    "legs":0,
    "img":''
  }

  constructor(private route: ActivatedRoute, private service: AnimalService, private router: Router) { }

  ngOnInit() {
    this.getAnimal();
   }

  getAnimal(){
      this.route.params.subscribe(params => {
        if(params['id']){
          this.animalId = +params['id']
          this.service.getAnimal(this.animalId).subscribe(response => this.animal = response)  
        }
      }) 
  }

  submit(){
    if(this.animalId)
      this.service.updateAnimal(this.animal).subscribe(response => this.animal = response);
    else
      this.service.createAnimal(this.animal).subscribe();
    
    this.router.navigateByUrl('');
  }

}
