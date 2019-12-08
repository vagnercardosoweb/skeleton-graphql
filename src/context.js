export default function context(ctx) {
  return {
    auth: true,
    headers: ctx.req.headers,
  };
}
