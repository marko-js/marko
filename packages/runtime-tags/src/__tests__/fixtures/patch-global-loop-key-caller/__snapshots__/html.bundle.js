// tags/rows.marko
const $template = "<ul></ul>";
const $setup$1 = [[], []];
_shells({
	b: "b; ;<ul></ul>",
	b0: "b0;D ;<li> </li>"
});
var rows_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html("<ul>");
	_for_until(input.n, 0, 1, (i) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_text_mark($scope1_id, "a", i + ":" + $global$1.x, 1, (2 | _updates_from($scope0_reason, 0)) << 1, 0)}</li>`);
		_scope($scope1_id, {
			M: _unfilled_if($scope0_reason, 0) && i,
			_: ($scope0_page || _write_if($scope0_reason, 0)) && _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "a", 1, 1, 1, 0, 0, "b0", $scope0_reason, 0);
	_html(`</ul>${_el_mark($scope0_id, "a")}`);
	_fill_global_subscribe("b1", $scope0_id, _client_guard($scope0_reason, 0));
	_scope($scope0_id, {});
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["b>", $setup$1], ["c>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0, _w1) => ` b/${_w0}&/${_w1}&`)(" b", " b")};${((_w0, _w1) => `<button>+</button>${_w0}${_w1}`)($template, $template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 2;
	_html(`<button>+</button>${_el_mark($scope0_id, "a")}`);
	_set_scope_reason(2);
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	rows_default({ n });
	_patch_child_end();
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
	const $childScope2 = _peek_scope_id($scope0_id, "c", 1);
	rows_default({ n: input.m });
	_patch_child_end();
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		g: n,
		b: _existing_scope($childScope),
		c: _existing_scope($childScope2)
	});
}, 1);
