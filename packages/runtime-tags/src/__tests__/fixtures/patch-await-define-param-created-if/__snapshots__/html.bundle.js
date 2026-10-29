// template.marko
const $Show_content__walks = "b%c";
const $Show_content__template = "<!><!><!>";
_shells({
	a2: "a2;D%c%;<p><!>:<!></p>",
	a: "a !a6; b%;<button class=open>inc</button><!><!>",
	a3: /*@__PURE__*/ (() => `a3 a10;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Show_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Show_content__template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=open>inc</button>${_el_resume($scope0_id, "a")}`);
	const Show = { content: _content("a4", ({ p, label }) => {
		const $scope2_id = _scope_id();
		const $Show_content__label__closures = /* @__PURE__ */ new Set();
		const $scope2_reason = _scope_reason(), $cg__label = _client_guard($scope2_reason, 1);
		_await($scope2_id, "a", p, (x) => {
			const $scope3_id = _scope_id();
			_html(`<p>${_text_resume($scope3_id, "a", label, 1, $scope2_reason, 1)}:${_text_resume($scope3_id, "b", x, 2, $scope2_reason, 0)}</p>`);
			_unfilled_if($scope2_reason, 1) && _patch_init($scope3_id, $cg__label ? "a0" : "a1");
			_subscribe(_unfilled_if($scope2_reason, 1) && $Show_content__label__closures, _scope($scope3_id, {}), $cg__label && "a1");
		}, 1, "a2", 1);
		_write_if($scope2_reason, 1) && _scope($scope2_id, { j: _unfilled_if($scope2_reason, 1) && $Show_content__label__closures });
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(2 | _mask_group($scope0_reason, 1) << 3);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			Show.content({
				p: Promise.resolve(n),
				label: input.label
			});
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "a5");
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["a3"], $scope0_reason, 0);
	_script($scope0_id, "a6");
	_scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.label,
		g: n
	}) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va7", input.label, !_server_guard($scope0_reason, 1));
}, 1);
