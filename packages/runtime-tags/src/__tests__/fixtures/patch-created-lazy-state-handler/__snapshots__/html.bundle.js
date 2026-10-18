// tags/picker.marko
const $template = "<button>pick</button>";
_shells({ b: "b !b0; ;<button>pick</button>" });
var picker_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<button>pick</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	$scope0_page ? _scope($scope0_id, { d: input.onPick }) : _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "wd", input.onPick, !_server_guard($scope0_reason, 0));
});

// template.marko
const $Picker_withLoadAssets = withLoadAssets(picker_default, flush, "_b");
_shells({
	a: "a;b%bD ;<!><!><span> </span>",
	a1: /*@__PURE__*/ (() => `a1;${/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)(" b")};${/*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(($scope0_page ? 1 : 0) << 1);
			const $childScope = _patch_child($scope1_id, "b");
			$Picker_withLoadAssets({ onPick: _resume(function() {
				count++;
			}, "a0", $scope1_id) });
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				b: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["a1"], $scope0_reason, 0);
	_html(`<span>${_text_resume($scope0_id, "b", count)}</span>`);
	_patch_value($scope0_id, "va2", count, 1);
	$scope0_page && _scope($scope0_id, { f: count });
}, 1);
