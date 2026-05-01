---
id: PersistedStorage
title: PersistedStorage
---

# Interface: PersistedStorage\<TState, TSelected\>

Defined in: [storage-persister.ts:4](https://github.com/TanStack/persist/blob/main/packages/persist/src/storage-persister.ts#L4)

## Type Parameters

### TState

`TState`

### TSelected

`TSelected` *extends* `Partial`\<`TState`\> = `TState`

## Properties

### buster?

```ts
optional buster: string;
```

Defined in: [storage-persister.ts:8](https://github.com/TanStack/persist/blob/main/packages/persist/src/storage-persister.ts#L8)

***

### state

```ts
state: TSelected | undefined;
```

Defined in: [storage-persister.ts:9](https://github.com/TanStack/persist/blob/main/packages/persist/src/storage-persister.ts#L9)

***

### timestamp

```ts
timestamp: number;
```

Defined in: [storage-persister.ts:10](https://github.com/TanStack/persist/blob/main/packages/persist/src/storage-persister.ts#L10)
