// template.marko
const $Inner_content__walks = "b%c";
const $Inner_content__template = "<!><!><!>";
const $Outer_content__walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Inner_content__walks);
const $Outer_content__template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Inner_content__template);
_shells({
	a: /*@__PURE__*/ (() => `a !a5;${((_w0) => `b/${_w0}& b`)($Outer_content__walks)};${((_w0) => `<!>${_w0}<button>+</button>`)($Outer_content__template)}`)(),
	a1: "a1;D ;<em> </em>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	const Inner = { content: _content("a2", ({ v, show }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__show = _write_guard($scope1_reason, 1);
		_if(() => {
			if (show) {
				const $scope3_id = _scope_id();
				_html(`<em>${_text_resume($scope3_id, "a", v, 1, $scope1_reason, 0)}</em>`);
				_client_guard($scope1_reason, 0) && _patch_init($scope3_id, "a0");
				_scope($scope3_id, { _: _write_if($scope1_reason, 0) && _scope_with_id($scope1_id) });
				return 0;
			}
		}, $scope1_id, "a", 1, $wg__show, 1, 0, 0, ["a1"], $scope1_reason, 1);
		_write_if($scope1_reason, 1) && _scope($scope1_id, { d: (_unfilled_if($scope1_reason, 1) || _unfilled_if($scope1_reason, 0)) && v }) || _filled_guard($scope1_reason, 0) && _client_guard($scope1_reason, 1) && _patch_fill($scope1_id, "va3", v, !_server_guard($scope1_reason, 0));
	}, $scope0_id) };
	const Outer = { content: _content("a4", ({ v, show }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		_set_scope_reason(_mask_group($scope2_reason, 0) << 1 | _mask_group($scope2_reason, 1) << 3);
		const $childScope = _peek_scope_id($scope2_id, "a", 0);
		Inner.content({
			v,
			show
		});
		_patch_child_end();
		_scope($scope2_id, { a: _existing_scope($childScope) });
	}, $scope0_id) };
	_set_scope_reason(2 | _mask_group($scope0_reason, 0) << 3);
	const $childScope2 = _peek_scope_id($scope0_id, "a", 1);
	Outer.content({
		v: count,
		show: input.show
	});
	_patch_child_end();
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a5");
	_scope($scope0_id, {
		f: count,
		a: _existing_scope($childScope2)
	});
}, 1);
