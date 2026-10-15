// tags/wrap/index.marko
_shells({ b: "b;D%;<div><!></div>" });
var wrap_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, $wg__input_content, void 0, 2, $scope0_reason, 0);
	_html("</div>");
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
_shells({
	a0: "a0;D ;<span> </span>",
	a: "a !a1; b%;<button>inc</button><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wi__input_msg = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_msg__closures = /* @__PURE__ */ new Set();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<button>inc</button>${_el_resume($scope0_id, "a")}`);
	if ($scope0_page) _if(() => {
		{
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			wrap_default({ content: _content_elide("a0", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html(`<span>${_text_resume($scope2_id, "a", input.msg + ":0")}</span>`);
				_subscribe($count__closures, _subscribe($wi__input_msg && $input_msg__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) })));
			}, $scope1_id) });
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b", 1, 1, 0, 0, 1);
	_script($scope0_id, "a1");
	_patch_value($scope0_id, "va3", count, 1);
	$scope0_page ? _scope($scope0_id, {
		e: input.msg,
		f: count,
		g: $wi__input_msg && $input_msg__closures,
		h: $count__closures
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "va2", input.msg);
}, 1);
