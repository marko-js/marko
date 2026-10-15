// tags/box/index.marko
_shells({ b: "b;D%;<div class=box><!></div>" });
var box_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<div class=box>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, $wg__input_content, void 0, 2, $scope0_reason, 0);
	_html("</div>");
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
_shells({
	a0: "a0;D ;<p> </p>",
	a: "a !a1;D%b ;<main><!><button>+</button></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_title = _write_guard($scope0_reason, 0), $scope0_page = _page_render(), $wi__input_title = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_title__closures = /* @__PURE__ */ new Set();
	let open = true;
	_html("<main>");
	if ($scope0_page) _if(() => {
		{
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			box_default({ content: _content_elide("a0", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html(`<p>${_text_resume($scope2_id, "a", "t:" + input.title, $wg__input_title)}</p>`);
				_subscribe($wi__input_title && $input_title__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }));
				$wg__input_title || _resume_branch($scope2_id);
			}, $scope1_id) });
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a", 1, 1, 0, 0, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a1");
	_patch_value($scope0_id, "va3", open, 1);
	$scope0_page ? _scope($scope0_id, {
		e: input.title,
		f: open,
		g: $wi__input_title && $input_title__closures
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "va2", input.title);
}, 1);
