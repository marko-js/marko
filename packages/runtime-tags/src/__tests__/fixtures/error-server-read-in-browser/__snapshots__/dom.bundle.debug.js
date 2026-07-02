// template.marko
const $template = "<button>x</button><!><!>";
const $walks = " b%c";
var boss;
const $if_content__setup = ($scope) => _text($scope["#text/0"], (() => {
	throw new ReferenceError("\"boss\" was declared in a `server` statement and is unavailable in the browser. Use a `<const>` tag instead if the value is needed by the template.");
})().name);
const $if = /* @__PURE__ */ _if("#text/1", " ", " b", $if_content__setup);
const $dbg = /* @__PURE__ */ _let("dbg/2", ($scope) => $if($scope, $scope.dbg ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$dbg($scope, true);
}));
function $setup($scope) {
	$dbg($scope, false);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
