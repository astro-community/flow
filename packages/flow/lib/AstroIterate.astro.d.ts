export default function For<T>(props: Props<T>): any

export type Props<T> = {
	[K in keyof T]: K extends 'children' ? unknown : T[K]
} & {
	children?: {
		(item: IterableValue<T[Exclude<keyof T, 'children'>]>): any
	}
}

type IterableValue<T> = T extends Array<infer P>
	? P
: T extends AsyncGenerator<infer P, unknown, unknown>
	? P
: T extends Generator<infer P, unknown, unknown>
	? P
: never
