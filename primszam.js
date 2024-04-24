export function primSzam(szam){
    let i = 2;
    while (i <= Math.sqrt(szam) && szam % i !== 0){
        i++;
    }
    return i < Math.sqrt(szam);
}
