---
id: useLocalStorageState
title: useLocalStorageState
---

# Function: useLocalStorageState()

```ts
function useLocalStorageState<TValue, TSelected>(
   key, 
   initialValue, 
   options?): readonly [TValue | TSelected, Dispatch<SetStateAction<TValue | TSelected>>];
```

Defined in: [useStorageState.ts:35](https://github.com/TanStack/persist/blob/main/packages/react-persist/src/storage-persister/useStorageState.ts#L35)

A hook that persists state to localStorage and syncs it across tabs

## Type Parameters

### TValue

`TValue`

### TSelected

`TSelected` *extends* `Partial`\<`TValue`\> = `TValue`

## Parameters

### key

`string`

### initialValue

`TValue`

### options?

`Omit`\<`StoragePersisterOptions`\<`TValue`, `TSelected`\>, `"storage"` \| `"key"`\>

## Returns

readonly \[`TValue` \| `TSelected`, `Dispatch`\<`SetStateAction`\<`TValue` \| `TSelected`\>\>\]

## Example

```tsx
const [value, setValue] = useLocalStorageState('my-key', 'initial value')
```
