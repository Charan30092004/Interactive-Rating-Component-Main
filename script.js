function myFunction()
{
    result=document.getElementById("score");
    result.innerHTML=z;
    document.getElementById("firstpage").style.display="none";
    document.getElementById("finalpage").style.display="block";
}
function onover()
{
    document.getElementById("button").style.color="hsl(25, 97%, 53%)";
    document.getElementById("button").style.backgroundColor="hsl(0, 0%, 100%)";
    document.getElementById("button").style.borderColor="hsl(0, 0%, 100%)";
}
function original()
{
    document.getElementById("button").style.color="hsl(0, 0%, 100%)";
    document.getElementById("button").style.backgroundColor="hsl(25, 97%, 53%)";
    document.getElementById("button").style.borderColor="hsl(25, 97%, 53%)";
}
let ids=document.getElementsByClassName("credit");
function over(x)
{
    if(z!=x)
    {
    x=x-1;
    test=0;
    ids[x].style.backgroundColor="hsl(25, 97%, 53%)";
    }
}
let test=0;
function leave (y) 
{
    if(test==0  && z!=y)
    {
    y=y-1;
    for (let i=0;i<5;i++)
    {
        if (i != y){
                ids[y].style.backgroundColor="hsl(220, 22%, 24%)";
        }
    }
    }
}
var z;
function score(z)
{
    test=1;
    window['z']=z;
    z=z-1;
    for(i=0;i<5;i++)
    {
        if(z==i)
        {
            ids[z].style.backgroundColor="rgba(207, 212, 218, 0.60)";
        }
        else
        {
            ids[i].style.backgroundColor="hsl(220, 22%, 24%)";
        }
    }
}