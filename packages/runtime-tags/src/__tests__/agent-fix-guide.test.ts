import * as assert from "assert/strict";

import * as compiler from "@marko/compiler";

const agentMarkers = [
  "CLAUDECODE",
  "CLAUDE_CODE",
  "CURSOR_AGENT",
  "GEMINI_CLI",
  "CODEX_SANDBOX",
  "CODEX_THREAD_ID",
  "AI_AGENT",
  "MARKO_AGENT_FIX_GUIDE",
];

describe("runtime-tags/agent-fix-guide", () => {
  let savedEnv: Record<string, string | undefined>;

  beforeEach(() => {
    savedEnv = {};
    for (const key of agentMarkers) {
      savedEnv[key] = process.env[key];
      delete process.env[key];
    }
  });

  afterEach(() => {
    for (const key of agentMarkers) {
      if (savedEnv[key] === undefined) delete process.env[key];
      else process.env[key] = savedEnv[key];
    }
  });

  function compileError() {
    try {
      compiler.compileSync("<div", "template.marko", {
        translator: "@marko/runtime-tags/translator",
        output: "html",
        cache: new Map(),
        babelConfig: {
          babelrc: false,
          configFile: false,
          browserslistConfigFile: false,
        },
      });
    } catch (err) {
      return err as Error;
    }
    throw new Error("expected the broken template to fail to compile");
  }

  it("MARKO_AGENT_FIX_GUIDE=1 appends the guide with no agent markers set", () => {
    process.env.MARKO_AGENT_FIX_GUIDE = "1";
    assert.match(compileError().message, /Fix guide: READ /);
  });

  it("MARKO_AGENT_FIX_GUIDE=0 suppresses the guide despite agent markers", () => {
    process.env.CLAUDECODE = "1";
    process.env.MARKO_AGENT_FIX_GUIDE = "0";
    assert.doesNotMatch(compileError().message, /Fix guide/);
  });

  it("still sniffs agent markers without the override", () => {
    process.env.CLAUDECODE = "1";
    assert.match(compileError().message, /Fix guide: READ /);
    delete process.env.CLAUDECODE;
    assert.doesNotMatch(compileError().message, /Fix guide/);
  });
});
