// tags/card/index.marko
const $template = "<section><h2> </h2></section>";
const $walks = "D D m";
const $setup$1 = [[], []];
_shells({ b: "b;D D ;<section><h2> </h2></section>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<section><h2${_attr_class(input.title, $scope0_id, "a", $scope0_reason, 0)}>${_text_mark($scope0_id, "b", input.title, 1, $scope0_reason, 0)}</h2>${_el_mark($scope0_id, "a", _updates_from($scope0_reason, 0))}</section>`);
	_scope($scope0_id, {});
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({
	a: `a${_shell_marker($setup)};${((_w0) => `D/${_w0}&%l`)($walks)};${((_w0) => `<main>${_w0}<!></main>`)($template)}`,
	a1: `a1${_shell_marker([[], []], ["a>", $setup$1])};${/*@__PURE__*/ ((_w0) => `/${_w0}&D l`)($walks)};${/*@__PURE__*/ ((_w0) => `${_w0}<p> </p>`)($template)}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $fg__input_note = _filled_guard($scope0_reason, 1), $cg__input_show = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<main>");
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	card_default({ title: "root" });
	_patch_child_end();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope2 = _peek_scope_id($scope1_id, "a", 1);
			card_default({ title: "branch" });
			_patch_child_end();
			_html(`<p>${_text_mark($scope1_id, "b", input.note, 1, $scope0_reason, 1)}</p>`);
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "a0");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope2)
			});
			return 0;
		}
	}, $scope0_id, "b", 1, $wg__input_show, 1, 0, 0, ["a1"], $scope0_reason, 0);
	_html("</main>");
	$fg__input_note && $cg__input_show && _patch_render($scope0_id, "a0", "f");
	_scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.note,
		a: _existing_scope($childScope)
	}) || $fg__input_note && $cg__input_show && _patch_write($scope0_id, "xf", input.note, !_server_guard($scope0_reason, 1));
}, 1);
