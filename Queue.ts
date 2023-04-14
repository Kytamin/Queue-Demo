import {Basic} from "./interface";

export class Queue<T> implements Basic<T> {
    container: T[] = []
    dequeue(): void {
         this.container.shift()
    }

    enqueue(item: T): void {
        this.container.push(item)
    }

    size(): number {
        return this.container.length
    }

}