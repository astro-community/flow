
type ScalarValues = string | null | Record<string, unknown> | undefined | number | boolean

type FilledCase = {
    of: ScalarValues |  ((value:unknown)=> boolean);
    default?:never
}

type DefaultCase = {
    default:true;
    of?:never

    }
type Case =  FilledCase |  DefaultCase

export type Props = Case

export default function Case(props: Props): any
