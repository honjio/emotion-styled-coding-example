import { CSSObject } from "@emotion/styled";

export class ClassNamingHelper {
    private name: string;

    constructor(name?: string) {
        this.name = name ? name.split(' ')[0] : '&';
    }

    gen(label?: string) {
        return label ?  `${this.name}-gen-${label}` : this.name;
    }
}

type Alphabet = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j' | 'k' | 'l' | 'm' | 'n';

export type ShareStyle = Partial<
    Record<'root' | Alphabet, CSSObject>
>;