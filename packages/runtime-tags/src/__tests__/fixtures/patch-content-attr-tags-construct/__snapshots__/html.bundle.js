// tags/card/index.marko
const $template = "<section><header><!></header><h2> </h2><!></section>";
const $walks = "E%lD l%l";
_shells({ b: "b;E%lD l%;<section><header><!></header><h2> </h2><!></section>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<section><header>");
	_dynamic_tag($scope0_id, "a", input.header, {}, 0, 0, _write_guard($scope0_reason, 0), void 0, 2, $scope0_reason, 0);
	_html(`</header><h2>${_patch_text($scope0_id, "b", input.title, void 0, $scope0_reason, 1)}</h2>`);
	_dynamic_tag($scope0_id, "c", input.content, {}, 0, 0, _write_guard($scope0_reason, 2), void 0, 2, $scope0_reason, 2);
	_html("</section>");
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
_shells({
	a0: "a0,<b>static header</b>",
	a1: "a1,body",
	a: "a !; ;<main></main>",
	a2: /*@__PURE__*/ ((_w0) => `a2;${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 3);
			const $childScope = _patch_child($scope1_id, "a");
			card_default({
				title: input.title,
				header: attrTag({ content: _content_elide("a0", () => {
					_scope_reason();
					_scope_id();
					_html("<b>static header</b>");
				}, $scope1_id) }),
				content: _content_elide("a1", () => {
					_scope_reason();
					_scope_id();
					_html("body");
				}, $scope1_id)
			});
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a2"], $scope0_reason, 0);
	_html(`</main>${_el_resume($scope0_id, "a", $wg__input_show)}`);
	$scope0_page ? _scope($scope0_id, { e: _unfilled_if($scope0_reason, 0) && input.title }) : _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_value($scope0_id, "va3", input.title, !_server_guard($scope0_reason, 1));
}, 1);
