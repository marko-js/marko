// child.marko
const $template$1 = "<div></div>";
const $walks$1 = " b";
_shells({ "__tests__/child.marko": "__tests__/child.marko !__tests__/child.marko_0_input_name#3_input_item#4; ;<div></div>" });
var child_default = _template_persisted("__tests__/child.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<div${_patch_attr_class($scope0_id, "#div/0", input.name, $scope0_owned, 0)}></div>${_el_resume($scope0_id, "#div/0")}`);
	_script($scope0_id, "__tests__/child.marko_0_input_name#3_input_item#4");
	_patch_effect($scope0_id, "__tests__/child.marko_0_input_name#3_input_item#4", "input_name input_item");
	$scope0_reason ? _scope($scope0_id, {
		input_name: input.name,
		input_item: input.item
	}, "__tests__/child.marko", 0, {
		input_name: ["input.name"],
		input_item: ["input.item"]
	}) : (_filled_guard($scope0_owned, 0) && _patch_write($scope0_id, "input_name", input.name), _filled_guard($scope0_owned, 1) && _patch_write($scope0_id, "input_item", input.item));
}, 0, 0);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<main>${_w0}${_w1}<!></main>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `D/${_w0}&/${_w1}&%l`)(" b", " b");
_shells({
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content,loading",
	"__tests__/template.marko_2*content": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_2*content;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `D l/${_w0}&b`)(" b"), /*@__PURE__*/ ((_w0) => `<span> </span>${_w0}<!>`)($template$1)),
	"__tests__/template.marko_1_#text#0/await": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_1_#text#0/await;${_w0};${_w1}`)(((_w0) => `D l/${_w0}&b`)(" b"), ((_w0) => `<span> </span>${_w0}<!>`)($template$1)),
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;b%;<!><!><!>",
	"__tests__/template.marko": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko;${_w0};${_w1}`)(((_w0, _w1) => `D/${_w0}&/${_w1}&%l`)(" b", " b"), ((_w0, _w1) => `<main>${_w0}${_w1}<!></main>`)($template$1, $template$1))
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $item__closures = new Set();
	const $input_promise__closures = new Set();
	const item = { label: input.label };
	_html("<main>");
	_set_serialize_reason({ 1: _mask_group($scope0_owned, 1) });
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	child_default({
		name: "a",
		item
	});
	_set_serialize_reason({ 1: _mask_group($scope0_owned, 1) });
	const $childScope2 = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/1", $childScope2);
	child_default({
		name: "b",
		item
	});
	_try($scope0_id, "#text/2", _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _persisted_reason();
		_await($scope1_id, "#text/0", input.promise, (value) => {
			const $scope2_id = _scope_id();
			_html(`<span>${_patch_text($scope2_id, "#text/0", value, void 0, $scope0_owned, 2)}</span>`);
			_set_serialize_reason({ 1: _mask_group($scope0_owned, 1) });
			const $childScope3 = _peek_scope_id();
			_patch_child($scope2_id, "#childScope/1", $childScope3);
			child_default({
				name: "c",
				item
			});
			_scope($scope2_id, {
				_: _scope_with_id($scope1_id),
				"#childScope/1": _existing_scope($childScope3)
			}, "__tests__/template.marko", "9:6");
		}, 1, "__tests__/template.marko_1_#text#0/await", 1);
		$scope0_reason && _subscribe(_unfilled_if($scope0_owned, 2) && $input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "7:4"));
		$scope0_reason && _resume_branch($scope1_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_record("__tests__/template.marko_3*content", $scope0_id) }) }, 1);
	_html("</main>");
	$scope0_reason && _scope($scope0_id, {
		item,
		"#childScope/0": _existing_scope($childScope),
		"#childScope/1": _existing_scope($childScope2),
		"ClosureScopes:item": $item__closures,
		"ClosureScopes:input_promise": $input_promise__closures
	}, "__tests__/template.marko", 0, { item: "3:8" });
}, 1, () => [child_default]);
