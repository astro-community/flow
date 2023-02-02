export interface RenderIterable<T> {
	(value: IterableValue<T>): unknown
}

export type IterableValue<T> = T extends Array<infer P>
	? P
: T extends AsyncGenerator<infer P, unknown, unknown>
	? P
: T extends Generator<infer P, unknown, unknown>
	? P
: never
