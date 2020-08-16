import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  private url = "http://localhost:8080/Animals/";
  constructor(private httpClient:HttpClient) { }

  public getAnimals():any{
    return this.httpClient.get("http://localhost:8080/Animals/");    
  }
  public getAnimal(id:number):any{
    return this.httpClient.get("http://localhost:8080/Animals/" + id);    
  }
  public createAnimal(animal):any{
    return this.httpClient.post("http://localhost:8080/Animals/", animal);    
  }
  public updateAnimal(animal):any{
    return this.httpClient.put("http://localhost:8080/Animals/", animal);    
  }
  public deleteAnimal(id:number):any{
    return this.httpClient.delete("http://localhost:8080/Animals/" + id,
    {responseType: 'text'});    
  }

}
