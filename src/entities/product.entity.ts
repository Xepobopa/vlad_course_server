import {Column, Entity} from "typeorm";
import {AbstractEntity} from "./abstract.entity";
import {ShopEnum} from "../enums/shop.enum";

@Entity({name: "product"})
export class ProductEntity extends AbstractEntity {
    @Column('float8')
    public price: number;

    @Column('float8')
    public discount: number;

    @Column()
    public desc: string;

    @Column()
    public title: string;

    @Column({ enum: ShopEnum })
    public type: ShopEnum;

    @Column()
    public photo: string;
}
