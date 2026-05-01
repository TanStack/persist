---
id: useStoragePersister
title: useStoragePersister
---

# Function: useStoragePersister()

```ts
function useStoragePersister<TState, TSelected>(options): StoragePersister<TState, TSelected>;
```

Defined in: [useStoragePersister.ts:5](https://github.com/TanStack/persist/blob/main/packages/react-persist/src/storage-persister/useStoragePersister.ts#L5)

## Type Parameters

### TState

`TState`

### TSelected

`TSelected` *extends* `Partial`\<`TState`\> = `TState`

## Parameters

### options

`StoragePersisterOptions`\<`TState`, `TSelected`\>

## Returns

`StoragePersister`\<`TState`, `TSelected`\>
