// template.marko
const $template = "<div data-accent=#7df><a href=/docs>Docs</a><p> </p><p><!> began <!></p><p><!> / <!> / <!></p><p> </p><p> </p><p> </p></div>";
const $walks = "DbD lD%c%lD%c%c%lD lD lD m";
const $comptime2 = {
	name: "midnight",
	accent: "#7df"
};
const $comptime = {
	name: "root",
	parent: undefined
};
const theme = $comptime2;
const meta = new Map([["generator", "marko"]]);
const tags = new Set(["compiler", "runtime"]);
const released = new Date(0);
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
function $setup($scope) {
	_text($scope["#text/0"], $comptime2 === theme && $comptime === tree ? "shared" : "copied");
	_text($scope["#text/1"], meta.get("generator"));
	_text($scope["#text/2"], released.getUTCFullYear());
	_text($scope["#text/3"], [...tags].join("+"));
	_text($scope["#text/4"], String(1000000000000000000000n));
	_text($scope["#text/5"], oddities.join(","));
	_text($scope["#text/7"], marker === Symbol.for("app.marker") ? "same symbol" : "different");
	_text($scope["#text/8"], String(docsUrl));
}
const $input_version = ($scope, input_version) => _text($scope["#text/6"], semver.test(input_version) ? "release" : "preview");
const $input = ($scope, input) => $input_version($scope, input.version);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
