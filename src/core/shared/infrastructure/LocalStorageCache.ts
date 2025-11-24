export interface CacheItem<T> {
    value: T;
    expiry: number;
}

export class LocalStorageCache {
    private static TTL = 3600 * 1000; // 1 hour

    static set<T>(key: string, value: T): void {
        const item: CacheItem<T> = {
            value,
            expiry: Date.now() + this.TTL,
        };
        localStorage.setItem(key, JSON.stringify(item));
    }

    static get<T>(key: string): T | null {
        const itemStr = localStorage.getItem(key);
        if (!itemStr) return null;

        try {
            const item: CacheItem<T> = JSON.parse(itemStr);
            if (Date.now() > item.expiry) {
                localStorage.removeItem(key);
                return null;
            }
            return item.value;
        } catch (e) {
            return null;
        }
    }
}
