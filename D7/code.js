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

function weryfikacja(formularz)
{
    if (pustoTu(formularz) == true)
    {
        alert("Podaj swoje imię!");
        return false;
    }
    else
    {
        return true;
    }
}