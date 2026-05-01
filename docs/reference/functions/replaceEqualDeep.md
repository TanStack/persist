---
id: replaceEqualDeep
title: replaceEqualDeep
---

# Function: replaceEqualDeep()

```ts
function replaceEqualDeep<T>(a, b): T;
```

Defined in: [compare.ts:6](https://github.com/TanStack/persist/blob/main/packages/persist/src/compare.ts#L6)

This function returns `a` if `b` is deeply equal.
If not, it will replace any deeply equal children of `b` with those of `a`.
This can be used for structural sharing between JSON values for example.

## Type Parameters

### T

`T`

## Parameters

### a

`unknown`

### b

`T`

## Returns

`T`
