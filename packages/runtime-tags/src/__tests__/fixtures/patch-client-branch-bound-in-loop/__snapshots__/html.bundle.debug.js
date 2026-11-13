// tags/card.marko
const $template$1 = "<section><button>clear</button><!></section>";
const $walks$1 = "D b%l";
const $setup$1 = [[], ["__tests__/tags/card.marko_0"]];
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko !__tests__/tags/card.marko_0;D b%;<section><button>clear</button><!></section>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<section><button>clear</button>${_el_mark($scope0_id, "#button/0")}`);
	_dynamic_tag($scope0_id, "#text/1", c, {}, 2, 0, 0, 1, _client_guard($scope0_reason, 0) << 1, 0, 1);
	_html("</section>");
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_scope($scope0_id, {}, "__tests__/tags/card.marko", 0);
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": `__tests__/template.marko_1*shell${_shell_marker([[], []], ["#childScope/0>", $setup$1])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${$template$1}`
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_rows = _write_guard($scope0_reason, 2), $cg__input_rows = _client_guard($scope0_reason, 2), $wg__input_rows__OR__input_tag__OR__input_label = _write_guard($scope0_reason, 0), $wi__input_rows = _write_if($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1), $wi__input_tag = _write_if($scope0_reason, 3), $wi__input_label = _write_if($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_tag__closures = new Set();
	const $input_label__closures = new Set();
	const $input_rows__closures = new Set();
	_filled_guard($scope0_reason, 4) && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 4)) && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_label#6/subscribers", "input_label");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 1);
			card_default({ content: _content_resume("__tests__/template.marko_2*content", () => {
				const $scope2_reason = _scope_reason();
				const $scope2_id = _scope_id();
				_html("<ul>");
				_for_of(input.rows, (r) => {
					const $scope3_id = _scope_id();
					const $for_content__r_label__closures = new Set();
					_html("<li>");
					_dynamic_tag($scope3_id, "#text/0", input.tag, { onClick: _bind_resume(function() {
						console.log(r.label, input.label);
					}, "__tests__/template.marko_3/onClick", $scope3_id) }, 0, _content_resume("__tests__/template.marko_4*content", () => {
						const $scope4_id = _scope_id();
						const $scope4_reason = _scope_reason();
						_html(_text_mark($scope4_id, "#text/0", r.label, $wg__input_rows * 2));
						$cg__input_rows && _patch_render($scope4_id, "__tests__/template.marko_4_r_label#3:3/subscribe");
						_write_if($scope0_reason, 0) && _subscribe($wi__input_rows && $for_content__r_label__closures, _scope($scope4_id, { _: _scope_with_id($scope3_id) }, "__tests__/template.marko", "5:16"), $cg__input_rows && "__tests__/template.marko_4_r_label#3:3/subscribe", $wg__input_rows);
					}, $scope3_id), 0, $wg__input_rows__OR__input_tag__OR__input_label);
					_html("</li>");
					_patch_render($scope3_id, "__tests__/template.marko_3_input_tag#0:5_input_label#0:6_r_label#3/setup", ((_filled_guard($scope0_reason, 3) ? " >>>input_tag" : "") + (_filled_guard($scope0_reason, 4) ? " >>>input_label" : "") + (_filled_guard($scope0_reason, 2) ? " r_label" : "")).slice(1), $scope0_reason, 0);
					_subscribe($wi__input_label && $input_label__closures, _subscribe($wi__input_tag && $input_tag__closures, _scope($scope3_id, {
						r_label: r?.label,
						_: _scope_with_id($scope2_id),
						"ClosureScopes:r_label/10": $wi__input_rows && $for_content__r_label__closures
					}, "__tests__/template.marko", "4:8", { r_label: ["r.label", "4:12"] }), _client_guard($scope0_reason, 3) && "__tests__/template.marko_3_input_tag#0:5/subscribe", $wg__input_rows__OR__input_tag__OR__input_label), _client_guard($scope0_reason, 4) && "__tests__/template.marko_3_input_label#0:6/subscribe", $wg__input_rows__OR__input_tag__OR__input_label);
					$wg__input_rows__OR__input_tag__OR__input_label || (_write_guard($scope0_reason, 3) || _write_guard($scope0_reason, 4)) && _resume_branch($scope3_id);
				}, "id", $scope2_id, "#ul/0", $wg__input_rows, $wg__input_rows, $wg__input_rows, "</ul>", 1);
				$cg__input_rows && _patch_render($scope2_id, "__tests__/template.marko_2_input_rows#0:4/subscribe");
				_subscribe($wi__input_rows && $input_rows__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "2:4"), $cg__input_rows && "__tests__/template.marko_2_input_rows#0:4/subscribe", $wg__input_rows);
			}, $scope1_id) });
			_patch_child_end();
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	_scope($scope0_id, {
		input_rows: input.rows,
		input_tag: input.tag,
		input_label: input.label,
		"ClosureScopes:input_tag/8": $wi__input_tag && $input_tag__closures,
		"ClosureScopes:input_label/9": $wi__input_label && $input_label__closures,
		"ClosureScopes:input_rows/7": $wi__input_rows && $input_rows__closures
	}, "__tests__/template.marko", 0, {
		input_rows: ["input.rows"],
		input_tag: ["input.tag"],
		input_label: ["input.label"]
	}) || (_filled_guard($scope0_reason, 2) && _patch_write($scope0_id, "PatchMarkedWrite:input_rows", input.rows, !_server_guard($scope0_reason, 2)) && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_rows#4/subscribers", "input_rows"), _filled_guard($scope0_reason, 3) && _patch_write($scope0_id, "PatchMarkedWrite:input_tag", input.tag, !_server_guard($scope0_reason, 3)) && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_tag#5/subscribers", "input_tag"));
}, 1);
