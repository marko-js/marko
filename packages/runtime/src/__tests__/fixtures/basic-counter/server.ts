import type { Scope } from "../../../common/types";
import { write, markScopeOffset, writeScope, writeCall } from "../../../html";

export default (_input: unknown, currentScope: Scope) => {
  write("<body>");
  counter(_input, currentScope);
  write("</body>");
};

const counter = (_input: unknown, currentScope: Scope) => {
  const count = 0;

  currentScope[2] = count;
  write(
    `${markScopeOffset(0, currentScope)}<button>${markScopeOffset(
      1,
      currentScope
    )}${count}</button>`
  );
  writeScope(currentScope);
  writeCall("counter", currentScope.___id);
};
