export async function grade({ fetchRes, check }) {
  const denied = await fetchRes("/admin/dashboard");
  check("no key: 401", denied.status === 401, String(denied.status));
  check("no key: unauthorized text", /unauthorized/i.test(denied.text), denied.text.slice(0, 200));
  check("no key: page not rendered", !/Secret metrics/.test(denied.text));
  const ok = await fetchRes("/admin/dashboard?key=letmein");
  check("key: 200", ok.status === 200, String(ok.status));
  check("key: dashboard rendered", /Dashboard/.test(ok.text) && /Secret metrics/.test(ok.text), ok.text.slice(0, 300));
}
