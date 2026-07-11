export async function grade({ fetchRes, fetchText, check, htmlText }) {
  const empty = await fetchText("/guestbook");
  check("get: empty prompt", /Be the first to sign!/.test(empty), empty.slice(0, 400));
  const post = await fetchRes("/guestbook", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: "message=Hello+from+the+grader",
  });
  check("post: redirect status", post.status >= 300 && post.status < 400, String(post.status));
  const loc = post.headers.get("location") || "";
  check("post: location back to guestbook", loc.includes("/guestbook"), loc);
  const after = await fetchText("/guestbook");
  check("get: entry rendered", /Hello from the grader/.test(htmlText(after)), htmlText(after).slice(0, 300));
  check("get: entry li present", /class="?entry"?/.test(after));
  check("get: empty prompt gone", !/Be the first to sign!/.test(after));
  const post2 = await fetchRes("/guestbook", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: "message=+++",
  });
  check("post: whitespace redirects", post2.status >= 300 && post2.status < 400, String(post2.status));
  const after2 = await fetchText("/guestbook");
  const count = (after2.match(/class="?entry"?/g) || []).length;
  check("get: whitespace not added", count === 1, `entries=${count}`);
}
