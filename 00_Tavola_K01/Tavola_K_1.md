
## I fondamenti di c# in ambiente DOTNET con Visual Studio Code
 
 // C# è un linguaggio di programmazione orientato a oggetti e indipendenti dai tipi
 // Permette di compilare molti tipi di applicazioni eseguite in .NET
 // C# fa parte della famiglia dei linguaggi C
 // I programmi C# vengono eseguiti in  .NET, un sistema di esecuzioni virtuale denominato CLR e un set di librerie di classi
 // Common Language Runtime (CLR)
 // La principlale caratteristica è la sua portabilità , un programma compilato con c# produce un file IL (Intermediate Language)
    che può essere copiato da una macchina all'altra 
 // Esso non può essere eseguito direttamente ma tramite il CLR 
 // Il CLR quindi compila solo la parte di codice che deve essere eseguita e l’esito della compilazione è il Just In Time (JIT) o jitting
 // IL C# è case sensitive
 // Le variabili vanno sempre dichiarate e inizializzata
 // Il primo carattere può essere una lettera,l'underscore (_) oppure l'at(@)
 // Termina le istruzioni con ";"

 
 // ***Prima di usare c# con viasul studio code bisogna installare il plugin sul pannello estensioni e il freamwork.NET core***

 // per eseguire il codice in Visual Studio Code è necessario installare il plugin C# di Microsoft
 // per installare il plugin C# di Microsoft è necessario aprire il pannello estensioni (Ctrl + Shift + X)
 // e cercare il plugin C# di Microsoft

// per eseguire il codice in Visual Studio Code è necessario installare il framework .NET Core
// per installare il framework .NET Core andare su
// https://dotnet.microsoft.com/en-us/download/dotnet
// Scaricare Preferibilmente l'ultima versione supportata

// digitare il comando "dotnet --version" per verificare che il framework .NET Core sia installato

// ci sono altre estensioni utili per Visual Studio Code per programmare in C# in ambiente DOTNET
// per installare le estensioni utili per Visual Studio Code per programmare in C# in ambiente DOTNET
// aprire il pannello estensioni (Ctrl + Shift + X) e cercare le estensioni

// ASP.NET Core Snippets (per creare file di configurazione per progetti ASP.NET Core)
// C# (per programmare in C#)
// C# Extensions (per programmare in C#)
// C# Snippets (per programmare in C#)

// comandi utili per Visual Studio Code per programmare in C# in ambiente DOTNET

// Ctrl + Shift + B (per compilare il codice)
// Ctrl + F5 (per eseguire il codice)
// Ctrl + Shift + ì (per aprire la console)
// Ctrl + C (per interrompere l'esecuzione del codice)
// Ctrl + Shift + X (per aprire il pannello estensioni)
// Ctrl + Shift + P (per aprire il pannello comandi)

// per visualizzare quali template sono disponibili per creare un progetto in Visual Studio Code
// e digitare il comando "dotnet new"

// per creare un progetto console in Visual Studio Code è necessario aprire il pannello comandi (Ctrl + Shift + P)
// e digitare il comando "dotnet new console"

// i principali progetti che si possono creare con Visual Studio Code in ambiente DOTNET sono:

// console (per creare un progetto console)
// web (per creare un progetto web)
// mvc (per creare un progetto web mvc)
// angular (per creare un progetto web angular)
// react (per creare un progetto web react)

// per ogni esercizio reare una cartella con il nome dell'esercizio ed aprirla nel terminale di Visual Studio Code

// per eseguire il codice in Visual Studio Code è necessario aprire il pannello comandi (Ctrl + Shift + P)
// e digitare il comando "dotnet run"

// per compilare il codice in Visual Studio Code è necessario aprire il pannello comandi (Ctrl + Shift + P)
// e digitare il comando "dotnet build"

// la differenza tra eseguire e compilare il codice è che il codice compilato viene eseguito dal sistema operativo
// mentre il codice eseguito viene eseguito dal framework .NET Core
// Il codice compilato è più veloce da eseguire

Link documentazione

