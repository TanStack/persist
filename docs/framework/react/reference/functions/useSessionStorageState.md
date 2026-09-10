---
id: useSessionStorageState
title: useSessionStorageState
---

```ts
function useSessionStorageState<TValue, TSelected>(
   key, 
   initialValue, 
   options?): readonly [TValue | TSelected, Dispatch<SetStateAction<TValue | TSelected>>];
```

Defined in: [useStorageState.ts:58](https://github.com/TanStack/persist/blob/main/packages/react-persist/src/storage-persister/useStorageState.ts#L58)

A hook that persists state to sessionStorage and syncs it across tabs

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
const [value, setValue] = useSessionStorageState('my-key', 'initial value')
```
