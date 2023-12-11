import {Module} from '@nestjs/common';
import {ProductService} from './product.service';
import {ProductController} from './product.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ProductEntity} from "../entities/product.entity";
import {AbstractEntity} from "../entities/abstract.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([ProductEntity, AbstractEntity])
    ],
    controllers: [ProductController],
    providers: [ProductService],
})
export class ProductModule {
}
