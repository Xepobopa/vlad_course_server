import {Module} from '@nestjs/common';
import {ProductModule} from './product/product.module';
import {typeOrmAsyncConfig} from "./config/typeorm.config";
import {ConfigModule} from "@nestjs/config";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
    imports: [
        ConfigModule.forRoot(),
        TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
        ProductModule,
    ],
})

export class AppModule {
}
