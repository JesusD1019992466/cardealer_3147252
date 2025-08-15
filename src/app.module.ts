import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CarsModule } from './cars/cars.module';
import { ReseñaModule } from './reseña/reseña.module';
import { GerenteModule } from './gerente/gerente.module';


@Module({
  imports: [CarsModule, ReseñaModule, GerenteModule],
  controllers: [AppController],
})
export class AppModule {}
