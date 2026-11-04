// tags/row.marko
const $template = "<li><span> </span><button>Pick</button></li>";
const $walks = "E l l";
const $setup = [[], []];
_shells({ b: "b;E l ;<li><span> </span><button>Pick</button></li>" });
var row_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_onPick = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html(`<li><span>${_text_mark($scope0_id, "a", input.item.name, 1, $scope0_reason, 0)}</span><button>Pick</button>${_el_mark($scope0_id, "b")}</li>`);
	_script($scope0_id, "b0", 1, $fg__input_onPick, "g");
	_scope($scope0_id, { g: input.onPick }) || $fg__input_onPick && _patch_write($scope0_id, "xg", input.onPick, !_server_guard($scope0_reason, 1));
});

// template.marko
_shells({
	a: "a;D l ;<output> </output><ul></ul>",
	a1: `a1${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${$template}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $sg__input_items = _server_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let selected = -1;
	_html(`<output>${_text_mark($scope0_id, "a", selected)}</output><ul>`);
	_for_of(input.items, (item, i) => {
		const $scope1_id = _scope_id();
		_filled_guard($scope0_reason, 0) && _patch_write($scope1_id, "xd", i, !$sg__input_items);
		_set_scope_reason(_updates_from($scope0_reason, 0) << 1 | ($scope0_page ? 3 : 0) << 3);
		const $childScope = _peek_scope_id($scope1_id, "a", 0);
		row_default({
			item,
			onPick: _resume(function() {
				selected = selected + i + 10;
			}, "a0", $scope1_id)
		});
		_patch_child_end();
		_scope($scope1_id, {
			d: i,
			_: _scope_with_id($scope0_id),
			a: _existing_scope($childScope)
		});
	}, "id", $scope0_id, "b", 1, 1, 1, 0, 0, "a1", $scope0_reason, 0);
	_html(`</ul>${_el_mark($scope0_id, "b")}`);
	_scope($scope0_id, { f: selected });
}, 1);
