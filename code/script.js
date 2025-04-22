// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  "Welcome to Mills Pizza House. Let's go ahead with your order. Click 'OK' to begin."
)
{
const name = prompt("Please enter your name to start with your order");
if(name != null){
  alert(`Hello ${name}`);
}

// Step 2 - Food choice
// Your code goes here

  let foodChoise = prompt("Okey, what would you like to order today?\n Enter the number of you choise.\n 1. Pizza\n 2. Pasta\n 3. Salad");

  let foodName = ""; // create a new variable to set a name to the chosen number
  if (foodChoise === "1"){
    foodName ="Pizza";
  }
  else if (foodChoise === "2"){
    foodName ="Pasta";
  }
  else if (foodChoise === "3"){
    foodName = "Salad";
  }

  if(foodChoise === "1"){
    alert(`You have picked ${foodName}`)
  }
  else if(foodChoise === "2"){
    alert(`You have picked ${foodName}`)
  }
  else if(foodChoise === "3"){
    alert(`You have picked ${foodName}`)
  }
  else{
    alert("You have made a choise that doesn't exist. Try agian!")
  }

  // Step 3 - Subtype choice
  // Your code goes here

  if(foodChoise ==="1"){
    let pizzaChoise = prompt(`Please select your ${foodName} type.\n 1. Margarita\n 2. Vesuvio\n 3. Capriccosa`); 

    let pizzaName = ""; // create a new variable to set a name to the chosen number
    if (pizzaChoise === "1"){
      pizzaName ="Margarita";
    }
    else if (pizzaChoise === "2"){
      pizzaName ="Vesovio";
    }
    else if (pizzaChoise === "3"){
      pizzaName = "Capriccosa";
    }

    if(pizzaChoise ==="1"){
      alert(`You have chosen ${pizzaName}`)
    }
    else if(pizzaChoise === "2"){
      alert(`You have chosen ${pizzaName}`)
    }
    else if(pizzaChoise === "3"){
      alert(`You have chosen ${pizzaName}`)
    }
    else{
      alert("You have made a choise that doesn't exist. Try agian!")
    }
  }
  if(foodChoise ==="2"){
    let pastaChoise = prompt(`Please select your ${foodName} type.\n 1. Carbonara\n 2. Scampi\n 3. Bolognaise`);

    let pastaName = ""; // create a new variable to set a name to the chosen number
    if (pastaChoise === "1"){
      pastaName ="Carbonara";
    }
    else if (pastaChoise === "2"){
      pastaName ="Scampi";
    }
    else if (pastaChoise === "3"){
      pastaName = "Bolognaise";
    }

    if(pastaChoise ==="1"){
      alert(`You have chosen ${pastaName}`)
    }
    else if(pastaChoise ==="2"){
      alert(`You have chosen ${pastaName}`)
    }
    else if(pastaChoise ==="3"){
      alert(`You have chosen ${pastaName}`)
    }
    else{
      alert("You have made a choise that doesn't exist. Try agian!")
    }
  }
  if(foodChoise ==="3"){
    let saladChoise = prompt(`Please select your type of ${foodName}.\n 1. Caesar Salad\n 2. Tuna Salad\n 3. Greek Salad`);

    let saladName = ""; // create a new variable to set a name to the chosen number
    if (saladChoise === "1"){
      saladName ="Caesar Salad";
    }
    else if (saladChoise === "2"){
      saladName ="Tuna Salad";
    }
    else if (saladChoise === "3"){
      saladName = "Greek Salad";
    }

    if(saladChoise ==="1"){
      alert(`You have chosen ${saladName}`)
    }
    else if(saladChoise ==="2"){
      alert(`You have chosen ${saladName}`)
    }
    else if(saladChoise ==="3"){
      alert(`You have chosen ${saladName}`)
    }
    else{
      alert("You have made a choise that doesn't exist. Try agian!")
    }
  }
    // Step 4 - Age
    // Your code goes here
  let confirm; // declare the variable outside the if statement so it can be used in step 5

  let age = parseInt(prompt("Is this order for an adult or child? Type your age.")); //parteInt to convert the string input to Int to use in the if statement below
  if(age <= 12){
      alert("One kid size is 8 Euro")
      confirm = prompt("Do you want to proceed with your order?\n Enter a number to confirm:\n 1. Yes\n 2. No");
  }
  else if(age >= 13){
      alert("One adult size is 15 Euro")
      confirm = prompt("Do you want to proceed with your order?\n Enter a number to confirm:\n 1. Yes\n 2. No");
  }
    // Step 5 - Order confirmation
    // Your code goes here

}