import { DetailsService } from "./details.service"; //details are imported from another service data
import { Injectable } from "@angular/core"; //details data are injected

@Injectable()
export class ProductsService {//a service data to be used in components for ALL products defined here

    constructor(private service: DetailsService){}

    LOCAL_STORAGE_LIST_KEY: string = 'product.list' //all products are kept in local store

    saveInProductsServicesData() {
        localStorage.setItem(this.LOCAL_STORAGE_LIST_KEY, JSON.stringify(this.products))
    }
    
    product: any;

    addItemToFavs(item: any) {//a function to be called back to change fav boolean value as true for a product liked
        let productId = item.id
        this.product = this.products.find((element: any) => element.id == productId);
        this.product.fav = true;
    };

    removeItemFromFavs(item: any) {//a function to be called back to change fav boolean value as false for a product disliked
        let productId = item.id
        this.product = this.products.find((element: any) => element.id == productId);
        this.product.fav = false;
    };

    removeProduct(value: any, product: any) {//a function to be called back to remove product and return back to the stock 
        switch(value) {
            case 'S':
                product.stockA.S--;
            break;
            case 'M':
                product.stockA.M--;
            break;
            case 'L':
                product.stockA.L--;
            break;
            case 'XL':
                product.stockA.XL--;
            break;
            case '37':
                product.stockB.num1--;
            break;
            case '38':
                product.stockB.num2--;
            break;
            case '39':
                product.stockB.num3--;
            break;
            case '40':
                product.stockB.num4--;
            break;
            case '41':
                product.stockB.num5--;
            break;
            case '42':
                product.stockB.num6--;
            break;
            case '43':
                product.stockB.num7--;
              break;
            case '44':
                product.stockB.num8--;
            break;
            case '45':
                product.stockB.num9--;
            break;
            case '46':
                product.stockB.num10--;
        }
    }

    addItemQuantityToStock(item: any) {//a function to be called back to return back an item with multiple quantities to the stock 
        let productId = item.id
        this.product = this.products.find((element: any) => element.id == productId);
            switch(item.size) {
                case 'S':
                    this.product.stockA.S += item.quantity;
                break;
                case 'M':
                    this.product.stockA.M += item.quantity;
                break;
                case 'L':
                    this.product.stockA.L += item.quantity;
                break;
                case 'XL':
                    this.product.stockA.XL += item.quantity;
                break;
                case '37':
                    this.product.stockB.num1 += item.quantity;
                break;
                case '38':
                    this.product.stockB.num2 += item.quantity;
                break;
                case '39':
                    this.product.stockB.num3 += item.quantity;
                break;
                case '40':
                    this.product.stockB.num4 += item.quantity;
                break;
                case '41':
                    this.product.stockB.num5 += item.quantity;
                break;
                case '42':
                    this.product.stockB.num6 += item.quantity;
                break;
                case '43':
                    this.product.stockB.num7 += item.quantity;
                break;
                case '44':
                    this.product.stockB.num8 += item.quantity;
                break;
                case '45':
                    this.product.stockB.num9 += item.quantity;
                break;
                case '46':
                    this.product.stockB.num10 += item.quantity;
            }
    }

    addItemSizeToStock(item: any) {//a function to be called back to return back an item with 1 quantity to the stock 
        let productId = item.id
        this.product = this.products.find((element: any) => element.id == productId);
            switch(item.size) {
                case 'S':
                    this.product.stockA.S++;
                break;
                case 'M':
                    this.product.stockA.M++;
                break;
                case 'L':
                    this.product.stockA.L++;
                break;
                case 'XL':
                    this.product.stockA.XL++;
                break;
                case '37':
                    this.product.stockB.num1++;
                break;
                case '38':
                    this.product.stockB.num2++;
                break;
                case '39':
                    this.product.stockB.num3++;
                break;
                case '40':
                    this.product.stockB.num4++;
                break;
                case '41':
                    this.product.stockB.num5++;
                break;
                case '42':
                    this.product.stockB.num6++;
                break;
                case '43':
                    this.product.stockB.num7++;
                break;
                case '44':
                    this.product.stockB.num8++;
                break;
                case '45':
                    this.product.stockB.num9++;
                break;
                case '46':
                    this.product.stockB.num10++;
            }
    }

