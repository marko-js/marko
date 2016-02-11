marko-async
=====================

The `marko-async` taglib provides support for the more efficient and simpler "Pull Model "approach to providing templates with view model data.

* __Push Model:__ Request all needed data upfront and wait for all of the data to be received before building the view model and then rendering the template.
* __Pull Model:__ Pass asynchronous data provider functions to template immediately start rendering the template. Let the template _pull_ the data needed during rendering.

The Pull Model approach to template rendering requires the use of a templating engine that supports asynchronous template rendering (e.g. [marko](https://github.com/marko-js/marko) and [dust](https://github.com/linkedin/dustjs)). This is because before rendering the template begins not all of data may have been fully retrieved. Parts of a template that depend on data that is not yet available are rendered asynchronously with the Pull Model approach.

# Push Model versus Pull Model

The problem with the traditional Push Model approach is that template rendering is delayed until _all_ data has been fully received. This reduces the time to first byte, and it also may result in the server sitting idle while waiting for data to be loaded from remote services. In addition, if certain data is no longer needed by a template then only the template needs to be modified and not the controller.

With the new Pull Model approach, template rendering begins immediately. In addition, fragments of the template that depend on data from data providers are rendered asynchronously and wait only on the associated data provider to complete. The template rendering will only be delayed for data that the template actually needs.

# Example

```javascript
var template = require('./template.marko');

module.exports = function(req, res) {
    var userId = req.query.userId;
    template.render({
            userProfileDataProvider: function(callback) {
                userProfileService.getUserProfile(userId, callback);
            }
        }, res);
}
```

```html
<async-fragment data-provider="data.userProfileDataProvider"
    var="userProfile">

    <ul>
        <li>
            First name: ${userProfile.firstName}
        </li>
        <li>
            Last name: ${userProfile.lastName}
        </li>
        <li>
            Email address: ${userProfile.email}
        </li>
    </ul>

</async-fragment>
```

# Out-of-order Flushing

The marko-async taglib also supports out-of-order flushing. Enabling out-of-order flushing requires two steps:

1. Add the `client-reorder` attribute to the `<async-fragment>` tag:<br>

```html
<async-fragment data-provider="data.userProfileDataProvider"
    var="userProfile"
    client-reorder="true">

    <ul>
        <li>
            First name: ${userProfile.firstName}
        </li>
        <li>
            Last name: ${userProfile.lastName}
        </li>
        <li>
            Email address: ${userProfile.email}
        </li>
    </ul>

</async-fragment>
```

2. Add the `<async-fragments>` to the end of the page.

If the `client-reorder` is `true` then a placeholder element will be rendered to the output instead of the final HTML for the async fragment. The async fragment will be instead rendered at the end of the page and client-side JavaScript code will be used to move the async fragment into the proper place in the DOM. The `<async-fragments>` will be where the out-of-order fragments are rendered before they are moved into place. If there are any out-of-order fragments then inline JavaScript code will be injected into the page at this location to move the DOM nodes into the proper place in the DOM.

# Taglib API

## `<async-fragment>`

Supported Attributes:

* __`arg`__ (expression): The argument object to provide to the data provider function.
* __`arg-<arg_name>`__ (string): An argument to add to the `arg` object provided to the data provider function.
* __`client-reorder`__ (boolean): If `true`, then the async fragments will be flushed in the order they complete and JavaScript running on the client will be used to move the async fragments into the proper HTML order in the DOM. Defaults to `false`.
* __`data-provider`__ (expression, required): The source of data for the async fragment. Must be a reference to one of the following:
    - `Function(callback)`
    - `Function(args, callback)`
    - `Promise`
    - Data
* __`error-message`__ (string): Message to output if the fragment errors out. Specifying this will prevent the rendering from aborting.
* __`name`__ (string): Name to assign to this async fragment. Used for debugging purposes as well as by the `show-after` attribute (see below).
* __`placeholder`__ (string): Placeholder text to show while waiting for an out-of-order fragment to complete. Only applicable if `client-reorder` is set to `true`.
* __`show-after`__ (string): When `client-reorder` is set to `true` then displaying this fragment will be delayed until the referenced async fragment is shown.
* __`timeout`__ (integer): Override the default timeout of 10 seconds with this param. Units are in
milliseconds so `timeout="40000"` would give a 40 second timeout.
* __`timeout-message`__ (string): Message to output if the fragment times out. Specifying this
will prevent the rendering from aborting.
* __`var`__: Variable name to use when consuming the data provided by the data provider

## `<async-fragment-placeholder>`

This tag can be used to control what text is shown while an out-of-order async fragment is waiting to be loaded. Only applicable if `client-reorder` is set to `true`.

Example:

```html
<async-fragment data-provider="data.userDataProvider" var="user" client-reorder>
    <async-fragment-placeholder>
        Loading user data...
    </async-fragment-placeholder>

    <ul>
        <li>First name: $user.firstName</li>
        <li>Last name: $user.lastName</li>
    </ul>

</async-fragment>
```

## `<async-fragment-error>`

This tag can be used to control what text is shown when an async fragment errors out.

Example:

```html
<async-fragment data-provider="data.userDataProvider" var="user">
    <async-fragment-error>
        An error occurred!
    </async-fragment-error>

    <ul>
        <li>First name: $user.firstName</li>
        <li>Last name: $user.lastName</li>
    </ul>
</async-fragment>
```

## `<async-fragment-timeout>`

This tag can be used to control what text is shown when an async fragment times out.

Example:

```html
<async-fragment data-provider="data.userDataProvider" var="user">
    <async-fragment-timeout>
    A timeout occurred!
    </async-fragment-timeout>

    <ul>
        <li>First name: $user.firstName</li>
        <li>Last name: $user.lastName</li>
    </ul>
</async-fragment>
```

## `<async-fragments>`

Container for all out-of-order async fragments. If any `<async-fragment>` have `client-reorder` set to true then this tag needs to be included in the page template (typically, right before the closing `</body>` tag).

Example:

```html
<!DOCTYPE html>
<html>
...
<body>
    ...
    <async-fragment ... client-reorder/>
    ...
    <async-fragments/>
</body>
</html>
```
