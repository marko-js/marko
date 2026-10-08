// tags/widget/index.marko
const $template = "<section><!></section>";
_shells({ b: "b;D%;<section><!></section>" });
var widget_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<section>");
	const $tag = input.content;
	_dynamic_tag($scope0_id, "a", $tag, {}, 0, 0, $wg__input_content, void 0, _patch_dynamic_tag($scope0_id, "a", $tag, 0, 0, 0, $scope0_reason, 0));
	_html("</section>");
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
_shells({
	a0: "a0;b%;<!><!><!>",
	a1: "a1;b%;<!><!><!>",
	a: /*@__PURE__*/ (() => `a !a6;${((_w0) => `D/${_w0}&%b l`)("D%l")};${((_w0) => `<main>${_w0}<!><button>+</button></main>`)($template)}`)(),
	a2: "a2;Db%;<i>B:<!></i>",
	a3: "a3,<b>A</b>"
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_kind = _source_guard($scope0_reason, 0), $wg__input_inner = _source_guard($scope0_reason, 1), $wi__input_inner = _source_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_kind__closures = /* @__PURE__ */ new Set();
	const $input_inner__closures = /* @__PURE__ */ new Set();
	let open = true;
	_html("<main>");
	_set_scope_reason(0);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	widget_default({ content: _content_elide("a1", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_if(() => {
			if (input.kind === "a") {
				const $scope6_id = _scope_id();
				_html("<b>A</b>");
				$scope0_page && _scope($scope6_id, {});
				return 0;
			} else if (input.kind === "b") {
				const $scope2_id = _scope_id();
				_html(`<i>B:${_patch_text($scope2_id, "a", input.kind, 2, $scope0_reason, 0)}</i>`);
				_client_guard($scope0_reason, 0) && _patch_init($scope2_id, "a4");
				_subscribe(_unfilled_if($scope0_reason, 0) && $input_kind__closures, _scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					Ci: 1
				}));
				return 1;
			}
		}, $scope1_id, "a", 1, $wg__input_kind, void 0, void 0, void 0, ["a3", "a2"], $scope0_reason, 0);
		_client_guard($scope0_reason, 0) && _patch_init($scope1_id, "a5");
		$scope0_page && _subscribe(_unfilled_if($scope0_reason, 0) && $input_kind__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
		$wg__input_kind || $scope0_page && _resume_branch($scope1_id);
	}, $scope0_id) });
	if ($scope0_page) _if(() => {
		{
			const $scope3_id = _scope_id();
			widget_default({ content: _content_elide("a0", () => {
				_scope_reason();
				const $scope4_id = _scope_id();
				if ($scope0_page) _if(() => {
					if (input.inner === "a") {
						const $scope7_id = _scope_id();
						_html("<b>A</b>");
						$scope0_page && _scope($scope7_id, {});
						return 0;
					} else if (input.inner === "b") {
						const $scope5_id = _scope_id();
						_html(`<i>B:${_text_resume($scope5_id, "a", input.inner, $wg__input_inner * 2)}</i>`);
						_subscribe($wi__input_inner && $input_inner__closures, _scope($scope5_id, {
							_: _scope_with_id($scope4_id),
							Cj: 1
						}));
						return 1;
					}
				}, $scope4_id, "a", $wg__input_inner, $wg__input_inner, 0, 0, 1);
				_subscribe($wi__input_inner && $input_inner__closures, _scope($scope4_id, { _: _scope_with_id($scope3_id) }));
				$wg__input_inner || _resume_branch($scope4_id);
			}, $scope3_id) });
			_scope($scope3_id, {});
			return 0;
		}
	}, $scope0_id, "b", 1, 1, 0, 0, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a6");
	_patch_value($scope0_id, "a8", open, 1);
	$scope0_page ? _scope($scope0_id, {
		g: input.inner,
		h: open,
		i: $input_kind__closures,
		a: _existing_scope($childScope),
		j: $input_inner__closures
	}) : _filled_guard($scope0_reason, 1) && _patch_value($scope0_id, "a7", input.inner);
}, 1);
