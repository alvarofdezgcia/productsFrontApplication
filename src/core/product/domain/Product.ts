export interface Product {
    id: string;
    brand: string;
    model: string;
    price: string;
    imgUrl: string;
}

export interface ProductDetail extends Product {
    cpu: string;
    ram: string;
    os: string;
    displayResolution: string;
    battery: string;
    primaryCamera: string | string[];
    secondaryCmera: string | string[];
    dimentions: string;
    weight: string;
    options: {
        colors: { code: number; name: string }[];
        storages: { code: number; name: string }[];
    };
}
