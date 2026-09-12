// tags/panel.marko
const $template$1 = "<section><h2>Panel</h2><div class=aside><!></div></section>";
const $walks = "DbD%m";
_shells({ c: "c;DbD%;<section><h2>Panel</h2><div class=aside><!></div></section>" });
var panel_default = _template_persisted("c", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_aside = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section><h2>Panel</h2><div class=aside>");
	const $tag = input.aside;
	_dynamic_tag($scope0_id, "a", $tag, {}, 0, 0, $sg__input_aside, _patch_dynamic_tag($scope0_id, "a", $tag, 0, 0, 0, $scope0_owned, 0));
	_html("</div></section>");
	$scope0_reason && _scope($scope0_id, {});
}, 0, 0);

// page.marko
const ITEMS = ["a", "b"];
const $template = "<!><!><!>";
_shells({
	a0: "a0;D l%;<span> </span><!><!>",
	a: "a;b%;<!><!><!>",
	a1: /*@__PURE__*/ ((_w0, _w1) => `a1;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks), $template$1),
	a2: "a2;b%;<!><!><!>",
	a3: "a3,<p>down</p>",
	a4: "a4,<p>up</p>"
});
var page_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_down = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_down__closures = /* @__PURE__ */ new Set();
	_for_of(ITEMS, (m) => {
		const $scope1_id = _scope_id();
		_set_serialize_reason(0);
		const $childScope = _peek_scope_id();
		_patch_child($scope1_id, "a", $childScope);
		panel_default({ aside: attrTag({ content: _content_elide("a0", () => {
			_persisted_reason();
			const $scope2_id = _scope_id();
			_html(`<span>${_patch_text($scope2_id, "a", m)}</span>`);
			_if(() => {
				if (m === "b") {
					const $scope3_id = _scope_id();
					_if(() => {
						if (input.down) {
							const $scope4_id = _scope_id();
							_html("<p>down</p>");
							$scope0_reason && _scope($scope4_id, {});
							return 0;
						} else {
							const $scope5_id = _scope_id();
							_html("<p>up</p>");
							$scope0_reason && _scope($scope5_id, {});
							return 1;
						}
					}, $scope3_id, "a", 1, $sg__input_down, $sg__input_down, void 0, void 0, ["a3", "a4"], $scope0_owned, 0);
					$scope0_reason && _subscribe(_unfilled_if($scope0_owned, 0) && $input_down__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }));
					return 0;
				}
			}, $scope2_id, "b", 1, 0, 0, void 0, void 0, ["a2"]);
			_scope($scope2_id, { _: _scope_with_id($scope1_id) });
		}, $scope1_id) }) });
		_scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			a: _existing_scope($childScope)
		});
	}, 0, $scope0_id, "a", 1, 1, 0, void 0, void 0, "a1", 0, 0);
	$scope0_reason && _scope($scope0_id, { e: $input_down__closures });
}, 0, () => [panel_default]);

// template.marko
_shells({
	b: "b;b%;<!><!><!>",
	b0: /*@__PURE__*/ ((_w0, _w1) => `b0;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c"), /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template))
});
var template_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_serialize_reason({ 0: _mask_group($scope0_owned, 2) });
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "a", $childScope);
			page_default({ down: input.down });
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["b0"], $scope0_owned, 1);
	$scope0_reason && _scope($scope0_id, { e: input.down });
}, 1, () => [page_default]);
