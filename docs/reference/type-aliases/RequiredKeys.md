---
id: RequiredKeys
title: RequiredKeys
---

# Type Alias: RequiredKeys\<T, K\>

```ts
type RequiredKeys<T, K> = Required<Pick<T, K>> & Omit<T, K>;
```

Defined in: [types.ts:15](https://github.com/TanStack/persist/blob/main/packages/persist/src/types.ts#L15)

## Type Parameters

### T

`T` *extends* `object`

### K

`K` *extends* keyof `T`
