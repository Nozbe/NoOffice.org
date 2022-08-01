---
redirect_from: /pl/book/security/
part: two
title: Dbaj o bezpieczeństwo
subtitle: "Bezpieczeństwo jest najważniejsze. Przygotuj listy kontrolne, które pomogą zabezpieczyć Twoje wirtualne biuro."
---

* TOC
{:toc}

## Tradycyjne biuro nie jest gwarancją bezpieczeństwa

Istnieją różne sposoby zabezpieczania danych i systemów. Staromodne podejście zakłada, aby ze względów bezpieczeństwa, posiadać jednak tradycyjne, fizyczne biuro. Główny argument sugeruje, że tylko wtedy można sprawować nad wszystkim właściwą kontrolę.

Teraz, gdy wszystkie nasze urządzenia podłączone są do Internetu, dane, które na nich przechowujemy, są dostępne poza zabezpieczeniami tworzonymi przez biuro. Niektóre firmy próbują ograniczać dostęp do danych poprzez dodatkowe firewalle i ograniczenia nakładane przez systemy sieciowe. To świetne rozwiązanie, które jednak nie jest zbyt uniwersalne, ponieważ gdy pracownik opuści budynek, natychmiast straci dostęp do wielu (jeśli nie wszystkich) usług i systemów firmy.

Pandemia koronawirusa w 2020 roku nauczyła nas, że dostęp do środowiska pracy poza biurem to nie tylko wygoda. To konieczność.

Na szczęście istnieją sposoby pozwalające zapewnić bezpieczeństwo. Potraktuj ten rozdział jako podręczną listę kontrolną w kwestii bezpieczeństwa, stworzoną dla wszystkich dużych i małych firm, które chcą w bezpieczny sposób skonfigurować swoje środowisko pracy w Internecie. Opiera się ona na naszym wieloletnim doświadczeniu, konsultacjach z wieloma podobnymi firmami oraz śledzeniu i doskonaleniu najlepszych praktyk w branży IT. Początkowo rozdział ten był listą kontrolną dla naszej wewnętrznej dokumentacji, napisaną przez naszego Product Managera, Rafała.[^1]

O niektórych z opisanych tutaj rzeczy, wspominałem już w rozdziale 19, dotyczącym rezygnacji z papieru i korzystania z chmury, ale tutaj zagłębię się znacznie bardziej w temat bezpieczeństwa w sieci.

## Biuro wirtualne wymaga jeszcze większego stopnia zabezpieczeń niż biuro fizyczne!

Gdy prowadzisz tradycyjne biuro, przestępcy mogą się do niego włamać, jednak najpierw muszą przyjechać, a potem wymyślić sposób na odblokowanie zamków i wyłączenie alarmu.

W przypadku biura wirtualnego sprawa jest o wiele bardziej skomplikowana. Internet pozwala ludziom *znaleźć się* w Twoim biurze w ciągu milisekund. Istnieje wiele znanych sposobów włamywania się do systemów komputerowych, a bezpieczeństwo danych jest zależne od wszystkich członków zespołu. Wasze systemy są bezpieczne w takim samym stopniu, jak najmniej bezpieczne łącze lub osoba, która ma do nich dostęp. Dlatego tak ważne jest regularne aktualizowanie polityki bezpieczeństwa, najlepiej podczas przeglądów kwartalnych (patrz rozdział 16) lub podczas indywidualnych spotkań z pracownikami (patrz rozdział 24).

### 1. Hasła muszą być długie i unikatowe

Najwyższy czas, by przestać używać łatwych do zapamiętania haseł do wszystkich swoich usług. Nigdy więcej *Test1234*, *Michal1979* czy czegokolwiek w tym stylu. Tak, to prawda, hasła te są zgodne z zasadą minimum 8 znaków i są kombinacją małych i wielkich liter z cyframi. Jednak nie są bezpieczne. Bardzo łatwo jest je odgadnąć.

My używamy managera haseł [^2], z którego obowiązkowo muszą korzystać wszyscy członkowie naszego zespołu. Aplikacja ta znajduje się na wszystkich urządzeniach używanych przez nich do pracy. Dla każdej z usług członkowie naszego zespołu muszą wygenerować wyjątkowe i długie hasło (minimum 12 znaków, najlepiej 20). W managerze haseł mamy skonfigurowanych kilka folderów z hasłami:

* Prywatny - dla osobistych haseł każdego z użytkowników - nasza firma nie ma do niego dostępu
* Współdzielony — udostępniony wszystkim członkom zespołu
* Marketingowy - dla wszystkich usług marketingowych, z których korzystamy
* Deweloperski - dla wszystkich rzeczy związanych z inżynierią 
* Dyrektorski — dla wszystkich usług o znaczeniu krytycznym 

