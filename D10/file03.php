<?php
$link = mysqli_connect("localhost", "admin", "fajnehaslo", "kino");
if (!$link) {
printf("Connect failed: %s\n", mysqli_connect_error()); exit();
}
$result = mysqli_query($link,"SELECT * FROM bilety ORDER BY cena"); //pobranie wartości posortowanych wg kryterium ceny
if (!$result) {
printf("Query failed: %s\n", mysqli_error($link)); //obsługa błędu pobierania
}
printf("<h1>BILETY</h1>");
printf("<table border=\"1\">"); printf("<tr><th>NAZWA</th><th>CENA</th><th>ILOSC</th></tr>");
($row = mysqli_fetch_assoc($result)); //funkcja pobierająca dane z tabeli w formie słownika
printf("<tr><td>%s</td><td>%6.2f</td><td>%6.2f</td></tr>",
$row["NAZWA"],$row["CENA"],$row["ILOSC"]); printf("</table>"); //wyswietlenie poszczególnych kolumn
printf("<i>query returned %d rows </i>", mysqli_num_rows($result)); //funkcja zwracająca ilość pobranych wierszy
mysqli_free_result($result); //wyczyszczenie pamięci
mysqli_close($link); //zamknięcie połączenia
?>