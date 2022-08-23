/** Returns whether the given value is iteratble. */
export function isIterable<T>(value: T): T extends Iterable<T> ? true : false

/** Returns the given value as a normalized generator. */
export function getNormalizedGenerator<T>(value: T): (
	<T>(value: T) => AsyncGenerator<string, void, void>
)