`https://learn.microsoft.com/it-it/dotnet/csharp/tour-of-csharp/`


/***********************************************************************************************************************
 ## la console è una finestra che permette di visualizzare dei messaggi                                            *
 ************************************************************************************************************************/

// La console permette di comunicare con il programma , Attraverso l'input dell'utente , la console mostra tramite una finestra 
 il messaaggio di input 

// Prima di interagire con una console se ne deve creare una , tramite il comando  "\\dotnet New Console//" , creerà dei file 
 necessari per utilizzare il file di lavoro .cs

// La console si apre con Ctrl + shift +i
// la console di Visual Studio Code si interrompe con Ctrl + C

__per interagire con la console si usano i metodi della classe Console__

 esempi di comandi  console : 
 ```c#
 Console.WriteLine("Hello, World!"); Con questo comando andiamo a dire alla console di scrivere il messaggio Ciao Mondo !

 Console.ReadLine(); Legge l'inpuput dell 'utente con apposito comando

 Console.ReadKey(); ///per leggere un tasto

 Console.Clear();  //per pulire la console

 Console.Beep(); //per far suonare il pc
```
 Per creare una console si usa il comando "\\dotnet New Console//" , questo perche crea i file necessari per utilizzare i file .cs

 Link documentazione

 https://learn.microsoft.com/it-it/dotnet/csharp/tutorials/console-teleprompter


/***********************************************************************************************************************
 ## i commenti sono utili per spiegare il codice                                                                     *
 ***********************************************************************************************************************/

I commenti sono molto utili per spiegare una determinata linea di condice.
E' di buona norma scrivere il commento sopra alla riga del codice 
Il commento per buona prassi va scritto in inglese
Sarebbe meglio non scriverlo di fianco al codice questo perche se hai molto da scrivere , il testo può finire fuori dalla schermata di lavoro e risulta scomodo da leggerlo
Esmpio:
```c#                               
Il commento si esprime tramite le due  // Prova Commento
Se si vuole scrivere un commento su più righe si usa /* per iniziaere  e finire */
Con piu simboli /////// Crei una barra sul commento
```
Link documentazione
`https://learn.microsoft.com/it-it/dotnet/csharp/language-reference/language-specification/documentation-comments`


/***********************************************************************************************************************
 ## le istruzioni sono dei comandi che vengono eseguiti                                                              *
 ***********************************************************************************************************************/


Le istruzioni sono delle azioni che diamo al programma  per fare determinate cose 

le istruzioni si scrivono in ordine, una per riga

Le azioni comuni includono: 
 la dichiarazione di variabili : int , string ecc
 l'assegnazione di valori 
 le chiamate ai metodi 
 il ciclo delle raccolte e la creazione di rami tra blocchi di codice a seconda di una data condizione
 L'ordine in cui vengono le istruzioni eseguite in un programma viene chiamato "flusso di controllo" o "flusso di esecuzione". 
 Il flusso di controllo può variare ogni volta che viene eseguito un programma, a seconda della reazione del programma all'input ricevuto in fase di esecuzione.

 Un'istruzione può essere costituito da una singola riga di codice che termina con un punto e virgola ; o da una serie di istruzioni a riga singola in un blocco. 
 Un blocco di istruzioni è racchiuso tra parentesi {} e può contenere blocchi annidati. 

 esempio di istruzione
 ```c# 
 int a = 1;
```
 le istruzioni possono essere composte da più righe

 esempio di istruzione composta da più righe

 ```c#
 int a = 1;
 a = a + 1;
```
 chiede all'utente di inserire un numero e lo stampa:
 ```c#
 int a = int.Parse(Console.ReadLine());
 Console.WriteLine(a);
```
 int è il tipo di dato di a
 int.Parse è il metodo che converte una stringa in un numero intero
 Console.ReadLine è il metodo che legge una stringa
 Console.WriteLine è il metodo che scrive una stringa

Link documentazione

https://learn.microsoft.com/it-it/dotnet/csharp/programming-guide/statements-expressions-operators/statements


