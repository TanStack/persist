---
id: AsyncPersister
title: AsyncPersister
---

Defined in: [async-persister.ts:11](https://github.com/TanStack/persist/blob/main/packages/persist/src/async-persister.ts#L11)

Abstract class that defines the contract for an asynchronous state persister.
An async persister is responsible for saving and loading state to a storage medium using asynchronous operations.

This is useful for scenarios where persistence involves asynchronous APIs, such as IndexedDB, remote storage, or custom async backends.

Implementations should provide methods to load, save, and clear persisted state for a given key.

See also: `Persister` for synchronous persister implementations.

## Type Parameters

### TState

`TState`

### TSelected

`TSelected` *extends* `Partial`\<`TState`\> = `TState`

## Constructors

### Constructor

```ts
new AsyncPersister<TState, TSelected>(key): AsyncPersister<TState, TSelected>;
```

Defined in: [async-persister.ts:15](https://github.com/TanStack/persist/blob/main/packages/persist/src/async-persister.ts#L15)

#### Parameters

##### key

`string`

#### Returns

`AsyncPersister`\<`TState`, `TSelected`\>

## Properties

### clearState()

```ts
abstract clearState: (useDefaultState?) => void;
```

Defined in: [async-persister.ts:19](https://github.com/TanStack/persist/blob/main/packages/persist/src/async-persister.ts#L19)

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

Defined in: [async-persister.ts:15](https://github.com/TanStack/persist/blob/main/packages/persist/src/async-persister.ts#L15)

***

### loadState()

```ts
abstract loadState: () => TSelected | undefined;
```

Defined in: [async-persister.ts:17](https://github.com/TanStack/persist/blob/main/packages/persist/src/async-persister.ts#L17)

#### Returns

`TSelected` \| `undefined`

***

### saveState()

```ts
abstract saveState: (state) => void;
```

Defined in: [async-persister.ts:18](https://github.com/TanStack/persist/blob/main/packages/persist/src/async-persister.ts#L18)

#### Parameters

##### state

`TState`

#### Returns

`void`
