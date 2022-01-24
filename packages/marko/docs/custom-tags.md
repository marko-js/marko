# Custom tags

Custom tags allow you to break up your application UI into encapsulated, reusable components.

## Your first custom tag

Let's say we have a page with the following content:

_page.marko_

```marko
<!doctype html>
<html>
<body>
    <h1>Hello World!</h1>
</body>
</html>
```

However, this page is getting pretty complex and unmaintainable. Let's split out the content into a separate component. To do this, we'll create a `components/` folder and inside it a `hello.marko` file:

_components/hello.marko_

```marko
<h1>Hello World!</h1>
```

Marko [automatically discovers](#how-tags-are-discovered) `.marko` files under a `components/` directory, so we can now use the `<hello>` tag in our page:

_page.marko_

```marko
<!doctype html>
<html>
<body>
    <hello/>
</body>
</html>
```

Now this `<hello>` tag can be used multiple times, and even on multiple pages. But what if we don't only want to say hello to the world? Let's pass some attributes.

_page.marko_

```marko
<!doctype html>
<html>
<body>
    <hello name="World"/>
</body>
</html>
```

The component will receive these attributes as `input`:

_components/hello.marko_

```marko
<h1>Hello ${input.name}!</h1>
```

Nice.

## How tags are discovered

Marko discovers components relative to the `.marko` file where a custom tag is used. From this file, Marko walks up directories until it finds a `components/` folder which contains a component matching the name of the custom tag. If it reaches the project root without finding anything, it will then check installed packages for the component.

Let's take a look at an example directory structure to better understand this:

```dir
components/
    app-header.marko
    app-footer.marko
pages/
    about/
        components/
            team-members.marko
        page.marko
    home/
        components/
            home-banner.marko
        page.marko
```

The file `pages/home/page.marko` can use the following tags:

- `<app-header>`
- `<app-footer>`
- `<home-banner>`

And the file `pages/about/page.marko` can use the following tags:

- `<app-header>`
- `<app-footer>`
- `<team-members>`

The home page can't see `<team-members>` and the about page can't see `<home-banner>`. By using nested `component/` directories, we've scoped our page-specific components to their respective pages.

## Tag directories

In addition to a Marko template, the children of `components/` can be a directory with an `index.marko` template:

```dir
components/
    app-header/
        index.marko
        logo.png
        style.css
    app-footer/
        index.marko
```

Or a directory with a template whose name matches its parent directory:

```dir
components/
    app-header/
        app-header.marko
        app-header.style.css
        logo.png
    app-footer/
        app-footer.marko
```

This allows you to create components that have other files associated with them and keep those files together in the directory structure.

> **ProTip:**
> You can take advantage of nested `components/` directories to create "subcomponents" that are only available to the component that contains them.
>
> ```dir
> components/
>     app-header/
>         components/
>             navigation.marko
>             user-info.marko
>         app-header.marko
>     app-footer/
>         app-footer.marko
> ```

## Using tags from npm

To use [tags from npm](https://www.npmjs.com/search?q=keywords%3Amarko%20components), ensure that the package is installed and listed in your `package.json` dependencies:

```
npm install --save @marko-tags/match-media
```

Marko discover tags from packages defined in your `package.json`, so you can start using them right away:

```marko
<div>
    <match-media|{ mobile }| mobile="max-width:30em">
        <!-- nice -->
    </match-media>
</div>
```

## Publishing tags to npm

We saw above that tags from npm are automatically discovered. In order to make this work, your package must include a [`marko.json`](./marko-json.md) at the root.

_marko.json_

```json
{
  "tags-dir": "./dist/components"
}
```

This example file tells Marko to expose all components directly under the `dist/components/` directory to the application using your package.

We recommend adding the `marko` and `components` keywords to your `package.json` so others can find your components. Then `npm publish`!

# Macros

The [`<macro>`](./core-tags.md#macro) tag allows you to create custom tags in the same file that they are used in.

```marko
<macro|{ name }| name="welcome-message">
    <h1>Hello ${name}!</h1>
</macro>

<welcome-message name="Patrick"/>
<welcome-message name="Austin"/>
```

# From Variables

If no other tag would be discovered Marko will check for an in scope variable that matches the tag name.

```marko
import SomeTag from "./somewhere.marko"

$ const { renderBody } = input;
$ const MyTag = input.href ? "a" : "button";

<SomeTag/>
<MyTag/>
<renderBody/>
```
