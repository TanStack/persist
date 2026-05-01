---
id: StoragePersister
title: StoragePersister
---

# Class: StoragePersister\<TState, TSelected\>

Defined in: [storage-persister.ts:143](https://github.com/TanStack/persist/blob/main/packages/persist/src/storage-persister.ts#L143)

A persister that saves state to browser local/session storage.

The persister can use either localStorage (persists across browser sessions) or
sessionStorage (cleared when browser tab/window closes). State is automatically
serialized to JSON when saving and deserialized when loading.

Optionally, a `buster` string can be provided to force cache busting by storing it in the value.
Optionally, a `maxAge` (in ms) can be provided to expire the stored state after a certain duration.
Optionally, callbacks can be provided to run after state is saved or loaded.

## Example

```ts
const persister = new StoragePersister({
  key: 'my-rate-limiter', // required
  storage: window.localStorage,
  buster: 'v2',
  maxAge: 1000 * 60 * 60, // 1 hour
  stateTransform: (state) => ({
    // Only persist specific parts of the state
    count: state.count,
    lastReset: state.lastReset,
    // Exclude sensitive or temporary data
  }),
  onSaveState: (key, state) => console.log('State saved:', key, state),
  onLoadState: (key, state) => console.log('State loaded:', key, state),
  onLoadStateError: (key, error) => console.error('Error loading state:', key, error),
  onSaveStateError: (key, error) => console.error('Error saving state:', key, error)
})
```

## Extends

- [`Persister`](../Persister.md)\<`TState`, `TSelected`\>

## Type Parameters

### TState

`TState`

### TSelected

`TSelected` *extends* `Partial`\<`TState`\> = `TState`

## Constructors

### Constructor

```ts
new StoragePersister<TState, TSelected>(initialOptions): StoragePersister<TState, TSelected>;
```

Defined in: [storage-persister.ts:149](https://github.com/TanStack/persist/blob/main/packages/persist/src/storage-persister.ts#L149)

#### Parameters

##### initialOptions

[`StoragePersisterOptions`](../../interfaces/StoragePersisterOptions.md)\<`TState`, `TSelected`\>

#### Returns

`StoragePersister`\<`TState`, `TSelected`\>

#### Overrides

[`Persister`](../Persister.md).[`constructor`](../Persister.md#constructor)

## Properties

### key

```ts
readonly key: string;
```

Defined in: [persister.ts:31](https://github.com/TanStack/persist/blob/main/packages/persist/src/persister.ts#L31)

#### Inherited from

[`Persister`](../Persister.md).[`key`](../Persister.md#key)

***

### options

```ts
options: StoragePersisterOptions<TState, TSelected> & Required<Pick<Partial<StoragePersisterOptions<any, any>>, "deserializer" | "serializer" | "storage">> & Omit<Partial<StoragePersisterOptions<any, any>>, "deserializer" | "serializer" | "storage">;
```

Defined in: [storage-persister.ts:147](https://github.com/TanStack/persist/blob/main/packages/persist/src/storage-persister.ts#L147)

## Methods

### clearState()

```ts
clearState(useDefaultState): void;
```

Defined in: [storage-persister.ts:258](https://github.com/TanStack/persist/blob/main/packages/persist/src/storage-persister.ts#L258)

Clears the state from storage or sets the default state if provided and specified to be used

#### Parameters

##### useDefaultState

`boolean` = `false`

#### Returns

`void`

#### Overrides

```ts
Persister.clearState
```

***

### loadState()

```ts
loadState(): TSelected | undefined;
```

Defined in: [storage-persister.ts:193](https://github.com/TanStack/persist/blob/main/packages/persist/src/storage-persister.ts#L193)

Loads the state from storage

#### Returns

`TSelected` \| `undefined`

#### Overrides

```ts
Persister.loadState
```

***

### saveState()

```ts
saveState(state): void;
```

Defined in: [storage-persister.ts:169](https://github.com/TanStack/persist/blob/main/packages/persist/src/storage-persister.ts#L169)

Saves the state to storage

#### Parameters

##### state

`TState` | `TSelected`

#### Returns

`void`

#### Overrides

```ts
Persister.saveState
```

***

### setOptions()

```ts
setOptions(newOptions): void;
```

Defined in: [storage-persister.ts:160](https://github.com/TanStack/persist/blob/main/packages/persist/src/storage-persister.ts#L160)

Updates the persister options

#### Parameters

##### newOptions

`Partial`\<[`StoragePersisterOptions`](../../interfaces/StoragePersisterOptions.md)\<`TState`, `TSelected`\>\>

#### Returns

`void`

***

### subscribeToStorage()

```ts
subscribeToStorage(): void;
```

Defined in: [storage-persister.ts:245](https://github.com/TanStack/persist/blob/main/packages/persist/src/storage-persister.ts#L245)

#### Returns

`void`

***

### unsubscribeFromStorage()

```ts
unsubscribeFromStorage(): void;
```

Defined in: [storage-persister.ts:250](https://github.com/TanStack/persist/blob/main/packages/persist/src/storage-persister.ts#L250)

#### Returns

`void`
