// template.marko
const $D_content__walks = "b%c";
const $D_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($D_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($D_content__walks);
const $if_content__foo = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/1"], $scope._.foo));
const $if_content__setup = ($scope) => {
	$if_content__foo._($scope);
	$if_content__rest._($scope);
};
const $if_content__rest__script = _script("__tests__/template.marko_2_rest#1:6", ($scope) => _attrs_script($scope, "#span/0"));
const $if_content__rest = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => {
	_attrs($scope, "#span/0", $scope._.rest);
	$if_content__rest__script($scope);
});
const $D_content__if = /*@__PURE__*/ _if("#text/0", "<span> </span>", " D ", $if_content__setup);
const $D_content__on = ($scope, on) => $D_content__if($scope, on ? 0 : 1);
const $D_content__tag_input_item = ($scope, item) => {
	$D_content__rest($scope, (({ foo, ...rest }) => rest)(item || {}));
	$D_content__foo($scope, item?.foo);
};
const $D_content__$params = ($scope, $params2) => $D_content__$temp($scope, $params2[0]);
const $D_content__$temp = ($scope, $temp) => {
	$D_content__on($scope, $temp.on);
	$D_content__tag_input_item($scope, $temp.item);
};
const $D_content__rest = /*@__PURE__*/ _const("rest", $if_content__rest);
const $D_content__foo = /*@__PURE__*/ _const("foo", $if_content__foo);
function $setup($scope) {
	$D_content__on($scope["#childScope/0"], true);
	$D_content__tag_input_item($scope["#childScope/0"], {
		foo: 1,
		bar: 2
	});
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
