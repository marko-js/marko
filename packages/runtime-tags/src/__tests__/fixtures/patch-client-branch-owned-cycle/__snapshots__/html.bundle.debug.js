// tags/get.marko
const $template$2 = "<button>array</button><button>set</button><button>map</button><p> </p>";
const $walks$2 = " b b bD l";
const $setup$2 = [[], []];
_shells({ "__tests__/tags/get.marko": "__tests__/tags/get.marko; b b bD ;<button>array</button><button>set</button><button>map</button><p> </p>" });
var get_default = _template("__tests__/tags/get.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_a = _filled_guard($scope0_reason, 1), $fg__input_s = _filled_guard($scope0_reason, 3), $fg__input_m = _filled_guard($scope0_reason, 4), $fg__input_a_1_1_ = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let res = "";
	_html(`<button>array</button>${_el_mark($scope0_id, "#button/0")}<button>set</button>${_el_mark($scope0_id, "#button/1")}<button>map</button>${_el_mark($scope0_id, "#button/2")}<p>${_text_mark($scope0_id, "#text/3", res, 1, 0, 0, 1)}</p>`);
	_script($scope0_id, "__tests__/tags/get.marko_0_input_m#11", 1, $fg__input_m, "input_m");
	_script($scope0_id, "__tests__/tags/get.marko_0_input_s#10", 1, $fg__input_s, "input_s");
	_script($scope0_id, "__tests__/tags/get.marko_0_input_a_1_1_0#9", 1, $fg__input_a_1_1_, "input_a_1_1_0");
	_patch_render($scope0_id, "__tests__/tags/get.marko_0_input_a#6_input_s#10_input_m#11/setup", [
		$fg__input_a && "input_a",
		$fg__input_s && "input_s",
		$fg__input_m && "input_m"
	], $scope0_reason, 0) || _script($scope0_id, "__tests__/tags/get.marko_0_input_a#6_input_s#10_input_m#11", 1, ($fg__input_a || $fg__input_s || $fg__input_m) && (_client_guard($scope0_reason, 1) || _client_guard($scope0_reason, 3) || _client_guard($scope0_reason, 4) ? 2 : 1), [
		$fg__input_a && "input_a",
		$fg__input_s && "input_s",
		$fg__input_m && "input_m"
	]);
	_scope($scope0_id, {
		input_a: input.a,
		input_a_1_1_0: input.a?.[1]?.[1]?.[0],
		input_s: input.s,
		input_m: input.m
	}, "__tests__/tags/get.marko", 0, {
		input_a: ["input.a"],
		input_a_1_1_0: ["input.a[1][1][0]"],
		input_s: ["input.s"],
		input_m: ["input.m"]
	}) || ($fg__input_a && _patch_write($scope0_id, "PatchMarkedWrite:input_a", input.a, !_server_guard($scope0_reason, 1)), $fg__input_a_1_1_ && _patch_write($scope0_id, "PatchMarkedWrite:input_a_1_1_0", input.a?.[1]?.[1]?.[0], !_server_guard($scope0_reason, 2)), $fg__input_s && _patch_write($scope0_id, "PatchMarkedWrite:input_s", input.s, !_server_guard($scope0_reason, 3)), $fg__input_m && _patch_write($scope0_id, "PatchMarkedWrite:input_m", input.m, !_server_guard($scope0_reason, 4)));
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
	_scope($scope0_id, {}, "__tests__/tags/card.marko", 0) || _client_branch(input.content);
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
function mkArray(f) {
	const a = [f];
	a.push(a);
	return a;
}
function mkSet(f) {
	const s = new Set([f]);
	s.add(s);
	return s;
}
function mkMap(f) {
	const m = new Map([["f", f]]);
	m.set("self", m);
	return m;
}
const $setup = [[], []];
_shells({
	"__tests__/template.marko_2*content": `__tests__/template.marko_2*content${_shell_marker([[], []], ["#childScope/0>", $setup$2])}`,
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": `__tests__/template.marko_1*shell${_shell_marker([[], []], ["#childScope/0>", $setup$1])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${$template$1}`
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $fg__input_label = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	$fg__input_label && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 1));
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
				_set_scope_reason(_updates_from($scope0_reason, 1) << 1 | _updates_from($scope0_reason, 1) << 3 | _updates_from($scope0_reason, 1) << 5 | _updates_from($scope0_reason, 1) << 7 | _updates_from($scope0_reason, 1) << 9);
				const $childScope = _peek_scope_id($scope2_id, "#childScope/0", 0);
				get_default({
					a: mkArray(f),
					s: mkSet(f),
					m: mkMap(f)
				});
				_patch_child_end();
				_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope2_id, "__tests__/template.marko_2_input_label#0:4/subscribe", _client_guard($scope0_reason, 1));
				_subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					"#childScope/0": _existing_scope($childScope)
				}, "__tests__/template.marko", "5:4"));
				_resume_branch($scope2_id);
			}, $scope1_id) });
			_patch_child_end();
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope2)
			}, "__tests__/template.marko", "4:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	$fg__input_label && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_label#4/subscribers", "input_label");
	_scope($scope0_id, {
		input_label: input.label,
		"ClosureScopes:input_label/5": _write_if($scope0_reason, 1) && $input_label__closures
	}, "__tests__/template.marko", 0, { input_label: ["input.label"] });
}, 1);
