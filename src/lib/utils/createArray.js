   
export function createArray0(N) {
    return Array.from({length: N}, (_, index) => index );
}
 

export function createArray1(N) {
    return Array.from({length: N}, (_, index) => index + 1);
}