import type { RenderIterable } from './types.d'

export default function Iterate<T>(props: Props<T>): any;

export interface Props<T> {
	of: Iterable<T>;
	children: RenderIterable<T>
}
