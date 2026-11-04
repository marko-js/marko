// template.marko
const $Inner_content__walks = "b%c";
const $Inner_content__template = "<!><!><!>";
const $Outer_content__walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Inner_content__walks);
const $Outer_content__template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Inner_content__template);
_shells({
	a: `a !a5;${((_w0) => `b/${_w0}& b`)($Outer_content__walks)};${((_w0) => `<!>${_w0}<button>+</button>`)($Outer_content__template)}`,
	a2: "a2;b%;<!><!><!>",
	a1: "a1;D ;<em> </em>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	const Inner = { content: _content("a3", ({ v, show }) => {
		const $scope1_id = _scope_id();
		const $Inner_content__v__closures = /* @__PURE__ */ new Set();
		const $scope1_reason = _scope_reason(), $wi__v__OR__show = _write_if($scope1_reason, 0), $wg__show = _write_guard($scope1_reason, 2), $wi__v = _write_if($scope1_reason, 1);
		_if(() => {
			if (show) {
				const $scope3_id = _scope_id();
				_for_of([1, 2], (i) => {
					const $scope4_id = _scope_id();
					_html(`<em>${_text_mark($scope4_id, "a", v, 1, $scope1_reason, 1)}</em>`);
					_patch_render($scope4_id, "a0");
					_subscribe($Inner_content__v__closures, _scope($scope4_id, { _: $wi__v__OR__show && _scope_with_id($scope3_id) }), "a0");
				}, 0, $scope3_id, "a", 1, 1, 1, 0, 0, "a1", 0, 0);
				_scope($scope3_id, { _: $wi__v__OR__show && _scope_with_id($scope1_id) });
				return 0;
			}
		}, $scope1_id, "a", 1, $wg__show, 1, 0, 0, ["a2"], $scope1_reason, 2);
		$wi__v__OR__show && _scope($scope1_id, {
			d: _write_if($scope1_reason, 2) && v,
			f: $wi__v && $wi__v && $Inner_content__v__closures
		});
	}, $scope0_id) };
	const Outer = { content: _content("a4", ({ v, show }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		_set_scope_reason(14 | _updates_from($scope2_reason, 2) << 5);
		const $childScope = _peek_scope_id($scope2_id, "a", 0);
		Inner.content({
			v,
			show
		});
		_patch_child_end();
		_scope($scope2_id, { a: _existing_scope($childScope) });
	}, $scope0_id) };
	_set_scope_reason(14 | _updates_from($scope0_reason, 0) << 5);
	const $childScope2 = _peek_scope_id($scope0_id, "a", 1);
	Outer.content({
		v: count,
		show: input.show
	});
	_patch_child_end();
	_html(`<button>+</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a5");
	_scope($scope0_id, {
		f: count,
		a: _existing_scope($childScope2)
	});
}, 1);
