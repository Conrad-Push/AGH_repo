<?php
$link = mysqli_connect("localhost", "admin", "fajnehaslo", "kino"); //połączenie z bazą danych
if (!$link) {
printf("Connect failed: %s\n", mysqli_connect_error()); exit(); //obsługa błędu połączenia z bazą danych
}
printf("<h1>Host information</h1>");
printf("<ul>");
printf("<li>server information: %s</li>", mysqli_get_server_info($link)); printf("<li>character version: %s</li>",
mysqli_character_set_name($link)); printf("<li>host information: %s</li>", mysqli_get_host_info($link)); printf("</ul");
mysqli_close($link); ?>