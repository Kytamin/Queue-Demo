"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
var Queue = /** @class */ (function () {
    function Queue() {
        this.container = [];
    }
    Queue.prototype.dequeue = function () {
        this.container.shift();
    };
    Queue.prototype.enqueue = function (item) {
        this.container.push(item);
    };
    Queue.prototype.size = function () {
        return this.container.length;
    };
    return Queue;
}());
exports.Queue = Queue;
