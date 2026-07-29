// Its own module so the dev-only structure validator can share the list
// without importing `dynamic-tag` (which would close an import cycle).
export const voidElementsReg =
  /^(?:area|b(?:ase|r)|col|embed|hr|i(?:mg|nput)|link|meta|param|source|track|wbr)$/;
