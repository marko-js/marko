// card-a.marko
const $template$2 = "<div class=a> </div>";
const $walks$2 = "D l";
_shells({ "__tests__/card-a.marko": "__tests__/card-a.marko;D ;<div class=a> </div>" });
var card_a_default = _template("__tests__/card-a.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<div class=a>${_patch_text($scope0_id, "#text/0", input.user.name, void 0, $scope0_reason, 0)}</div>`);
	$scope0_page && _scope($scope0_id, {}, "__tests__/card-a.marko", 0);
});

// card-b.marko
const $template$1 = "<div class=b> </div>";
const $walks$1 = "D l";
_shells({ "__tests__/card-b.marko": "__tests__/card-b.marko;D ;<div class=b> </div>" });
var card_b_default = _template("__tests__/card-b.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<div class=b>${_patch_text($scope0_id, "#text/0", input.user.name, void 0, $scope0_reason, 0)}</div>`);
	$scope0_page && _scope($scope0_id, {}, "__tests__/card-b.marko", 0);
});

// template.marko
const $template = "<button class=inc> </button><!><!><!><!><!>";
const $walks = " D l%b%b%b%c";
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content,",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content,",
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; D l%b%b%b%;<button class=inc> </button><!><!><!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=inc>${_text_resume($scope0_id, "#text/1", n)}</button>${_el_resume($scope0_id, "#button/0")}`);
	const Row = { content: _content_resume("__tests__/template.marko_1*content", ({ user }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<p>${_patch_text($scope1_id, "#text/0", user.name)}</p>`);
		_scope($scope1_id, {}, "__tests__/template.marko", "6:2");
	}, $scope0_id) };
	const Alt = { content: _content_resume("__tests__/template.marko_2*content", ({ user }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		_html(`<i>${_patch_text($scope2_id, "#text/0", user.name)}</i>`);
		_scope($scope2_id, {}, "__tests__/template.marko", "7:2");
	}, $scope0_id) };
	_dynamic_tag($scope0_id, "#text/2", input.which ? card_a_default : card_b_default, { user: input.user }, 0, 0, _write_guard($scope0_reason, 0), void 0, 1, $scope0_reason, 0);
	_dynamic_tag($scope0_id, "#text/3", input.alt ? Alt : Row, { user: input.user2 }, 0, 0, _write_guard($scope0_reason, 1), void 0, 1, $scope0_reason, 1);
	_dynamic_tag($scope0_id, "#text/4", input.tag, {
		class: input.cls,
		title: input.title
	}, 0, 0, _write_guard($scope0_reason, 6), void 0, 1, $scope0_reason, 6);
	_dynamic_tag($scope0_id, "#text/5", input.none ? card_a_default : null, { user: input.hidden }, 0, 0, _write_guard($scope0_reason, 5), void 0, 1, $scope0_reason, 5);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_write($scope0_id, "PatchWrite:input_which", input.which, 1);
	_patch_write($scope0_id, "PatchWrite:input_user", input.user, 1);
	_patch_write($scope0_id, "PatchWrite:input_alt", input.alt, 1);
	_patch_write($scope0_id, "PatchWrite:input_user2", input.user2, 1);
	_patch_write($scope0_id, "PatchWrite:input_tag", input.tag, 1);
	_patch_write($scope0_id, "PatchWrite:input_cls", input.cls, 1);
	_patch_write($scope0_id, "PatchWrite:input_title", input.title, 1);
	_patch_write($scope0_id, "PatchWrite:input_none", input.none, 1);
	_patch_write($scope0_id, "PatchWrite:input_hidden", input.hidden, 1);
	_patch_write($scope0_id, "PatchWrite:Row", Row, 1);
	_patch_write($scope0_id, "PatchWrite:Alt", Alt, 1);
	_patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", n, 1);
	$scope0_page && _scope($scope0_id, {
		input_which: (_unfilled_if($scope0_reason, 8) || _unfilled_if($scope0_reason, 0)) && input.which,
		input_user: (_unfilled_if($scope0_reason, 7) || _unfilled_if($scope0_reason, 0)) && input.user,
		input_alt: (_unfilled_if($scope0_reason, 10) || _unfilled_if($scope0_reason, 1)) && input.alt,
		input_user2: (_unfilled_if($scope0_reason, 9) || _unfilled_if($scope0_reason, 1)) && input.user2,
		input_tag: (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 6)) && input.tag,
		input_cls: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 6)) && input.cls,
		input_title: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 6)) && input.title,
		input_none: (_unfilled_if($scope0_reason, 12) || _unfilled_if($scope0_reason, 5)) && input.none,
		input_hidden: (_unfilled_if($scope0_reason, 11) || _unfilled_if($scope0_reason, 5)) && input.hidden,
		n,
		Row: _unfilled_if($scope0_reason, 1) && Row,
		Alt: _unfilled_if($scope0_reason, 1) && Alt
	}, "__tests__/template.marko", 0, {
		input_which: ["input.which"],
		input_user: ["input.user"],
		input_alt: ["input.alt"],
		input_user2: ["input.user2"],
		input_tag: ["input.tag"],
		input_cls: ["input.cls"],
		input_title: ["input.title"],
		input_none: ["input.none"],
		input_hidden: ["input.hidden"],
		n: "4:6",
		Row: "6:9",
		Alt: "7:9"
	});
}, 1);
