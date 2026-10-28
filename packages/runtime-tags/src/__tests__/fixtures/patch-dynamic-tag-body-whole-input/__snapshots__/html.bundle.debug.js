// tags/show-header.marko
const $template$3 = "<!><!><!>";
const $walks$3 = "b%c";
const $setup$3 = [[], []];
_shells({ "__tests__/tags/show-header.marko": "__tests__/tags/show-header.marko;b%;<!><!><!>" });
var show_header_default = _template("__tests__/tags/show-header.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_header = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", input.header, {}, 2, 0, 0, $wg__input_header, $scope0_reason, 0);
	_scope($scope0_id, {}, "__tests__/tags/show-header.marko", 0);
});

// tags/card.marko
const $template$2 = "<button class=toggle>toggle</button><!><!>";
const $walks$2 = " b%c";
const $setup$2 = [[], ["__tests__/tags/card.marko_0"]];
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko !__tests__/tags/card.marko_0; b%;<button class=toggle>toggle</button><!><!>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			show_header_default(input);
			_patch_child_end();
			_scope($scope1_id, { "#childScope/0": _write_if($scope0_reason, 0) && _existing_scope($childScope) }, "__tests__/tags/card.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/card.marko_fill0", open, 1);
	_scope($scope0_id, {
		open,
		input_header: input.header
	}, "__tests__/tags/card.marko", 0, {
		open: "1:6",
		input_header: ["input.header"]
	}) || (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/card.marko_fill1", input.header, !_server_guard($scope0_reason, 0)), _content_withhold(input.header));
});

// tags/plain.marko
const $template$1 = "<span><!></span>";
const $walks$1 = "D%l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/plain.marko": "__tests__/tags/plain.marko;D%;<span><!></span>" });
var plain_default = _template("__tests__/tags/plain.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_header = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<span>");
	_dynamic_tag($scope0_id, "#text/0", input.header, {}, 2, 0, 0, $wg__input_header, $scope0_reason, 0);
	_html("</span>");
	_scope($scope0_id, {}, "__tests__/tags/plain.marko", 0);
});

// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content",
	"__tests__/template.marko": "__tests__/template.marko !;D%;<main><!></main>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_on = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_note__closures = new Set();
	const H = { content: _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<em>${_text_resume($scope1_id, "#text/0", input.note, void 0, $scope0_reason, 1)}</em>`);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, _client_guard($scope0_reason, 1) ? "__tests__/template.marko_1_input_note#0:3/init" : "__tests__/template.marko_1_input_note#0:3/subscribe");
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_note__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:2"));
	}, $scope0_id) };
	_html("<main>");
	_dynamic_tag($scope0_id, "#text/0", input.on ? card_default : plain_default, { header: H }, 1, 0, 0, $wg__input_on, $scope0_reason, 2);
	_html("</main>");
	_scope($scope0_id, {
		input_note: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 1)) && input.note,
		H: _unfilled_if($scope0_reason, 2) && H,
		"ClosureScopes:input_note/7": _write_if($scope0_reason, 1) && $input_note__closures
	}, "__tests__/template.marko", 0, {
		input_note: ["input.note"],
		H: "3:9"
	}) || _filled_guard($scope0_reason, 1) && (_content_withheld("__tests__/template.marko_1*content", $scope0_id) || _client_guard($scope0_reason, 2)) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.note, !_server_guard($scope0_reason, 1));
}, 1);
