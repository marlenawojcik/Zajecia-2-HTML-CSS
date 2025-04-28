function PustoTu(ciag)
{
    if(ciag.length===0){return true;}
    else{
        return false;
    }
}

function Weryfikacja(formularz)
{
    var imie = formularz["imie"].value;
    var email=formularz["email"].value;

    if(!walidacjaFocus(formularz["imie"], "Pole imie nie moze byc puste lub zaiwrac białych"))
{
    return false;
}  
if(!walidacjaFocus(formularz["email"], "Pole EMAIL nie moze byc puste lub zaiwrac białych"))
    {
        return false;
    }    
    document.getElementById("blad_imie").innerText="";
    if(PustoTu(imie))
    {
        document.getElementById("blad_imie").innerText="podaj imie mordzia";
        
        return false;
    }
    if(bialeZnaki(imie))
    {
        document.GetElementById("blad_imie").innerText="nie tak łątwo widze te buale";
        return false;
    
    }
    if (poprawnyAdres(email))
        {
            document.getElementById("blad_email").innerText="zly mail";

            return false;}
    return true;
}
function bialeZnaki(string)
{
    return string.trim().length===0;
}
function poprawnyAdres(adres){
    let email_form=/[a-zA-Z_0-9\.]+@[a-zA Z_0-9\.]+\.[a-zA-Z][a-zA-Z]+/;
    if(email_form.test(adres))
        return false;
    else{
         return true;
    }
}
function walidacjaFocus(obiekt, wiadomosc){
    let str=obiekt.value;
    let errorField="blad_"+obiekt.name.substr(0,obiekt.name.length);
    console.log(errorField);
    if (bialeZnaki(str)){
        document.getElementById(errorField).innerHTML=wiadomosc;
        obiekt.focus();
        return false;
    }
    else{return true;}
}