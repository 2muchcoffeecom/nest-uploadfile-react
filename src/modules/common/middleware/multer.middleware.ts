import { Middleware, NestMiddleware } from '@nestjs/common';
import * as multer from 'multer';

@Middleware()
export class MulterMiddleware implements NestMiddleware {
  resolve(field: string, count?: number): (req, res, next) => void {
    const upload = multer({ dest: 'uploads/' });
    return count ? upload.array(field, count) : upload.single(field);
  }
}