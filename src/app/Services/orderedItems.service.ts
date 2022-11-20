export class OrderedItems {

orderedItems: any = [];
totalQuantity: any = [];
totalPrice: number = 0;

addOrderedItemToAccount(items: any) {
    items.forEach((item: any)=> {
        this.orderedItems.push(item);
        if(item.quantity === 1) {
            this.totalQuantity.push("x");
            this.totalPrice += item.price;
        } else {
            for(let i=0; i<item.quantity; i++) {
                this.totalQuantity.push("x");
            }
            this.totalPrice += (item.price)*(item.quantity);
        }
    });
}

removeItem(item: any) {
    this.orderedItems.map((a: any, index: any) => {
        if(item.uniqId == a.uniqId) {
            this.orderedItems.splice(index, 1);
        }
    });
}
}