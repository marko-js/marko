// tags/keep.marko
const $template = "<button class=reset>reset</button><div><!></div>";
const $walks = " bD%l";
const $setup = [[], ["b0"]];
_shells({ b: "b !b0; bD%;<button class=reset>reset</button><div><!></div>" });
var keep_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<button class=reset>reset</button>${_el_resume($scope0_id, "a")}<div>`);
	_dynamic_tag($scope0_id, "b", c, {}, void 0, void 0, void 0, void 0, 2, (_mask_group($scope0_reason, 0) & 1) << 1, 0, 1);
	_html("</div>");
	_script($scope0_id, "b0");
	$scope0_page ? _scope($scope0_id, { e: input.content }) : (_content_withhold(input.content), _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "we", input.content, !_server_guard($scope0_reason, 0)));
});

// template.marko
_shells({
	a4: "a4",
	a: "a !;b%;<!><!><!>",
	a6: /*@__PURE__*/ ((_w0) => `a6${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	_for_of(input.bs, (b) => {
		const $scope1_id = _scope_id();
		const $for_content__b__closures = /* @__PURE__ */ new Set();
		_filled_guard($scope0_reason, 0) && _patch_fill($scope1_id, "va5", b);
		_set_scope_reason(0);
		const $childScope = _patch_child($scope1_id, "a");
		keep_default({ content: _content_resume("a4", () => {
			_scope_reason();
			const $scope2_page = _page_render();
			const $scope2_id = _scope_id();
			_html(`${_patch_text($scope2_id, "a", b, void 0, $scope0_reason, 0)}:${_patch_text($scope2_id, "b", input.note, 2, $scope0_reason, 1)}`);
			_unfilled_if($scope0_reason, 1) && _patch_init($scope2_id, _client_guard($scope0_reason, 1) ? "a0" : "a1");
			_unfilled_if($scope0_reason, 0) && _patch_init($scope2_id, _client_guard($scope0_reason, 0) ? "a2" : "a3");
			$scope2_page && _subscribe(_unfilled_if($scope0_reason, 0) && $for_content__b__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_note__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) })));
		}, $scope1_id) });
		$scope0_page && _scope($scope1_id, {
			c: b,
			_: _scope_with_id($scope0_id),
			g: _write_if($scope0_reason, 0) && $for_content__b__closures,
			a: _existing_scope($childScope)
		});
	}, 0, $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "a6", $scope0_reason, 0);
	$scope0_page ? _scope($scope0_id, {
		e: input.note,
		f: _write_if($scope0_reason, 1) && $input_note__closures
	}) : _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va7", input.note, !_server_guard($scope0_reason, 1));
}, 1);
