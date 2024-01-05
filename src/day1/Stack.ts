type Node<T> = {
    val: T;
    prev?: Node<T>;
};
export default class Stack<T> {
    public length: number;
    private head?: Node<T>;
    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    push(item: T): void {
        let node = { val: item } as Node<T>;
        this.length++;
        if (!this.head) {
            this.head = node;
            return;
        }
        node.prev = this.head;
        this.head = node;
        return;
    }

    pop(): T | undefined {
        this.length = Math.max(0, this.length - 1);
        if (this.length === 0) {
            const head = this.head;
            this.head = undefined;
            return head?.val;
        }
        let temp = this.head as Node<T>;
        this.head = temp.prev;
        return temp?.val;
    }
    peek(): T | undefined {
        return this.head?.val;
    }
}
