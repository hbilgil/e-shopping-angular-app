export class ChosenItemsService {
    items : any = [];
    totalQuantity: any = [];
    totalPrice: any = 0;

    addChosenItemToCart(item: any) {
        let isInCart = false;
        if (this.items.length > 0)
        this.items.forEach((x: any) => {
            if (x.name === item.name && x.size === item.size) {
                x.quantity += 1;
                isInCart = true;
            }
        });
        if (!isInCart) {
        this.items.push(item);
        }
        this.totalQuantity.push("x");
        this.totalPrice += item.price;
    }

    removeItem(item: any) {
        this.items.map((a: any, index: any) => {
            if(item.uniqId == a.uniqId) {
                this.items.splice(index, 1);
            }
        })
    }
}