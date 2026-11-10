// tags/child.marko
const $template = "<div></div><!><!>";
const $walks = " b%c";
const $setup$1 = [[], []];
_shells({
	b: "b; b%;<div></div><!><!>",
	b1: "b1;D ;<p> </p>"
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_b = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html(`<div></div>${_el_mark($scope0_id, "a")}`);
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id(), $ui__input_b = _unfilled_if($scope0_reason, 1), $fg__input_items = _filled_guard($scope0_reason, 2);
		$fg__input_items && $ui__input_b && _patch_write($scope1_id, "xc", item, !_server_guard($scope0_reason, 2));
		const d = input.b + item;
		_html(`<p>${_text_mark($scope1_id, "a", d, 1, $scope0_reason, 0)}</p>`);
		_patch_render($scope1_id, "b0", ((_filled_guard($scope0_reason, 1) ? " >e" : "") + ($fg__input_items ? " c" : "")).slice(1), $scope0_reason, 0);
		_scope($scope1_id, {
			c: ($ui__input_b || _unfilled_if($scope0_reason, 0)) && item,
			_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "b", 1, 1, 1, 0, 0, "b1", $scope0_reason, 2);
	_script($scope0_id, "b2", 1, $fg__input_b);
	$fg__input_b && _client_guard($scope0_reason, 2) && _patch_render($scope0_id, "b3", "e");
	_scope($scope0_id, { e: input.b }) || $fg__input_b && _patch_write($scope0_id, "xe", input.b, !_server_guard($scope0_reason, 1));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `/${_w0}& b`)($walks)};${((_w0) => `${_w0}<button class=l>l</button>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let list = ["p", "q"];
	_set_scope_reason(38 | _updates_from($scope0_reason, 0) << 3);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	child_default({
		b: input.b,
		items: list
	});
	_patch_child_end();
	_html(`<button class=l>l</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		f: list,
		a: _existing_scope($childScope)
	});
}, 1);
