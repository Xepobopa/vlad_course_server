import {Body, Controller, Delete, Get, Param, Patch, Post, Query} from '@nestjs/common';
import {ProductService} from './product.service';
import {ProductDto} from "../dto/product.dto";
import {ProductQueryDto} from "../dto/product-query.dto";

@Controller('products')
export class ProductController {
    constructor(private readonly productService: ProductService) {
    }

    @Post()
    async create(@Body() createProduct: ProductDto) {
        console.log('new Product! ', createProduct)
        const res = await this.productService.create(createProduct);
        console.log('Res: ', res);
        return res
    }


    @Get('best')
    async getBest() {
        return await this.productService.getBest();
    }

    @Get('get')
    async getByQuery(@Query() query: ProductQueryDto)  {
        return await this.productService.getByQuery(query);
    }

    @Get()
    getAll() {
        return this.productService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return await this.productService.findOne(id);
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return await this.productService.remove(id);
    }
}
