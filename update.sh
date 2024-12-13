mkdir -p ./packages/marko/translator
git mv ./packages/translator-default/src ./packages/marko/translator/src
git mv ./packages/translator-default/index.d.ts ./packages/marko/translator/src/index.d.ts
git mv ./packages/translator-default/package.json ./packages/marko/translator/src/package.json
git mv ./packages/translator-default/test ./packages/marko/translator/test
git rm -r ./packages/translator-default
git mv ./packages/translator-tags/tag-types ./packages/runtime-tags/tag-types
git mv ./packages/translator-tags/src ./packages/runtime-tags/src/translator
git rm -r ./packages/translator-tags