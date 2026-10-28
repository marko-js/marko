// tags/keeper.marko
const $template$2 = "<button class=toggle>t</button><!><!>";
const $walks$2 = " b%c";
const $setup$2 = [[], ["__tests__/tags/keeper.marko_0"]];
_shells({ "__tests__/tags/keeper.marko": "__tests__/tags/keeper.marko !__tests__/tags/keeper.marko_0; b%;<button class=toggle>t</button><!><!>" });
var keeper_default = _template("__tests__/tags/keeper.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button class=toggle>t</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.content, {}, 0, 0, 0, $wg__input_content);
			_scope($scope1_id, {}, "__tests__/tags/keeper.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/tags/keeper.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/keeper.marko_fill1", open, 1);
	_scope($scope0_id, {
		input_content: input.content,
		open
	}, "__tests__/tags/keeper.marko", 0, {
		input_content: ["input.content"],
		open: "1:6"
	}) || (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/keeper.marko_fill0", input.content, !_server_guard($scope0_reason, 0)), _content_withhold(input.content));
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
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko;${((_w0, _w1) => `D0${_w0}&/${_w1}&l`)($D_content__walks, $D_content__walks)};${((_w0, _w1) => `<main>${_w0}${_w1}</main>`)($D_content__template, $D_content__template)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_on = _write_guard($scope0_reason, 0), $wi__input_on = _write_if($scope0_reason, 0), $cg__input_on = _client_guard($scope0_reason, 0), $cg__input_a = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_on__closures = new Set();
	const D = { content: _content("__tests__/template.marko_1*content", ({ label, prev }) => {
		const $scope1_id = _scope_id();
		const $D_content__label__closures = new Set();
		const $scope1_reason = _scope_reason(), $wg__prev = _write_guard($scope1_reason, 2), $wi__label = _write_if($scope1_reason, 1), $wi__label__OR__prev = _write_if($scope1_reason, 0);
		const X = { content: _content_resume("__tests__/template.marko_2*content", () => {
			const $scope2_id = _scope_id();
			const $scope2_reason = _scope_reason();
			_html(`<em>${_text_resume($scope2_id, "#text/0", label, 1, $scope1_reason, 1)}</em>`);
			_unfilled_if($scope1_reason, 1) && _patch_init($scope2_id, _client_guard($scope1_reason, 1) ? "__tests__/template.marko_2_label#1:4/init" : "__tests__/template.marko_2_label#1:4/subscribe");
			_subscribe(_unfilled_if($scope1_reason, 1) && $D_content__label__closures, _scope($scope2_id, { _: ($wi__input_on || $wi__label) && _scope_with_id($scope1_id) }, "__tests__/template.marko", "4:4"));
		}, $scope1_id) };
		_dynamic_tag($scope1_id, "#text/0", input.on ? keeper_default : plain_default, { content: X }, 1, 0, 0, $wg__input_on, $scope0_reason, 0);
		_dynamic_tag($scope1_id, "#text/1", input.on ? keeper_default : plain_default, { content: prev }, 9, 0, 0, $wg__input_on || $wg__prev, (_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 2)) << 1, 0);
		const $return = X;
		$cg__input_on && _patch_write($scope1_id, "PatchMarkedWrite:prev", prev, !(_filled_guard($scope1_reason, 2) && $cg__input_on));
		$cg__input_on && _patch_write($scope1_id, "PatchWrite:X", X, 1);
		_patch_join_init($scope1_id, "__tests__/template.marko_1_input_on#0:5_prev#5/init", (_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 2)) << 1, 0, _filled_guard($scope0_reason, 0) && ">input_on", _filled_guard($scope1_reason, 2) && "prev");
		($wi__input_on || $wi__label__OR__prev) && _subscribe(_unfilled_if((_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 2)) << 1, 0) && $wi__input_on && $input_on__closures, _scope($scope1_id, {
			label: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope1_reason, 1)) && label,
			prev: _unfilled_if($scope0_reason, 0) && prev,
			X: _unfilled_if($scope0_reason, 0) && X,
			_: ($wi__input_on || _write_if($scope1_reason, 2)) && _scope_with_id($scope0_id),
			"ClosureScopes:label/10": $wi__label && $D_content__label__closures
		}, "__tests__/template.marko", "3:2", {
			label: "3:13",
			prev: "3:20",
			X: "4:11"
		}), _client_guard((_mask_group($scope0_reason, 0) | _mask_group($scope1_reason, 2)) << 1, 0) && "__tests__/template.marko_1_input_on#0:5/subscribe", $wg__input_on || $wg__prev || $wg__input_on) || _filled_guard($scope1_reason, 1) && (_content_withheld("__tests__/template.marko_2*content", $scope1_id) || $cg__input_on) && _patch_fill($scope1_id, "PatchFill:__tests__/template.marko_fill0", label, !_server_guard($scope1_reason, 1));
		$wg__input_on || $wg__prev || $wg__input_on || ($wi__input_on || $wi__label__OR__prev) && _resume_branch($scope1_id);
		return $return;
	}, $scope0_id) };
	_html("<main>");
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 1) << 3);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 2, $cg__input_a && 1);
	let first = D.content({ label: input.a });
	$cg__input_a && _var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_first#8/var");
	_patch_child_end();
	_set_scope_reason(_mask_group($scope0_reason, 2) << 1 | _mask_group($scope0_reason, 2) << 3);
	const $childScope2 = _peek_scope_id($scope0_id, "#childScope/2", 3);
	D.content({
		label: input.b,
		prev: first
	});
	_patch_child_end();
	_html("</main>");
	_scope($scope0_id, {
		input_on: input.on,
		"ClosureScopes:input_on/9": $wi__input_on && $input_on__closures,
		"#childScope/0": _existing_scope($childScope),
		"#childScope/2": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, { input_on: ["input.on"] });
}, 1);
