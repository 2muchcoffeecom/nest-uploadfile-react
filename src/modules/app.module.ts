import { MiddlewaresConsumer, Module, RequestMethod } from '@nestjs/common';
import { MulterMiddleware } from './common/middleware/multer.middleware';
import { FilesModule } from './files/files.module';

@Module({
  modules: [FilesModule],
})
export class ApplicationModule {
  configure(consumer: MiddlewaresConsumer): void {
    consumer
    .apply(MulterMiddleware)
    .with('avatar')
    .forRoutes(
      {path: '/files/avatar', method: RequestMethod.POST},
    )
    .apply(MulterMiddleware)
    .with('gallery', 5)
    .forRoutes(
      {path: '/files/gallery', method: RequestMethod.POST},
    );
  }
}
