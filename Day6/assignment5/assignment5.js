let sale=Number(prompt("Enter Total Sales in This Year"));
let totalcommision;
if(sale >= 0 && sale <= 5000)
{
    totalcommision=sale*0.02;
    console.log(`Total Commission Earned :: ${totalcommision}`);
}
else if(sale >= 5001 && sale <= 10000)
{
    totalcommision=(5000*0.02)+((sale-5000)*0.05);
    console.log(`Total Commission Earned :: ${totalcommision}`);
}
else if(sale >= 10001 && sale <= 20000)
{
    totalcommision=(5000*0.02)+(5000*0.05)+((sale-10000)*0.07);
    console.log(`Total Commission Earned :: ${totalcommision}`);
}
else if(Sale >= 20001)
{
    totalcommision=(5000*0.02)+(5000*0.05)+(10000*0.07)+((sale-20000)*0.1);
    console.log(`Total Commission Earned :: ${totalcommision}`);
}
