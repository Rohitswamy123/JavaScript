console.log(first);
document.getElementById("mybtn").style.cursor="pointer";
console.log(document.getElementById("mybtn").style.color="navy");

function fnc()
{
    const newel=document.createElement("h2");
    newel.innerText="Yo bhadwe chawla";
    document.body.prepend(newel);
}