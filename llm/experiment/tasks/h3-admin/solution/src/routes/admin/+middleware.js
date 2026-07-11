export default function (context, next) {
  if (context.url.searchParams.get("key") !== "letmein") {
    return new Response("unauthorized", { status: 401 });
  }
  return next();
}
