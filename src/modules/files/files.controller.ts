import { Controller, Post, Req, Res, HttpStatus, HttpException, Get } from '@nestjs/common';
import { FilesService } from './files.service';

@Controller('files')
export class FilesController {
  constructor(
    private readonly filesService: FilesService,
  ) {}
  
  @Post('avatar')
  async uploadOne(@Req() req: any, @Res() res: any) {
    const avatar: any = req.file;
    const upload: any = avatar ?
      this.filesService.createOne(avatar) :
      new HttpException('no file', HttpStatus.UNPROCESSABLE_ENTITY);
    return res.status(upload.status || HttpStatus.OK).json(upload);
  }
  
  @Post('gallery')
  async uploadMany(@Req() req: any, @Res() res: any) {
    const gallery: any = req.files;
    const upload: any = gallery.length ?
      this.filesService.createArray(gallery) :
      new HttpException('no file', HttpStatus.UNPROCESSABLE_ENTITY);
    return res.status(upload.status || HttpStatus.OK).json(upload);
  }
  
  @Get()
  async listFiles(@Res() res: any) {
    const filesList =  this.filesService.list();
    return res.status(HttpStatus.OK).json(filesList);
  }
  
}