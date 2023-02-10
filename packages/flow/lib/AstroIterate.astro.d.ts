import { GetAppropriateFunctionBasedOnWhetherOrNotAGeneratorOfAnIterableWithTheForEachMethodIsPassed } from "./shared"

export default function For<T extends Iterable<unknown>>(props: Props<T>): any

export type Props<T extends Iterable<unknown>> =  {
	of: T
	children:GetAppropriateFunctionBasedOnWhetherOrNotAGeneratorOfAnIterableWithTheForEachMethodIsPassed<T>
}

// type IterableValue<T> = T extends Array<infer P>
// 	? P
// : T extends AsyncGenerator<infer P, unknown, unknown>
// 	? P
// : T extends Generator<infer P, unknown, unknown>
// 	? P
// : never