/***********************************************************************************************************************
 ## i dati sono contenuti in variabili e costanti                                                                    *
 ***********************************************************************************************************************/

**Esistono vari tipi di dati:**
Tipi interi
Tipi decimali e float
Tipi stringa
Tipi booleani
 
__Per rappresentare numeri reali possiamo usare i tipi floating e decimali.__
Se vogliamo usare un numero in virgola con precisione a 7 cifre decimali usiamo il tipo float. Il float si usa quando non si vuole un dato presciso
Se invece vogliamo gestire numeri con virgola a 15 - 16 cifre usiamo il tipo double; Il double viene usato quando si vuole un dato leggermente piu preciso , usato nei database scientifici 
per numeri con cifre dopo la virgola di 28 - 29 cifre usiamo il tipo decimal, che è quello che occupa più memoria (128 bit) e è il piu preciso , usato nelle bance 

**i principali tipi di dati semplici:**

numeri interi (int)
```c#
int a = 1;
int b = 2;
int c = a + b;
```
numeri decimali (double)
```c#
double d = 1.5;
double e = 2.5;
double f = d + e;
```
stringhe (string)
```c#
string s = "ciao";
string t = "mondo";
string u = s + " " + t;
```
booleani (bool)
```c#
bool v = true;
bool w = false;
bool x = v && w;
```
le principali strutture dati:

array di numeri interi
```c#
int[] y = new int[3];y[0] = 1;
y[1] = 2;
y[2] = 3;
```
scegliere la dimensione dell'array
```c#
int[] y = new int[3];

//scegliere i valori dell'array
int[] y = { 1, 2, 3 };

//array di stringhe
string[] z = new string[3];
z[0] = "ciao";
z[1] = "mondo";

//liste
List<int> aa = new List<int>();
aa.Add(1);
aa.Add(2);
aa.Add(3);

//liste di stringhe
List<string> bb = new List<string>();
bb.Add("ciao");
bb.Add("mondo");

// la differenza principale tra array e liste è che le liste possono essere modificate mentre gli array no
// le liste hanno più metodi di array
// le liste sono più lente degli array ma più veloci delle strutture dati più complesse
```
 è possibile trovare altre informazioni su dati su
 `https://docs.microsoft.com/it-it/dotnet/csharp/language-reference/language-specification/types`


/***********************************************************************************************************************
 ## le variabili sono dei contenitori che possono contenere un valore                                                *
 ***********************************************************************************************************************/

le variabili si dichiarano con il tipo di dato seguito dal nome della variabile
le variabili si inizializzano con il tipo di dato seguito dal nome della variabile e il valore da assegnare
le variabili possono essere dichiarate e inizializzate in un'unica riga

esempio di variabile
int a = 1;

esempio di variabile dichiarata e inizializzata in un'unica riga
int a = 1;

è possibile trovare altre informazioni su variabili su
https://docs.microsoft.com/it-it/dotnet/csharp/language-reference/language-specification/variables

https://learn.microsoft.com/it-it/dotnet/framework/windows-workflow-foundation/variables-and-arguments


/***********************************************************************************************************************
 ## le costanti sono simili alle variabili, ma non possono essere modificate                                         *
 ***********************************************************************************************************************/

Le costanti sono dei valori che non possono essere modificati  dal programma o dall'utente 

Appunto il nome costante , rimane costante nel tempo 
Sono il contrario delle variabili.
Le costanti vengono dichiarate con il modificatore const.

Esempi 
```c#
class Calendar1
{
     const int Mese = 12;
}
```
In questo caso abbiamo dichiarato una costante int chiamata Mese e gli abbiamo assegnato un valore 12

Si posso anche creare piu costanti sulla stessa riga 

```c#
class Calendar2
{
     int Mese = 12, Weeks = 52, Days = 365;
}
```
le costanti si dichiarano con il tipo di dato seguito da const e dal nome della costante
le costanti si inizializzano con il tipo di dato seguito da const e dal nome della costante e il valore da assegnare
le costanti possono essere dichiarate e inizializzate in un'unica riga
esempio di costante dichiarata e inizializzata in un'unica riga

