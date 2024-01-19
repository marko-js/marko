const ansiReg =
  // eslint-disable-next-line no-control-regex
  /([\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><])/g;

export function stripAnsi(str) {
  return str.replace(ansiReg, "");
}
