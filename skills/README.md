# Skills

Agent skills for AI coding assistants working with Marko. Each skill is a folder with a `SKILL.md` entry point (frontmatter `name`/`description` plus instructions); sibling `.md` files are references the agent loads on demand.

| Skill                                                | Use it to                                                                                                                |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| [`marko-best-practices`](./marko-best-practices)     | write idiomatic Marko 6 when creating or editing `.marko` files                                                          |
| [`marko-5-to-6-migration`](./marko-5-to-6-migration) | migrate Marko 5 (Class API / legacy widgets) apps and libraries to Marko 6, fully or incrementally via the interop layer |

## Installation

Skills run inside your own project, not this repo.

With the [skills CLI](https://skills.sh) (installs into the current project for Claude Code, Cursor, and other supported agents; pick the skills when prompted):

```sh
npx skills add marko-js/marko
```

Or manually, for Claude Code: copy a skill folder into your project's `.claude/skills/` directory (or `~/.claude/skills/` to enable it globally):

```sh
cp -r skills/marko-5-to-6-migration YOUR_APP/.claude/skills/
```

Any agent that supports the `SKILL.md` convention can consume these folders the same way.

## Usage

Once installed, the agent applies a skill automatically when a request matches its description, or invoke it explicitly (in Claude Code, type `/` plus the skill name). For example, in a Marko 5 project:

```text
/marko-5-to-6-migration plan an incremental migration of this app
```

```text
Migrate this component library to Marko 6 and remove all class components.
```
