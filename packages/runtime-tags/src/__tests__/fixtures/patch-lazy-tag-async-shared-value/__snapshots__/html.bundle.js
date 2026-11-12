// child.marko
const $template = "<div></div>";
const $setup$1 = [[], []];
_shells({ a: "a; ;<div></div>" });
var child_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_name = _filled_guard($scope0_reason, 1), $fg__input_item = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html(`<div${_attr_class(input.name, $scope0_id, "a", $scope0_reason, 1)}></div>${_el_mark($scope0_id, "a", _updates_from($scope0_reason, 1))}`);
	_script($scope0_id, "a0", 1, ($fg__input_name || $fg__input_item) && (_client_guard($scope0_reason, 1) || _client_guard($scope0_reason, 2) ? 2 : 1), (($fg__input_name ? " d" : "") + ($fg__input_item ? " e" : "")).slice(1), "a1", $scope0_reason, 0);
	_scope($scope0_id, {
		d: input.name,
		e: input.item
	}) || ($fg__input_name && _patch_write($scope0_id, "xd", input.name, !_server_guard($scope0_reason, 1)), $fg__input_item && _patch_write($scope0_id, "xe", input.item, !_server_guard($scope0_reason, 2)));
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(() => child_default, "a", flush, "_a");
const $setup = _shell_setup([[], []], ["b>", $setup$1]);
_shells({
	b1: `b1${_shell_marker([[], []], ["c>", $setup$1])};${/*@__PURE__*/ ((_w0) => `D l%b/${_w0}&b`)(" b")};${/*@__PURE__*/ ((_w0) => `<span> </span><!>${_w0}<!>`)($template)}`,
	b2: `b2${_shell_marker([[], []], ["c>", $setup$1])};${((_w0) => `D l%b/${_w0}&b`)(" b")};${((_w0) => `<span> </span><!>${_w0}<!>`)($template)}`,
	b3: "b3;b%;<!><!><!>",
	b: `b${_shell_marker($setup)};${((_w0) => `D%b/${_w0}&%l`)(" b")};${((_w0) => `<main><!>${_w0}<!></main>`)($template)}`
});
var template_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_label = _updates_from($scope0_reason, 1), $cg__input_label = _client_guard($scope0_reason, 1), $wi__input_label__OR__input_promise = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $item__closures = /* @__PURE__ */ new Set();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	const item = { label: input.label };
	_html("<main>");
	_set_scope_reason($uf__input_label << 1 | $uf__input_label << 5);
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	$Child_withLoadAssets({
		name: "a",
		item
	});
	_patch_child_end();
	_try($scope0_id, "c", () => {
		_scope_reason();
		const $scope1_id = _scope_id(), $ui__input_promise = _unfilled_if($scope0_reason, 2);
		_await($scope1_id, "a", input.promise, (value) => {
			const $scope2_id = _scope_id();
			_html(`<span>${_text_mark($scope2_id, "a", value, 1, $scope0_reason, 2)}</span>`);
			_set_scope_reason($uf__input_label << 1 | $uf__input_label << 5);
			const $childScope2 = _peek_scope_id($scope2_id, "c", 1);
			$Child_withLoadAssets({
				name: "c",
				item
			});
			_patch_child_end();
			_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope2_id, "b0", $cg__input_label);
			_subscribe(_unfilled_if($scope0_reason, 1) && $item__closures, _scope($scope2_id, { c: _existing_scope($childScope2) }), $cg__input_label && "b0");
		}, 1, "b1", $ui__input_promise, 1);
		_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope1_id, "b4", 1);
		$wi__input_label__OR__input_promise && _subscribe($ui__input_promise && $input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 2) && "b4", 0);
		$wi__input_label__OR__input_promise && _resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("loading");
	}, void 0, "b5", void 0, "b3", 1);
	_html("</main>");
	_scope($scope0_id, {
		b: _existing_scope($childScope),
		j: _write_if($scope0_reason, 1) && _unfilled_if($scope0_reason, 1) && $item__closures,
		i: _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_promise__closures
	});
}, 1);
