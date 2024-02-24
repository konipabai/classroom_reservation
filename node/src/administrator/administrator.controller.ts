import { Controller, Get, Body, Patch, Query, ParseIntPipe, Param } from '@nestjs/common';
import { AdministratorService } from './administrator.service';
import { FE_getAdministratorDto, FE_updateClassroomAdministratorDto, FE_updateFaultAdministratorDto, FE_updateLFAdministratorDto } from './dto/administrator.dto';

@Controller('administrator')
export class AdministratorController {
  constructor(private readonly administratorService: AdministratorService) {}

  @Get()
  getOrderAdministrator(@Query() params: FE_getAdministratorDto) {
    return this.administratorService.getOrderAdministrator(params);
  }

  @Patch()
  updateOrderAdministrator(@Body() params: FE_updateClassroomAdministratorDto | FE_updateFaultAdministratorDto | FE_updateLFAdministratorDto) {
    return this.administratorService.updateOrderAdministrator(params);
  }
}