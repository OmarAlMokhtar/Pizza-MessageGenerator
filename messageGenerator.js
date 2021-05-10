// Project that generates random messages about pizza:

const PizzaFacts = ['Pizza is one of the few circular savory foods!','Real pizza never had cheese on it.','Italians eat foods other than pizza.','Napoli is most famous for its pizza.','Nutella Pizza is a crime against humanity.',];
const PizzaToppings = ['Tomato Sauce', 'Cheese', 'Anchovies', 'Onions', 'Mushrooms', 'Olives', 'Pepperoni', 'Ham', 'Tuna'];
const Farewell = ['Thank you and enjoy your pizza!', 'That concludes pizza time.', 'Till next time!', 'Stay Cheesy.', 'Pizz-out!'];

const messages = [PizzaFacts,PizzaToppings, Farewell];

const generator = (messages) =>{
    let message = ``
    for(let i = 0; i < messages.length; i++){
        if(i == 1){
            message += `The Computer's favourite pizza topping is: ${messages[i][Math.floor(Math.random()*messages[i].length)]} \n\n`    
        }else{
            message += `${messages[i][Math.floor(Math.random()*messages[i].length)]} \n\n`;
        }
        
    }
    return message;
}


console.log(generator(messages));