```c#
const int a = 1;
// esempio di costante
const int a = 1;
```
dizionari (servono per associare una chiave ad un valore)
Dictionary<string, int> cc = new Dictionary<string, int>();
cc.Add("ciao", 1);
cc.Add("mondo", 2);

dizionari di stringhe
Dictionary<string, string> dd = new Dictionary<string, string>();
dd.Add("ciao", "mondo");

Link documentazione

https://learn.microsoft.com/it-it/dotnet/csharp/programming-guide/classes-and-structs/constants


/***********************************************************************************************************************
 ## gli operatori sono simboli che permettono di eseguire delle operazioni                                           *
 **********************************************************************************************************************

 Un elemento fondamentale in un linguaggio di programmazione sono gli operatori.
 C# fornisce diversi operatori e molti di essi sono sopportati dai tipi predefiniti (bool , int ecc..) e 
 consentono di eseguire operazioni di base  con valori di tali tipi.

 Esistono vari tipi di operatori e sono :

 Operatori aritmetici che eseguono operazioni aritmetiche 
 Operatori di confronto che confrontano gli operandi numerici
 Operatori logici booleani che eseguono operazioni con bool operandi
 Operazioni di uguaglianza che controllano se gli operandi sono uguali o meno

  esempio:

 int a, b, c;
 a = 7;
 b = a;
 c = b++;
 b = a + b * c;
 c = a >= 100 ? b : c / 10;
 a = (int)Math.Sqrt(b * b + c * c);

 string s = "String literal";
 char l = s[s.Length - 1];

 var numbers = new List<int>(new[] { 1, 2, 3 });
 b = numbers.FindLast(n => n > 1);

 gli operatori aritmetici sono: + - * / % (somma, sottrazione, moltiplicazione, divisione, resto)
 esempio di operatore aritmetico
 int a = 1;
 int b = 2;
 int c = a + b;

 gli operatori di confronto sono: == != > < >= <= (uguale, diverso, maggiore, minore, maggiore o uguale, minore o uguale)
 == è un operatore di confronto che significa "uguale"
 != è un operatore di confronto che significa "diverso"
 > è un operatore di confronto che significa "maggiore"
 < è un operatore di confronto che significa "minore"
 >= è un operatore di confronto che significa "maggiore o uguale"

 esempio di operatore di confronto
 int a = 1;
 int b = 2;
 bool c = a == b;

 gli operatori logici sono: && || ! (e, o, non)

 esempio di operatore logico
 bool a = true;
 bool b = false;
 bool c = a && b;

 || è un operatore logico che significa "o"
 && è un operatore logico che significa "e"
 ! è un operatore logico che significa "non"

 gli operatori logici hanno precedenza su quelli aritmetici
 esempio di operatore logico con precedenza su operatore aritmetico
 int a = 1;
 int b = 2;
 bool c = a == 1 && b == 2;
 
Link documentazione

 https://docs.microsoft.com/it-it/dotnet/csharp/language-reference/language-specification/operator/

 https://learn.microsoft.com/it-it/dotnet/csharp/language-reference/operators/

/***********************************************************************************************************************
 ## le conditioni sono composte da istruzioni di controllo                                                           *
 ***********************************************************************************************************************/

//Le istruzioni condizionali, in qualsiasi linguaggio di programmazione, permettono di verificare determinate condizioni come ad esempio l'uguaglianza, 
la disuguaglianza o semplicemente se un elemento è maggiore di un altro. 
Sono utilizzate per consentire al programma di "prendere decisioni" a seconda del verificarsi o meno di una data condizione. 
In C# esistono due costrutti fondamentali, ovvero switch e if/else. 

// Switch o Select Case 

 Il costrutto switch è molto semplice: viene valutata un'espressione, nel nostro caso viene valutato il valore della variabile scelta,
 inserita dall'utente; nel caso che valga 0 diciamo al compilatore tramite il comando goto di spostarsi alla porzione di codice identificata da default;
 nel caso valga 1 valorizziamo la variabile output, e con il comando break, diciamo di uscire da tutto il costrutto switch; all'interno di ogni case dobbiamo per forza usare o break o goto.


