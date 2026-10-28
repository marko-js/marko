// template.marko
const $Show_content__walks = "D l";
const $Show_content__template = "<p> </p>";
_shells({
	a0: "a0 a6;D ;<p> </p>",
	"~a0": "~a0 a6;D ;<p> </p>",
	a: "a !;b%;<!><!><!>",
	a3: /*@__PURE__*/ (() => `a3 a>a6;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Show_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Show_content__template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_v = _client_guard($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $if_content__x__closures = /* @__PURE__ */ new Set();
			let x = input.v;
			const Show = { content: _content("a0", () => {
				const $scope2_id = _scope_id();
				_scope_reason();
				_html(`<p>${_text_resume($scope2_id, "a", x)}</p>`);
				_subscribe($if_content__x__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }));
			}, $scope1_id, 1) };
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			Show.content({});
			_patch_child_end();
			$cg__input_v && _patch_init($scope1_id, "a1");
			!$cg__input_v && _patch_fill($scope1_id, "va2", x, 1);
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				g: $if_content__x__closures,
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a3"], $scope0_reason, 0);
	_scope($scope0_id, { e: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.v }) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va4", input.v, !_server_guard($scope0_reason, 1));
}, 1);
