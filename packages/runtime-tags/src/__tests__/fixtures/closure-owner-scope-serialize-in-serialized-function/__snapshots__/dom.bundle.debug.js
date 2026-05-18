// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $if_content__run__script = _script("__tests__/template.marko_1_run", ($scope) => $scope.run());
const $if_content__run = /* @__PURE__ */ _const("run", $if_content__run__script);
const $if_content__text = /* @__PURE__ */ _if_closure("#text/0", 0, ($scope) => $if_content__run($scope, $run($scope)));
const $if_content__setup = $if_content__text;
const $text2 = /* @__PURE__ */ _const("text");
const $if = /* @__PURE__ */ _if("#text/0", "<div></div>", " b", $if_content__setup);
function $setup($scope) {
	$text2($scope, $text);
	$if($scope, 1 ? 0 : 1);
}
function $run($scope) {
	return function() {
		_el_read($scope["#div/0"]).innerHTML = $scope._.text();
	};
}
function $text() {
	return "HI";
}
_resume("__tests__/template.marko_1/run", $run);
_resume("__tests__/template.marko_0/text", $text);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, "b%c", $setup);
