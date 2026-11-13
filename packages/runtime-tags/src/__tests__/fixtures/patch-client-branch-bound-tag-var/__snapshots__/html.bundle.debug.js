// tags/getter.marko
const $template$2 = "";
const $walks$2 = "";
const $setup$2 = [[], []];
_shells({ "__tests__/tags/getter.marko": "^__tests__/tags/getter.marko," });
var getter_default = _template("__tests__/tags/getter.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 0));
	const $return = _bind_resume(() => console.log("get", input.label), "__tests__/tags/getter.marko_0/_return", $scope0_id);
	_scope($scope0_id, { input_label: input.label }, "__tests__/tags/getter.marko", 0, { input_label: ["input.label"] });
	return $return;
});

// tags/card.marko
const $template$1 = "<section><button>clear</button><!><!></section>";
const $walks$1 = "D b%b%l";
const $setup$1 = [[], ["__tests__/tags/card.marko_0"]];
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko !__tests__/tags/card.marko_0;D b%b%;<section><button>clear</button><!><!></section>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_content = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<section><button>clear</button>${_el_mark($scope0_id, "#button/0")}`);
	_dynamic_tag($scope0_id, "#text/1", c, {}, 2, 0, 0, 1, $cg__input_content << 1, 0, 1);
	_dynamic_tag($scope0_id, "#text/2", c, {}, 10, 0, 0, 1, $cg__input_content << 1, 0, 1);
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
	const $scope0_reason = _scope_reason(), $wg__input_label__OR__input_tag = _write_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 2), $wi__input_tag = _write_if($scope0_reason, 3), $cg__input_label = _client_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $input_tag__closures = new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope2 = _peek_scope_id($scope1_id, "#childScope/0", 2);
			card_default({ content: _content_resume("__tests__/template.marko_2*content", () => {
				const $scope2_reason = _scope_reason();
				const $scope2_id = _scope_id();
				_set_scope_reason(_updates_from($scope0_reason, 2) << 1);
				const $childScope = _peek_scope_id($scope2_id, "#childScope/0", 0);
				let get = getter_default({ label: input.label });
				$wi__input_label && _var($scope2_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_2_get#3/var");
				_patch_child_end();
				_dynamic_tag($scope2_id, "#text/2", input.tag, { onClick: get }, 8, _content_resume("__tests__/template.marko_3*content", () => {
					const $scope3_id = _scope_id();
					const $scope3_reason = _scope_reason();
					_html("x");
				}, $scope2_id), 0, $wg__input_label__OR__input_tag);
				$cg__input_label && _patch_render($scope2_id, "__tests__/template.marko_2_input_label#0:4/subscribe");
				_patch_render($scope2_id, "__tests__/template.marko_2_input_tag#0:5_get#3/setup", ((_filled_guard($scope0_reason, 3) ? " >>input_tag" : "") + (_filled_guard($scope0_reason, 2) ? " get" : "")).slice(1), $scope0_reason, 0);
				_subscribe($wi__input_tag && $input_tag__closures, _subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, {
					get: $wi__input_tag && get,
					_: _scope_with_id($scope1_id),
					"#childScope/0": $wi__input_label && _existing_scope($childScope)
				}, "__tests__/template.marko", "2:4", { get: "3:13" }), $cg__input_label && "__tests__/template.marko_2_input_label#0:4/subscribe", $wg__input_label__OR__input_tag), _client_guard($scope0_reason, 3) && "__tests__/template.marko_2_input_tag#0:5/subscribe", $wg__input_label__OR__input_tag);
				$wg__input_label__OR__input_tag || (_write_guard($scope0_reason, 2) || _write_guard($scope0_reason, 3)) && _resume_branch($scope2_id);
			}, $scope1_id) });
			_patch_child_end();
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope2)
			}, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	_scope($scope0_id, {
		input_label: input.label,
		input_tag: input.tag,
		"ClosureScopes:input_label/6": $wi__input_label && $input_label__closures,
		"ClosureScopes:input_tag/7": $wi__input_tag && $input_tag__closures
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		input_tag: ["input.tag"]
	}) || (_filled_guard($scope0_reason, 2) && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 2)) && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_label#4/subscribers", "input_label"), _filled_guard($scope0_reason, 3) && _patch_write($scope0_id, "PatchMarkedWrite:input_tag", input.tag, !_server_guard($scope0_reason, 3)) && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_tag#5/subscribers", "input_tag"));
}, 1);
