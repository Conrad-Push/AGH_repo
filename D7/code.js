function pustoTu(string)
{
    var dlugosc = string.length;
    if (dlugosc == 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}
function bialeZnaki(string)
{
    return /^[\n\s\r\t]*\$/.test(string);
}
function walidujNapis(napis)
{
    if (bialeZnaki(napis) || pustoTu(napis))
    {
        return false;
    }
    else
    {
        return true;
    }
}
function poprawnyAdres(adres)
{
    var email_form = /^[a-zA-Z_0-9\.]+@[a-zA Z_0-9\.]+\.[a-zA-Z][a-zA-Z]+\$/;
    if (email_form.test(adres))
    {
        return true;
    }
    else
    {
        return false;
    }
}
function walidacjaAllFocus(obiekt, wiadomosc, wali_funkcja)
{
    let str = obiekt.value;
    let errorField = "blad_" + obiekt.name.substr(0, obiekt.name.length);
    if (wali_funkcja(str))
    {
        document.getElementById(errorField).innerHTML = "";
        return true;
    }
    else
    {
        document.getElementById(errorField).innerHTML = wiadomosc;
        obiekt.focus();
        return false;
    }
}
function weryfikacja(formularz)
{
    var a = walidacjaAllFocus(formularz.elements["imie"], "Podaj swoje imię!", walidujNapis)
    var b = walidacjaAllFocus(formularz.elements["email"], "Podaj swój adres email poprawnie!", poprawnyAdres);
    var c = walidacjaAllFocus(formularz.elements["kod"], "Podaj swój kod pocztowy!", walidujNapis);
    var d = walidacjaAllFocus(formularz.elements["wiadomosc"], "Wpisz swoją wiadomość!", walidujNapis);
    if (a == false || b == false || c == false || d == false)
    {
        return false;
    }
    else
    {
        return true;
    }
}
function pokazElement(e)
{
    document.getElementById(e).style.visibility = 'visible';
}
function ukryjElement(e)
{
    document.getElementById(e).style.visibility = 'hidden';
}
function licznikWierszy(i, e)
{
    if (e)
    {
        if (i % 2 == 1)
        {
            e.setAttribute("style", "background-color: Red;");
        }
        e = e.nextSibiling;
        while (e && e.nodeType != 1)
        {
                e = e.nextSibiling;
        }
    licznikWierszy(++i, e);    
    }    
}
