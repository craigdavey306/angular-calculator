export class StackService<T> {
  private stack: Array<T> = [];

  count(): number {
    return this.stack.length;
  }

  reset(): void {
    this.stack = [];
  }

  isEmpty(): boolean {
    return this.count() === 0;
  }

  push(item: T): void {
    this.stack.push(item);
  }

  pop(): T | null {
    if (this.isEmpty()) return null;

    return this.stack.pop()!;
  }
}
