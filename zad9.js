const lessons = [
    {
      id: 1,
      name: 'Dziękujemy za zakup kursu',
      length: '0:54'
    },
    {
      id: 2,
      name: '[1x1] Wprowadzenie',
      length: '03:39'
    },
    {
      id: 3,
      name: '[1x2] Podstawy pisania skryptów',
      length: '03:49'
    },
    {
      id: 4,
      name: '[1x3] Zmienne',
      length: '09:01'
    },
    {
      id: 5,
      name: '[1x4] Typy danych',
      length: '06:34'
    },
    {
      id: 6,
      name: '[1x5] Instrukcje warunkowe',
      length: '06:39'
    },
    {
      id: 7,
      name: '[1x6] Operatory',
      length: '11:49'
    },
    {
      id: 8,
      name: '[1x7] Pętle',
      length: '07:24'
    },
    {
      id: 9,
      name: '[1x8] Funkcje',
      length: '06:19'
    },
    {
      id: 10,
      name: '[1x9] Tablice',
      length: '11:41'
    },
    {
      id: 11,
      name: '[1x10] Metody tablic',
      length: '12:55'
    },
    {
      id: 12,
      name: '[1x11] Obiekty',
      length: '11:24'
    },
    {
      id: 13,
      name: '[1x12] Prototypy',
      length: '09:16'
    },
    {
      id: 14,
      name: '[1x13] Klasy',
      length: '03:38'
    },
    {
      id: 15,
      name: '[1x14] Zakres',
      length: '10:05'
    },
    {
      id: 16,
      name: '[1x15] Hoisting',
      length: '08:50'
    },
    {
      id: 17,
      name: '[1x16] Closures',
      length: '06:46'
    },
    {
      id: 18,
      name: '[1x17] Obsługa błędów',
      length: '08:47'
    },
    {
      id: 19,
      name: '[1x18] Nowe metody stringów',
      length: '05:28'
    },
    {
      id: 20,
      name: '[1x19] Destrukturyzacja',
      length: '06:25'
    },
    {
      id: 21,
      name: '[1x20] Rest i Spread',
      length: '06:34'
    },
    {
      id: 22,
      name: '[1x21] Object literals',
      length: '02:23'
    },
    {
      id: 23,
      name: '[1x22] ES6 Modules',
      length: '09:23'
    },
    {
      id: 24,
      name: '[2x1] Środowiska uruchomieniowe',
      length: '10:06'
    },
    {
      id: 25,
      name: '[2x2] Jak działa przeglądarka internetowa',
      length: '13:51'
    },
    {
      id: 26,
      name: '[2x3] DevTools - narzędzia programistyczne',
      length: '16:17'
    },
    {
      id: 27,
      name: '[2x4] Dołączanie kodu JavaScript',
      length: '16:08'
    },
    {
      id: 28,
      name: '[2x5] Document, Window, Navigator',
      length: '12:27'
    },
    {
      id: 29,
      name: '[2x6] Poznaj DOM',
      length: '9:03'
    },
    {
      id: 30,
      name: '[2x7] QuerySelector i nawigacja w DOM',
      length: '15:05'
    },
    {
      id: 31,
      name: '[2x8] Praca z elementami DOM',
      length: '13:49'
    },
    {
      id: 32,
      name: '[2x9] Zdarzenia',
      length: '19:37'
    },
    {
      id: 33,
      name: '[2x10] Formularze',
      length: '12:27'
    },
    {
      id: 34,
      name: '[2x11] Ajax i Fetch API',
      length: '15:02'
    },
    {
      id: 35,
      name: '[2x12] Ciasteczka',
      length: '08:37'
    },
    {
      id: 36,
      name: '[2x13] Przechowywanie stanu z Web Storage API',
      length: '16:11'
    },
    {
      id: 37,
      name: '[2x14] Custom Elements',
      length: '15:41'
    },
    {
      id: 38,
      name: '[2x15] Shadow DOM',
      length: '08:38'
    },
    {
      id: 39,
      name: '[2x16] Template i Slot',
      length: '08:39'
    },
    {
      id: 40,
      name: '[2x17] Polyfills - wsparcie dla brakujących funkcji',
      length: '10:36'
    },
    {
      id: 41,
      name: '[2x18] Canvas - grafika po stronie klienta',
      length: '21:49'
    },
    {
      id: 42,
      name: '[2x19] Niestandardowe API przeglądarek',
      length: '16:17'
    },
    {
      id: 43,
      name: '[2x20] Web Workers',
      length: '09:56'
    },
    {
      id: 44,
      name: '[2x21] Service Worker i tryb offline',
      length: '17:43'
    },
    {
      id: 45,
      name: '[2x22] WebAssembly',
      length: '17:37'
    },
    {
      id: 46,
      name: '[2x22] WebAssembly',
      length: '17:37'
    },
    {
      id: 47,
      name: '[3x1] Czym są SPA?',
      length: '07:36'
    },
    {
      id: 48,
      name: '[3x2] Problem przy budowaniu SPA',
      length: '06:23'
    },
    {
      id: 49,
      name: '[3x3] Architektura oparta o komponenty',
      length: '06:59'
    },
    {
      id: 50,
      name: '[3x4] Czym są frameworki?',
      length: '05:57'
    },
    {
      id: 51,
      name: '[3x5] Zalety i wady frameworków',
      length: '06:58'
    },
    {
      id: 52,
      name: '[3x6] Kiedy framework, kiedy vanilla?',
      length: '03:18'
    },
    {
      id: 53,
      name: '[3x7] Czym jest Angular?',
      length: '19:46'
    },
    {
      id: 54,
      name: '[3x8] Czym jest Vue?',
      length: '17:36'
    },
    {
      id: 55,
      name: '[3x9] Czym jest React? - cz. 1',
      length: '07:24'
    },
    {
      id: 56,
      name: '[3x9] Czym jest React? - cz. 2',
      length: '12:54'
    },
    {
      id: 57,
      name: '[3x9] Czym jest React? - cz. 3',
      length: '10:54'
    },
    {
      id: 58,
      name: '[3x10] Jaki framework wybrać?',
      length: '05:34'
    },
    {
      id: 59,
      name: '[3x11] Template Syntax i JSX',
      length: '06:28'
    },
    {
      id: 60,
      name: '[3x12] JSX w praktyce',
      length: '05:47'
    },
    {
      id: 61,
      name: '[3x13] Komponenty, props i state',
      length: '11:47'
    },
    {
      id: 62,
      name: '[3x14] Komponenty kontenerowe i prezentacyjne',
      length: '08:41'
    },
    {
      id: 63,
      name: '[3x15] Przepływ danych',
      length: '10:56'
    },
    {
      id: 64,
      name: '[3x16] Cykl życia komponentu - cz. 1',
      length: '05:35'
    },
    {
      id: 65,
      name: '[3x16] Cykl życia komponentu - cz. 2',
      length: '14:20'
    },
    {
      id: 66,
      name: '[3x17] Routing',
      length: '07:36'
    },
    {
      id: 67,
      name: '[3x18] Linia komend',
      length: '10:56'
    },
    {
      id: 68,
      name: '[3x19] Menadżer pakietów - npm',
      length: '11:22'
    },
    {
      id: 69,
      name: '[3x20] npm scripts',
      length: '10:43'
    },
    {
      id: 70,
      name: '[3x21] CLI - Create React App',
      length: '11:51'
    },
    {
      id: 71,
      name: '[3x22] Deployment aplikacji',
      length: '6:01'
    }
  ];
  
  function totalDuration() {
    let hours=0;
    let minutes=0;
    let seconds=0;

    let moduleOneHours=0,
        moduleOneMinutes=0,
        moduleOneSeconds=0,
        moduleOnePercent=0;

    let moduleTwoHours=0,
        moduleTwoMinutes=0,
        moduleTwoSeconds=0,
        moduleTwoPercent=0;

    let moduleThreeHours=0,
        moduleThreeMinutes=0,
        moduleThreeSeconds=0,
        moduleThreePercent=0;

    for(let i=0; i<lessons.length; i++) {
        //get minutes and seconds from all course
        let a = lessons[i].length.split(':'); //split minutes and second into 2 arrs
        minutes += parseInt(a[0]); //sum all minutes
        seconds += parseInt(a[1]); // sum all second

        //get time for each module
        if(lessons[i].name.includes('[1x')) {
            moduleOneMinutes += parseInt(a[0]);
            moduleOneSeconds += parseInt(a[1]);
        } else if(lessons[i].name.includes('[2x')) {
            moduleTwoMinutes += parseInt(a[0]);
            moduleTwoSeconds += parseInt(a[1]);
        } else if(lessons[i].name.includes('[3x')) {
            moduleThreeMinutes += parseInt(a[0]);
            moduleThreeSeconds += parseInt(a[1]);
        }

    }

    moduleOneMinutes += Math.trunc(moduleOneSeconds/60);
    moduleOneHours += Math.trunc(moduleOneMinutes/60);
    moduleOneMinutes = moduleOneMinutes % 60;

    moduleTwoMinutes += Math.trunc(moduleTwoSeconds/60);
    moduleTwoHours += Math.trunc(moduleTwoMinutes/60);
    moduleTwoMinutes = moduleTwoMinutes % 60;

    moduleThreeMinutes += Math.trunc(moduleThreeSeconds/60);
    moduleThreeHours += Math.trunc(moduleThreeMinutes/60);
    moduleThreeMinutes = moduleThreeMinutes % 60;

    minutes += Math.trunc(seconds/60);
    hours += Math.trunc(minutes/60);
    minutes = minutes%60;

    moduleOnePercent = Math.round(((moduleOneHours+moduleOneMinutes/60)/hours)*100);
    moduleTwoPercent = Math.round(((moduleTwoHours+moduleTwoMinutes/60)/hours)*100);
    moduleThreePercent = Math.round(((moduleThreeHours+moduleThreeMinutes/60)/hours)*100);

    console.log(`Kurs Opanuj JavaScript trwa ${hours} godzin i ${minutes} minut.\n` +
    `Moduł Adama: ${moduleOneHours} godzin ${moduleOneMinutes} minut\n` +
    `Moduł Przemka: ${moduleTwoHours} godzin ${moduleTwoMinutes} minut\n` +
    `Moduł Marcina: ${moduleThreeHours} godzin ${moduleThreeMinutes} minunt\n` +
    `Moduł Adama procentowo: ${moduleOnePercent}%\n` +
    `Moduł Przemka procentowo: ${moduleTwoPercent}%\n` +
    `Moduł Marcina procentowo: ${moduleThreePercent}%\n`);
  }

//   function convertTime(h,m,s) {
//     m += Math.trunc(s/60);
//     h += Math.trunc(m/60);
//     m = m % 60;

//   }
  
  totalDuration();