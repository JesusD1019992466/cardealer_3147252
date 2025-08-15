import { Car } from './entities/car.entity';
import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {

  //Establecer el origen de datos en un arreglo:
  private carros = [
    new Car(1,"Mercedez Benz", new Date(), "NAT-152", true),
    new Car(2, "Lamborgini Veneno", new Date(), "MAN-702", true)


  ];

  //metodos accesores:
  //permiten acceder a atributos privados y sirven especificamente para eso
  get id(){
    return this
  }
  create(createCarDto: CreateCarDto) {
    return 'This action adds a new car';
  }

  findAll() {
    return this.carros;
  }

  findOne(id: number) {
    return this.carros.find(function(carro){
      return carro.id === id    })
  }

  update(id: number, updateCarDto: UpdateCarDto) {
    return `This action updates a #${id} car`;
  }

  remove(id: number) {
    this.carros = this.carros.
    filter(function(carro){

      return carro.id !== id

    })
    
  }
}
