# Upgrading to Marko 5

## Step 0 - Ensure you're in a working state on the latest version of Marko 4

Before we start, you'll want to make sure that you are already on the latest `4.x` release of `marko`.

```bash
# Upgrade using yarn
yarn upgrade marko@^4
```

```bash
# Upgrade using npm
npm install marko@^4
```

> [!Warning]
> Do _not_ run `npm install marko` (without the `@^4`). This will put you on Marko 5 and we're not quite there yet.

> [!Tip]
> If upgrading from Marko 3 you may want to reference [this guide](https://marko-v4.github.io/docs/marko-4-upgrade/).

Run your application and tests to ensure your project is in a working state. There's little worse than finding an issue after you've started the upgrade process only to figure out the issue existed beforehand.

## Step 1 - Upgrade Marko & Dependencies

**TL;DR**: Paste & run this random shell script. It's safe. Trust us.

```bash
# Update Marko, and related ecosystem dependencies
npx -y npm-check-updates -u \
  marko \
  `# for webpack projects` \
  @marko/webpack \
  `# for lasso projects` \
  lasso lasso-marko @lasso/marko-taglib \
  `# for jest test runner` \
  @marko/jest \
  `# for projects with v3 widgets` \
  marko-widgets

# Install @marko/compat-v4 unless `marko-widgets` is already installed
grep -q "marko-widgets" package.json || { [[ -f yarn.lock ]] && yarn add @marko/compat-v4 || npm install @marko/compat-v4; }
[[ -f yarn.lock ]] && npx -y yarn-deduplicate && yarn
[[ -f yarn.lock ]] || npm i
```

This script automates the following steps for you:

- Install the compat package
  - `marko-widgets` if using Marko 3's Widgets
  - `@marko/compat-v4` if not using Widgets
- Update `marko` to 5.x
- Update any ecosystem packages used by your app (lasso, webpack, jest, etc)

> [!Note]
> Check your `package.json`. If you have other third-party Marko packages not covered by the script, you may need to update them as well.

Your application should continue to work. Run your tests to ensure everything is working. Congratulations! You've upgraded to Marko 5.
