const readlineSync = require("readline-sync");

function OptionMenu() {

    // Display the menu
    console.log(" Hellp Welcome to the Pizza flavors Manager. \n \n Please choice your action. \n \n 1 List all the pizza flavors \n 2  Add a new pizza flavor \n 3 Remove a pizza flavor \n 4  Exit this program");

    //Get user's choice
    let choice = Number(readlineSync.question("Enter your action number: "));
    let pizzas = [];

    while (choice != 4) {

        switch (choice) {

            case 1:
                if (pizzas != "") {

                    console.log(pizzas + " \n");
                    console.log(" Hellp Welcome to the Pizza flavors Manager. \n \n Please choice your action. \n \n 1 List all the pizza flavors \n 2  Add a new pizza flavor \n 3 Remove a pizza flavor \n 4  Exit this program");
                    choice = Number(readlineSync.question("Enter your action number: "));
                } 
                console.log("List all the pizza flavors");
                break;
            
                case 2:
                let pizzaAdd = readlineSync.question("Add to the list the new pizza flavor: ");
                pizzas.push(pizzaAdd);   
                console.log(" Hellp Welcome to the Pizza flavors Manager. \n \n Please choice your action. \n \n 1 List all the pizza flavors \n 2  Add a new pizza flavor \n 3 Remove a pizza flavor \n 4  Exit this program");
                choice = Number(readlineSync.question("Enter your action number: "));
                break;
           
                case 3: 
                let pizzaDelete = readlineSync.question("Delete a pizza flavor in the list  ");
                for (let i = 0; i < pizzas.length; i++) {

                    if (pizzaDelete = pizzas[i]) {
                        
                        delete pizzas[i];
                        console.log("The pizza flavor: " + pizzaDelete + " as been deleted");
                    } 
                }
                console.log(" Hellp Welcome to the Pizza flavors Manager. \n \n Please choice your action. \n \n 1 List all the pizza flavors \n 2  Add a new pizza flavor \n 3 Remove a pizza flavor \n 4  Exit this program");
                choice = Number(readlineSync.question("Enter your action number: "));
                break;
            
                case 4:
                break;

        }//end of switch
    }
    //Display the title of the chosen module

    //end of the main method
}//end of class
OptionMenu();