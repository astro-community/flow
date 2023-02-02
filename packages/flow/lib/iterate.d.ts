/** Iterates the given object and returns the value of the given function using each value. */
export function iterate<T>(
	iterable: Iterable<T>,
	render?: IterableRender<T>
): AsyncGenerator<any, void, any>

export interface IterableRender<T> {
	(value: T): any
}
