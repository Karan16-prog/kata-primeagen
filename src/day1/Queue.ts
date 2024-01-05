type QNode<T> = {
    val: T;
    next?: QNode<T>;
};

export default class Queue<T> {
    public length: number;
    private head: QNode<T> | undefined;
    private tail: QNode<T> | undefined;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        let node = {
            val: item,
        } as QNode<T>;
        this.length++;
        if (!this.tail) {
            this.tail = this.head = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }

        return;
    }
    deque(): T | undefined {
        if (!this.head) {
            this.length = 0;
            this.head = this.tail = undefined;
            return undefined;
        }
        this.length--;
        let head = this.head;
        this.head = this.head.next;
        head.next = undefined;

        return head.val;
    }
    peek(): T | undefined {
        return this.head?.val;
    }
}
