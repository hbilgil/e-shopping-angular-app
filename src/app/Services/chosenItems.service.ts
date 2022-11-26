export class ChosenItemsService {//a service data to be used in components for chosen Items
    items2: any = [];
    totalQuantity2: any = [];
    totalPrice2: any = 0;

    LOCAL_STORAGE_CHOSEN_ITEMS_LIST_KEY: string = 'chosenItems.list' //all ordered items are kept in local store
    LOCAL_STORAGE_TOTAL_QUANTITY_KEY: string = 'totalQuantity' //total quantity is kept in local store
    LOCAL_STORAGE_TOTAL_PRICE: string = 'totalPrice' //total price is kept in local store
    
    items: any = JSON.parse(localStorage.getItem(this.LOCAL_STORAGE_CHOSEN_ITEMS_LIST_KEY)) || this.items2;
    totalQuantity: any = JSON.parse(localStorage.getItem(this.LOCAL_STORAGE_TOTAL_QUANTITY_KEY)) || this.totalQuantity2;
    totalPrice: number = JSON.parse(localStorage.getItem(this.LOCAL_STORAGE_TOTAL_PRICE)) || this.totalPrice2;
    
    addChosenItemToCart(item: any) {//a function to be called back by components for adding chosenItem into service data
        let isInCart = false;
        if (this.items.length > 0)
        this.items.forEach((x: any) => {
            if (x.name === item.name && x.size === item.size) { //if there is another chosenItem with the same size, the quantity will be increase without pushing a new item into chosen items array
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
        this.items.push(item);//if the chosen Item is not included in array before, it is pushed by a method
        }
        this.totalQuantity.push("x"); //another array for using to show total number of items with equal or different sizes is used
        this.totalPrice += item.price; //total price is dynamically increased by item price
        this.saveInChosenItemsServicesData();
    }

    removeAllItems(chosenItems: any) {//a function to remove all items when ordered
        this.items.splice(0, chosenItems.length);
        this.totalQuantity.splice(0, this.totalQuantity.length);
        this.totalPrice = 0;
        this.saveInChosenItemsServicesData();
    }

    removeItem(item: any) {//a function to remove the item from chosen items array
        this.items.map((a: any, index: any) => {
            if(item.uniqId == a.uniqId) {
                this.items.splice(index, 1);
            }
        })
        this.totalQuantity.splice(this.totalQuantity.length-item.quantity, item.quantity);
        this.totalPrice -= (item.quantity)*(item.price);
        this.saveInChosenItemsServicesData();
    }

    decreaseQuantity(item: any) {//a function to decrease quantity of a chosenItem without going back to shop
        item.quantity -= 1;
        this.totalQuantity.pop();
        this.totalPrice -= item.price;
        this.saveInChosenItemsServicesData();
    }

    increaseQuantity(item: any) {//a function to increase quantity of a chosenItem without going back to shop
        item.quantity += 1;
        this.totalQuantity.push('x');
        this.totalPrice += item.price;    
        this.saveInChosenItemsServicesData();
    }

    saveInChosenItemsServicesData() {
        localStorage.setItem(this.LOCAL_STORAGE_CHOSEN_ITEMS_LIST_KEY, JSON.stringify(this.items))
        localStorage.setItem(this.LOCAL_STORAGE_TOTAL_QUANTITY_KEY, JSON.stringify(this.totalQuantity))
        localStorage.setItem(this.LOCAL_STORAGE_TOTAL_PRICE, JSON.stringify(this.totalPrice))
    }
}