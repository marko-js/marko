// template.marko
const $template = "<!><!><!><!>";
const $walks = "b%b%c";
const $for_content2__Body__script = _script("__tests__/template.marko_3_Body#0:5", ($scope) => _attrs_script($scope, "#section/0"));
const $for_content2__Body = /*@__PURE__*/ _for_closure("#text/1", ($scope) => {
	_attrs_content($scope, "#section/0", { content: $scope._.Body });
	$for_content2__Body__script($scope);
});
const $for_content2__setup = $for_content2__Body;
const $for_content__Body = /*@__PURE__*/ _for_closure("#text/0", ($scope) => _attr_content($scope, "#div/0", $scope._.Body));
const $for_content__setup = $for_content__Body;
const $Body_content__uid = ($scope, uid) => {
	_attr($scope["#label/0"], "for", uid);
	_attr($scope["#input/1"], "id", uid);
};
const $Body_content__setup = ($scope) => $Body_content__uid($scope, _id($scope));
const $Body_content = _content("__tests__/template.marko_1*content", "<label>body</label><input>", " b ", $Body_content__setup);
const $Body = /*@__PURE__*/ _const("Body");
function $setup($scope) {
	$Body($scope, { content: $Body_content($scope) });
}
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<div></div>", " ", $for_content__setup);
const $for2 = /*@__PURE__*/ _for_of_unkeyed("#text/1", "<section></section>", " ", $for_content2__setup);
const $input_items = ($scope, input_items) => {
	$for($scope, [input_items]);
	$for2($scope, [input_items]);
};
const $input = ($scope, input) => $input_items($scope, input.items);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