    removeItemSizeFromStock(item: any) {// a function to be called back to remove an item from stock when chosen or ordered
        let productId = item.id
        this.product = this.products.find((element: any) => element.id == productId);
            switch(item.size) {
                case 'S':
                    this.product.stockA.S--;
                break;
                case 'M':
                    this.product.stockA.M--;
                break;
                case 'L':
                    this.product.stockA.L--;
                break;
                case 'XL':
                    this.product.stockA.XL--;
                break;
                case '37':
                    this.product.stockB.num1--;
                break;
                case '38':
                    this.product.stockB.num2--;
                break;
                case '39':
                    this.product.stockB.num3--;
                break;
                case '40':
                    this.product.stockB.num4--;
                break;
                case '41':
                    this.product.stockB.num5--;
                break;
                case '42':
                    this.product.stockB.num6--;
                break;
                case '43':
                    this.product.stockB.num7--;
                break;
                case '44':
                    this.product.stockB.num8--;
                break;
                case '45':
                    this.product.stockB.num9--;
                break;
                case '46':
                    this.product.stockB.num10--;
            }
    }

    products2 = [
        {
            id: 1,
            name: 'Adidas Grey T-shirt',
            description: this.service.details[0].description,
            details: this.service.details[0].details,
            care: this.service.details[0].care,
            price: 12.5,
            gender: 'Men',
            category: 'T-shirts',
            image1: 'assets/products/men/tshirts/adidas_grey_1.png',
            image2: 'assets/products/men/tshirts/adidas_grey_2.png',
            src: '',
            fav: false,
            stockA: {
                S: 0,
                M: 3,
                L: 1,
                XL: 2,
            },
            stockB: {
                num1: 0,
                num2: 0,
                num3: 0,
                num4: 0,
                num5: 0,
                num6: 0,
                num7: 0,
                num8: 0,
                num9: 0,
                num10: 0,
            },
        },
        {
            id: 2,
            name: "Adidas Red T-shirt",
            description: this.service.details[1].description,
            details: this.service.details[1].details,
            care: this.service.details[1].care,
            price: 12,
            gender: 'Men',
            category: 'T-shirts',
            image1: "assets/products/men/tshirts/adidas_red_1.png",
            image2: "assets/products/men/tshirts/adidas_red_2.png",
            src: '',
            fav: false,
            stockA: {
                S: 1,
                M: 0,
                L: 1,
                XL: 0,
            },
            stockB: {
                num1: 0,
                num2: 0,
                num3: 0,
                num4: 0,
                num5: 0,
                num6: 0,
                num7: 0,
                num8: 0,
                num9: 0,
                num10: 0,
            },
        },
        {
            id: 3,
            name: "Adidas Long Sleeve T-shirt",
            description: this.service.details[2].description,
            details: this.service.details[2].details,
            care: this.service.details[2].care,
            price: 14.9,
            gender: 'Men',
            category: 'T-shirts',
            image1: "assets/products/men/tshirts/adidas_long_sleeve_1.png",
            image2: "assets/products/men/tshirts/adidas_long_sleeve_2.png",
            src: '',
            fav: false,
            stockA: {
                S: 0,
                M: 2,
                L: 0,
                XL: 0,
            },
            stockB: {
                num1: 0,
                num2: 0,
                num3: 0,
                num4: 0,
                num5: 0,
                num6: 0,
                num7: 0,
                num8: 0,
                num9: 0,
                num10: 0,
            },
        },
        {
            id: 4,
            name: "Nike Air Black T-shirt",
            description: this.service.details[3].description,
            details: this.service.details[3].details,
            care: this.service.details[3].care,
            price: 13.9,
            gender: 'Men',
            category: 'T-shirts',
            image1: "assets/products/men/tshirts/nike_air_black_1.png",
            image2: "assets/products/men/tshirts/nike_air_black_2.png",
            src: '',
            fav: false,
            stockA: {
                S: 1,
                M: 2,
                L: 2,
                XL: 1,
            },
            stockB: {
                num1: 0,
                num2: 0,
                num3: 0,
                num4: 0,
                num5: 0,
                num6: 0,
                num7: 0,
                num8: 0,
                num9: 0,
                num10: 0,
            },
        },
        {
            id: 5,
            name: "Nike Air Jordan Grey T-shirt",
            description: this.service.details[4].description,
            details: this.service.details[4].details,
            care: this.service.details[4].care,
            price: 15.5,
            gender: 'Men',
            category: 'T-shirts',
            image1: "assets/products/men/tshirts/air_jordan_grey_1.png",
            image2: "assets/products/men/tshirts/air_jordan_grey_2.png",
            src: '',
            fav: false,
            stockA: {
                S: 1,
                M: 2,
                L: 0,
                XL: 2,
            },
            stockB: {
                num1: 0,
                num2: 0,
                num3: 0,
                num4: 0,
                num5: 0,
                num6: 0,
                num7: 0,
                num8: 0,
                num9: 0,
                num10: 0,
            },
        },
        {
            id: 6,
            name: "Nike Long Sleeve T-shirt",
            description: this.service.details[5].description,
            details: this.service.details[5].details,
            care: this.service.details[5].care,
            price: 17,
            gender: 'Men',
            category: 'T-shirts',
            image1: "assets/products/men/tshirts/nike_long_sleeve_1.png",
            image2: "assets/products/men/tshirts/nike_long_sleeve_2.png",
            src: '',
            fav: false,
            stockA: {
                S: 0,
                M: 0,
                L: 0,
                XL: 0,
            },
            stockB: {
                num1: 0,
                num2: 0,
                num3: 0,
                num4: 0,
                num5: 0,
                num6: 0,
                num7: 0,
                num8: 0,
                num9: 0,
                num10: 0,
            },
        },{
            id: 7,
            name: 'Adidas Essential Big Logo Sweatshirt',
            description: this.service.details[6].description,
            details: this.service.details[6].details,
            care: this.service.details[6].care,
            price: 52.5,
            gender: 'Men',
            category: 'Sweaters',
            image1: 'assets/products/men/sweaters/adidas_ess_big_logo_1.png',
            image2: 'assets/products/men/sweaters/adidas_ess_big_logo_2.png',
            src: '',
            fav: false,
            stockA: {
                S: 1,
                M: 2,
                L: 2,
                XL: 0,
            },
            stockB: {
                num1: 0,
                num2: 0,
                num3: 0,
                num4: 0,
                num5: 0,
                num6: 0,
                num7: 0,
                num8: 0,
                num9: 0,
                num10: 0,
            },
        },
        {
            id: 8,
            name: "Adidas Essential Hoodie",
            description: this.service.details[7].description,
            details: this.service.details[7].details,
            care: this.service.details[7].care,
            price: 61,
            gender: "Men",
            category: "Sweaters",
            image1: "assets/products/men/sweaters/adidas_essential_hoodie_1.png",
            image2: "assets/products/men/sweaters/adidas_essential_hoodie_2.png",
            src: '',
            fav: false,
            stockA: {
                S: 2,
                M: 2,
                L: 1,
                XL: 1,
            },
            stockB: {
                num1: 0,
                num2: 0,
                num3: 0,
                num4: 0,
                num5: 0,
                num6: 0,
                num7: 0,
                num8: 0,
                num9: 0,
                num10: 0,
            },
        },
        {
            id: 9,
            name: "Adidas Zipped Sweater",
            description: this.service.details[8].description,
            details: this.service.details[8].details,
            care: this.service.details[8].care,
            price: 54.9,
            gender: "Men",
            category: "Sweaters",
            image1: "assets/products/men/sweaters/adidas_zipped_1.png",
            image2: "assets/products/men/sweaters/adidas_zipped_2.png",
            src: '',
            fav: false,
            stockA: {
                S: 1,
                M: 2,
                L: 0,
                XL: 0,
            },
            stockB: {
                num1: 0,
                num2: 0,
                num3: 0,
                num4: 0,
                num5: 0,
                num6: 0,
                num7: 0,
                num8: 0,
                num9: 0,
                num10: 0,
            },
        },
        {
            id: 10,
            name: "Nike Air Big Logo Sweatshirt",
            description: this.service.details[9].description,
            details: this.service.details[9].details,
            care: this.service.details[9].care,
            price: 53.9,
            gender: "Men",
            category: "Sweaters",
            image1: "assets/products/men/sweaters/nike_air_big_logo_2.png",
            image2: "assets/products/men/sweaters/nike_air_big_logo_1.png",
            src: '',
            fav: false,
            stockA: {
                S: 0,
                M: 0,
                L: 0,
                XL: 0,
            },
            stockB: {
                num1: 0,
                num2: 0,
                num3: 0,
                num4: 0,
                num5: 0,
                num6: 0,
                num7: 0,
                num8: 0,
                num9: 0,
                num10: 0,
            },
        },
        {
            id: 11,
            name: "Nike Air Jordan Hoodie",
            description: this.service.details[10].description,
            details: this.service.details[10].details,
            care: this.service.details[10].care,
            price: 65.5,
            gender: "Men",
            category: "Sweaters",
            image1: "assets/products/men/sweaters/nike_air_jordan_2.png",
            image2: "assets/products/men/sweaters/nike_air_jordan_1.png",
            src: '',
            fav: false,
            stockA: {
                S: 0,
                M: 0,
                L: 0,
                XL: 2,
            },
            stockB: {
                num1: 0,
                num2: 0,
                num3: 0,
                num4: 0,
                num5: 0,
                num6: 0,
                num7: 0,
                num8: 0,
                num9: 0,
                num10: 0,
            },
        },
        {
            id: 12,
            name: "Nike Zipped Sweater",
            description: this.service.details[11].description,
            details: this.service.details[11].details,
            care: this.service.details[11].care,
            price: 57,
            gender: "Men",
            category: "Sweaters",
            image1: "assets/products/men/sweaters/nike_zipped_2.png",
            image2: "assets/products/men/sweaters/nike_zipped_1.png",
            src: '',
            fav: false,
            stockA: {
                S: 0,
                M: 2,
                L: 2,
                XL: 0,
            },
            stockB: {
                num1: 0,
                num2: 0,
                num3: 0,
                num4: 0,
                num5: 0,
                num6: 0,
                num7: 0,
                num8: 0,
                num9: 0,
                num10: 0,
            },
        },
        {
            id: 13,
            name: 'Adidas Duramo Running Shoes',
            description: this.service.details[12].description,
            details: this.service.details[12].details,
            care: this.service.details[12].care,
            price: 46.5,
            gender: "Men",
            category: "Sneakers",
            image1: 'assets/products/men/sneakers/adidas_duramo_1.png',
            image2: 'assets/products/men/sneakers/adidas_duramo_2.png',
            src: '',
            fav: false,
            stockA: {
                S: 0,
                M: 0,
                L: 0,
                XL: 0,
            },
            stockB: {
                num1: 0,
                num2: 2,
                num3: 0,
                num4: 1,
                num5: 0,
                num6: 2,
                num7: 0,
                num8: 1,
                num9: 0,
                num10: 2,
            },
        },
        {
            id: 14,
            name: "Adidas FluidFlow Running Shoes",
            description: this.service.details[13].description,
            details: this.service.details[13].details,
            care: this.service.details[13].care,
            price: 39,
            gender: "Men",
            category: "Sneakers",
            image1: "assets/products/men/sneakers/adidas_fluidflow_1.png",
            image2: "assets/products/men/sneakers/adidas_fluidflow_2.png",
            src: '',
            fav: false,
            stockA: {
                S: 0,
                M: 0,
                L: 0,
                XL: 0,
            },
            stockB: {
                num1: 1,
                num2: 2,
                num3: 1,
                num4: 1,
                num5: 0,
                num6: 2,
                num7: 0,
                num8: 1,
                num9: 0,
                num10: 0,
            },
        },
        {
            id: 15,
            name: "Adidas Response Running Shoes",
            description: this.service.details[14].description,
            details: this.service.details[14].details,
            care: this.service.details[14].care,
            price: 41.9,
            gender: "Men",
            category: "Sneakers",
            image1: "assets/products/men/sneakers/adidas_response_1.png",
            image2: "assets/products/men/sneakers/adidas_response_2.png",
            src: '',
            fav: false,
            stockA: {
                S: 0,
                M: 0,
                L: 0,
                XL: 0,
            },
            stockB: {
                num1: 1,
                num2: 2,
                num3: 1,
                num4: 1,
                num5: 1,
                num6: 2,
                num7: 1,
                num8: 1,
                num9: 1,
                num10: 2,
            },
        },
        {
            id: 16,
            name: "Adidas Ultra 4D Running Shoes",
            description: this.service.details[15].description,
            details: this.service.details[15].details,
            care: this.service.details[15].care,
            price: 33.5,
            gender: "Men",
            category: "Sneakers",
            image1: "assets/products/men/sneakers/adidas_ultra_4d_1.png",
            image2: "assets/products/men/sneakers/adidas_ultra_4d_2.png",
            src: '',
            fav: false,
            stockA: {
                S: 0,
                M: 0,
                L: 0,
                XL: 0,
            },
            stockB: {
                num1: 0,
                num2: 0,
                num3: 0,
                num4: 0,
                num5: 0,
                num6: 2,
                num7: 0,
                num8: 1,
                num9: 0,
                num10: 2,
            },
        },
        {
            id: 17,
            name: "Nike Air Jordan Basketball Shoes",
            description: this.service.details[16].description,
            details: this.service.details[16].details,
            care: this.service.details[16].care,
            price: 65.7,
            gender: "Men",
            category: "Sneakers",
            image1: "assets/products/men/sneakers/nike_air_jordan_1.png",
            image2: "assets/products/men/sneakers/nike_air_jordan_2.png",
            src: '',
            fav: false,
            stockA: {
                S: 0,
                M: 0,
                L: 0,
                XL: 0,
            },
            stockB: {
                num1: 0,
                num2: 0,
                num3: 0,
                num4: 0,
                num5: 0,
                num6: 0,
                num7: 0,
                num8: 0,
                num9: 0,
                num10: 0,
            },
        },
        {
            id: 18,
            name: "Nike Air Zoom Running Shoes",
            description: this.service.details[17].description,
            details: this.service.details[17].details,
            care: this.service.details[17].care,
            price: 47,
            gender: "Men",
            category: "Sneakers",
            image1: "assets/products/men/sneakers/nike_air_zoom_1.png",
            image2: "assets/products/men/sneakers/nike_air_zoom_2.png",
            src: '',
            fav: false,
            stockA: {
                S: 0,
                M: 0,
                L: 0,
                XL: 0,
            },
            stockB: {
                num1: 1,
                num2: 2,
                num3: 0,
                num4: 1,
                num5: 1,
                num6: 2,
                num7: 0,
                num8: 0,
                num9: 0,
                num10: 0,
            },
        },
        {
            id: 19,
            name: "Nike Lebron James Basketball Shoes",
            description: this.service.details[18].description,
            details: this.service.details[18].details,
            care: this.service.details[18].care,
            price: 63.5,
            gender: "Men",
            category: "Sneakers",
            image1: "assets/products/men/sneakers/nike_lebron_1.png",
            image2: "assets/products/men/sneakers/nike_lebron_2.png",
            src: '',
            fav: false,
            stockA: {
                S: 0,
                M: 0,
                L: 0,
                XL: 0,
            },
            stockB: {
                num1: 0,
                num2: 0,
                num3: 1,
                num4: 1,
                num5: 2,
                num6: 2,
                num7: 0,
                num8: 1,
                num9: 0,
                num10: 2,
            },
        },
        {
            id: 20,
            name: "Nike Pegasus Running Shoes",
            description: this.service.details[19].description,
            details: this.service.details[19].details,
            care: this.service.details[19].care,
            price: 42.3,
            gender: "Men",
            category: "Sneakers",
            image1: "assets/products/men/sneakers/nike_pegasus_1.png",
            image2: "assets/products/men/sneakers/nike_pegasus_2.png",
            src: '',
            fav: false,
            stockA: {
                S: 0,
                M: 0,
                L: 0,
                XL: 0,
            },
            stockB: {
                num1: 0,
                num2: 2,
                num3: 1,
                num4: 1,
                num5: 1,
                num6: 2,
                num7: 0,
                num8: 0,
                num9: 0,
                num10: 1,
            },
        },
        {
            id: 21,
            name: "Nike React Running Shoes",
            description: this.service.details[20].description,
            details: this.service.details[20].details,
            care: this.service.details[20].care,
            price: 41,
            gender: "Men",
            category: "Sneakers",
            image1: "assets/products/men/sneakers/nike_react_1.png",
            image2: "assets/products/men/sneakers/nike_react_2.png",
            src: '',
            fav: false,
            stockA: {
                S: 0,
                M: 0,
                L: 0,
                XL: 0,
            },
            stockB: {
                num1: 1,
                num2: 2,
                num3: 1,
                num4: 1,
                num5: 0,
                num6: 2,
                num7: 1,
                num8: 1,
                num9: 1,
                num10: 2,
            },
        },
        {
            id: 22,
            name: 'Adidas Big Logo Black T-shirt',
            description: this.service.details[21].description,
            details: this.service.details[21].details,
            care: this.service.details[21].care,
            price: 17.6,
            gender: 'Women',
            category: 'T-shirts',
            image1: 'assets/products/women/tshirts/adidas_big_logo_tshirt_1.png',
            image2: 'assets/products/women/tshirts/adidas_big_logo_tshirt_2.png',
            src: '',
            fav: false,
            stockA: {
                S: 1,
                M: 1,
                L: 2,
                XL: 0,
            },
            stockB: {
                num1: 0,
                num2: 0,
                num3: 0,
                num4: 0,
                num5: 0,
                num6: 0,
                num7: 0,
                num8: 0,
                num9: 0,
                num10: 0,
            },
        },
        {
            id: 23,
            name: "Adidas Floral T-shirt",
            description: this.service.details[22].description,
            details: this.service.details[22].details,
            care: this.service.details[22].care,
            price: 16.2,
            gender: 'Women',
            category: 'T-shirts',
            image1: "assets/products/women/tshirts/adidas_floral_1.png",
            image2: "assets/products/women/tshirts/adidas_floral_2.png",
            src: '',
            fav: false,
            stockA: {
                S: 1,
                M: 2,
                L: 2,
                XL: 1,
            },
            stockB: {
                num1: 0,
                num2: 0,
                num3: 0,
                num4: 0,
                num5: 0,
                num6: 0,
                num7: 0,
                num8: 0,
                num9: 0,
                num10: 0,
            },
        },
        {
            id: 24,
            name: "Adidas Long Sleeve T-shirt",
            description: this.service.details[23].description,
            details: this.service.details[23].details,
            care: this.service.details[23].care,
            price: 20.9,
            gender: 'Women',
            category: 'T-shirts',
            image1: "assets/products/women/tshirts/adidas_long_sleeve_1.png",
            image2: "assets/products/women/tshirts/adidas_long_sleeve_2.png",
            src: '',
            fav: false,
            stockA: {
                S: 0,
                M: 0,
                L: 2,
                XL: 1,
            },
            stockB: {
                num1: 0,
                num2: 0,
                num3: 0,
                num4: 0,
                num5: 0,
                num6: 0,
                num7: 0,
                num8: 0,
                num9: 0,
                num10: 0,
            },
        },
        {
            id: 25,
            name: "Nike Short White T-shirt",
            description: this.service.details[24].description,
            details: this.service.details[24].details,
            care: this.service.details[24].care,
            price: 15.2,
            gender: 'Women',
            category: 'T-shirts',
            image1: "assets/products/women/tshirts/nike_white_tshirt_1.png",
            image2: "assets/products/women/tshirts/nike_white_tshirt_2.png",
            src: '',
            fav: false,
            stockA: {
                S: 1,
                M: 1,
                L: 2,
                XL: 0,
            },
            stockB: {
                num1: 0,
                num2: 0,
                num3: 0,
                num4: 0,
                num5: 0,
                num6: 0,
                num7: 0,
                num8: 0,
                num9: 0,
                num10: 0,
            },
        },
        {
            id: 26,
            name: "Nike Running ClimaCool T-shirt",
            description: this.service.details[25].description,
            details: this.service.details[25].details,
            care: this.service.details[25].care,
            price: 19.5,
            gender: 'Women',
            category: 'T-shirts',
            image1: "assets/products/women/tshirts/nike_running_black_1.png",
            image2: "assets/products/women/tshirts/nike_running_black_2.png",
            src: '',
            fav: false,
            stockA: {
                S: 0,
                M: 1,
                L: 1,
                XL: 0,
            },
            stockB: {
                num1: 0,
                num2: 0,
                num3: 0,
                num4: 0,
                num5: 0,
                num6: 0,
                num7: 0,
                num8: 0,
                num9: 0,
                num10: 0,
            },
        },
        {
            id: 27,
            name: "Nike Long Sleeve T-shirt",
            description: this.service.details[26].description,
            details: this.service.details[26].details,
            care: this.service.details[26].care,
            price: 21.5,
            gender: 'Women',
            category: 'T-shirts',
            image1: "assets/products/women/tshirts/nike_long_sleeve_tshirt_1.png",
            image2: "assets/products/women/tshirts/nike_long_sleeve_tshirt_2.png",
            src: '',
            fav: false,
            stockA: {
                S: 0,
                M: 0,
                L: 0,
                XL: 0,
            },
            stockB: {
                num1: 0,
                num2: 0,
                num3: 0,
                num4: 0,
                num5: 0,
                num6: 0,
                num7: 0,
                num8: 0,
                num9: 0,
                num10: 0,
            },
        },{
            id: 28,
            name: 'Adidas Essential Big Logo Sweatshirt',
            description: this.service.details[27].description,
            details: this.service.details[27].details,
            care: this.service.details[27].care,
            price: 49.3,
            gender: 'Women',
            category: 'Sweaters',
            image1: 'assets/products/women/sweaters/adidas_black_sweatshirt_1.png',
            image2: 'assets/products/women/sweaters/adidas_black_sweatshirt_2.png',
            src: '',
            fav: false,
            stockA: {
                S: 1,
                M: 2,
                L: 2,
                XL: 0,
            },
            stockB: {
                num1: 0,
                num2: 0,
                num3: 0,
                num4: 0,
                num5: 0,
                num6: 0,
                num7: 0,
                num8: 0,
                num9: 0,
                num10: 0,
            },
        },
        {
            id: 29,
            name: "Adidas Essential Hoodie",
            description: this.service.details[28].description,
            details: this.service.details[28].details,
            care: this.service.details[28].care,
            price: 64.2,
            gender: 'Women',
            category: 'Sweaters',
            image1: "assets/products/women/sweaters/adidas_hoodie_1.png",
            image2: "assets/products/women/sweaters/adidas_hoodie_2.png",
            src: '',
            fav: false,
            stockA: {
                S: 0,
                M: 1,
                L: 2,
                XL: 1,
            },
            stockB: {
                num1: 0,
                num2: 0,
                num3: 0,
                num4: 0,
                num5: 0,
                num6: 0,
                num7: 0,
                num8: 0,
                num9: 0,
                num10: 0,
            },
        },
        {
            id: 30,
            name: "Adidas Zipped Sweater",
            description: this.service.details[29].description,
            details: this.service.details[29].details,
            care: this.service.details[29].care,
            price: 56.5,
            gender: 'Women',
            category: 'Sweaters',
            image1: "assets/products/women/sweaters/adidas_zipped_1.png",
            image2: "assets/products/women/sweaters/adidas_zipped_2.png",
            src: '',
            fav: false,
            stockA: {
                S: 0,
                M: 0,
                L: 1,
                XL: 0,
            },
            stockB: {
                num1: 0,
                num2: 0,
                num3: 0,
                num4: 0,
                num5: 0,
                num6: 0,
                num7: 0,
                num8: 0,
                num9: 0,
                num10: 0,
            },
        },
        {
            id: 31,
            name: "Nike Essential Big Logo Sweatshirt",
            description: this.service.details[30].description,
            details: this.service.details[30].details,
            care: this.service.details[30].care,
            price: 54.2,
            gender: 'Women',
            category: 'Sweaters',
            image1: "assets/products/women/sweaters/nike_big_logo_sweatshirt_1.png",
            image2: "assets/products/women/sweaters/nike_big_logo_sweatshirt_2.png",
            src: '',
            fav: false,
            stockA: {
                S: 0,
                M: 1,
                L: 1,
                XL: 1,
            },
            stockB: {
                num1: 0,
                num2: 0,
                num3: 0,
                num4: 0,
                num5: 0,
                num6: 0,
                num7: 0,
                num8: 0,
                num9: 0,
                num10: 0,
            },
        },
        {
            id: 32,
            name: "Nike Air Big Logo Hoodie",
            description: this.service.details[31].description,
            details: this.service.details[31].details,
            care: this.service.details[31].care,
            price: 59.7,
            gender: 'Women',
            category: 'Sweaters',
            image1: "assets/products/women/sweaters/nike_air_hoodie_1.png",
            image2: "assets/products/women/sweaters/nike_air_hoodie_2.png",
            src: '',
            fav: false,
            stockA: {
                S: 0,
                M: 0,
                L: 0,
                XL: 0,
            },
            stockB: {
                num1: 0,
                num2: 0,
                num3: 0,
                num4: 0,
                num5: 0,
                num6: 0,
                num7: 0,
                num8: 0,
                num9: 0,
                num10: 0,
            },
        },
        {
            id: 33,
            name: "Nike Zipped Sweater",
            description: this.service.details[32].description,
            details: this.service.details[32].details,
            care: this.service.details[32].care,
            price: 56,
            gender: 'Women',
            category: 'Sweaters',
            image1: "assets/products/women/sweaters/nike_zipped_1.png",
            image2: "assets/products/women/sweaters/nike_zipped_2.png",
            src: '',
            fav: false,
            stockA: {
                S: 1,
                M: 1,
                L: 1,
                XL: 0,
            },
            stockB: {
                num1: 0,
                num2: 0,
                num3: 0,
                num4: 0,
                num5: 0,
                num6: 0,
                num7: 0,
                num8: 0,
                num9: 0,
                num10: 0,
            },
        },
        {
            id: 34,
            name: 'Adidas FluidFlow Running Shoes',
            description: this.service.details[33].description,
            details: this.service.details[33].details,
            care: this.service.details[33].care,
            price: 40.5,
            gender: 'Women',
            category: 'Sneakers',
            image1: 'assets/products/women/sneakers/adidas_fluidflow_1.png',
            image2: 'assets/products/women/sneakers/adidas_fluidflow_2.png',
            src: '',
            fav: false,
            stockA: {
                S: 0,
                M: 0,
                L: 0,
                XL: 0,
            },
            stockB: {
                num1: 0,
                num2: 0,
                num3: 1,
                num4: 1,
                num5: 0,
                num6: 1,
                num7: 2,
                num8: 1,
                num9: 0,
                num10: 0,
            },
        },
        {
            id: 35,
            name: "Adidas Grandcourt Base Tennis Shoes",
            description: this.service.details[34].description,
            details: this.service.details[34].details,
            care: this.service.details[34].care,
            price: 47.2,
            gender: 'Women',
            category: 'Sneakers',
            image1: "assets/products/women/sneakers/adidas_grand_court_base_1.png",
            image2: "assets/products/women/sneakers/adidas_grand_court_base_2.png",
            src: '',
            fav: false,
            stockA: {
                S: 0,
                M: 0,
                L: 0,
                XL: 0,
            },
            stockB: {
                num1: 0,
                num2: 0,
                num3: 0,
                num4: 0,
                num5: 1,
                num6: 1,
                num7: 1,
                num8: 1,
                num9: 1,
                num10: 2,
            },
        },
        {
            id: 36,
            name: "Adidas Response Running Shoes",
            description: this.service.details[35].description,
            details: this.service.details[35].details,
            care: this.service.details[35].care,
            price: 43.5,
            gender: 'Women',
            category: 'Sneakers',
            image1: "assets/products/women/sneakers/adidas_response_1.png",
            image2: "assets/products/women/sneakers/adidas_response_2.png",
            src: '',
            fav: false,
            stockA: {
                S: 0,
                M: 0,
                L: 0,
                XL: 0,
            },
            stockB: {
                num1: 0,
                num2: 0,
                num3: 0,
                num4: 0,
                num5: 2,
                num6: 0,
                num7: 0,
                num8: 1,
                num9: 0,
                num10: 0,
            },
        },
        {
            id: 37,
            name: "Adidas Ultra 4D Running Shoes",
            description: this.service.details[36].description,
            details: this.service.details[36].details,
            care: this.service.details[36].care,
            price: 37.3,
            gender: 'Women',
            category: 'Sneakers',
            image1: "assets/products/women/sneakers/adidas_ultra_4D_1.png",
            image2: "assets/products/women/sneakers/adidas_ultra_4D_2.png",
            src: '',
            fav: false,
            stockA: {
                S: 0,
                M: 0,
                L: 0,
                XL: 0,
            },
            stockB: {
                num1: 0,
                num2: 0,
                num3: 0,
                num4: 0,
                num5: 0,
                num6: 0,
                num7: 0,
                num8: 0,
                num9: 0,
                num10: 0,
            },
        },
        {
            id: 38,
            name: "Nike Air Zoom Running Shoes",
            description: this.service.details[37].description,
            details: this.service.details[37].details,
            care: this.service.details[37].care,
            price: 52.7,
            gender: 'Women',
            category: 'Sneakers',
            image1: "assets/products/women/sneakers/nike_air_zoom_1.png",
            image2: "assets/products/women/sneakers/nike_air_zoom_2.png",
            src: '',
            fav: false,
            stockA: {
                S: 0,
                M: 0,
                L: 0,
                XL: 0,
            },
            stockB: {
                num1: 1,
                num2: 1,
                num3: 0,
                num4: 0,
                num5: 0,
                num6: 2,
                num7: 1,
                num8: 1,
                num9: 1,
                num10: 2,
            },
        },
        {
            id: 39,
            name: "Nike Free Run Running Shoes",
            description: this.service.details[38].description,
            details: this.service.details[38].details,
            care: this.service.details[38].care,
            price: 43.1,
            gender: 'Women',
            category: 'Sneakers',
            image1: "assets/products/women/sneakers/nike_free_run_1.png",
            image2: "assets/products/women/sneakers/nike_free_run_2.png",
            src: '',
            fav: false,
            stockA: {
                S: 0,
                M: 0,
                L: 0,
                XL: 0,
            },
            stockB: {
                num1: 1,
                num2: 1,
                num3: 1,
                num4: 1,
                num5: 0,
                num6: 1,
                num7: 0,
                num8: 0,
                num9: 0,
                num10: 0,
            },
        },
        {
            id: 40,
            name: "Nike Juniper Running Shoes",
            description: this.service.details[39].description,
            details: this.service.details[39].details,
            care: this.service.details[39].care,
            price: 53.5,
            gender: 'Women',
            category: 'Sneakers',
            image1: "assets/products/women/sneakers/nike_juniper_1.png",
            image2: "assets/products/women/sneakers/nike_juniper_2.png",
            src: '',
            fav: false,
            stockA: {
                S: 0,
                M: 0,
                L: 0,
                XL: 0,
            },
            stockB: {
                num1: 0,
                num2: 1,
                num3: 1,
                num4: 1,
                num5: 1,
                num6: 1,
                num7: 0,
                num8: 1,
                num9: 0,
                num10: 2,
            },
        },
        {
            id: 41,
            name: "Nike Pegasus Running Shoes",
            description: this.service.details[40].description,
            details: this.service.details[40].details,
            care: this.service.details[40].care,
            price: 47.6,
            gender: 'Women',
            category: 'Sneakers',
            image1: "assets/products/women/sneakers/nike_pegasus_1.png",
            image2: "assets/products/women/sneakers/nike_pegasus_2.png",
            src: '',
            fav: false,
            stockA: {
                S: 0,
                M: 0,
                L: 0,
                XL: 0,
            },
            stockB: {
                num1: 0,
                num2: 1,
                num3: 1,
                num4: 1,
                num5: 1,
                num6: 1,
                num7: 1,
                num8: 0,
                num9: 0,
                num10: 0,
            },
        },
        {
            id: 42,
            name: "Nike React Running Shoes",
            description: this.service.details[41].description,
            details: this.service.details[41].details,
            care: this.service.details[41].care,
            price: 45.1,
            gender: 'Women',
            category: 'Sneakers',
            image1: "assets/products/women/sneakers/nike_react_1.png",
            image2: "assets/products/women/sneakers/nike_react_2.png",
            src: '',
            fav: false,
            stockA: {
                S: 0,
                M: 0,
                L: 0,
                XL: 0,
            },
            stockB: {
                num1: 0,
                num2: 0,
                num3: 0,
                num4: 0,
                num5: 0,
                num6: 0,
                num7: 0,
                num8: 0,
                num9: 0,
                num10: 0,
            },
        },
    ];

products = this.products2 || JSON.parse(`${localStorage.getItem(this.LOCAL_STORAGE_LIST_KEY)}`)

}