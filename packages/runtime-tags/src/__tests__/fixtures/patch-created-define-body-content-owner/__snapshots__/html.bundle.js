// template.marko
const $Wrap_content2__walks = "D lD%l";
const $Wrap_content2__template = "<p> </p><div><!></div>";
_shells({
	a4: "a4 a10!a2; D%c%;<button><!>:<!></button>",
	a: "a !a7;b%b ;<!><!><button>+</button>",
	a6: /*@__PURE__*/ (() => `a6 >a>a12;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Wrap_content2__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Wrap_content2__template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	const $input_label__closures = /* @__PURE__ */ new Set();
	let count = 0;
	const Wrap = { content: _content("a0", ({ content }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason(), $scope3_page = _page_render();
		_html(`<p>${_text_resume($scope3_id, "a", count)}</p><div>`);
		_dynamic_tag($scope3_id, "b", content, {}, 0, 0, _write_guard($scope3_reason, 0), void 0, 2, $scope3_reason, 0);
		_html("</div>");
		$scope3_page && _subscribe($count__closures, _scope($scope3_id, { _: _scope_with_id($scope0_id) }), "a1");
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $if_content__n__closures = /* @__PURE__ */ new Set();
			let n = 0;
			_set_scope_reason(0);
			const $childScope = _patch_child($scope1_id, "a", void 0, $scope0_id);
			Wrap.content({ content: _content_elide("a4", () => {
				_scope_reason();
				const $scope2_page = _page_render();
				const $scope2_id = _scope_id();
				_html(`<button>${_patch_text($scope2_id, "b", input.label, void 0, $scope0_reason, 2)}:${_text_resume($scope2_id, "c", n, 2)}</button>${_el_resume($scope2_id, "a")}`);
				_script($scope2_id, "a2");
				_client_guard($scope0_reason, 2) && _patch_init($scope2_id, "a3");
				$scope2_page && _subscribe($if_content__n__closures, _subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) })));
			}, $scope1_id) });
			_patch_fill($scope1_id, "va5", n, 1);
			$scope0_page && _scope($scope1_id, {
				b: n,
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				j: $if_content__n__closures,
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 1), void 0, void 0, void 0, ["a6"], $scope0_reason, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a7");
	$scope0_page ? _scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.label,
		g: count,
		i: $count__closures,
		h: _write_if($scope0_reason, 2) && $input_label__closures
	}) : _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va8", input.label, !_server_guard($scope0_reason, 2));
}, 1);
