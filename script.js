document.getElementById("Calculate").addEventListener("click", function(){
    const Income = document.getElementById("Income");
    const IncomeAmount = parseFloat(Income.value);

    const Food = document.getElementById("Food");
    const FoodCost = parseFloat(Food.value);

    const Rent = document.getElementById("Rent");
    const RentCost = parseFloat(Rent.value);

    const Clothes = document.getElementById("Clothes");
    const ClothesCost = parseFloat(Clothes.value);

    const TotalExpense = FoodCost + RentCost + ClothesCost;
    const TotalCost = document.getElementById("TotalCost")
    TotalCost.innerText = TotalExpense;


    const NewBalance = IncomeAmount - TotalExpense;
    const Balance = document.getElementById("Balance");
    Balance.innerText = NewBalance;
    
})