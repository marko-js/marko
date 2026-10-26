export function track(where: string, value: unknown) {
  console.log(where, value);
  return value;
}
