declare class React<T> {
    private handler;
    constructor(value: T);
    get value(): T;
    set value(value: T);
}

export { React };
