# ❌ Bad Code

```javascript
function sum(){ return a+b; }
```

---

# 💡 Issues

1. **`ReferenceError` (Undefined Variables):** The variables `a` and `b` are neither defined as parameters in the
function signature nor declared within the function scope. This will crash the application with a `ReferenceError: a is
not defined` when called.
2. **Impurity (Global State Dependency):** If `a` and `b` exist in the global scope, the function relies on global
state. This makes the function "impure", unpredictable, difficult to test, and prone to side effects.

---

# ✅ Recommended Fix

Pass `a` and `b` as parameters to make the function pure and self-contained.

```javascript
function sum(a, b) {
return a + b;
}
```

---

# 🚀 Improvements

### 1. Modern ES6+ Arrow Function
For simple one-line utility functions, use arrow syntax for better readability and conciseness:
```javascript
const sum = (a, b) => a + b;
```

### 2. Default Parameters
Prevent `NaN` results if one of the arguments is missing by providing default values:
```javascript
const sum = (a = 0, b = 0) => a + b;
```

---

# 📝 Additional Notes

### Scalability (Summing Multiple Numbers)
If you want to make this function highly reusable, you can use the **rest parameter (`...`)** to sum any number of
arguments passed to it:

```javascript
const sum = (...numbers) => numbers.reduce((acc, current) => acc + current, 0);

// Usage:
sum(1, 2); // Returns 3
sum(1, 2, 3, 4); // Returns 10
sum(); // Returns 0 safely
```