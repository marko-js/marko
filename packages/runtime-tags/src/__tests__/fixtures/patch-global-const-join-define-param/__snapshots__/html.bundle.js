// template.marko
const $Show_content__walks = "b%c";
const $Show_content__template = "<!><!><!>";
_shells({ a: `a !a3;${((_w0) => ` b/${_w0}&b`)($Show_content__walks)};${((_w0) => `<button>toggle</button>${_w0}<!>`)($Show_content__template)}` });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let on = true;
	_html(`<button>toggle</button>${_el_mark($scope0_id, "a")}`);
	const Show = { content: _content("a0", ({ v }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $scope1_page = _page_render(), $wg__v = _write_guard($scope1_reason, 0);
		const flag = $global$1.flag;
		_if(() => {
			if (flag && v) {
				const $scope2_id = _scope_id();
				_html("<b>shown</b>");
				_scope($scope2_id, {});
				return 0;
			}
		}, $scope1_id, "a", $scope1_page || $wg__v, $scope1_page || $wg__v, 0, 0, 1);
		_fill_global_subscribe("a1", $scope1_id);
		_unfilled_if($scope1_reason, 0) && _patch_write($scope1_id, "wd", v, 1);
		_patch_render($scope1_id, "a2", [_filled_guard($scope1_reason, 0) && "d", "e"], 6, 0);
		_scope($scope1_id, {
			d: _unfilled_if($scope1_reason, 0) && v,
			e: _unfilled_if($scope1_reason, 0) && flag
		}) || _unfilled_if($scope1_reason, 0) && _patch_write($scope1_id, "xe", flag);
	}, $scope0_id) };
	_set_scope_reason(2);
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	Show.content({ v: on });
	_patch_child_end();
	_script($scope0_id, "a3");
	_scope($scope0_id, {
		c: on,
		b: _existing_scope($childScope)
	});
}, 1);
