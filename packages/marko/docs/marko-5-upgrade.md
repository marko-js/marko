# Upgrading to Marko 5

The following guide will help you get through the upgrade process quickly and smoothly. This guide covers upgrading from Marko 4. If you are upgrading to Marko 5 from a previous version follow those docs first. After any given step you should have a working application.

This means you should complete a step and get it merged back into master fairly quickly. You shouldn't need to have a `marko-5-upgrade` branch for your project that lives in limbo for a couple of weeks falling behind the other changes that are being merged into master.

If you do decide to pause and later jump in where you left off, be sure to repeat Step 0 first 😉.

## Step 0 - Ensure you're in a working state

Run your application and tests to ensure your project is in a working state. There's little worse than finding an issue after you've started the upgrade process only to figure out the issue existed beforehand.

## Step 1 - Upgrade to latest 4.x

Before we start, you'll want to make sure that you are already on the latest `4.x` release of `marko`.

```
npm install marko@^4
```

or

```
yarn upgrade marko@^4
```

> Note: Do NOT run `npm install marko` (without the `@^4`). This will put you on Marko 5 and we're not quite there yet.

## Step 2 - Deal with deprecations

Run your application and tests and ensure that there are no deprecation warnings logged to the console. If there are, you should follow the instructions in the deprecation messages to avoid the deprecated pattern and migrate to the recommended pattern.

Additionally, any deprecation warnings that start with `MIGRATION` are automatically migratable by [`marko migrate`](https://github.com/marko-js/cli/blob/master/packages/migrate/README.md). Most migrations are 100% safe and will run automatically. However, there are a few migrations which are considered unsafe: they may only get you 90% of the way there. These migrations will prompt and ask if you want to run the migration. It is highly recommended to run these only on a single component at a time and then finish the migration manually using the guide below so that your app is always in a working state.

> **Note**: Deprecations related to `marko-widgets` are not necessary to address before upgrading.

## Step 3 - Upgrade dependencies

Before upgrading to Marko 5, it is recommended to make sure that your Marko-related dependencies are up-to-date. Many packages have versions that support both Marko 4 and Marko 5. If one of your dependencies doesn't have a version that supports both, you'll need to wait to upgrade it until you're upgrading Marko.

After upgrading, run your application and tests to ensure that everything is still working as intended. If there are any issues, please refer to the changelogs of the modules you just upgraded to see if you need to make any changes within your app to accommodate the new versions.

## Step 4 - Upgrade marko

Phew! With all the prep out of the way we're finally ready to upgrade `marko`!

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

> **Note**: Marko 5 has changed to using ES Modules. This means if you are using CJS modules to `require` a Marko template you will need to use the `.default` property exported. When using @marko/compat-v4 this is handled automatically.
>
> ```js
> const template = require("./template.marko");
> // …should become:
> const template = require("./template.marko").default;
>
> // If already using ES Modules, things remain the same:
> import template from "./template.marko";
> ```
