import {Injectable} from '@nestjs/common';
import {ProductDto} from "../dto/product.dto";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {ProductEntity} from "../entities/product.entity";
import {ProductQueryDto} from "../dto/product-query.dto";
import {ShopEnum} from "../enums/shop.enum";

@Injectable()
export class ProductService {
    constructor(@InjectRepository(ProductEntity) private productRepository: Repository<ProductEntity>) {
    }

    async create(newProduct: ProductDto) {
        return await this.productRepository.save(newProduct);
    }

    async getByQuery(query: ProductQueryDto) {
        const queryBuilder = this.productRepository.createQueryBuilder('product');
        const productFields = ['discount', 'title', 'desc', 'price', 'type', 'photo'];

        for (const param in query) {
            if (query[param] === ShopEnum.ALL)
                break;
            if (productFields.includes(param)) {
                queryBuilder.andWhere(`product.${param} = :${param}`, {[param]: query[param]});
            }
        }

        return await queryBuilder.getMany();
    }

    async findAll() {
        return (await this.productRepository.find()).map(product => {
            return {
                price: product.discount,
                id: product.id,
                photo: product.photo,
                title: product.title,
                uuid: product.uuid
            }
        });
    }

    async findOne(id: string) {
        return await this.productRepository.findOne({where: {uuid: id}});
    }

    async getBest() {
        return (await this.productRepository.find({order: {discount: {direction: 'ASC'}}, take: 4})).map(product => {
            return {
                price: product.discount,
                id: product.id,
                photo: product.photo,
                title: product.title,
                uuid: product.uuid
            }
        });
    }

    async remove(id: string) {
        return await this.productRepository.delete({uuid: id});
    }
}