// If / Else

serve per valutare se una espressione è vera o falsa. 

Vediamo un semplice esempio:

Console.WriteLine("Scegli: inserire un valore da 1 a 2");
   int scelta = int.Parse(Console.ReadLine());
   string output="Nessuno";
   
   switch(scelta)
   {
    case 0:
     goto default;
    case 1:
     output="Hai scelto l'opzione numero 1";
     break;
    case 2:
     output="Hai scelto l'opzione numero 2";
     break;
    default:
     output="Inserire un valore corretto!";
     break;   
   }
   Console.WriteLine(output);
   Console.ReadKey(true);


if(1==5)   
  Console.WriteLine ("1 è uguale a 5");
else 
  Console.WriteLine ("1 è diverso da 5");


// le istruzioni di controllo sono dei comandi che permettono di eseguire delle operazioni in base a delle condizioni
i controlli di flusso:

// if (se)
if (a == 1)
{
Console.WriteLine("a è uguale a 1");
} /

/ if-else (se no)
if (a == 1)
{
Console.WriteLine("a è uguale a 1");
}

else
{
Console.WriteLine("a non è uguale a 1");
} /

/ if-else if-else (se no se no)
if (a == 1)
{
Console.WriteLine("a è uguale a 1");
}

else if (a == 2)
{
Console.WriteLine("a è uguale a 2");
}

else
{
Console.WriteLine("a non è uguale a 1 e a 2");} /

/ switch (seleziona)
switch (a)
{
case 1:
Console.WriteLine("a è uguale a 1");
break;
case 2:
Console.WriteLine("a è uguale a 2");
break;
default:
Console.WriteLine("a non è uguale a 1 e a 2");
break;
} /

/ while (mentre)
while (a < 10)
{
Console.WriteLine(a);
a++;
} /
/ do-while (fai mentre)
do
{
Console.WriteLine(a);
a++;

} while (a < 10);
// la differenza principale fra while e do-while è che il primo viene eseguito almeno una volta
// mentre il secondo viene eseguito almeno una volta e poi viene eseguito fino a quando la condizione è vera
// for (per)
for (int i = 0; i < 10; i++)
{
Console.WriteLine(i);
} /
/ foreach (per ogni)
foreach (int i in y)
{
Console.WriteLine(i);
}

Link

https://learn.microsoft.com/it-it/dotnet/csharp/language-reference/statements/selection-statements


/***********************************************************************************************************************
 ## i metodi sono le funzioni delle classi si utilizzano per eseguire delle azioni e ritornano un valore             *
 ***********************************************************************************************************************/

// Un metodo è un blocco di codice che contiene una serie di istruzioni.
 Un programma fa in modo che le istruzioni vengano eseguite chiamando il metodo e specificando gli argomenti del metodo obbligatori. 
 In C#, ogni istruzione eseguita viene attuata nel contesto di un metodo.

public void metodo()
{

}

// i metodi si chiamano con il nome del metodo seguito dai parametri tra parentesi tonde
// i metodi possono avere parametri di input e parametri di output
// i parametri di input sono quelli che vengono passati al metodo
// i parametri di output sono quelli che il metodo ritorna

// esempio di metodo con parametri di input e di output
static int Somma(int a, int b)
{
return a + b;
}

// link
https://learn.microsoft.com/it-it/dotnet/csharp/programming-guide/classes-and-structs/methods

/***********************************************************************************************************************
 ## le classi sono dei contenitori che contengono metodi, variabili e costanti                                       *
 ***********************************************************************************************************************/

Le classi sono alla base di ogni linguaggio di programmazione orientato agli oggetti e ha la caratteristica di definire un insieme 
le caratteristiche di una serie di oggetti che hanno  prorpietà e compiono azioni uguali.
Esso rappresentano tutti gli oggetti che appartengono ad una certa classe.

