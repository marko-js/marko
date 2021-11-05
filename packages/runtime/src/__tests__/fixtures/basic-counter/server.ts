import type { Scope } from "../../../common/types";
import { write, markScopeOffset, writeScope, writeCall } from "../../../html";

export default (
  _input: unknown,
  currentScope: Scope,
  currentOffset: number
) => {
  currentScope[0] = "ROOT";
  write("<body>");
  counter(_input, currentScope, currentOffset);
  write("</body>");
};

const counter = (
  _input: unknown,
  currentScope: Scope,
  currentOffset: number
) => {
  const count = 0;

  currentScope[currentOffset + 2] = count;
  write(
    `${markScopeOffset(currentOffset, currentScope)}<button>${markScopeOffset(
      currentOffset + 1,
      currentScope
    )}${count}</button>`
  );
  writeScope(currentScope);
  writeCall("counter", currentOffset, currentScope[0]);
};
