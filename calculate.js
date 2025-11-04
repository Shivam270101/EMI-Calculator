
function calculatePayment(){

    let loan = Number(document.getElementById("loan").value);

    let rate = Number(document.getElementById("rate").value);

    let period = Number(document.getElementById("period").value);

    if(isNaN(loan) || isNaN(rate) || isNaN(period)){
        alert("Please enter valid entries");
        return;
    }

    if( loan > 1500000){
        alert("Amount shold not more than Rs.15,00,000");
        return;
    }

    if( period < 7 || period > 15){
        alert("Repayment period should be between 7 to 15 years");
        return;
    }

    let monthlyrate = (rate / 100) / 12; // for monthly interest rate

    let months = period * 12; // years to months

    
    // EMI Formula
    let x = Math.pow((1 + monthlyrate), months);
    let monthlypayment = (loan*x*monthlyrate) / (x - 1);

    
    // to calculate total
    let totalpayment = ( monthlypayment * months );
    let totalInterest = totalpayment - loan ;


    document.getElementById("monthly").value = monthlypayment.toFixed(2);
    document.getElementById("total").value = totalpayment.toFixed(2);
    document.getElementById("interest").value = totalInterest.toFixed(2);



}
