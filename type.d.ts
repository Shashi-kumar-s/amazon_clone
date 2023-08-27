export interface ProductProps{
    brand:string;
    category:string;
    description:string;
    discountPercentage:number;
    id:number;
    images:Array;
    price:number;
    rating:number;
    stock:number;
    thumbnail:string;
    title:string;
}

export interface StoreProduct{
    brand:string;
    category:string;
    description:string;
    discountPercentage:number;
    id:number;
    images:Array;
    price:number;
    rating:number;
    stock:number;
    thumbnail:string;
    title:string;
    quantity:number;
    image:string
}

export interface stateProps{
    ProductData:[];
    FavoriteData:[];
    UserInfo:null |string;
    next:any
}