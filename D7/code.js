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
function walidujNapis(napis, komunikat)
{
    if (pustoTu(napis))
    {
        alert(komunikat);
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
        alert("Podaj swój adres email poprawnie!");
        return false;
    }
}
function walidacjaFocus(obiekt, wiadomosc)
{
    let str = obiekt.value;
    let errorField = "blad_" + obiekt.name.substr(2, obiekt.name.length);
    if (pustoTu(str))
    {
        document.getElementById(errorField).innerHTML = wiadomosc;
        obiekt.focus();
        return false;
    }
    else
    {
        return true;
    }
}
function weryfikacja(formularz)
{
    var a = walidujNapis(formularz.elements["imie"], "Podaj swoje imię!")
    var b = poprawnyAdres(formularz.elements["email"].value);
    var c = walidujNapis(formularz.elements["kod"].value, "Podaj swój kod pocztowy!");
    var d = walidujNapis(formularz.elements["wiadomosc"].value, "Wpisz swoją wiadomość!");
    if (a == false || b == false || c == false || d == false)
    {
        return false;
    }
    else
    {
        return true;
    }
}