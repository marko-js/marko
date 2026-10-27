// tags/wrap/index.marko
_shells({ b: "b;D%;<div><!></div>" });
var wrap_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</div>");
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
_shells({ a: "a !a3; b%;<button>inc</button><!><!>" });
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
			_patch_child($scope1_id, "a", 0);
			wrap_default({ content: _content("a2", () => {
				_scope_reason();
				const $scope2_page = _page_render();
				const $scope2_id = _scope_id();
				_html(`<span>${_text_resume($scope2_id, "a", input.msg + ":0")}</span>`);
				$scope2_page && _subscribe($count__closures, _subscribe($wi__input_msg && $input_msg__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a0"), "a1");
			}, $scope1_id) });
			_patch_child_end();
			$scope0_page && _scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b", 1, 1, 0, 0, 1);
	_script($scope0_id, "a3");
	$scope0_page ? _scope($scope0_id, {
		e: input.msg,
		f: count,
		g: $wi__input_msg && $input_msg__closures,
		h: $count__closures
	}) : _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va4", input.msg, !_server_guard($scope0_reason, 0));
}, 1);
