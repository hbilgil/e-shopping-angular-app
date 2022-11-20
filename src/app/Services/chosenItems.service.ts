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
                switch(x.size) {
                    case 'S':
                        x.stockA.S--;
                    break;
                    case 'M':
                        x.stockA.M--;
                    break;
                    case 'L':
                        x.stockA.L--;
                    break;
                    case 'XL':
                        x.stockA.XL--;
                    break;
                    case '37':
                        x.stockB.num1--;
                    break;
                    case '38':
                        x.stockB.num2--;
                    break;
                    case '39':
                        x.stockB.num3--;
                    break;
                    case '40':
                        x.stockB.num4--;
                    break;
                    case '41':
                        x.stockB.num5--;
                    break;
                    case '42':
                        x.stockB.num6--;
                    break;
                    case '43':
                        x.stockB.num7--;
                      break;
                    case '44':
                        x.stockB.num8--;
                    break;
                    case '45':
                        x.stockB.num9--;
                    break;
                    case '46':
                        x.stockB.num10--;
                }
            }
        });
        if (!isInCart) {
        this.items.push(item);
        }
        this.totalQuantity.push("x");
        this.totalPrice += item.price;
    }

    removeAllItems(chosenItems: any) {
        this.totalPrice = 0;
        this.items.splice(0, chosenItems.length);
        this.totalQuantity.splice(0, this.totalQuantity.length);
    }

    removeItem(item: any) {
        this.items.map((a: any, index: any) => {
            if(item.uniqId == a.uniqId) {
                this.items.splice(index, 1);
            }
        })
        this.totalQuantity.splice(this.totalQuantity.length-item.quantity, item.quantity);
        this.totalPrice -= (item.quantity)*(item.price);
    }

    decreaseQuantity(item: any) {
        item.quantity -= 1;
        this.totalQuantity.pop();
        this.totalPrice -= item.price;
    }

    increaseQuantity(item: any) {
        item.quantity += 1;
        this.totalQuantity.push('x');
        this.totalPrice += item.price;    
    }
}