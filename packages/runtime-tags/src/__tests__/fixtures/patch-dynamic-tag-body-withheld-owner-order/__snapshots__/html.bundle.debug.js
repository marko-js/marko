// tags/keeper.marko
const $template$2 = "<button class=toggle>t</button><!><!>";
const $walks$2 = " b%c";
const $setup$2 = [[], ["__tests__/tags/keeper.marko_0"]];
_shells({ "__tests__/tags/keeper.marko": "__tests__/tags/keeper.marko !__tests__/tags/keeper.marko_0; b%;<button class=toggle>t</button><!><!>" });
var keeper_default = _template("__tests__/tags/keeper.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $fg__input_content = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button class=toggle>t</button>${_el_mark($scope0_id, "#button/0")}`);
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.content, {}, 0, 0, 0, $wg__input_content);
			_client_guard($scope0_reason, 0) && _patch_render($scope1_id, "__tests__/tags/keeper.marko_1_input_content#0:4/setup");
			_scope($scope1_id, {}, "__tests__/tags/keeper.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/tags/keeper.marko_0");
	$fg__input_content && _patch_render($scope0_id, "__tests__/tags/keeper.marko_1_input_content#0:4/setup", "input_content");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/keeper.marko_0_open#5/fill", open, 1);
	_scope($scope0_id, {
		input_content: input.content,
		open
	}, "__tests__/tags/keeper.marko", 0, {
		input_content: ["input.content"],
		open: "1:6"
	}) || $fg__input_content && _patch_write($scope0_id, "PatchMarkedWrite:input_content", input.content, !_server_guard($scope0_reason, 0));
});

// tags/plain.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/plain.marko": "__tests__/tags/plain.marko;b%;<!><!><!>" });
var plain_default = _template("__tests__/tags/plain.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_scope($scope0_id, {}, "__tests__/tags/plain.marko", 0);
});

// template.marko
const $D_content__walks = "b%b%c";
const $D_content__template = "<!><!><!><!>";
const $template = /*@__PURE__*/ ((_w0, _w1) => `<main>${_w0}${_w1}</main>`)($D_content__template, $D_content__template);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `D0${_w0}&/${_w1}&l`)($D_content__walks, $D_content__walks);
const $setup = [[], []];
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content",
	"__tests__/template.marko": `__tests__/template.marko;${((_w0, _w1) => `D0${_w0}&/${_w1}&l`)($D_content__walks, $D_content__walks)};${((_w0, _w1) => `<main>${_w0}${_w1}</main>`)($D_content__template, $D_content__template)}`
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_on = _write_guard($scope0_reason, 0), $wi__input_on = _write_if($scope0_reason, 0), $uf__input_on = _updates_from($scope0_reason, 0), $ui__input_a = _unfilled_if($scope0_reason, 1), $uf__input_a = _updates_from($scope0_reason, 1), $uf__input_b = _updates_from($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_on__closures = new Set();
	const D = { content: _content("__tests__/template.marko_1*content", ({ label, prev }) => {
		const $scope1_id = _scope_id(), $ui__input_on = _unfilled_if($scope0_reason, 0);
		const $D_content__label__closures = new Set();
		const $scope1_reason = _scope_reason(), $scope1_page = _page_render(), $cg__label = _client_guard($scope1_reason, 1), $wg__prev = _write_guard($scope1_reason, 2), $fg__prev = _filled_guard($scope1_reason, 2), $wi__label = _write_if($scope1_reason, 1);
		const X = { content: _content_resume("__tests__/template.marko_2*content", () => {
			const $scope2_id = _scope_id();
			const $scope2_reason = _scope_reason();
			_html(`<em>${_text_mark($scope2_id, "#text/0", label, 1, $scope1_reason, 1)}</em>`);
			_unfilled_if($scope1_reason, 1) && _patch_subscribe($scope2_id, "__tests__/template.marko_2_label#1:4/subscribe", $cg__label);
			_subscribe(_unfilled_if($scope1_reason, 1) && $D_content__label__closures, _scope($scope2_id, { _: ($wi__input_on || $wi__label) && _scope_with_id($scope1_id) }, "__tests__/template.marko", "4:4"), $cg__label && "__tests__/template.marko_2_label#1:4/subscribe");
		}, $scope1_id, ($scope) => $scope1_page ? [{ label }] : []) };
		_dynamic_tag($scope1_id, "#text/0", input.on ? keeper_default : plain_default, { content: X }, 1, 0, 0, $wg__input_on, $scope0_reason, 0, 0, void 0, 0, 0, "__tests__/template.marko_2*content");
		_dynamic_tag($scope1_id, "#text/1", input.on ? keeper_default : plain_default, { content: prev }, 9, 0, 0, $wg__input_on || $wg__prev, $uf__input_on << 1, 0, 0, void 0, 0, 0, "__tests__/template.marko_2*content");
		const $return = X;
		_patch_render($scope1_id, "__tests__/template.marko_1_input_on#0:5_prev#5/setup", ((_filled_guard($scope0_reason, 0) ? " >input_on" : "") + ($fg__prev ? " prev" : "")).slice(1), $uf__input_on << 1, 0);
		($wi__input_on || _write_if($scope1_reason, 0)) && _subscribe(_unfilled_if($uf__input_on << 1, 0) && $wi__input_on && $input_on__closures, _scope($scope1_id, {
			label: $wi__input_on && ($ui__input_on || _unfilled_if($scope1_reason, 1)) && label,
			prev: $wi__input_on && $ui__input_on && prev,
			X: $ui__input_on && X,
			_: $wi__input_on && _scope_with_id($scope0_id),
			"ClosureScopes:label/10": $wi__label && $D_content__label__closures
		}, "__tests__/template.marko", "3:2", {
			label: "3:13",
			prev: "3:20",
			X: "4:11"
		}), _client_guard($uf__input_on << 1, 0) && "__tests__/template.marko_1_input_on#0:5/subscribe", $wg__input_on || $wg__prev || $wg__input_on) || (_filled_guard($scope1_reason, 1) && (_client_branch_if("__tests__/template.marko_2*content", $scope1_id) || _client_guard($scope0_reason, 0) || $ui__input_on) && _patch_write($scope1_id, "PatchMarkedWrite:label", label, !_server_guard($scope1_reason, 1)) && _patch_subscribers($scope1_id, "__tests__/template.marko_1_label#4/subscribers", "label"), $fg__prev && $ui__input_on && _patch_write($scope1_id, "PatchMarkedWrite:prev", prev, 1));
		return $return;
	}, $scope0_id) };
	_html("<main>");
	_set_scope_reason($uf__input_a << 1 | $uf__input_a << 3);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 2, $ui__input_a && 1);
	let first = D.content({ label: input.a });
	$ui__input_a && _var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_first#8/var");
	_patch_child_end();
	_set_scope_reason($uf__input_b << 1 | $uf__input_b << 3);
	const $childScope2 = _peek_scope_id($scope0_id, "#childScope/2", 3);
	D.content({
		label: input.b,
		prev: first
	});
	_patch_child_end();
	_html("</main>");
	_scope($scope0_id, {
		"ClosureScopes:input_on/9": $wi__input_on && $input_on__closures,
		"#childScope/0": _existing_scope($childScope),
		"#childScope/2": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, { input_on: ["input.on"] });
}, 1);
