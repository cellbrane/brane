export class React<T> {
  private handler: T

  constructor(value: T) {
    this.handler = value
  }

  get value(): T {
    return this.handler
  }

  set value(value: T) {
    this.handler = value
  }
}