Esempio di classe sono le auto : ogni auto è diversa da un'altra ma tutte hanno 4 ruote , un motore e compiono l'azione di
avanzare e frenare. Queste caratteristiche comuni le fanno rientrare in un unico concetto , appunto un un'unica classe
Queindi si può dire che una classe è una collezione di variabili , metodi e prorpietà

// le classi si dichiarano con il tipo di accesso seguito da class e dal nome della classe
// le classi si inizializzano con il tipo di accesso seguito da class e dal nome della classe
// le classi possono essere dichiarate e inizializzate in un'unica riga

// esempio di classe
public class Program
{ // esempio di metodo
public static void Main(string[] args)
{
// esempio di variabile
int a = 1;
}
} /

/ i tipi di accesso sono: public, private, protected, internal, protected internal

// public: il tipo di accesso public permette di accedere al contenuto da qualsiasi parte del programma
// private: il tipo di accesso private permette di accedere al contenuto solo all'interno della classe
// protected: permette di accedere al contenuto solo all'interno della classe e delle classi che ereditano dalla classe
// internal: il tipo di accesso internal permette di accedere al contenuto solo all'interno del namespace
// protected internal: accede al contenuto solo all'interno del namespace e delle classi che ereditano dalla classe

 Link

 https://learn.microsoft.com/it-it/dotnet/csharp/fundamentals/types/classes

/***********************************************************************************************************************
 ## gli oggetti sono delle istanze delle classi                                                                      *
 ***********************************************************************************************************************/

 Si puo' considerare le istanze di una classe, ovvero gli oggetti che realizzano il concetto di classe, come variabili definite
 da un certo tipo di dato.

 gli oggetti si dichiarano con il tipo di accesso seguito dal nome della classe e dal nome dell'oggetto
 gli oggetti si inizializzano con il tipo di accesso seguito dal nome della classe e dal nome dell'oggetto
 gli oggetti possono essere dichiarati e inizializzati in un'unica riga

 esempio di oggetto randon
 Random random = new Random();

 Random è una classe che permette di generare numeri casuali
 random è un oggetto di tipo Random
 new è un operatore che permette di creare un oggetto
 new Random() è un'espressione che permette di creare un oggetto di tipo Random

 Persona p = new Persona("Marco", "Giulia");


 Link 

 https://learn.microsoft.com/it-it/dotnet/csharp/fundamentals/object-oriented/objects



/***********************************************************************************************************************
 ## i namespace sono dei contenitori che contengono classi, metodi, variabili e costanti                             *
 ***********************************************************************************************************************/

I namespace vengono usati in C# per organizzare e fornire un livello di separazione dei codici. Possono essere considerati come un contenitore costituito da altri spazi dei nomi, classi, ecc.

Ci aiuta a organizzare diversi membri inserendo i membri correlati nello stesso spazio dei nomi.
Namespace risolve anche il problema del conflitto di denominazione. Due o più classi quando inserite in spazi dei nomi diversi possono avere lo stesso nome.


//i namespace si dichiarano con il tipo di accesso seguito da namespace e dal nome del namespace
// i namespace si inizializzano con il tipo di accesso seguito da namespace e dal nome del namespace
// i namespace possono essere dichiarati e inizializzati in un'unica riga


esempi:

 (1)
namespace MyNamespace
{
    class MyClass
    {
        public void MyMethod()
        {
            System.Console.WriteLine("Creating my namespace");
		}
	}
}

Questo è un esempio di namespace (MyNameSpace) , costituito da una classe (MyClass) e i suoi membri.
MyMethod è un metodo della classe My Class

(2)
// esempio di namespace
namespace ConsoleApp1
{
// esempio di classe
public class Program
{
// esempio di metodo
public static void Main(string[] args)
{
// esempio di variabile
int a = 1;
}
}
}

Link
https://learn.microsoft.com/it-it/dotnet/csharp/language-reference/keywords/namespace/

https://docs.microsoft.com/it-it/dotnet/csharp/language-reference/language-specification/namespaces

