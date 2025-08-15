import { Injectable } from '@nestjs/common';
import { CreateGerenteDto } from './dto/create-gerente.dto';
import { UpdateGerenteDto } from './dto/update-gerente.dto';

@Injectable()
export class GerenteService {
  create(createGerenteDto: CreateGerenteDto) {
    return 'This action adds a new gerente';
  }

  findAll() {
    return `This action returns all gerente`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gerente`;
  }

  update(id: number, updateGerenteDto: UpdateGerenteDto) {
    return `This action updates a #${id} gerente`;
  }

  remove(id: number) {
    return `This action removes a #${id} gerente`;
  }
}
