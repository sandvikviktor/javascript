// variabel = nått som kan innehålla information

/*
    Javascript - Datatyper
    -------------------------------------------------
    String      =   Text
    Number      =   Tal, decimaltal
    Boolean     =   Sant/falskt (true/false)
    Null        =   null dvs tomt, inget alls
    Undefined   =   ej specifierat, varken string, null, bool eller något
    Object      =   ett objekt/klass som innehåller ett eller flera värden
    Symbol      =   symboler kommer vi inte använda

*/

/*

    Deklarera variabler
    --------------------------------------------------
    name = 'Viktor'         (Undvik)
    var name = 'Viktor'     (Undvik)
    let name = 'Viktor'
    const name = 'Viktor'


    var = global variabel - accessbar överallt i koden
    let = lokal variabel - accessbar bara inom det angivna området
    const = konstant, kan inte skrivas över (undantag finns)

    C# exempel.
        string name = "Viktor"
    JS exempel
        let name = 'Viktor'
        let age = 35;

    Strings:
        let name = "Hans"   -Använd INTE!
        let name = 'Hans'   -Denna ska du använda
        let name = `Hans`   -Använd denna när du kör placeholders
*/

    let name = 'Viktor';
    let age = 27;

    let withoutPlaceholders = 'Hej mitt namn är ' + name + ' och jag är ' + age + ' år gammal.';
    let withPlaceholders = `Hej mitt namn är ${name} och jag är ${age} år gammal.`;

    console.log(withoutPlaceholders);
    console.log(withPlaceholders);
    console.clear();

    