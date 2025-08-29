import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CarsModule } from './cars/cars.module';
import { ReseñaModule } from './reseña/reseña.module';
import { GerenteModule } from './gerente/gerente.module';
import { PrismaModule } from './prisma/prisma.module';
import { MarcasModule } from './marcas/marcas.module';


@Module({
  imports: [CarsModule, ReseñaModule, GerenteModule, PrismaModule, MarcasModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
