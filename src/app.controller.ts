import {Controller, Delete, Get, Patch, Post } from '@nestjs/common';

//Endpoint:
//un metodo de una clase que responde a una solicitud HTTP
@Controller()
export class AppController {
  

  @Get()
  getMensaje(): string {
    return "Aqui se van a consultar datos";
  }

@Post()
//despues de dos puntos
//va el tipo de dato de retorno
//: lo que va devolver la funcion
//con el return
crear(): string {
  return "Aqui se van a crear datos";
}

@Patch()
actualizar(): string {
  return "Aqui se van a actualizar datos";
}

@Delete()
eliminar(): string {  return "Aqui se van a eliminar datos";
}

}