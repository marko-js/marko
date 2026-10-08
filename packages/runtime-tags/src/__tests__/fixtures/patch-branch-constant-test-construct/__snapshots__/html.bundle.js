// tags/panel.marko
const $template$1 = "<section><h2>Panel</h2><div class=aside><!></div></section>";
const $walks = "DbD%m";
_shells({ c: "c;DbD%;<section><h2>Panel</h2><div class=aside><!></div></section>" });
var panel_default = _template_patch("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_aside = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<section><h2>Panel</h2><div class=aside>");
	const $tag = input.aside;
	_dynamic_tag($scope0_id, "a", $tag, {}, 0, 0, $wg__input_aside, void 0, _patch_dynamic_tag($scope0_id, "a", $tag, 0, 0, 0, $scope0_reason, 0));
	_html("</div></section>");
	$scope0_page && _scope($scope0_id, {});
});

// page.marko
const $template = "<!><!><!>";
const ITEMS = ["a", "b"];
_shells({
	a0: "a0;D l%;<span> </span><!><!>",
	a: "a;b%;<!><!><!>",
	a1: /*@__PURE__*/ ((_w0) => `a1;${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template$1),
	a2: "a2;b%;<!><!><!>",
	a3: "a3,<p>down</p>",
	a4: "a4,<p>up</p>"
});
var page_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_down = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_down__closures = /* @__PURE__ */ new Set();
	_for_of(ITEMS, (m) => {
		const $scope1_id = _scope_id();
		_set_scope_reason(0);
		const $childScope = _peek_scope_id();
		_patch_child($scope1_id, "a", $childScope);
		panel_default({ aside: attrTag({ content: _content_elide("a0", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html(`<span>${_patch_text($scope2_id, "a", m, void 0, 0, 0)}</span>`);
			_if(() => {
				if (m === "b") {
					const $scope3_id = _scope_id();
					_if(() => {
						if (input.down) {
							const $scope4_id = _scope_id();
							_html("<p>down</p>");
							$scope0_page && _scope($scope4_id, {});
							return 0;
						} else {
							const $scope5_id = _scope_id();
							_html("<p>up</p>");
							$scope0_page && _scope($scope5_id, {});
							return 1;
						}
					}, $scope3_id, "a", 1, $wg__input_down, void 0, void 0, void 0, ["a3", "a4"], $scope0_reason, 0);
					_client_guard($scope0_reason, 0) && _patch_init($scope3_id, "a5");
					$scope0_page && _subscribe(_unfilled_if($scope0_reason, 0) && $input_down__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }));
					return 0;
				}
			}, $scope2_id, "b", 1, 0, void 0, void 0, void 0, ["a2"], 0, 0);
			_scope($scope2_id, { _: _scope_with_id($scope1_id) });
		}, $scope1_id) }) });
		_scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			a: _existing_scope($childScope)
		});
	}, 0, $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "a1", 0, 0);
	$scope0_page && _scope($scope0_id, { e: $input_down__closures });
});

// template.marko
_shells({
	b: "b !;b%;<!><!><!>",
	b0: /*@__PURE__*/ (() => `b0;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c")};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template)}`)()
});
var template_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _source_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 2) << 1);
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "a", $childScope);
			page_default({ down: input.down });
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["b0"], $scope0_reason, 1);
	$scope0_page ? _scope($scope0_id, { e: input.down }) : _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "b1", input.down);
}, 1);
