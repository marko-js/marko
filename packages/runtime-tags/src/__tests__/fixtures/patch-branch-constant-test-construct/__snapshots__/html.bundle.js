// tags/panel.marko
const $template$1 = "<section><h2>Panel</h2><div class=aside><!></div></section>";
const $walks = "DbD%m";
const $setup$1 = [[], []];
_shells({ c: "c;DbD%;<section><h2>Panel</h2><div class=aside><!></div></section>" });
var panel_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_aside = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section><h2>Panel</h2><div class=aside>");
	_dynamic_tag($scope0_id, "a", input.aside, {}, 2, 0, 0, $wg__input_aside, $scope0_reason, 0);
	_html("</div></section>");
	_scope($scope0_id, {});
});

// page.marko
const $template = "<!><!><!>";
const ITEMS = ["a", "b"];
const $setup = [[], []];
_shells({
	a1: "a1;D l%;<span> </span><!><!>",
	a: "a;b%;<!><!><!>",
	a2: /*@__PURE__*/ ((_w0) => `a2${_shell_marker(_shell_setup([[], []], ["a>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template$1),
	a3: "a3;b%;<!><!><!>",
	a0: "a0,<p>down</p>",
	a4: "a4,<p>up</p>"
});
var page_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_down = _write_if($scope0_reason, 0), $wg__input_down = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_down__closures = /* @__PURE__ */ new Set();
	_for_of(ITEMS, (m) => {
		const $scope1_id = _scope_id();
		_set_scope_reason(0);
		const $childScope = _peek_scope_id($scope1_id, "a", 0);
		panel_default({ aside: attrTag({ content: _content("a1", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html(`<span>${_text_resume($scope2_id, "a", m, 1, 0, 0)}</span>`);
			_if(() => {
				if (m === "b") {
					const $scope3_id = _scope_id();
					_if(() => {
						if (input.down) {
							const $scope4_id = _scope_id();
							_html("<p>down</p>");
							$wi__input_down && _scope($scope4_id, {});
							return 0;
						} else {
							const $scope5_id = _scope_id();
							_html("<p>up</p>");
							$wi__input_down && _scope($scope5_id, {});
							return 1;
						}
					}, $scope3_id, "a", 1, $wg__input_down, 1, 0, 0, ["a0", "a4"], $scope0_reason, 0);
					_client_guard($scope0_reason, 0) && _patch_init($scope3_id, "a5");
					$wi__input_down && _subscribe(_unfilled_if($scope0_reason, 0) && $input_down__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }));
					return 0;
				}
			}, $scope2_id, "b", 1, 0, 1, 0, 0, ["a3"], 0, 0);
			_scope($scope2_id, { _: $wi__input_down && _scope_with_id($scope1_id) });
		}, $scope1_id, 1) }) });
		_patch_child_end();
		_scope($scope1_id, {
			_: $wi__input_down && _scope_with_id($scope0_id),
			a: _existing_scope($childScope)
		});
	}, 0, $scope0_id, "a", 1, 1, 1, 0, 0, "a2", 0, 0);
	_scope($scope0_id, { e: $wi__input_down && _unfilled_if($scope0_reason, 0) && $input_down__closures });
});

// template.marko
_shells({
	b: "b !;b%;<!><!><!>",
	b1: /*@__PURE__*/ (() => `b1${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c")};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template)}`)()
});
var template_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			page_default({ down: input.down });
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "b0");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["b1"], $scope0_reason, 0);
	_scope($scope0_id, { e: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.down }) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb2", input.down, !_server_guard($scope0_reason, 1));
}, 1);
