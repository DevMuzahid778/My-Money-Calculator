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

    Food.value = "";
    Rent.value = "";
    Clothes.value = "";
    
})
// Saving Balance & Remaining Balance functionality added
document.getElementById("SaveMoney").addEventListener("click", function(){
    const Balance = document.getElementById("Balance");
    const TotalBalance = parseFloat(Balance.innerText);

    const Saving = document.getElementById("Saving");
    const SavingAmount = parseFloat(Saving.value);
    const savingparcent = SavingAmount/100;
    const SavingBalance = TotalBalance*savingparcent;

    const savefiled = document.getElementById("SavingAmount");
    savefiled.innerText = SavingBalance;

    const RemainBalance = document.getElementById("RemainBalance");
    const RemainTotalBalance = TotalBalance - SavingBalance;
    RemainBalance.innerText = RemainTotalBalance;

    Saving.value ="";
    document.getElementById("Income").value = "";
})