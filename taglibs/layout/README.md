marko-layout
============

This module provides the builtin `layout` taglib for Marko. The `layout` taglib provides support for separating out an HTML layout from content. A layout a just a normal Marko template with placeholders that allow for additional content to be provided by another template.

# Example

Example usage of of the `layout` taglib is shown in the sample code below:

_default-layout.marko:_

```xml
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title><layout-placeholder name="title"/></title>
</head>
<body>
    <h1 if="data.showHeader !== false">
        <layout-placeholder name="title"/>
    </h1>
    <p>
        <layout-placeholder name="body"/>
    </p>
    <div>
        <layout-placeholder name="footer">
            Default Footer
        </layout-placeholder>
    </div>
</body>
</html>
```

_Usage of `default-layout.marko`:_

```xml
<layout-use template="./default-layout.marko" show-header="$true">
    <layout-put into="title">My Page</layout-put>
    <layout-put into="body">BODY CONTENT</layout-put>
</layout-use>
```

# Defining a layout

A layout is just a standard Marko template with special `<layout-placeholder>` tags.

## `<layout-placeholder>`

Supported attributes:

- **name** - The name to assign to the placeholder (required)

Each `<layout-placeholder>` tag should be assigned a name using the `name` attribute.

Each placeholder can have default content that is shown if no content for the placeholder is provided by the caller. The default content (if any) should be provided as nested content as shown below:

```xml
<layout-placeholder name="footer">
    This is the default content for the "footer" placeholder. If
    no "footer" content is provided by the caller then this content will
    be rendered.
</layout-placeholder>
```

The user of a layout template can provide content for a placeholder using the `<layout-put>` tag (described later).

# Using a Layout

## `<layout-use>`

The `<layout-use>` tag is used to render a layout template with content being provided by the caller.

Supported attributes:

- **template** - The path to the layout template or a JavaScript expression that resolves to a loaded template instance.
- Any remaining attributes can be used to provide additional data to the layout template (described later)

Example:

```xml
<layout-use template="./default-layout.marko" show-header="$true">
    ...
</layout-use>
```

## `<layout-put>`

The `<layout-put>` tag is used to provide layout content.

Supported attributes:

- **into** (required) - The name to of the placeholder that the content should replace
- **value** (optional) - The content that should be used. If not provided the layout content for the corresponding placeholder should be provided as nested content.

If nested content is provided then it will be used the content for the corresponding placeholder.

Example usage:

```xml
<layout-put into="title">My Page</layout-put>
```

Alternatively, the content can be provided using the `value` attribute as shown below:

```xml
<layout-put into="title" value="My Page"/>
```

# Layout Data

Additional data can be provided to a layout template by the caller. Data is separate from content and be used to control how the layout renders. Layout data will be accessible as properties in the standard `data` variable. Any additional attributes other than the "template" attribute that are provided to the `<layout-use>` tag are used to pass additional data to a layout template.

The example below shows a `showHeader` option can be passed to a layout template to control how the header content renders:

_default-layout.marko:_

```xml
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title><layout-placeholder name="title"/></title>
</head>
<body>
    <h1 if="data.showHeader !== false">
        <layout-placeholder name="title"/>
    </h1>
    ...
</body>
</html>
```

_Usage of `default-layout.marko`:_

```xml
<layout-use template="./default-layout.marko" show-header="$true">
    ...
</layout-use>
```

_NOTE: All data attributes will be de-hyphenated and converted to camel case (e.g., `show-header` will be accessible via the `showHeader` property on the `data` object)._
