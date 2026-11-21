---
type: bug
impact: low
effort: med
site: packages/compiler/src/babel-utils/tags.ts › resolveMarkoFile
---

# Record a load through another template as the current compile's read

`loadFileForImport(file, request)` keeps what it loads in `file`'s loaded templates and lists it in `file.metadata.marko.analyzedTags`, whichever template `file` is. When a compile loads through a template already analyzed (`resolveRegisteredExport` in `packages/runtime-tags/src/translator/util/module-registrations.ts` follows a re-export chain through each child it reaches), the load lands on that cached child: its `analyzedTags`, the templates its analysis loaded (which a page entry walks), and the files `hasStaleDependency` checks for it then depend on which templates were compiled first. The read belongs to the compile doing it (`getFile()`), which goes stale for it directly rather than through the child.

Check: in a project where `template.marko` imports `{ shout }` from `tags/greetings.marko`, which holds only `export { shout } from "./greeting.marko"`, compile `tags/greetings.marko` (html) alone and its `meta.analyzedTags` is unset; compile `template.marko` first with the same cache and it lists `tags/greeting.marko`.
