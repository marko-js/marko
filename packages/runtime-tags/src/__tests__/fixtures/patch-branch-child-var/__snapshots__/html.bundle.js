// tags/box.marko
const $template = "<div class=box> </div>";
const $walks = " D l";
const $setup = [[], []];
_shells({ b: "b; D ;<div class=box> </div>" });
var box_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const root = _el($scope0_id, "b0");
	_html(`<div class=box>${_text_resume($scope0_id, "b", input.label, 1, $scope0_reason, 0)}</div>${_el_resume($scope0_id, "a")}`);
	const $return = root;
	_scope($scope0_id, {});
	return $return;
});

// template.marko
_shells({
	a: "a !a4;D%b D ;<main><!><button id=c> </button></main>",
	a3: /*@__PURE__*/ (() => `a3${_shell_marker(_shell_setup([[], ["a1"]], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `0${_w0}& b`)($walks)};${/*@__PURE__*/ ((_w0) => `${_w0}<button id=read>read</button>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
			const $childScope = _peek_scope_id($scope1_id, "a", 0, $cg__input_label && 1);
			let el = box_default({ label: input.label });
			$cg__input_label && _var($scope1_id, "b", $childScope, "a0");
			_patch_child_end();
			_html(`<button id=read>read</button>${_el_resume($scope1_id, "c")}`);
			_script($scope1_id, "a1");
			_patch_write($scope1_id, "wd", el, 1);
			$cg__input_label && _patch_init($scope1_id, "a2");
			_scope($scope1_id, {
				d: el,
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["a3"], $scope0_reason, 0);
	_html(`<button id=c>${_text_resume($scope0_id, "c", count)}</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a4");
	_scope($scope0_id, {
		g: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.label,
		h: count
	}) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va5", input.label, !_server_guard($scope0_reason, 1));
}, 1);
