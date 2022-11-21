export class FavoriteItemsService {
    items : any = [];

    addToFavorites(item: any) {
        let isInCart = false;
        if (this.items.length > 0)
        this.items.forEach((x: any) => {
            if (x.name === item.name) {
                isInCart = true;
            }
        });
        if (!isInCart) {
        this.items.push(item);
        }
    }

    removeFromFavorites(item: any) {
        this.items.map((a: any, index: any) => {
            if(item.id == a.id) {
                this.items.splice(index, 1);
            }
        })
    }

    FAVORITE_ITEMS_LIST_KEY: string = 'favorites.list' //all products are kept in local store

    saveInFavoriteItemsServicesData() {
        localStorage.setItem(this.FAVORITE_ITEMS_LIST_KEY, JSON.stringify(this.favorites))
    }

    favorites = JSON.parse(`${localStorage.getItem(this.FAVORITE_ITEMS_LIST_KEY || this.items)}`);

}