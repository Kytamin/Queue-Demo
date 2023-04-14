export interface Basic<T> {
    enqueue(item:T) :void
    dequeue():void
    size(): number

}
