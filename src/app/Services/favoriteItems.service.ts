export class FavoriteItemsService {//a service data to be used in components for favorite items liked
    items2 : any = [];

    FAVORITE_ITEMS_LIST_KEY: string = 'favorites.list' //all favorite items are kept in local store

    items: any = JSON.parse(localStorage.getItem(this.FAVORITE_ITEMS_LIST_KEY)) || this.items2;

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
        this.saveInFavoriteItemsServicesData();
    }

    removeFromFavorites(item: any) {//a function to be called back to remove an item into favorites 
        this.items.map((a: any, index: any) => {
            if(item.id == a.id) {
                this.items.splice(index, 1);
            }
        })
       this.saveInFavoriteItemsServicesData();
    }

    saveInFavoriteItemsServicesData() {
        localStorage.setItem(this.FAVORITE_ITEMS_LIST_KEY, JSON.stringify(this.items))
    }
}