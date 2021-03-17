// keep the types, change the value

// replace 'undefined' with any values in no particular order
// 1) a valid value and make them compile
// 2) try also make it fail

// ==========the commonplace=========
export const num: number = undefined;
export const str: string = undefined;

export const strs: string[] = undefined;
export const strs1: Array<string> = undefined;

export const maybeNumber: number | undefined | null = undefined;
export const empty: {} = undefined;











// =====strangeness==========

// uncomment this line and try make it compile
export const nah: never = undefined;

export const numerish: number | string = undefined;

export const digits: 1 | 2 = undefined;

export const wild: 3 | 'three' = undefined;

// maps
export const strDict: Record<string, string> = undefined;

export const numDict: Record<number, string> = undefined;











// =======mind bend===========

type Food = 'mango' | 'apple' | 'cashew';
type Activity = 'walk' | 'sleep' | 'belly rub';
type Sound = 'oink' | 'meuw';

// interface & type almost inter-exchangeable
interface EatAndSing { voice: Sound, food: Food[] };
interface Active { activity: Activity };

export const pet: EatAndSing & Active = { 'voice': 'meuw', 'food': [ 'apple' ], 'activity': 'belly rub' };

export const pureSinger: Pick<EatAndSing, 'voice' & 'voice'> = { 'voice': 'meuw' };

type Eater = { food: Exclude<Food, 'mango'>, name: string };

 // try different kinds of Food
export const eater: Eater = undefined;

// change the type below so the Piglet does not have activity 'walk'
type Piglet = { activity: Activity, food: Food[] };

export const piglet: Piglet = { activity: 'walk', food: [ 'mango' ] };








//====== madness==========
type Swap<T> = T extends string ? number : never;

// define this function
// type guards // unknown types
// first, replace return type 
export function swap<T extends string | number>(son: T): any {
    switch (typeof son) {
        // case 'string': return Number(son) as any;
        // default: return String(son) as any;
    }
}

// inspect the types of inni and issi?
export const inni = swap('1');
export const issi = swap(inni);