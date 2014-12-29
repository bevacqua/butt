# butt

> If only there was a way to pass along a callback with exactly as many arguments as necessary.

You know how you like chaining asynchronous function calls **but** sometimes weird arguments get in the way of your waterfall series with unpredictable arguments?

How about attempting to `parseInt` in a `map` only to find out `map` spews three arguments? What if you could CONTROL THIS nonsense?

# NO MORE!

```shell
npm install butt --save
```

# Usage

Functional arguments giving you headaches?

##### Before

```js
n.map(function (val) {
  return parseInt(val);
});
```

##### After

```js
n.map(butt(parseInt, 1));
```

Works on `.forEach` or any functional array method as well! Classy.

##### Before

```js
n.forEach(function (val) {
  console.log(val);
});
```

##### After

```js
n.forEach(butt(console.log, 1));
```

Mongoose being weird?

##### Before

```js
async.waterfall([
  function (next) {
    new User(model).save(function (err) {
      next(err);
    });
  },
  function (next) {
    // MOAR CODE
  }
])
```

##### After

```js
async.waterfall([
  function (next) {
    new User(model).save(butt(next, 1));
  },
  function (next) {
    // MOAR CODE
  }
])
```

# Why?

It had to be done. It is known.

# License

MIT
