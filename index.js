// tracking inventory in a japanese restaurant
let order = [];
class inventory{
    constructor(fish, rice, sauce){
      this.fish = fish; //kg
      this.rice = rice; //kg
      this.sauce = sauce; //liters
    }
    print_inventory(){
        return this;
    }
}
class dish extends inventory{
    constructor(fish, rice, sauce, price){
    super(fish, rice, sauce)
    this.price = price; // €
    }
}
const dishes ={
    california_roll : new dish(0.1, 0.2, 0.2,3.95),
    avocado_maki : new dish(0.1, 0.2, 0.2, 3.95),
    salmon_nigiri : new dish(0.1, 0.2, 0.2, 3.95)
}
function show_menu(dish_name){
   return Object.entries(dishes)
}
function order_dishes(dish_name){
    order.push(dishes[dish_name])
    return order;
}
const current = new inventory(5,4,6);
console.log(current.print_inventory());
console.log(order_dishes('california_roll'))


