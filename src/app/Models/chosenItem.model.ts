export interface ChosenProduct { //an object model to be used in chosenItems when size is decided and sent to shopping-cart
    uniqId: string;
    id: number;
    name: string;
    price: number;
    image: string;
    size: string;
    quantity: number;
    stockA: {
      S: number;
      M: number;
      L: number;
      XL: number;};
    stockB: {
      num1: number;
      num2: number;
      num3: number;
      num4: number;
      num5: number;
      num6: number;
      num7: number;
      num8: number;
      num9: number;
      num10: number;
    };
};