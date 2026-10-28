// template.marko
const $template = "<!><!><output> </output>";
const $walks = "b%bD l";
let n = 0;
const $setup = [[], []];
_shells({
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content !__tests__/template.marko_1; D l ;<label> </label><button>show</button>",
	"__tests__/template.marko_0_#text#0/await": "__tests__/template.marko_0_#text#0/await !__tests__/template.marko_1; D l ;<label> </label><button>show</button>",
	"__tests__/template.marko": "__tests__/template.marko;b%bD ;<!><!><output> </output>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_name = _client_guard($scope0_reason, 0), $cg__input_label = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_name__closures = new Set();
	const $input_label__closures = new Set();
	let shown = "";
	_await($scope0_id, "#text/0", Promise.resolve("u" + ++n), (uid) => {
		const $scope1_id = _scope_id();
		_patch_write($scope1_id, "PatchWrite:uid", uid);
		_html(`<label${_attr("for", `${uid}-${input.name}`, $scope1_id, "PatchAttr:#label/0 for", $scope0_reason, 0)}>${_text_resume($scope1_id, "#text/1", input.label, 1, $scope0_reason, 1)}</label>${_el_resume($scope1_id, "#label/0", _mask_group($scope0_reason, 0))}<button>show</button>${_el_resume($scope1_id, "#button/2")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, "__tests__/template.marko_1_input_name#0:4/subscribe");
		_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, $cg__input_label ? "__tests__/template.marko_1_input_label#0:5/init" : "__tests__/template.marko_1_input_label#0:5/subscribe");
		$cg__input_name && _patch_init($scope1_id, "__tests__/template.marko_1_input_name#0:4_uid#4/init");
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _subscribe(_unfilled_if($scope0_reason, 0) && $input_name__closures, _scope($scope1_id, { uid }, "__tests__/template.marko", "3:2", { uid: "3:8" }), $cg__input_name && "__tests__/template.marko_1_input_name#0:4/subscribe"), $cg__input_label && "__tests__/template.marko_1_input_label#0:5/subscribe");
	}, 1, "__tests__/template.marko_1*content", 1);
	_html(`<output>${_text_resume($scope0_id, "#text/1", shown)}</output>`);
	_scope($scope0_id, {
		"ClosureScopes:input_name/7": _write_if($scope0_reason, 0) && _unfilled_if($scope0_reason, 0) && $input_name__closures,
		"ClosureScopes:input_label/8": _write_if($scope0_reason, 1) && _unfilled_if($scope0_reason, 1) && $input_label__closures
	}, "__tests__/template.marko", 0);
}, 1);