Dzięki tej konfiguracji członkowie zespołu mają dostęp do, własnego i *współdzielonego* foldera, i w zależności od swej roli w zespole zyskują dostęp do kolejnych wybranych folderów.

Jedyne, co trzeba zapamiętać, to hasło do samego managera haseł. Nazywa się ono *hasłem głównym*. Najlepszym sposobem na stworzenie bezpiecznego hasła jest zestawienie ze sobą czterech losowych słów i liczby. Na przykład: *AutoKwiatMusiPapier38*. Łatwe do zapamiętania, a jednocześnie prawie niemożliwym jest, aby ktokolwiek lub jakikolwiek system je rozszyfrował.

### 2. Skonfiguruj uwierzytelnianie dwuskładnikowe (2FA)

2FA lub MFA (uwierzytelnianie wieloskładnikowe)[^3] to dodatkowe zabezpieczenie dla usług online. Po raz pierwszy wprowadzono je w bankowości internetowej. Obecnie warto je stosować wszędzie, gdzie to możliwe. Polega to na tym, że aby zalogować się do jakiegoś serwisu online, wymagane są nie tylko login i hasło ale także jednorazowy kod generowany przez Twoje urządzenie mobilne - zwykle smartfon[^4].

W naszej firmie korzystamy z wielu serwisów i członkowie naszego zespołu muszą skonfigurować 2FA dla wszystkich z nich - mamy do tego celu specjalną listę kontrolną[^5].

Konfigurując dwuskładnikowe uwierzytelnianie dla wszystkich usług i mediów społecznościowych, z których często korzystasz, sprawdź wszystkie opcje zabezpieczeń, a w szczególności:

* zmień swoje hasło na silniejsze,
* dodaj swój numer telefonu jako dodatkowy sposób dostępu do konta,
* przejrzyj wszystkie połączone usługi lub aplikacje, które mogą mieć dostęp do Twojego konta (przede wszystkim Twoje profile w mediach społecznościowych).

Wiele serwisów, które wymagają rejestracji całych zespołów, ma opcję *zmuszania* wszystkich członków do korzystania z 2FA. Jeśli jesteś administratorem zespołu, skorzystaj z tej opcji. W ten sposób przy następnym logowaniu wszyscy maruderzy w twoim zespole będą musieli skonfigurować swoje urządzenie uwierzytelniające, aby uzyskać dostęp do konta. Zazwyczaj, gdy chcemy skorzystać z takiej opcji, na tydzień wcześniej informujemy o tym zespół. Następnie przełączamy 2FA na obowiązkowe dla wszystkich, mając nadzieję, że wszyscy w zespole są już gotowi.

### 3. Zabezpiecz swoje osobiste urządzenia

W przeszłości ludzie otrzymywali wszystkie urządzenia, z których korzystali w pracy od pracodawcy - komputer i telefon ustawiane i konfigurowane były przez dział IT firmy. Jednak wraz z pojawieniem się smartfonów i tabletów trend *przynieś własne urządzenie*[^6] zmienił te zasady.

W Nozbe większość osób korzysta z własnych komputerów, smartfonów i tabletów. Firma nie ma nad nimi kontroli. Możemy najwyżej upewniać się, że ludzie sami zabezpieczają swoje urządzenia, analizując razem z nimi najlepsze do tego metody. Przygotowaliśmy więc wspólnie praktyczne listy kontrolne:

* Zabezpieczanie komputera Mac[^7]
* Zabezpieczanie komputera z systemem Windows[^8]
* Zabezpieczanie urządzenia iOS (iPhone lub iPad)[^9]
* Zabezpieczanie smartfona z Androidem[^10]

Prosimy, by członkowie zespołu zapoznali się z tymi listami podczas konfigurowania nowego urządzenia.[^11] Doradzamy im również, aby wysyłali je także wszystkim członkom rodziny.

## Serwer VPN - w pełni bezpieczne wirtualne biuro naszego zespołu w chmurze

Teraz, gdy wysoka przepustowość stała się dużo bardziej powszechna, ludzie zaczęli używać serwerów VPN znacznie częściej niż kiedyś.[^12] Po nawiązaniu bezpiecznego połączenia z serwerem VPN łączysz się z Internetem za pośrednictwem tego serwera. Wygląda to tak, jakby połączenie wychodziło z fizycznej lokalizacji serwera, z którym masz nawiązaną łączność. Dlatego właśnie VPN jest używany jako sposób na ochronę prywatnej geolokalizacji, lub, na przykład, sposób na oglądanie filmów w zagranicznym serwisie streamingowym[^13].

Istnieje jednak również trzeci sposób korzystania z serwera VPN, który niedawno odkryliśmy i który natychmiast poprawił bezpieczeństwo wielu naszych wewnętrznych narzędzi.

Używamy serwera VPN jako naszego *wirtualnego biura w chmurze*:

