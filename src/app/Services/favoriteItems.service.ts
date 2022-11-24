export class FavoriteItemsService {//a service data to be used in components for favorite items liked
    items : any = [];

    addToFavorites(item: any) {//a function to be called back to add an item into favorites 
        let isInCart = false;
        if (this.items.length > 0)
        this.items.forEach((x: any) => {
            if (x.name === item.name) { //if the selected item is liked before, the function returns
                isInCart = true;
            }
        });
        if (!isInCart) {
        this.items.push(item);
        }
    }

    removeFromFavorites(item: any) {//a function to be called back to remove an item into favorites 
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