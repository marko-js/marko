import tryLoadTranslator from "./try-load-translator";

const applied = Symbol("markoAgentFixGuide");

export default function appendAgentFixGuide(error, translator) {
  if (error instanceof Error && !error[applied] && isCodingAgent()) {
    const guide = fixGuide(translator);
    if (guide) {
      // `message` is locked against Babel mutations, so redefine rather than assign.
      error[applied] = true;
      Object.defineProperty(error, "message", {
        value: error.message + guide,
        enumerable: true,
        writable: true,
        configurable: true,
      });
    }
  }

  return error;
}

// Env markers terminal coding agents set.
function isCodingAgent() {
  return (
    typeof process === "object" &&
    (process.env.CLAUDECODE ||
      process.env.CLAUDE_CODE ||
      process.env.CURSOR_AGENT ||
      process.env.GEMINI_CLI ||
      process.env.CODEX_SANDBOX ||
      process.env.CODEX_THREAD_ID ||
      process.env.AI_AGENT)
  );
}

function fixGuide(translator) {
  // Only resolved specifiers expose a cheat sheet; inline objects (tests,
  // embedders) opt out.
  if (typeof translator !== "string") return undefined;

  try {
    const cheatsheet = tryLoadTranslator(translator)?.cheatsheet;
    return cheatsheet
      ? `\n\nFix guide: READ ${cheatsheet} before writing a fix.`
      : undefined;
  } catch {
    // Leave the real compile error untouched if the translator can't load.
    return undefined;
  }
}
