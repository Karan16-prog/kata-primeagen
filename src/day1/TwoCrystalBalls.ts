export default function two_crystal_balls(breaks: boolean[]): number {
    let jpmAmount = Math.floor(Math.sqrt(breaks.length));
    let i = jpmAmount;
    for (; i < breaks.length; i += jpmAmount) {
        if (breaks[i]) {
            break;
        }
    }

    i -= jpmAmount;
    for (let j = i; j < i + jpmAmount; j++) {
        if (breaks[j]) {
            return j;
        }
    }
    return -1;
}
