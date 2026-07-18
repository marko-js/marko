// template.marko
const $comptime2 = {
	name: "midnight",
	accent: "#7df"
};
const $comptime = {
	name: "root",
	parent: void 0
};
const theme = $comptime2;
const meta = /* @__PURE__ */ new Map([["generator", "marko"]]);
const tags = /* @__PURE__ */ new Set(["compiler", "runtime"]);
const released = /* @__PURE__ */ new Date(0);
const semver = /^v\d+/;
const oddities = [
	NaN,
	-0,
	Infinity,
	-Infinity
];
const marker = Symbol.for("app.marker");
const docsUrl = new URL("https://markojs.com/docs");
const tree = $comptime;
$comptime.parent = $comptime;
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div data-accent=#7df><a href=/docs>Docs</a><p>${$comptime2 === theme && $comptime === tree ? "shared" : "copied"}</p><p>${_escape(meta.get("generator"))} began ${_escape(released.getUTCFullYear())}</p><p>${_escape([...tags].join("+"))} / ${_escape(String(1000000000000000000000n))} / ${_escape(oddities.join(","))}</p><p>${semver.test(input.version) ? "release" : "preview"}${_el_resume($scope0_id, "g", _serialize_guard($scope0_reason, 0))}</p><p>${marker === Symbol.for("app.marker") ? "same symbol" : "different"}</p><p>${_escape(String(docsUrl))}</p></div>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
}, 1);
