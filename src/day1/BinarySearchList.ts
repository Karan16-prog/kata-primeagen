export default function bs_list(haystack: number[], needle: number): boolean {
    let [l, r] = [0, haystack.length - 1];
    while (l <= r) {
        let m = Math.floor(l + (r - l) / 2);
        if (haystack[m] === needle) {
            return true;
        } else if (haystack[m] < needle) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }

    return false;
}
