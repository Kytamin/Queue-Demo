import {Basic} from "./interface";
import {Queue} from "./Queue";

let queue1 = new Queue()
queue1.enqueue(1)
queue1.enqueue(2)
queue1.enqueue(3)
queue1.enqueue(4)
queue1.enqueue(5)
queue1.enqueue(6)
queue1.dequeue()
queue1.dequeue()
console.log(queue1.container)
console.log(queue1.size())