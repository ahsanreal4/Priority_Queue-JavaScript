class PriorityQueue {
  queue;

  constructor() {
    this.queue = [];
  }

  insert(element, priority) {
    const el = {
      data: element,
      priority,
    };
    this.queue.push(el);
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  dequeue() {
    if (this.isEmpty()) return;

    const queueClone = this.getPriorityWiseQueue();
    this.queue = [...queueClone];
    this.delete(0);
    return queueClone[0];
  }

  delete(index) {
    this.queue = this.queue.filter((element, i) => i !== index);
  }

  getPriorityWiseQueue() {
    if (this.isEmpty()) return [];

    const queueClone = [...this.queue];
    queueClone.sort((a, b) => {
      return a.priority < b.priority ? 1 : -1;
    });

    return queueClone;
  }

  printPriorityWise() {
    if (this.isEmpty()) return;

    const queueClone = this.getPriorityWiseQueue();
    for (const index in queueClone) {
      const element = queueClone[index];
      console.log(`Value = ${element.data}, Priority = ${element.priority}`);
    }
  }

  print() {
    for (const index in this.queue) {
      const element = this.queue[index];
      console.log(`Value = ${element.data}, Priority = ${element.priority}`);
    }
  }
}

const pq = new PriorityQueue();
pq.insert(1, 1);
pq.insert(1, 2);
pq.insert(1, 4);
pq.insert(1, 4);
pq.insert(1, 2);
pq.insert(1, 1);
pq.insert(1, 3);
pq.print();
console.log("=================================");
pq.dequeue();
pq.print();
pq.dequeue();
console.log("=================================");
pq.print();
console.log("=================================\nPrinting priority Wise");
pq.printPriorityWise();
console.log("=================================");
