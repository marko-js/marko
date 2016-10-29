Async Taglib
=====================

> Note: This functionality used to be provided by the `<async-fragment>` tag
> which has been deprecated in favor of `<await>`.

# Example

**Pass a promise (or callback) to the template**:

```javascript
var template = require('./template.marko');
var request = require('request-promise');

module.exports = template.stream({
    userDataProvider: request.get('https://api.example.com/users/123')
});
```

**And await the data**:

```html
<await(user from data.userDataProvider)>
    <ul>
        <li>Name: ${user.firstName} ${user.lastName}</li>
        <li>Email address: ${user.email}</li>
    </ul>
</await>
```

# Philosophy

Marko includes a taglib that supports the more efficient and simpler "Pull Model "approach to providing templates with view model data.

* __Push Model:__ Request all needed data upfront and wait for all of the data to be received before building the view model and then rendering the template.
* __Pull Model:__ Pass asynchronous data provider functions to template immediately start rendering the template. Let the template _pull_ the data needed during rendering.

The Pull Model approach to template rendering requires the use of a templating engine that supports asynchronous template rendering (e.g. [marko](https://github.com/marko-js/marko) and [dust](https://github.com/linkedin/dustjs)). This is because before rendering the template begins not all of data may have been fully retrieved. Parts of a template that depend on data that is not yet available are rendered asynchronously with the Pull Model approach.

# Push Model versus Pull Model

The problem with the traditional Push Model approach is that template rendering is delayed until _all_ data has been fully received. This reduces the time to first byte, and it also may result in the server sitting idle while waiting for data to be loaded from remote services. In addition, if certain data is no longer needed by a template then only the template needs to be modified and not the controller.

With the new Pull Model approach, template rendering begins immediately. In addition, sections of the template that depend on data from data providers are rendered asynchronously and `await` only the associated data provider's completion. The template rendering will only be delayed for data that the template actually needs.


# Out-of-order Flushing

The marko-async taglib also supports out-of-order flushing. Enabling out-of-order flushing requires two steps:

1. Add the `client-reorder` attribute to the `<await>` tag:<br>

    ```html
    <await(user from data.userDataProvider) client-reorder=true>
        <ul>
            <li>Name: ${user.firstName} ${user.lastName}</li>
            <li>Email address: ${user.email}</li>
        </ul>
    </await>
    ```

2. Add the `<await-reorderer>` to the end of the page.

    ```html
    <html>
    ...
    <body>
        ...
        <await-reorderer/>
    </body>
    </html>
    ```

If `client-reorder` is `true` then a placeholder element will be rendered to the output instead of the final HTML for the await instance. The instance will be instead rendered at the end of the page and client-side JavaScript code will be used to move the await's contents into the proper place in the DOM. The `<await-reorderer>` will be where the out-of-order instances are rendered before they are moved into place. If there are any out-of-order instances then inline JavaScript code will be injected into the page at this location to move the DOM nodes into the proper place in the DOM.

# Events

You may listen to these events on the AsyncStream returned from a template's render
method or the wrapped stream if it is an event emitter (like node's http `res` stream).

- **`await:begin`** - emits an object with the keys `name`, `dataProvider`, and `clientReorder` when the `<await>` tag begins awaiting its promise/callback.
- **`await:beforeRender`** - emits the same object with the key `out` (the async output stream) added once the promise/callback has returned and the `<await>` tag is about to render its contents.
- **`await:error`** - emits the same object with the key `error` (the `Error`) added, if an error occurs
- **`await:timeout`** - emits the same object with the key `timedout` (a boolean set to `true`) added, if a timeout occurs
- **`await:finish`** - emits the same the key `finished` (a boolean set to `true`) added once the `<await>` tag finishes

# Taglib API

## `<await>`

**Required Argument:**
```js
<await(varName from data.provider)>
```

* __`var`__: Variable name to use when consuming the data provided by the data provider
* __`data provider`__: The source of data to await. Must be a reference to one of the following:
    - `Function(callback)`
    - `Function(args, callback)`
    - `Promise`
    - Data


**Supported Attributes:**

* __`arg`__ (expression): The argument object to provide to the data provider function.
* __`arg-<arg_name>`__ (string): An argument to add to the `arg` object provided to the data provider function.
* __`client-reorder`__ (boolean): If `true`, then the await instances will be flushed in the order they complete and JavaScript running on the client will be used to move the await instances into the proper HTML order in the DOM. Defaults to `false`.
* __`error-message`__ (string): Message to output if the data provider errors out.
Specifying this will prevent the rendering from aborting.
* __`name`__ (string): Name to assign to this await instance. Used for debugging purposes as well as by the `show-after` attribute (see below).
* __`placeholder`__ (string): Placeholder text to show while waiting for a data provider to complete. Only applicable if `client-reorder` is set to `true`.
* __`show-after`__ (string): When `client-reorder` is set to `true` then displaying this instance's content will be delayed until the referenced await instance is shown.
* __`timeout`__ (integer): Override the default timeout of 10 seconds with this param. Units are inmilliseconds so `timeout=40000` would give a 40 second timeout.
* __`timeout-message`__ (string): Message to output if the data provider times out. Specifying this will prevent the rendering from aborting.

## `<await-placeholder>`

This tag can be used to control what text is shown while an out-of-order await instance is waiting to be loaded. Only applicable if `client-reorder` is set to `true`.

Example:

```html
<await(user from data.userDataProvider) client-reorder>
    <await-placeholder>
        Loading user data...
    </await-placeholder>

    <ul>
        <li>First name: ${user.firstName}</li>
        <li>Last name: ${user.lastName}</li>
    </ul>

</await>
```

## `<await-error>`

This tag can be used to control what text is shown when a data provider errors out.

Example:

```html
<await(user from data.userDataProvider)>
    <await-error>
        An error occurred!
    </await-error>

    <ul>
        <li>First name: ${user.firstName}</li>
        <li>Last name: ${user.lastName}</li>
    </ul>
</await>
```

## `<await-timeout>`

This tag can be used to control what text is shown when a data provider times out.

Example:

```html
<await(user from data.userDataProvider)>
    <await-timeout>
        A timeout occurred!
    </await-timeout>

    <ul>
        <li>First name: ${user.firstName}</li>
        <li>Last name: ${user.lastName}</li>
    </ul>
</await>
```

## `<await-reorderer>`

Container for all out-of-order await instances. If any `<await>` tags have `client-reorder` set to true then this tag needs to be included in the page template (typically, right before the closing `</body>` tag).

Example:

```html
<!DOCTYPE html>
<html>
...
<body>
    ...
    <await-reorderer/>
</body>
</html>
```
