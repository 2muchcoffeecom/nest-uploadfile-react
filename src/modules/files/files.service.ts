import { Component } from '@nestjs/common';
import { File } from './interfaces/files.interface';

@Component()
export class FilesService {
  private readonly files: File[] = [];
  
  private static createFile(file): File {
    const type: string = file.originalname.replace(/.*\.(.*)/, '$1');
    const path: string = file.path;
    return {path, type};
  }
  
  createOne(file) {
    const savedFile: File = FilesService.createFile(file);
    this.files.push(savedFile);
    return savedFile;
  }
  
  createArray(files) {
    const savedFiles: File[] = files.map(file => FilesService.createFile(file));
    this.files.push(...savedFiles);
    return savedFiles;
  }
  
  list(): File[] {
    return this.files;
  }
}