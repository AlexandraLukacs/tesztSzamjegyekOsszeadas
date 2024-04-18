export function szamjegyekOsszege(szam){
    let osszeg = 0;
    while(szam > 0){
        let maradek = szam % 10;
        osszeg = osszeg + maradek;
        szam = Math.floor(szam / 10);
    }
    return osszeg;
}