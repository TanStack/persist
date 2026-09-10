---
id: Persister
title: Persister
---

Defined in: [persister.ts:27](https://github.com/TanStack/persist/blob/main/packages/persist/src/persister.ts#L27)

Abstract class that defines the contract for a state persister implementation.
A persister is responsible for loading and saving state to a storage medium.

## Example

```ts
class MyPersister extends Persister<MyState> {
  constructor() {
    super(key)
  }

  loadState(): MyState | undefined {
    // Load state from storage
    return state
  }

  saveState(, state: MyState): void {
    // Save state to storage
  }

  clearState(useDefaultState?: boolean): void {
    // Clear state from storage or set the default state if provided and specified to be used
  }
}
```

## Extended by

- [`StoragePersister`](../StoragePersister.md)

## Type Parameters

### TState

`TState`

### TSelected

`TSelected` *extends* `Partial`\<`TState`\> = `TState`

## Constructors

### Constructor

```ts
new Persister<TState, TSelected>(key): Persister<TState, TSelected>;
```

Defined in: [persister.ts:31](https://github.com/TanStack/persist/blob/main/packages/persist/src/persister.ts#L31)

#### Parameters

##### key

`string`

#### Returns

`Persister`\<`TState`, `TSelected`\>

## Properties

### clearState()

```ts
abstract clearState: (useDefaultState?) => void;
```

Defined in: [persister.ts:35](https://github.com/TanStack/persist/blob/main/packages/persist/src/persister.ts#L35)

#### Parameters

##### useDefaultState?

`boolean`

#### Returns

`void`

***

### key

```ts
readonly key: string;
```

Defined in: [persister.ts:31](https://github.com/TanStack/persist/blob/main/packages/persist/src/persister.ts#L31)

***

### loadState()

```ts
abstract loadState: () => TSelected | undefined;
```

Defined in: [persister.ts:33](https://github.com/TanStack/persist/blob/main/packages/persist/src/persister.ts#L33)

#### Returns

`TSelected` \| `undefined`

***

### saveState()

```ts
abstract saveState: (state) => void;
```

Defined in: [persister.ts:34](https://github.com/TanStack/persist/blob/main/packages/persist/src/persister.ts#L34)

#### Parameters

##### state

`TState`

#### Returns

`void`
