## Theory part - G
###### 1. Vad är skillnaden mellan backend och databas? Beskriv vad respektive ansvarar för.

- Backend tar hand om data från frontenden och skickar sedan vidare informationen till databasen som därefter lagrar datan.

- Databasen tar hand om information från backenden och lagrar den.


###### 2. Varför är det viktigt att vara konsekvent i sin API-design för att skapa ett användarvänligt API?

- Om man bygger flera API:ier på olika sätt blir det förvirrande för den som använder API:erna, det underlättar ifall API:erna ser ungefär likadant ut. Ifall andra använder API:et ska de lätt kunna förstå hur det fungerar och sätta sig in i det. Det är tidseffektivt att skriva enkla API:er som folk förstår, vilket gör att du som företagare sparar pengar.



###### 3. Vad är autentisering vs auktorisering?

- Autentisering är vem du är (t.ex. användarnamn och lösenord)

- Auktorisering det som kollar genom vad du har tillgång till (t.ex. tillgång till vissa filer)


###### 4. Vad är skillnaden mellan "Private Cloud" och "Public Cloud". Vilka typer av tjänster erbjuder public cloud.

- Private cloud är när man har egen server ståendes som man själv underhåller.

- Public cloud är använder en server remote som man delar med andra människor, vilket även underhålls av andra.


###### 5. Varför testar vi mjukvara.

- Testning av mjukvara görs för att förenkla för oss själva, t.ex. ifall koden måste skrivas om kan man använda testet igen. Vi använder även testning för att få bra kod från början vilket ger oss ett bra mjukvaru-värde.


## Theory part - VG
###### 1. Vad innebär Service Oriented Architecture (SOA)

- SOA är komponentstruktur med urskiljbara delar med bestämda uppgifter och gränssnitt för att utbyta tjänster och service med varandra. Gränssnittet till tjänster kommer ge olika tillämpningar men oavsett hur de implementeras skall de generara samma result och det är det som är nyckeln i SOA.



###### 3. Vad innebär OAUTH

- Man loggar in med en tredjepart utan att ge ut sitt lösenord t.ex. facebookinloggning/twitter på en annan hemsida.


###### 4. Vilka typer av managed services erbjuds av Public Cloud och vad innebär de?

- Infrastructure (Kör virtuella maskiner), Platform (specialicerar sig på att göra en sak endast) och Software (En service som du använder eller tillhandahåller) finns som services. Vilket innebär att en extern tjänst köps in som kan t.ex. vara att underhålla en server, byta disker osv...


###### 5. Vad innebär TDD och BDD?

- TDD står för "Test driven developer" och innebär att man skriver testerna först och sedan sin kod, vilket gör att man bryter ner problemen/kod i mindre delar vilket gör att koden blir enklare att förstå.

- BDD (Behaviour Driven Developer) är en agil testmetod som uppmanar till sammarbete mellan utvecklare, tester med enbart text som kan förstås av gemeneman. Se nedan.

```
Given that a customer previously bought a black sweater from me
And I have three black sweaters in stock.
When they return the black sweater for a refund
Then I should have four black sweaters in stock.
```
