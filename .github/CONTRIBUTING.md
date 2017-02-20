# Contribution tips and guidelines

:+1::tada: We're excited you want to contribute! Read on! :tada::+1:

[Pull requests](#pull-requests-are-always-welcome) &bull;
[Tackling issues](#tackling-an-existing-issue) &bull;
[Reporting bugs](#reporting-bugs-and-other-issues) &bull;
[Maintainers](#maintainers) &bull;
[Labels](#labels)

## Pull requests are always welcome

Not sure if that typo is worth a pull request? Found a bug and know how to fix it? Do it! We will appreciate it. Any significant improvement should be documented as [a GitHub issue](https://github.com/marko-js/marko/issues) before anybody starts working on it.

We are always thrilled to receive pull requests. We do our best to process them quickly. If your pull request is not accepted on the first try, don't get discouraged! We'll work with you to come to an acceptable solution.

If you're new to GitHub or open source you can check out this [free course](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github) on how to contribute to an open source project.

_Disclaimer: Contributions via GitHub pull requests are gladly accepted from their original author. Along with any pull requests, please state that the contribution is your original work and that you license the work to the project under the project's open source license. Whether or not you state this explicitly, by submitting any copyrighted material via pull request, email, or other means you agree to license the material under the project's open source license and warrant that you have the legal authority to do so._

### Running tests

Before submitting your PR, make sure that all new and previous tests pass and that [coverage](https://coveralls.io/github/marko-js/marko?branch=master) has not decreased:
```
npm run test-coverage
```

### Adding tests

Marko makes use of a directory based test structure.  A simplified view is below:

<pre>
<a href="../test/">test/</a>
 ⤷ <a href="../test/autotests/">autotests/</a>
    ⤷ <a href="../test/autotests/render/">render/</a>
      ⤷ attrs/
      ⤷ <a href="../test/autotests/render/for-tag/">for-tag/</a>
        ⤷ <a href="../test/autotests/render/for-tag/expected.html">expected.html</a>
        ⤷ <a href="../test/autotests/render/for-tag/template.marko">template.marko</a>
        ⤷ <a href="../test/autotests/render/for-tag/test.js">test.js</a>
      ⤷ nested-tags/
      ⤷ while-tag/
 ⤷ <a href="../test/render-test.js">render-test.js</a>
</pre>
The `render-test.js` file will run and read all the directories under `autotests/render` and for each directory (`attrs`, `for-tag`, etc.) it will run `test.js`, render `template.marko` and assert that it is equivalent to the content of `expected.html`.

In most cases you'll simply copy a directory and modify it to add a new test.  And we're here to help if you have any questions or need to do something fancy.

## Tackling an existing issue

Comment on the issue and let us know you'd like to tackle it. We'll assign you to the issue so that we don't duplicate effort.  

If for some reason you aren't going to be able to complete the work, let us know as soon as you can so we can open it up for another developer to work on.

Here's some to get started with:

- [bite-sized](https://github.com/marko-js/marko/issues?utf8=%E2%9C%93&q=is%3Aissue%20is%3Aopen%20label%3Adifficulty%3Abite-sized%20no%3Aassignee) issues: great for new contributors
- [help-wanted](https://github.com/marko-js/marko/issues?utf8=%E2%9C%93&q=is%3Aissue%20is%3Aopen%20label%3Astatus%3Ahelp-wanted%20no%3Aassignee) issues: won't be tackled in the near future by the maintainers... we need your help!
- [un-assigned](https://github.com/marko-js/marko/issues?utf8=%E2%9C%93&q=is%3Aissue%20is%3Aopen%20no%3Aassignee%20) issues: open issues that no one has claimed... yet

## Reporting bugs and other issues

A great way to contribute to the project is to send a detailed report when you encounter an issue.

Check that [our issue database](https://github.com/marko-js/marko/issues) doesn't already include that problem or suggestion before submitting an issue. If you find a match, you can use the "subscribe" button to get notified on updates. Rather than leaving a "+1" or "I have this too" comment, you can add a  [reaction](https://github.com/blog/2119-add-reactions-to-pull-requests-issues-and-comments)  to let us know that this is also affecting you without cluttering the conversation. However, if you have ways to reproduce the issue or have additional information that may help resolving the issue, please leave a comment.

We have an [ISSUE_TEMPLATE](ISSUE_TEMPLATE.md) that will populate your textarea  when you go to open an issue.  Use the relevant section and remove the rest.

Please provide as much detail as possible.

### Reporting security issues

If you discover a security issue, please **DO NOT** file a public issue, instead send your report [privately](https://gitter.im/patrick-steele-idem).

Security reports are greatly appreciated and we will publicly thank you for it. We currently do not offer a paid security bounty program.

# Maintainers

* [Patrick Steele-Idem](https://github.com/patrick-steele-idem) (Twitter: [@psteeleidem](http://twitter.com/psteeleidem))
* [Phillip Gates-Idem](https://github.com/philidem/) (Twitter: [@philidem](https://twitter.com/philidem))
* [Michael Rawlings](https://github.com/mlrawlings) (Twitter: [@mlrawlings](https://twitter.com/mlrawlings))
* [Martin Aberer](https://github.com/tindli) (Twitter: [@metaCoffee](https://twitter.com/metaCoffee))

# Labels

Once you post an issue, a maintainer will add one or more labels to it. Below is a guideline for the maintainers and anyone else who is interested in what the various labels mean.

### Type
![](https://img.shields.io/badge/type-bug-dd0000.svg)
![](https://img.shields.io/badge/type-enhancement-0099dd.svg)
![](https://img.shields.io/badge/type-question-99cc00.svg)
![](https://img.shields.io/badge/type-docs-999999.svg)

Every issue should be assigned one of these.

- **bug**: A bug report
- **enhancement**: A feature request
- **question**: A question about how to use Marko
- **docs**: An issue about documentation

### Scope
![](https://img.shields.io/badge/scope-parser-5500cc.svg)
![](https://img.shields.io/badge/scope-compiler-cc0077.svg)
![](https://img.shields.io/badge/scope-runtime-eebb00.svg)
![](https://img.shields.io/badge/scope-core%20taglib-00cccc.svg)
![](https://img.shields.io/badge/scope-components-9900aa.svg)
![](https://img.shields.io/badge/scope-tools-fef2c0.svg)

What part of the Marko stack does this issue apply to? In most cases there should only be one of these.

- **parser**: Relates to `htmljs-parser`
- **compiler**: Relates to the compiler (server only)
- **runtime**: Relates to the runtime (isomorphic/universal)
- **core-taglib**: Relates to custom tags that ship with Marko
- **components**: Relates to `marko-components`
- **tools**: Relates to editor plugins, commandline tools, etc.

### Difficulty
![](https://img.shields.io/badge/difficulty-bite%20sized-aabbcc.svg)
![](https://img.shields.io/badge/difficulty-epic-cc4400.svg)

Indicates a very large or very small issue.  Not required.

- **bite-sized**: An issue that would be great for new contributors to tackle
- **epic**: A large change that will take some time and likely have sub-issues

### Status
![](https://img.shields.io/badge/status-resolved-99cc99.svg)
![](https://img.shields.io/badge/status-confirmed-5599cc.svg)
![](https://img.shields.io/badge/status-help%20wanted-33cc88.svg)
![](https://img.shields.io/badge/status-invalid-997744.svg)
![](https://img.shields.io/badge/status-duplicate-cc99cc.svg)
![](https://img.shields.io/badge/status-wontfix-bb6666.svg)
![](https://img.shields.io/badge/status-needs%20clarifying-dd9944.svg)
![](https://img.shields.io/badge/status-see%20other-456263.svg)

In many cases, additional *actions* should be taken when applying one of these.

- **resolved**: The question was answered, the bug was fixed, or the feature was implemented. *Close the issue.*
- **confirmed**: This is indeed a bug, or the feature has been fleshed out and should be implemented.  
- **help-wanted**: This is not something on the main roadmap, but we'd love for someone in the community to tackle it
- **invalid**: This was user error, not a bug. *Close the issue.*
- **duplicate**: Someone has already posted the same or a very similar issue.  *Reference the original issue and close this issue.*
- **wontfix**: This is not a bug, but intended behavior, or this feature will not be implemented.  *Close the issue.*
- **needs-clarifying**: More information is needed to reproduce the bug. *Ask for more information.  If no reply is received within a week, the issue should be closed.*
- **see-other**: This bug is actually due to an issue with another library. *If there is an existing issue for that library link to it, if not create one and link to it.  Close the issue.*
