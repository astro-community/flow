type ScalarValues = string | number | bigint | boolean | symbol | null;

interface HasForEachMethod {
	forEach(callbackfn: (...args: Array<unknown>) => void, thisArg?: unknown): void;
}
interface FilledCase<T extends ScalarValues> {
	of: T | ((value: T) => boolean);
	default?: never;
}
interface DefaultCase {
	of?: never;
	default: true;
}

type Case<T extends ScalarValues> = FilledCase<T> | DefaultCase;

declare function For<T extends HasForEachMethod>(props: {
	of: T;
	children: Parameters<T['forEach']>[0];
}): string;

declare function Switch<T extends ScalarValues>(props: { of: T }): string;

declare function Case<T extends ScalarValues>(props: Case<T>): string;

declare function When(props: Record<string, unknown>): string;
declare function iterate<T extends HasForEachMethod>(
	iterable: T,
	callbackfn: Parameters<T['forEach']>[0]
): AsyncGenerator<unknown, void, unknown>;

export { For, Switch, When, Case, iterate };
