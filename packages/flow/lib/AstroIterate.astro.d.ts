import { RenderIterable } from './types.d'

export default function For<T>(props: Props<T> | Record<string, unknown>): any;

export interface Props<T> {
	of: T
	children: RenderIterable<T>
}
