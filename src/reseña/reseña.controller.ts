import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReseñaService } from './reseña.service';
import { CreateReseñaDto } from './dto/create-reseña.dto';
import { UpdateReseñaDto } from './dto/update-reseña.dto';

@Controller('resena')
export class ReseñaController {
  constructor(private readonly reseñaService: ReseñaService) {}

  @Post()
  create(@Body() createReseñaDto: CreateReseñaDto) {
    return `Aqui se van a registrar los datos de la reseña`;
  }

  @Get()
  findAll() {
    return `Aqui se van a consultar todas las reseñas`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Aqui se van a consultar los datos de la reseña con id ${id}`;
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReseñaDto: UpdateReseñaDto) {
    return  `Aqui se van a actualizar los datos de la reseña con id ${id}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `Aqui se van a eliminar los datos de la reseña con id ${id}`;
  }
}
