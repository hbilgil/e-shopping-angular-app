export class OrderedItems {//a service data to be used in components for ordered items

orderedItems: any = [];
totalQuantity: any = [];
totalPrice: number = 0;
shippingPrice: number = 20; //shipping price will be used in order total

addOrderedItemToAccount(items: any) {//a function to be called back to add items chosen into ordered items to be shown in user account
    items.forEach((item: any)=> {
        this.orderedItems.push(item);
        if(item.quantity === 1) {
            this.totalQuantity.push("x");
            this.totalPrice += item.price;
        } else { //if there is more than 1 quantity for an item, this loop is used
            for(let i=0; i<item.quantity; i++) {
                this.totalQuantity.push("x");
            }
            this.totalPrice += (item.price)*(item.quantity);
        }
    });
}

removeItem(item: any) {//a function to be called back to remove an item from user account
    this.orderedItems.map((a: any, index: any) => {
        if(item.uniqId == a.uniqId) {
            this.orderedItems.splice(index, 1);
        }
    });
    this.totalPrice -= (item.price)*(item.quantity);
}
}