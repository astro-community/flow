/** Iterates the given object and returns the value of the given function using each value. */
export function iterate <T>(
	iteratable: Iterable<T>,
	render?: ((value: T) => any)
): AsyncGenerator<any, void, any>
