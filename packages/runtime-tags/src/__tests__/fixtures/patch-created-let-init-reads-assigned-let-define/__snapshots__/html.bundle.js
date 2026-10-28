// template.marko
const $Body_content__walks = "D l";
const $Body_content__template = "<span> </span>";
const WORD = "w";
_shells({
	a0: "a0 !;D ;<span> </span>",
	"~a0": "~a0 !;D ;<span> </span>",
	a: "a !;b%;<!><!><!>",
	a7: /*@__PURE__*/ (() => `a7 a11!a3;${/*@__PURE__*/ ((_w0) => `b/${_w0}&D l D l`)($Body_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<p> </p><button> </button>`)($Body_content__template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let x = 1;
			let y = x;
			const Body = { content: _content("a0", ({ v, w }) => {
				const $scope2_id = _scope_id();
				const $scope2_reason = _scope_reason();
				_html(`<span>${_text_resume($scope2_id, "a", v + w, 1, $scope2_reason, 0)}</span>`);
				_client_guard($scope2_reason, 0) && _patch_init($scope2_id, "a2");
				_scope($scope2_id, {
					d: (_unfilled_if($scope2_reason, 2) || _unfilled_if($scope2_reason, 0) || _unfilled_if($scope2_reason, 1)) && v,
					e: _unfilled_if($scope2_reason, 1) && w
				}) || _filled_guard($scope2_reason, 2) && _client_guard($scope2_reason, 1) && _patch_fill($scope2_id, "va1", w, !_server_guard($scope2_reason, 2));
			}, $scope1_id, 1) };
			_set_scope_reason(10);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			Body.content({
				v: y,
				w: WORD
			});
			_patch_child_end();
			_html(`<p>${_text_resume($scope1_id, "b", input.a, 1, $scope0_reason, 1)}</p><button>${_text_resume($scope1_id, "d", x + input.a)}</button>${_el_resume($scope1_id, "c")}`);
			_script($scope1_id, "a3");
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "a4");
			_patch_fill($scope1_id, "va5", x, 1);
			_patch_fill($scope1_id, "va6", y, 1);
			_scope($scope1_id, {
				e: _write_if($scope0_reason, 1) && x,
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a7"], $scope0_reason, 0);
	_scope($scope0_id, { e: input.a }) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va8", input.a, !_server_guard($scope0_reason, 1));
}, 1);
