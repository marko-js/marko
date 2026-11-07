// tags/card.marko
const $template$2 = "<button class=toggle>toggle</button><!><!>";
const $walks$2 = " b%c";
const $setup$2 = [[], ["__tests__/tags/card.marko_0"]];
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko !__tests__/tags/card.marko_0; b%;<button class=toggle>toggle</button><!><!>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $fg__input_content = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button class=toggle>toggle</button>${_el_mark($scope0_id, "#button/0")}`);
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.content, {}, 0, 0, 0, $wg__input_content);
			_client_guard($scope0_reason, 0) && _patch_render($scope1_id, "__tests__/tags/card.marko_1_input_content#0:4/setup");
			_scope($scope1_id, {}, "__tests__/tags/card.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/tags/card.marko_0");
	$fg__input_content && _patch_render($scope0_id, "__tests__/tags/card.marko_1_input_content#0:4/setup", "input_content");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/card.marko_fill0", open, 1);
	_scope($scope0_id, {
		input_content: input.content,
		open
	}, "__tests__/tags/card.marko", 0, {
		input_content: ["input.content"],
		open: "1:6"
	}) || $fg__input_content && _patch_write($scope0_id, "PatchMarkedWrite:input_content", input.content, !_server_guard($scope0_reason, 0));
});

// tags/plain.marko
const $template$1 = "<section><!></section>";
const $walks$1 = "D%l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/plain.marko": "__tests__/tags/plain.marko;D%;<section><!></section>" });
var plain_default = _template("__tests__/tags/plain.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</section>");
	_scope($scope0_id, {}, "__tests__/tags/plain.marko", 0);
});

// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content",
	"__tests__/template.marko": "__tests__/template.marko;D%;<main><!></main>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_p = _write_guard($scope0_reason, 3), $wi__input_on__OR__input_p__OR__input_note = _write_if($scope0_reason, 1), $wg__input_on = _write_guard($scope0_reason, 2), $fg__input_p = _filled_guard($scope0_reason, 3), $cg__input_on = _client_guard($scope0_reason, 2), $fg__input_note = _filled_guard($scope0_reason, 4), $cg__input_on__OR__input_p = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_note__closures = new Set();
	const $input_p__closures = new Set();
	_html("<main>");
	_dynamic_tag($scope0_id, "#text/0", input.on ? card_default : "div", {}, 10, _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $scope1_page = _page_render();
		_dynamic_tag($scope1_id, "#text/0", input.p ? plain_default : "span", {}, 2, _content_resume("__tests__/template.marko_2*content", () => {
			const $scope2_id = _scope_id();
			const $scope2_reason = _scope_reason();
			_html(`<em>${_text_mark($scope2_id, "#text/0", input.note, 1, $scope0_reason, 4)}</em>`);
			_unfilled_if($scope0_reason, 4) && _patch_subscribe($scope2_id, "__tests__/template.marko_2_input_note#0:5/subscribe", _client_guard($scope0_reason, 4));
			_subscribe(_unfilled_if($scope0_reason, 4) && $input_note__closures, _scope($scope2_id, { _: $wi__input_on__OR__input_p__OR__input_note && _scope_with_id($scope1_id) }, "__tests__/template.marko", "5:8"));
		}, $scope1_id, ($scope) => $scope1_page ? [{ input_note: input.note }, { _: $scope($scope0_id) }] : []), 0, $wg__input_p, $scope0_reason, 3, 0, void 0, 0, 0, "__tests__/template.marko_2*content");
		_unfilled_if($scope0_reason, 3) && _patch_subscribe($scope1_id, "__tests__/template.marko_1_input_p#0:4/subscribe", _client_guard($scope0_reason, 3));
		$wi__input_on__OR__input_p__OR__input_note && _subscribe(_unfilled_if($scope0_reason, 3) && $input_p__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:6"));
		$wg__input_p || $wi__input_on__OR__input_p__OR__input_note && _resume_branch($scope1_id);
	}, $scope0_id, ($scope2) => $scope0_page ? [{
		input_note: input.note,
		input_p: input.p
	}] : []), 0, $wg__input_on, $scope0_reason, 2, 0, void 0, 0, 0, "__tests__/template.marko_1*content");
	_html("</main>");
	$fg__input_p && (_client_branch_if("__tests__/template.marko_1*content", $scope0_id) || $cg__input_on) && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_p#4/subscribers", "input_p");
	$fg__input_note && (_client_branch_if("__tests__/template.marko_1*content", $scope0_id) || _client_branch_if("__tests__/template.marko_2*content", $scope0_id) || $cg__input_on__OR__input_p) && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_note#5/subscribers", "input_note");
	_scope($scope0_id, {
		input_p: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.p,
		input_note: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 4)) && input.note,
		"ClosureScopes:input_note/7": _write_if($scope0_reason, 4) && $input_note__closures,
		"ClosureScopes:input_p/6": _write_if($scope0_reason, 3) && $input_p__closures
	}, "__tests__/template.marko", 0, {
		input_p: ["input.p"],
		input_note: ["input.note"]
	}) || ($fg__input_p && (_client_branch_if("__tests__/template.marko_1*content", $scope0_id) || $cg__input_on) && _patch_write($scope0_id, "PatchMarkedWrite:input_p", input.p, !_server_guard($scope0_reason, 3)), $fg__input_note && (_client_branch_if("__tests__/template.marko_1*content", $scope0_id) || _client_branch_if("__tests__/template.marko_2*content", $scope0_id) || $cg__input_on__OR__input_p) && _patch_write($scope0_id, "PatchMarkedWrite:input_note", input.note, !_server_guard($scope0_reason, 4)));
}, 1);
