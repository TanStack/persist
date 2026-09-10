---
id: OptionalKeys
title: OptionalKeys
---

# Type Alias: OptionalKeys\<T, TKey\>

```ts
type OptionalKeys<T, TKey> = Omit<T, TKey> & Partial<Pick<T, TKey>>;
```

Defined in: [types.ts:12](https://github.com/TanStack/persist/blob/main/packages/persist/src/types.ts#L12)

## Type Parameters

### T

`T`

### TKey

`TKey` *extends* keyof `T`
