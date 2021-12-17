function compute()
{
		//Get values (or compute value) from fields in order to compute interest 
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);

		//If the amount is less than or equal to 0, an alert will be activated and interest won't be computed
    if(principal <= 0){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }

		//Display of the interest computed
    document.getElementById("result").innerHTML='If you deposit <span class="highlight">'+principal+'</span>,\<br\>at an interest rate of <span class="highlight">'+rate+'%</span>\<br\>You will receive an amount of <span class="highlight">'+interest+'</span>,\<br\>in the year <span class="highlight">'+year+'</span>\<br\>'

}

function updateRate() 
{
		//Display the rate chosen by the user
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}
        