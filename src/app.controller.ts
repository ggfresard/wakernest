import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'
import { getMousePos, getPixelColor, moveMouseSmooth } from 'robotjs'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello()
  }

  @Get('get-cursor-color')
  getCursorColor(): { x: number; y: number; color: string } {
    const mouse = getMousePos()
    const color = getPixelColor(mouse.x, mouse.y)
    if (color == '344460') {
      moveMouseSmooth(100, 100)
    }
    return { x: mouse.x, y: mouse.y, color }
  }
}
