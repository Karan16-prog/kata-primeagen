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
        let item = this.data.pop();
        if (this.length != 0) {
            this.length = this.length - 1;
        }
        return item;
    }
    peek(): T | undefined {
        return this.data[this.data.length - 1];
    }
}
