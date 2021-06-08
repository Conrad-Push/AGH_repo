<?php
$link = mysqli_connect("localhost", "admin", "fajnehaslo", "kino"); //połączenie z bazą MySQL
if (!$link) {
printf("Connect failed: %s\n", mysqli_connect_error()); exit(); //obsługa błędu połączenia
}
$result = mysqli_query($link,"SELECT * FROM filmy"); //zapytanie do bazy danych
if (!$result) {
printf("Query failed: %s\n", mysqli_error($link)); //wyświetlenie błędu zapytania
}
printf("<h1>FILMY</h1>"); //nagłówek
printf("<table border=\"1\">"); //tabela
$fields = mysqli_fetch_fields($result); //pobiera pola z tabeli w formie listy
printf("<tr><th>%s</th><th>%s</th><th>%s</th></tr>", $fields[0]->name,$fields[1]->name,$fields[2]->name); //wyświetlenie pola name z pobranej tabelki
while ($row = mysqli_fetch_array($result))
printf("<tr><td>%s</td><td>%s</td><td>%s</td></tr>",$row[0],$row[1],$row[2]); //wyświetlenie poszczególnych wierszy
printf("</table>");
printf("<i>query returned %d rows </i>", mysqli_num_rows($result)); //pobranie i wyświetlenie liczby pobranych wierszy
mysqli_free_result($result); //wyczyszczenie pamięci zajmowanej przez pobrane z bazy dane
mysqli_close($link); //zamknięcie połączenia
?>