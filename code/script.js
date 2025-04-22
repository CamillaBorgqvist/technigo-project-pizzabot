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
}
// Step 2 - Food choice
// Your code goes here
{
    let foodChoise = prompt("Okey, what would you like to order today?\n Enter the number of you choise.\n 1. Pizza\n 2. Pasta\n 3. Salad");
    if(foodChoise === "1"){
    alert("You have picked Pizza")
  }
    else if(foodChoise === "2"){
    alert("You have picked Pasta")
  }
    else if(foodChoise === "3"){
    alert("You have picked Salad")
  }
  else{
    alert("You have made a choise that doesn't exist. Try agian!")
  }

  // Step 3 - Subtype choice
  // Your code goes here

  if(foodChoise ==="1"){
    let pizzaChoise = prompt("Please select your Pizza type.\n 1. Margarita\n 2. Vesuvio\n 3. Capriccosa"); 
    if(pizzaChoise ==="1"){
      alert("You have chosen Margarita")
    }
    else if(pizzaChoise === "2"){
      alert("You have chosen Vesuvio")
    }
    else if(pizzaChoise === "3"){
      alert("You have chosen Capriccosa")
    }
    else{
      alert("You have made a choise that doesn't exist. Try agian!")
    }
  }
  if(foodChoise ==="2"){
    let pastaChoise = prompt("Please select your Pasta type.\n 1. Carbonara\n 2. Scampi\n 3. Bolognaise")
    if(pastaChoise ==="1"){
      alert("You have chosen Carbonara")
    }
    else if(pastaChoise ==="2"){
      alert("You have chosen Scampi")
    }
    else if(pastaChoise ==="3"){
      alert("You have chosen Bolognaise")
    }
    else{
      alert("You have made a choise that doesn't exist. Try agian!")
    }
  }
  if(foodChoise ==="3"){
    let saladChoise = prompt("Please select your type fo Salad.\n 1. Caesar Salad\n 2. Tuna Salad\n 3. Greek Salad")
    if(saladChoise ==="1"){
      alert("You have chosen Caesar Salad")
    }
    else if(saladChoise ==="2"){
      alert("You have chosen Tuna Salad")
    }
    else if(saladChoise ==="3"){
      alert("You have chosen Greek Salad")
    }
    else{
      alert("You have made a choise that doesn't exist. Try agian!")
    }
  }
}

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