* Płacimy za własny serwer VPN hostowany w centrum danych w pobliżu oficjalnego adresu naszej firmy.
* Utworzyliśmy na tym serwerze unikatowe konta dla wszystkich członków naszego zespołu.
* Nasz serwer VPN posiada jeden unikatowy adres IP, więc kiedy się do niego logujemy, ruch, który generujemy w Internecie przechodzi przez serwer i dla świata wygląda to tak, jakby to adres IP serwera był adresem IP urządzeń, z których korzystamy.
* Następnie ograniczyliśmy dostęp do naszych wewnętrznych narzędzi, takich jak portal obsługi klienta, portal rozliczeniowy, firmowa wiki i inne tylko dla tego adresu IP.[^14]

Ten rodzaj konfiguracji rozwiązuje kilka istotnych problemów związanych z bezpieczeństwem:

* Nasze połączenie z Internetem zawsze jest szyfrowane. Nawet jeśli ktoś z naszego zespołu podłączy laptopa do hotspotu Wi-Fi w lokalnej kawiarni, nikt nie będzie w stanie sprawdzić jego ruchu, ponieważ będzie on szyfrowany przez VPN.
* Nasze wewnętrzne narzędzia zawsze są zabezpieczone. Nikt nie może włamać się do bazy danych naszych klientów ani innych wewnętrznych narzędzi, z których korzystamy, ponieważ zostanie zablokowany na poziomie adresu IP.
* Ułatwia to również odbieranie dostępu. Gdy dana osoba opuszcza naszą firmę, usuwamy jej konto VPN i natychmiast traci ona dostęp do wszystkich danych i narzędzi firmy.

Konfigurując własny serwer VPN i tworząc indywidualne konta VPN dla wszystkich członków zespołu, odtwarzamy zabezpieczenia, które w przeszłości mogły chronić tylko fizyczne biura. Naszym biurem staje się natomiast serwer VPN. Aby uzyskać dostęp do danych lub usług firmy, musisz znajdować się *w biurze*, co oznacza, że musisz być zalogowanym na naszym serwerze VPN.

Aby nie być pod ścianą w przypadku awarii serwera VPN, wykupiliśmy również drugi serwer VPN skonfigurowany w zupełnie innej lokalizacji geograficznej. Dzięki temu, gdy jeden serwer zawiedzie, nadal będziemy w stanie zalogować się do naszego *wirtualnego biura*. Polecam skonfigurowanie takiego serwera (lub dwóch) każdej firmie.[^15]

Większość nowoczesnych urządzeń posiada fabrycznie wbudowaną obsługę serwerów VPN. Dzięki temu nie potrzebujesz żadnego dodatkowego oprogramowania, aby móc uzyskać dostęp do połączenia VPN. Jest ono wbudowane zarówno w systemy Mac, Windows, Android, jak i iOS. Mój iPad prawie zawsze pozostaje połączony z naszym serwerem VPN. Połączenie lub odłączenie urządzenia to kwestia zmiany tylko jednej opcji w Ustawieniach.

## Ochrona przed phishingiem i złośliwym oprogramowaniem

Kolejnym istotnym tematem do omówienia jest sposób ochrony domowego biura każdego z członków zespołu przed atakami phishingowymi i złośliwym oprogramowaniem za pomocą DNS. Dzięki niej nikt nie będzie w stanie przypadkowo połączyć się ze złośliwym serwerem ze swojego komputera. Konfiguracja jest bardzo prosta - wystarczy zmienić serwer DNS na routerze internetowym[^16].

Ważnym jest również, aby być świadomym wszystkich najnowszych sztuczek, których używają oszuści, by przekonać nas do kliknięcia łącza w wiadomości e-mail. Nazywa się to phishingiem i staje się coraz bardziej wyrafinowanym zjawiskiem [^17]. Kliknięcie złośliwego łącza może doprowadzić do pobrania wirusa lub programu szpiegującego bez naszej wiedzy. Dlatego wiele firm przeprowadza regularne szkolenia i testy dla swoich pracowników, aby uświadomić im istniejące zagrożenia. Jest to dodatkowy powód, aby we wzajemnej współpracy unikać używania poczty e-mail (jak wyjaśniałem w rozdziale 6).

## Bezpieczeństwo nie jest stanem, jest procesem

Nie wystarczy mieć listy kontrolnej, raz na nią spojrzeć, skonfigurować urządzenia i zapomnieć. Bezpieczeństwo to proces, który wymaga ciągłego sprawdzania, monitorowania i ulepszania.

> Bezpieczeństwo to nie jest coś, co masz. To coś, co ciągle sprawdzasz i ulepszasz.

Pisząc ten rozdział i przygotowując do niego listy kontrolne, zauważyłem, że od czasu, gdy je ostatnio publikowaliśmy, wiele rzeczy wymaga już aktualizacji. Zdałem sobie także sprawę, że zaniedbałem skonfigurowanie 2FA dla kilku usług, z których korzystam.

