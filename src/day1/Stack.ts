export default class Stack<T> {
    public length: number;
    data: T[];

    constructor() {
        this.data = [];
        this.length = 0;
    }

    push(item: T): void {
        this.length += 1;
        this.data.push(item);
    }
    pop(): T | undefined {
        if (this.length > 0) {
            this.length -= 1;
            return this.data.pop();
        } else {
            return undefined;
        }
    }
    peek(): T | undefined {
        return this.data[this.length];
    }
}
