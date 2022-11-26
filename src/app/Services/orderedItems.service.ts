export class OrderedItems {//a service data to be used in components for ordered items

orderedItems2: any = [];
totalQuantity2: any = [];
totalPrice2: number = 0;

LOCAL_STORAGE_ORDERED_ITEMS_LIST_KEY: string = 'orderedItems.list' //all ordered items are kept in local store
LOCAL_STORAGE_TOTAL_QUANTITY_KEY: string = 'totalQuantity' //total quantity is kept in local store
LOCAL_STORAGE_TOTAL_PRICE: string = 'totalPrice' //total price is kept in local store
    

orderedItems: any = JSON.parse(localStorage.getItem(this.LOCAL_STORAGE_ORDERED_ITEMS_LIST_KEY)) || this.orderedItems2;
totalQuantity: any = JSON.parse(localStorage.getItem(this.LOCAL_STORAGE_TOTAL_QUANTITY_KEY)) || this.totalQuantity2;
totalPrice: number = JSON.parse(localStorage.getItem(this.LOCAL_STORAGE_TOTAL_PRICE)) || this.totalPrice2;

addOrderedItemToAccount(items: any) {//a function to be called back to add items chosen into ordered items to be shown in user account
    items.map((item: any)=> {
        this.orderedItems.push(item);
        /*if(item.quantity === 1) {
            this.totalQuantity.push('x');
            this.totalPrice += item.price;
        } else { //if there is more than 1 quantity for an item, this loop is used
            for(let i=0; i<item.quantity; i++) {
                this.totalQuantity.push('x');
            }
            this.totalPrice += (item.price)*(item.quantity);
        }*/
    });
   //this.saveInOrderedItemsServicesData();
   localStorage.setItem(this.LOCAL_STORAGE_ORDERED_ITEMS_LIST_KEY, JSON.stringify(this.orderedItems))
}

removeItem(item: any) {//a function to be called back to remove an item from user account
    this.orderedItems.map((a: any, index: any) => {
        if(item.uniqId == a.uniqId) {
            this.orderedItems.splice(index, 1);
        }
    });
    this.totalPrice -= (item.price)*(item.quantity);
    this.saveInOrderedItemsServicesData();
}

saveInOrderedItemsServicesData() {
    localStorage.setItem(this.LOCAL_STORAGE_ORDERED_ITEMS_LIST_KEY, JSON.stringify(this.orderedItems))
    localStorage.setItem(this.LOCAL_STORAGE_TOTAL_QUANTITY_KEY, JSON.stringify(this.totalQuantity))
    localStorage.setItem(this.LOCAL_STORAGE_TOTAL_PRICE, JSON.stringify(this.totalPrice))
}
}