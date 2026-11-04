// template.marko
const $Row_content__walks = "D l";
const $Row_content__template = "<p> </p>";
const $template = "<!><!><button>+</button>";
const $walks = "b%b b";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;b%b ;<!><!><button>+</button>",
	"__tests__/template.marko_1*shell": `__tests__/template.marko_1*shell __tests__/template.marko_1_count#0:6/setup;${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($Row_content__walks)};${$Row_content__template}`
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_show = _unfilled_if($scope0_reason, 0), $fg__input_label = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let count = 0;
	const Row = { content: _content("__tests__/template.marko_2*content", ({ fn, label }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $fg__label = _filled_guard($scope2_reason, 2);
		_html(`<p>${_text_mark($scope2_id, "#text/0", fn() + label, 1, $scope2_reason, 0)}</p>`);
		_patch_render($scope2_id, "__tests__/template.marko_2_fn#3_label#4/setup", $fg__label && "label", $scope2_reason, 0);
		_scope($scope2_id, {
			fn: _write_if($scope2_reason, 2) && fn,
			label: _write_if($scope2_reason, 1) && label
		}, "__tests__/template.marko", "2:2", {
			fn: "2:15",
			label: "2:19"
		}) || $fg__label && _patch_write($scope2_id, "PatchMarkedWrite:label", label, !_server_guard($scope2_reason, 2));
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(14 | _updates_from($scope0_reason, 1) << 5);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			Row.content({
				fn: _resume(() => count, "__tests__/template.marko_1/fn", $scope1_id),
				label: input.label
			});
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "__tests__/template.marko_1_input_label#0:5/setup");
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "5:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_html(`<button>+</button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$fg__input_label && _client_guard($scope0_reason, 0) && _patch_render($scope0_id, "__tests__/template.marko_1_input_label#0:5/setup", "input_label");
	_scope($scope0_id, {
		input_label: _write_if($scope0_reason, 0) && ($ui__input_show || _unfilled_if($scope0_reason, 1)) && input.label,
		count
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		count: "1:6"
	}) || $fg__input_label && $ui__input_show && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 1));
}, 1);
