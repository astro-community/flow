import type {
	IterableOrRecord,
	IterableOrRecordCallback,
} from './shared.d'

/** Iterates the given object and returns the value of the given function using each value. */
declare function iterate<V, T extends IterableOrRecord<V>, U extends IterableOrRecordCallback<T>>(
	iterable: T,
	generator: U
): AsyncGenerator<ReturnType<U>, void, unknown>

export {
	iterate as default,
	iterate
}
