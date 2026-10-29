// template.marko
const $Card_content__walks = " D l%b%c";
const $Card_content__template = "<button> </button><!><!><!>";
_shells({
	a4: "a4;D ;<strong> </strong>",
	"~a4": "~a4;D ;<strong> </strong>",
	a2: "a2;D ;<em> </em>",
	"~a2": "~a2;D ;<em> </em>",
	a: "a !;b%;<!><!><!>",
	a3: /*@__PURE__*/ (() => `a3 !>>a>a7;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Card_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Card_content__template)}`)(),
	a5: /*@__PURE__*/ (() => `a5 !>a>a7;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Card_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Card_content__template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label__OR__input_show = _write_if($scope0_reason, 0), $cg__input_label = _client_guard($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 2), $wi__input_label = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const Card = { content: _content("a6", ({ n, content }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wi__n = _write_if($scope1_reason, 0);
		let x = 0;
		_html(`<button>${_text_resume($scope1_id, "b", x)}</button>${_el_resume($scope1_id, "a")}`);
		_dynamic_tag($scope1_id, "c", content, {}, 2, 0, 0, _write_guard($scope1_reason, 1), $scope1_reason, 1);
		_if(() => {
			if (n) {
				const $scope2_id = _scope_id();
				_set_scope_reason(_mask_group($scope1_reason, 0) << 1);
				const $childScope = _peek_scope_id($scope2_id, "a", 1, 0, $scope0_id);
				Card.content({
					n: n - 1,
					content: _content("a2", () => {
						_scope_reason();
						const $scope3_id = _scope_id();
						_html(`<em>${_text_resume($scope3_id, "a", input.label, 1, $scope0_reason, 1)}</em>`);
						_unfilled_if($scope0_reason, 1) && _patch_init($scope3_id, $cg__input_label ? "a0" : "a1");
						_subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope3_id, { _: ($wi__input_label__OR__input_show || $wi__n) && _scope_with_id($scope2_id) }));
					}, $scope2_id, 1)
				});
				_patch_child_end();
				_scope($scope2_id, {
					_: ($wi__input_label__OR__input_show || $wi__n) && _scope_with_id($scope1_id),
					a: _existing_scope($childScope)
				});
				return 0;
			}
		}, $scope1_id, "d", 1, _write_guard($scope1_reason, 0), 1, 0, 0, ["a3"], $scope1_reason, 0);
		_script($scope1_id, "a7");
		_patch_fill($scope1_id, "va8", x, 1);
		_scope($scope1_id, {
			i: x,
			_: ($wi__input_label__OR__input_show || $wi__n) && _scope_with_id($scope0_id)
		});
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope4_id = _scope_id();
			_set_scope_reason(0);
			const $childScope2 = _peek_scope_id($scope4_id, "a", 2, 0, $scope0_id);
			Card.content({
				n: 2,
				content: _content("a4", () => {
					_scope_reason();
					const $scope5_id = _scope_id();
					_html(`<strong>${_text_resume($scope5_id, "a", input.label, 1, $scope0_reason, 1)}</strong>`);
					$cg__input_label && _patch_init($scope5_id, "a9");
					_subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope5_id, {
						_: $wi__input_label__OR__input_show && _scope_with_id($scope4_id),
						Cf: $wi__input_label && 1
					}));
				}, $scope4_id, 1)
			});
			_patch_child_end();
			_scope($scope4_id, {
				_: $wi__input_label__OR__input_show && _scope_with_id($scope0_id),
				a: _existing_scope($childScope2)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a5"], $scope0_reason, 2);
	_scope($scope0_id, {
		d: input.label,
		f: $wi__input_label && $input_label__closures
	}) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 2) && _patch_fill($scope0_id, "va10", input.label, !_server_guard($scope0_reason, 1));
}, 1);
