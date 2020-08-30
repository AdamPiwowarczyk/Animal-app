import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AnimalService} from '../../services/animal.service'
import {Router} from '@angular/router'
import { Animal } from 'src/app/models/animal';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  private pictures = [
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

  private animal: Animal;

  constructor(private route: ActivatedRoute, private service: AnimalService, private router: Router) { }

  ngOnInit() {
    this.animal = new Animal(null, '', 0, 0, '');
    this.getAnimal();
   }

  getAnimal(){
      this.route.params.subscribe(params => {
        if(params['id']){
          this.animal.id = +params['id']
          this.service.getAnimal(this.animal.id).subscribe(response => this.animal = response)  
        }
      }) 
  }

  submit(){
    if(this.animal.id)
      this.service.updateAnimal(this.animal).subscribe(response => this.animal = response);
    else
      this.service.createAnimal(this.animal).subscribe();
    
    this.router.navigateByUrl('');
  }

}
