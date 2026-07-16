export function getAttrs(id: number) {
  return {
    title: `server title ${id}`,
    value: `value ${id}`,
    disabled: id === 1,
  };
}
