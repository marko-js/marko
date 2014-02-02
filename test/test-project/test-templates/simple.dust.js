(function () {
    dust.register("demo", body_0);

    function body_0(chk, ctx) {
        return chk.write("<div class=\"hello-world ").reference(ctx.get("rootClass"), ctx, "h").write("\">").reference(ctx.get("message"), ctx, "h").write("</div>").exists(ctx.get("colors"), ctx, {
            "block": body_1
        }, null).notexists(ctx.get("colors"), ctx, {
            "block": body_3
        }, null);
    }

    function body_1(chk, ctx) {
        return chk.write("<ul>").section(ctx.get("colors"), ctx, {
            "block": body_2
        }, null).write("</ul>");
    }

    function body_2(chk, ctx) {
        return chk.write("<li class=\"color\">").reference(ctx.getPath(true, []), ctx, "h").write("</li>");
    }

    function body_3(chk, ctx) {
        return chk.write("<div>No colors!</div>");
    }
    return body_0;
})();