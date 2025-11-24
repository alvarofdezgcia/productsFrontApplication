export interface CartAddRequest {
    id: string;
    colorCode: number;
    storageCode: number;
}

export interface CartAddResponse {
    count: number;
}
