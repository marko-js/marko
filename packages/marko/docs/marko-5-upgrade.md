# Upgrading to Marko 5

The following guide will help you get through the upgrade process quickly and smoothly. This guide covers upgrading from Marko 4. If you are upgrading to Marko 5 from a previous version follow those docs first. After any given step you should have a working application.

This means you should complete a step and get it merged back into master fairly quickly. You shouldn't need to have a `marko-5-upgrade` branch for your project that lives in limbo for a couple of weeks falling behind the other changes that are being merged into master.

If you do decide to pause and later jump in where you left off, be sure to repeat Step 0 first 😉.

## Step 0 - Ensure you're in a working state on the latest version of Marko 4

Before we start, you'll want to make sure that you are already on the latest `4.x` release of `marko`.

```bash
# Upgrade using npm
npm install marko@^4

# Or with yarn
yarn upgrade marko@^4
```

> **Warning**
> Do _not_ run `npm install marko` (without the `@^4`). This will put you on Marko 5 and we're not quite there yet.

Run your application and tests to ensure your project is in a working state. There's little worse than finding an issue after you've started the upgrade process only to figure out the issue existed beforehand.

## Step 1 - Upgrade dependencies

Before upgrading to Marko 5, it is recommended to make sure that your Marko-related dependencies are up-to-date. Many packages have versions that support both Marko 4 and Marko 5. If one of your dependencies doesn't have a version that supports both, you'll need to wait to upgrade it until you're upgrading Marko.

After upgrading, run your application and tests to ensure that everything is still working as intended. If there are any issues, please refer to the changelogs of the modules you just upgraded to see if you need to make any changes within your app to accommodate the new versions.

## Step 2 - Upgrade Marko

Phew! With all the prep out of the way we're finally ready to upgrade `marko`!

### Install Modules

Note that some features removed in Marko 4 do not log deprecations since they do not need to be resolved to get up and running with Marko 5. However for Marko 5 to support some of the features removed after Marko 4 you need to install a `compat` module.

There are currently two `compat` modules you can install, one which supports the `marko-widget`'s api from Marko@3 and one with just the compat needed for Marko@4 components.

**For apps with `marko-widgets` installed, add the following modules:**

```bash
# Upgrade using npm
npm install marko@^5 @marko/compiler marko-widgets@^8

# Or with yarn
yarn install marko@^5 @marko/compiler marko-widgets@^8
```

**For apps which were not using the Marko@3 compat layer, add the following modules:**

```bash
# Upgrade using npm
npm install marko@^5 @marko/compiler @marko/compat-v4

# Or with yarn
yarn install marko@^5 @marko/compiler @marko/compat-v4
```

### App entry updates

If you're bundling your server code (common with `webpack` setups), your entry will be your bundler config.
Otherwise it's probably something like `index.js` or `server.js` near your project root.

- Register your compat module globally so that any dependencies also run through the compat layer:

  ```js
  require("@marko/compiler").taglib.register("marko-widgets");
  ```

  > **Note**
  > if using `webpack` or `rollup` this line should also be added you your bundler config file

  > **Note**
  > if using `jest` you should pass the [`register` option](https://github.com/marko-js/jest#customizing-the-marko-compiler) which requires the latest version of `jest` and `@marko/jest`

- _If you're using `babel`_, Marko 5 picks up on your babel config which could change behavior. You may want to configure Marko to ignore your babel config:
  ```js
  require("@marko/compiler").configure({
    babelConfig: {
      babelrc: false,
      configFile: false,
    },
  });
  ```
  If you do this, you'll also want also want to pass the `babelConfig` option to your bundler plugin (`lasso-marko`, `@marko/webpack`, `@marko/rollup`)

### Submodule updates

A couple submodules no longer exist in Marko 5:

- _If you're using the require hook_, replace `marko/node-require`:
  ```diff
  - require('marko/node-require').install();
  + require('@marko/compiler/register');
  ```
- _If you're using `browser-refresh`_, including the runtime is no longer necessary:
  ```diff
  - require('marko/browser-refresh').enable();
  ```

## Step 3 - Optional, but recommended: deal with deprecations

Run your application and tests and ensure that there are no deprecation warnings logged to the console. If there are, you should follow the instructions in the deprecation messages to avoid the deprecated pattern and migrate to the recommended pattern.

Additionally, any deprecation warnings that start with `MIGRATION` are automatically migratable by [`marko migrate`](https://github.com/marko-js/cli/blob/master/packages/migrate/README.md). Most migrations are 100% safe and will run automatically. However, there are a few migrations which are considered unsafe: they may only get you 90% of the way there. These migrations will prompt and ask if you want to run the migration. It is highly recommended to run these only on a single component at a time and then finish the migration manually using the guide below so that your app is always in a working state.

> **Note**
> The [TagsAPI](https://dev.to/ryansolid/introducing-the-marko-tags-api-preview-37o4) is becoming stable soon. Deprecations related to `marko-widgets`, might be worth holding off on rather than migrating these widgets to the Class Components API.
