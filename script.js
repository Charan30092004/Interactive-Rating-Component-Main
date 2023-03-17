function myFunction()
{
    result=document.getElementById("score");
    let selected = document.querySelector('input[type="radio"]:checked').value;
    console.log(selected);
    result.innerHTML=selected;
    document.getElementById("firstpage").style.display="none";
    document.getElementById("finalpage").style.display="block";
}