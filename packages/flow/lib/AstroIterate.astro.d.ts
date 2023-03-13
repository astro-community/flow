import { IterableOrRecord, IterableOrRecordCallback } from './shared.d'

export default function For<T extends IterableOrRecord<unknown>>(props: Props<T>): any

export interface Props<T extends IterableOrRecord<unknown>> {
	of?: T
	children?: IterableOrRecordCallback<T>
}
