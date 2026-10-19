// tags/row.marko
const $template = "<li><span> </span><button>Pick</button></li>";
const $walks = "E l l";
_shells({ b: "b;E l ;<li><span> </span><button>Pick</button></li>" });
var row_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<li><span>${_patch_text($scope0_id, "a", input.item.name, void 0, $scope0_reason, 0)}</span><button>Pick</button>${_el_resume($scope0_id, "b")}</li>`);
	_script($scope0_id, "b0", 1, 1);
	_filled_guard($scope0_reason, 1) && _patch_effect($scope0_id, _client_guard($scope0_reason, 1) ? "hb0" : "eb0", "g");
	$scope0_page ? _scope($scope0_id, { g: input.onPick }) : _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "wg", input.onPick, !_server_guard($scope0_reason, 1));
});

// template.marko
_shells({
	a: "a !;D l ;<output> </output><ul></ul>",
	a1: /*@__PURE__*/ ((_w0) => `a1;${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let selected = -1;
	_html(`<output>${_text_resume($scope0_id, "a", selected)}</output><ul>`);
	_for_of(input.items, (item, i) => {
		const $scope1_id = _scope_id();
		_filled_guard($scope0_reason, 0) && _patch_write($scope1_id, "wd", i, !_server_guard($scope0_reason, 0));
		_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | ($scope0_page ? 3 : 0) << 3);
		const $childScope = _patch_child($scope1_id, "a");
		row_default({
			item,
			onPick: _resume(function() {
				selected = selected + i + 10;
			}, "a0", $scope1_id)
		});
		_scope($scope1_id, {
			d: i,
			_: _scope_with_id($scope0_id),
			a: _existing_scope($childScope)
		});
	}, "id", $scope0_id, "b", 1, void 0, void 0, void 0, void 0, "a1", $scope0_reason, 0);
	_html(`</ul>${_el_resume($scope0_id, "b")}`);
	_patch_value($scope0_id, "va2", selected, 1);
	$scope0_page && _scope($scope0_id, { f: selected });
}, 1);
