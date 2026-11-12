// tags/child.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({ b: "b;b%;<!><!><!>" });
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_renderer__OR__input_label = _write_guard($scope0_reason, 0), $ui__input_renderer__OR__input_label = _unfilled_if($scope0_reason, 0), $fg__input_renderer = _filled_guard($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.renderer, { label: input.label }, 1, 0, 0, $wg__input_renderer__OR__input_label, $scope0_reason, 0, 0, 1);
	_patch_render($scope0_id, "b0", (($fg__input_renderer ? " d" : "") + ($fg__input_label ? " e" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		d: _write_if($scope0_reason, 2) && $ui__input_renderer__OR__input_label && input.renderer,
		e: _write_if($scope0_reason, 1) && $ui__input_renderer__OR__input_label && input.label
	}) || ($fg__input_renderer && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "xd", input.renderer, !_server_guard($scope0_reason, 1)), $fg__input_label && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 2)));
});

// template.marko
const $setup = _shell_setup([[], ["a3"]], ["c>", $setup$1]);
_shells({
	a1: "a1",
	a2: "a2",
	a: `a${_shell_marker($setup)};${((_w0) => ` b%b/${_w0}&b`)("b%c")};${((_w0) => `<button>toggle</button><!>${_w0}<!>`)($template)}`,
	a0: "a0;D ;<em> </em>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const A = { content: _content_resume("a2", ({ label }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__label = _write_guard($scope1_reason, 0), $wi__label = _write_if($scope1_reason, 0);
		_if(() => {
			if (label === "two") {
				const $scope2_id = _scope_id();
				_html(`<em>${_text_mark($scope2_id, "a", label, 1, 4, 0)}</em>`);
				_scope($scope2_id, { _: $wi__label && _scope_with_id($scope1_id) });
				return 0;
			}
		}, $scope1_id, "a", 1, $wg__label, 1, 0, 0, ["a0"]);
		$wi__label && _scope($scope1_id, {});
	}, $scope0_id, void 0, 1) };
	const B = { content: _content_resume("a1", ({ label }) => {
		const $scope3_id = _scope_id();
		_scope_reason();
		_html(`<b>${_text_mark($scope3_id, "a", label, 1, 4, 0)}</b>`);
		_scope($scope3_id, {});
	}, $scope0_id, void 0, 1) };
	let open = false;
	_html(`<button>toggle</button>${_el_mark($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", B, { label: "local" });
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1 | _updates_from($scope0_reason, 1) << 3 | _updates_from($scope0_reason, 2) << 5);
	const $childScope = _peek_scope_id($scope0_id, "c", 1);
	child_default({
		renderer: input.a ? A : B,
		label: input.label
	});
	_patch_child_end();
	_script($scope0_id, "a3");
	_scope($scope0_id, {
		h: A,
		i: B,
		k: open,
		c: _existing_scope($childScope)
	});
}, 1);
