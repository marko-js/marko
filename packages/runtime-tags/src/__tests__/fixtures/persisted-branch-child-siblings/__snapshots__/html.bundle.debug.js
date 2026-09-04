// tags/child.marko
const $template$1 = "<b>child</b>";
const $walks$1 = "b";
_shells({ "__tests__/tags/child.marko": "__tests__/tags/child.marko,<b>child</b>" });
var child_default = _template_persisted("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html("<b>child</b>");
}, 0, 0);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
_shells({
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_1*shell;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}&`)("b", "b"), /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}`)($template$1, $template$1))
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "#childScope/0", $childScope);
			child_default({});
			const $childScope2 = _peek_scope_id();
			_patch_child($scope1_id, "#childScope/1", $childScope2);
			child_default({});
			_scope($scope1_id, {
				"#childScope/0": _existing_scope($childScope),
				"#childScope/1": _existing_scope($childScope2)
			}, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_owned, 0);
	$scope0_reason && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1, () => [child_default]);
