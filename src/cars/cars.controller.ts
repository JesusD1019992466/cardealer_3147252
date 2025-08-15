import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Post()
  create(@Body() createCarDto: CreateCarDto) {
    return `Aqui se van a registrar los datos del carro`;
  }

  @Get()
  findAll() {
    return this
      this.carsService
      this.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarDto: UpdateCarDto) {
    return `Aqui se van a actualizar los datos del carro con id ${id}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.carsService.remove(+id)
    return {
      success : true,
      carro_eliminado_eliminar: id
    }
  }
}
