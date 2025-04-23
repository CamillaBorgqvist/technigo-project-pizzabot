
  // Step 1 - Welcome and introduction

alert( "Welcome to Mills Pizza House. Let's go ahead with your order. Click 'OK' to begin.")
{
  const name = prompt("Please enter your name to start with your order");
  if(name != null){
    alert(`Hello ${name}`);
  }
  // Step 2 - Food choice

  let foodChoise = prompt("Okey, what would you like to order today?\n Enter the number of you choise.\n 1. Pizza\n 2. Pasta\n 3. Salad");
  let foodName = ""; // create a new variable to set a name to the chosen number. outside of the if statement to be able to use it elsewere
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

  let pizzaName = ""; // create a new variable to set a name to the chosen number. outside of the if statement to use it in the end
  if(foodChoise ==="1"){
    let pizzaChoise = prompt(`Please select your ${foodName} type.\n 1. Margarita\n 2. Vesuvio\n 3. Capriccosa`); 
  
    if (pizzaChoise === "1"){
      pizzaName ="Margarita";
    }
    else if (pizzaChoise === "2"){
      pizzaName ="Vesuvio";
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
  let pastaName = ""; // create a new variable to set a name to the chosen number. outside of the if statement to use it in the end
  if(foodChoise ==="2"){
    let pastaChoise = prompt(`Please select your ${foodName} type.\n 1. Carbonara\n 2. Scampi\n 3. Bolognaise`);

    if (pastaChoise === "1"){
      pastaName ="Carbonara";
    }
    else if (pastaChoise === "2"){
      pastaName ="Scampi Pasta";
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
  let saladName = ""; // create a new variable to set a name to the chosen number. outside of the if statement to use it in the end
  if(foodChoise ==="3"){
    let saladChoise = prompt(`Please select your type of ${foodName}.\n 1. Caesar Salad\n 2. Tuna Salad\n 3. Greek Salad`);

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
    
  if(confirm === "1"){
    let summary = `Thank you ${name} for your order. Your `;
    if (pizzaName !== "") { //used !== to check if the variable has a value. if not, the program goes on to the else if statements to check the variable value til a value is found and presented 
      summary += `${pizzaName} is being prepared for you!`;
    } 
    else if (pastaName !== "") {
      summary += `${pastaName} is being prepared for you!`;
    } 
    else if (saladName !== "") {
      summary += `${saladName} is being prepared for you!`;
    }
    alert(summary);
  }   
  else if(confirm === "2"){
    alert(`Sorry to hear you didn't make an order today. Hope to see you again soon ${name}`)
  }
}