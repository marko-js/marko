// tags/get.marko
const $template$2 = "<button>map value</button><button>set member</button><button>map key</button>";
const $walks$2 = " b b b";
const $setup$2 = [[], []];
_shells({ "__tests__/tags/get.marko": "__tests__/tags/get.marko; b b ;<button>map value</button><button>set member</button><button>map key</button>" });
var get_default = _template("__tests__/tags/get.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_m = _filled_guard($scope0_reason, 0), $fg__input_s = _filled_guard($scope0_reason, 1), $fg__input_k = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html(`<button>map value</button>${_el_mark($scope0_id, "#button/0")}<button>set member</button>${_el_mark($scope0_id, "#button/1")}<button>map key</button>${_el_mark($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/tags/get.marko_0_input_k#7", 1, $fg__input_k);
	_script($scope0_id, "__tests__/tags/get.marko_0_input_s#6", 1, $fg__input_s);
	_script($scope0_id, "__tests__/tags/get.marko_0_input_m#5", 1, $fg__input_m);
	_scope($scope0_id, {
		input_m: input.m,
		input_s: input.s,
		input_k: input.k
	}, "__tests__/tags/get.marko", 0, {
		input_m: ["input.m"],
		input_s: ["input.s"],
		input_k: ["input.k"]
	}) || ($fg__input_m && _patch_write($scope0_id, "PatchMarkedWrite:input_m", input.m, !_server_guard($scope0_reason, 0)), $fg__input_s && _patch_write($scope0_id, "PatchMarkedWrite:input_s", input.s, !_server_guard($scope0_reason, 1)), $fg__input_k && _patch_write($scope0_id, "PatchMarkedWrite:input_k", input.k, !_server_guard($scope0_reason, 2)));
});

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
	const $scope0_reason = _scope_reason(), $uf__input_label = _updates_from($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 1), $cg__input_label = _client_guard($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	_filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 1)) && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_label#4/subscribers", "input_label");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope2 = _peek_scope_id($scope1_id, "#childScope/0", 1);
			card_default({ content: _content_resume("__tests__/template.marko_2*content", () => {
				const $scope2_reason = _scope_reason();
				const $scope2_id = _scope_id();
				const f = _bind_resume(function() {
					console.log("fn", input.label);
				}, "__tests__/template.marko_2/f", $scope2_id);
				_set_scope_reason($uf__input_label << 1 | $uf__input_label << 3 | $uf__input_label << 5);
				const $childScope = _peek_scope_id($scope2_id, "#childScope/0", 0);
				get_default({
					m: new Map([["k", f]]),
					s: new Set([f]),
					k: new Map([[f, 1]])
				});
				_patch_child_end();
				$cg__input_label && _patch_render($scope2_id, "__tests__/template.marko_2_input_label#0:4/subscribe");
				_subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					"#childScope/0": $wi__input_label && _existing_scope($childScope)
				}, "__tests__/template.marko", "2:4"), $cg__input_label && "__tests__/template.marko_2_input_label#0:4/subscribe", 0);
				_write_guard($scope0_reason, 1) && _resume_branch($scope2_id);
			}, $scope1_id) });
			_patch_child_end();
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope2)
			}, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_scope($scope0_id, {
		input_label: input.label,
		"ClosureScopes:input_label/5": $wi__input_label && $input_label__closures
	}, "__tests__/template.marko", 0, { input_label: ["input.label"] });
}, 1);
