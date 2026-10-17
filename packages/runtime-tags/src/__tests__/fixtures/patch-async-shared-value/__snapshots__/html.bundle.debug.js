// child.marko
const $template$1 = "<div></div>";
const $walks$1 = " b";
_shells({ "__tests__/child.marko": "__tests__/child.marko; ;<div></div>" });
var child_default = _template("__tests__/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<div${_patch_attr_class($scope0_id, "PatchAttr:#div/0 class", input.name, $scope0_reason, 1)}></div>${_el_resume($scope0_id, "#div/0", _mask_group($scope0_reason, 1))}`);
	_script($scope0_id, "__tests__/child.marko_0_input_name#3_input_item#4", 1, _client_guard($scope0_reason, 1) || _client_guard($scope0_reason, 2));
	(_server_guard($scope0_reason, 1) || _server_guard($scope0_reason, 2)) && _patch_effect($scope0_id, "PatchEffect:__tests__/child.marko_0_input_name#3_input_item#4", "input_name input_item");
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "__tests__/child.marko_0_input_name#3_input_item#4/init");
	$scope0_page ? _scope($scope0_id, {
		input_name: input.name,
		input_item: input.item
	}, "__tests__/child.marko", 0, {
		input_name: ["input.name"],
		input_item: ["input.item"]
	}) : (_filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "PatchWrite:input_name", input.name, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && _patch_write($scope0_id, "PatchWrite:input_item", input.item, !_server_guard($scope0_reason, 2)));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<main>${_w0}${_w1}<!></main>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `D/${_w0}&/${_w1}&%l`)(" b", " b");
_shells({
	"__tests__/template.marko_2*content": /*@__PURE__*/ (() => `__tests__/template.marko_2*content;${/*@__PURE__*/ ((_w0) => `D l/${_w0}&`)(" b")};${/*@__PURE__*/ ((_w0) => `<span> </span>${_w0}`)($template$1)}`)(),
	"__tests__/template.marko_1_#text#0/await": /*@__PURE__*/ (() => `__tests__/template.marko_1_#text#0/await;${((_w0) => `D l/${_w0}&`)(" b")};${((_w0) => `<span> </span>${_w0}`)($template$1)}`)(),
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;b%;<!><!><!>",
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko;${((_w0, _w1) => `D/${_w0}&/${_w1}&%l`)(" b", " b")};${((_w0, _w1) => `<main>${_w0}${_w1}<!></main>`)($template$1, $template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label__OR__input_promise = _write_if($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $item__closures = new Set();
	const $input_promise__closures = new Set();
	const item = { label: input.label };
	_html("<main>");
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 1) << 5);
	const $childScope = _patch_child($scope0_id, "#childScope/0");
	child_default({
		name: "a",
		item
	});
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 1) << 5);
	const $childScope2 = _patch_child($scope0_id, "#childScope/1");
	child_default({
		name: "b",
		item
	});
	_try($scope0_id, "#text/2", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", input.promise, (value) => {
			const $scope2_id = _scope_id();
			_html(`<span>${_patch_text($scope2_id, "#text/0", value, void 0, $scope0_reason, 2)}</span>`);
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 1) << 5);
			const $childScope3 = _patch_child($scope2_id, "#childScope/1");
			child_default({
				name: "c",
				item
			});
			_unfilled_if($scope0_reason, 1) && _patch_init($scope2_id, "__tests__/template.marko_2_item#0:7/subscribe");
			_subscribe(_unfilled_if($scope0_reason, 1) && $item__closures, _scope($scope2_id, {
				_: $wi__input_label__OR__input_promise && _scope_with_id($scope1_id),
				"#childScope/1": _existing_scope($childScope3)
			}, "__tests__/template.marko", "9:6"), _client_guard($scope0_reason, 1) && "__tests__/template.marko_2_item#0:7/subscribe");
		}, 1, "__tests__/template.marko_2*content", 1);
		_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, "__tests__/template.marko_1_input_promise#0:6/subscribe");
		$wi__input_label__OR__input_promise && _subscribe(_unfilled_if($scope0_reason, 2) && $input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "7:4"), _client_guard($scope0_reason, 2) && "__tests__/template.marko_1_input_promise#0:6/subscribe", 0);
		$wi__input_label__OR__input_promise && _resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_html("loading");
	}, void 0, "__tests__/template.marko_3*content", void 0, "__tests__/template.marko_1*content", 1);
	_html("</main>");
	_patch_write($scope0_id, "PatchWrite:item", item, 1);
	$scope0_page && _scope($scope0_id, {
		item: _unfilled_if($scope0_reason, 2) && item,
		"#childScope/0": _existing_scope($childScope),
		"#childScope/1": _existing_scope($childScope2),
		"ClosureScopes:item/9": _write_if($scope0_reason, 1) && _unfilled_if($scope0_reason, 1) && $item__closures,
		"ClosureScopes:input_promise/8": _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_promise__closures
	}, "__tests__/template.marko", 0, { item: "3:8" });
}, 1);
