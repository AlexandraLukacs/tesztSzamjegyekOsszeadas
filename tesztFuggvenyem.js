import { szamjegyekOsszege } from "./fuggvenyem.js";

export function tesztSzamjegyekOsszege(){
    const tesztESETEK = [
        {
            szam: 312,
            vart: 6
        },
        {
            szam: 532,
            vart: 10
        },
        {
            szam: -24,
            vart: 0
        },
        {
            /* Szorgalmi: működjön törtre is a program */
            szam: 24.5,
            vart: 11
        },
        {
            szam: 104,
            vart: 5
        },
        {
            szam: 6432645,
            vart: 30
        },
        {
            szam: 0,
            vart: 0
        },
        {
            szam: 1,
            vart: 1
        },
        {
            szam: 2,
            vart: 2
        },
        {
            szam: 3,
            vart: 3
        },
        {
            szam: 4,
            vart: 4
        },
        {
            szam: 5,
            vart: 5
        },
        {
            szam: 6,
            vart: 6
        },
        {
            szam: 7,
            vart: 7
        },
        {
            szam: 8,
            vart: 8
        },
        {
            szam: 9,
            vart: 9
        },
        {
            szam: 1023456789,
            vart: 45
        }
    ];
    //let kapott = osszeg;
    tesztESETEK.forEach(function(teszt) {
        console.assert(teszt.vart === szamjegyekOsszege(teszt.szam),
        `szam: ${teszt.szam} vart: ${teszt.vart} kapott: ${szamjegyekOsszege(teszt.szam)} Hiba!`)
        
    });
}