Postanowiłem, że od teraz częścią naszych regularnych przeglądów kwartalnych będzie przejrzenie tych list i upewnienie się, że wszystko jest poprawnie skonfigurowane. A w przypadku, gdy okaże się, że listy kontrolne wymagają poprawek lub zmian, wprowadzimy je od razu [^18].

## Konkluzja: zadbaj o bezpieczeństwo swojego wirtualnego biura!

Postępuj zgodnie z poradami i listami kontrolnymi z tego rozdziału. Wyślij je do wszystkich członków swojego zespołu i ustal terminy regularnych przeglądów całej infrastruktury bezpieczeństwa. Jeśli to możliwe, korzystaj z dwuetapowego uwierzytelniania i rozważ skonfigurowanie serwera VPN dla swojej firmy. Ufaj swojemu zespołowi w kwestii bezpieczeństwa systemów, ale jednocześnie regularnie je sprawdzaj, bo jednak zawsze lepiej jest dmuchać na zimne.

[^1]: Rafał Sobolewski współprowadzi ze mną podcast Nie Ma Biura, który znajdziesz pod adresem: [NoOffice.fm](https://NoOffice.fm/)
[^2]: W naszej firmie korzystamy z 1Password w wersji biznesowej, który jednocześnie polecamy: [NoOffice.Link/1password](https://nooffice.link/1password)
[^3]: Więcej informacji na Wikipedii: [NoOffice.Link/mfa](https://nooffice.link/mfa)
[^4]: Wspomniane wyżej 1Password pozwala na konfigurację tych kodów, ale możesz użyć również Authy ([NoOffice.Link/authy](https://nooffice.link/authy)) lub Google Authenticator ([NoOffice.Link/authenticator](https://nooffice.link/authenticator)) oraz wielu innych podobnych aplikacji.
[^5]: Nasza aktualna lista kontrolna dotycząca 2FA dla usług, z których korzystamy: [NoOffice.Link/security](https://nooffice.link/security)
[^6]: Przynieś własne urządzenie / technologię / telefon zgodnie z objaśnieniami na Wikipedii: [NoOffice.Link/byod](https://nooffice.link/byod) 
[^7]: Lista kontrolna do zabezpieczania komputera iMac lub MacBook: [NoOffice.Link/securemac](https://nooffice.link/securemac)
[^8]: Lista kontrolna do zabezpieczania komputera z systemem Windows 10: [NoOffice.Link/securewindows](https://nooffice.link/securewindows)
[^9]: Instrukcja jak krok po kroku zabezpieczyć dowolne urządzenie z systemem iOS: [NoOffice.Link/secureios](https://nooffice.link/secureios)
[^10]: Leon z naszego zespołu opublikował przydatną listę kontrolną dotyczącą zabezpieczania urządzenia z Androidem: [NoOffice.Link/secureandroid](https://nooffice.link/secureandroid)
[^11]: Wszystkie powyższe listy kontrolne zostały opublikowane na naszej platformie **Nozbe.HOW**. Każdy może zastosować taką listę kontrolną dla dowolnego urządzenia bez konieczności posiadania dodatkowego oprogramowania. [NoOffice.Link/nozbehow](https://nooffice.link/nozbehow)
[^12]: VPN oznacza *Virtual Private Networking*, więcej informacji na Wikipedii: [NoOffice.Link/vpn](https://nooffice.link/vpn)
[^13]: Ze względu na prawa autorskie wiele usług przesyłania strumieniowego oferuje różne treści w różnych krajach. Dlatego na przykład ludzie w Europie próbują używać serwerów VPN w USA do oglądania treści z USA.
[^14]: Możesz to sprawdzić samemu. Spróbuj wejść na stronę **Nozbe.team**, a zobaczysz pustą stronę. Tylko członkowie naszego zespołu zalogowani na naszym serwerze VPN mają dostęp do tej witryny.
[^15]: Nasz CTO skonfigurował serwer Algo VPN i ręczy za niego. Jest bezpłatny i łatwy w instalacji nawet dla kogoś posiadającego niewielką wiedzę techniczną: [NoOffice.Link/algo](https://nooffice.link/algo)
[^16]: Bardzo popularną opcją jest skorzystanie z usługi takiej jak OpenDNS: [NoOffice.Link/opendns](https://nooffice.link/opendns) 
[^17]: Wyjaśnienie, czym jest phishing mailowy przez FTC: [NoOffice.Link/phishing](https://nooffice.link/phishing)
[^18]: Ponieważ podałem Ci w tym rozdziale link do aktualnych list kontrolnych, których używamy w naszej firmie, za każdym razem, gdy je zaktualizujemy, będziesz mieć dostęp do ich najnowszej, aktualnej wersji. Miłego korzystania!
