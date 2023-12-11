import {AbstractEntity} from "../entities/abstract.entity";
import {Column} from "typeorm";
import {ShopEnum} from "../enums/shop.enum";
import {IsEnum, IsNotEmpty, IsNumber, IsString, IsUrl} from "class-validator";

export class ProductDto extends AbstractEntity {
    @IsNumber()
    public price: number;

    @IsNumber()
    public discount: number;

    @IsString()
    @IsNotEmpty()
    public title: string;

    @IsString()
    @IsNotEmpty()
    public desc: string;

    @IsString()
    @IsNotEmpty()
    @IsEnum(ShopEnum)
    @Column({ enum: ShopEnum })
    public type: ShopEnum;

    @IsUrl()
    @IsString()
    @IsNotEmpty()
    public photo: string;
}