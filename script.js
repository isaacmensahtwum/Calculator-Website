
function calculate() {
    const conversionType = document.getElementById("conversion-type").value;
    const inputValue = parseFloat(document.getElementById("input-value").value);
    const weeksPerYear = parseFloat(document.getElementById("weeks-per-year").value) || 52;
    const hoursPerWeek = parseFloat(document.getElementById("hours-per-week").value) || 40;
    const resultDiv = document.getElementById("result");

    if (isNaN(inputValue) || inputValue <= 0) {
        resultDiv.innerHTML = "Please enter a valid number for salary or hourly wage.";
        return;
    }

    if (isNaN(weeksPerYear) || weeksPerYear <= 0 || isNaN(hoursPerWeek) || hoursPerWeek <= 0) {
        resultDiv.innerHTML = "Please enter valid numbers for work weeks per year and work hours per week.";
        return;
    }

    let result;
    if (conversionType === "salary-to-hourly") {
        const weeklyPay = inputValue / weeksPerYear;
        const hourlyWage = weeklyPay / hoursPerWeek;
        result = `A salary of $${inputValue.toFixed(2)} equates to a weekly pay of $${weeklyPay.toFixed(2)} and an hourly wage of $${hourlyWage.toFixed(2)}.`;
    } else if (conversionType === "hourly-to-salary") {
        const weeklyPay = inputValue * hoursPerWeek;
        const yearlySalary = weeklyPay * weeksPerYear;
        result = `An hourly wage of $${inputValue.toFixed(2)} equates to a weekly pay of $${weeklyPay.toFixed(2)} and a yearly salary of $${yearlySalary.toFixed(2)}.`;
    }

    resultDiv.innerHTML = result;
}
