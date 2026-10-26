// tags/large-label.marko
const $template$2 = "<strong><!> <!> <!></strong>";
const $walks$2 = "D%c%c%l";
const $setup$2 = [[], []];
_shells({ "__tests__/tags/large-label.marko": "__tests__/tags/large-label.marko;D%c%c%;<strong><!> <!> <!></strong>" });
var large_label_default = _template("__tests__/tags/large-label.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<strong>${_patch_text($scope0_id, "#text/0", input.message, void 0, $scope0_reason, 0)} ${_patch_text($scope0_id, "#text/1", input.count, 2, $scope0_reason, 1)} ${_patch_text($scope0_id, "#text/2", input.label, 2, $scope0_reason, 2)}</strong>`);
	$scope0_page && _scope($scope0_id, {}, "__tests__/tags/large-label.marko", 0);
});

// tags/small-label.marko
const $template$1 = "<small><!> <!> <!></small>";
const $walks$1 = "D%c%c%l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/small-label.marko": "__tests__/tags/small-label.marko;D%c%c%;<small><!> <!> <!></small>" });
var small_label_default = _template("__tests__/tags/small-label.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<small>${_patch_text($scope0_id, "#text/0", input.message, void 0, $scope0_reason, 0)} ${_patch_text($scope0_id, "#text/1", input.count, 2, $scope0_reason, 1)} ${_patch_text($scope0_id, "#text/2", input.label, 2, $scope0_reason, 2)}</small>`);
	$scope0_page && _scope($scope0_id, {}, "__tests__/tags/small-label.marko", 0);
});

// template.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
function boom(error) {
	throw error;
}
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;D ;<p> </p>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content __tests__/template.marko_1_input_large#0:5/subscribe __tests__/template.marko_1_input_label#0:6/subscribe __tests__/template.marko_1_count#0:8/init __tests__/template.marko_1_input_large#0:5_input_label#0:6_count#0:8_err_message#3/init",
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; D l%;<button> </button><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_error = _client_guard($scope0_reason, 2), $scope0_page = _page_render(), $wi__input_large = _write_if($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 1), $wi__input_error = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_large__closures = new Set();
	const $input_label__closures = new Set();
	const $count__closures = new Set();
	const $input_error__closures = new Set();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "#text/1", count)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_try($scope0_id, "#text/2", () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_patch_text($scope2_id, "#text/0", input.error ? boom(input.error) : "ok", void 0, $scope0_reason, 2)}</p>`);
		_unfilled_if($scope0_reason, 2) && _patch_init($scope2_id, $cg__input_error ? "__tests__/template.marko_2_input_error#0:7/init" : "__tests__/template.marko_2_input_error#0:7/subscribe");
		$scope0_page && _subscribe(_unfilled_if($scope0_reason, 2) && $input_error__closures, _scope($scope2_id, { _: $wi__input_error && _scope_with_id($scope0_id) }, "__tests__/template.marko", "9:2"), $cg__input_error && "__tests__/template.marko_2_input_error#0:7/subscribe");
	}, void 0, (err) => {
		const $scope1_reason = _scope_reason(), $scope1_page = _page_render();
		const $scope1_id = _scope_id();
		_content_withhold(err?.message), _patch_fill($scope1_id, "PatchFill:__tests__/template.marko_fill2", err?.message);
		_dynamic_tag($scope1_id, "#text/0", input.large ? large_label_default : small_label_default, {
			message: err.message,
			count,
			label: input.label
		});
		$scope1_page && _subscribe($count__closures, _subscribe($wi__input_label && $input_label__closures, _subscribe($wi__input_large && $input_large__closures, _scope($scope1_id, {
			err_message: err?.message,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "11:4", { err_message: ["err.message", "11:11"] }), _client_guard($scope0_reason, 0) && "__tests__/template.marko_1_input_large#0:5/subscribe"), _client_guard($scope0_reason, 1) && "__tests__/template.marko_1_input_label#0:6/subscribe"), "__tests__/template.marko_1_count#0:8/subscribe");
	}, void 0, "__tests__/template.marko_1*content", "__tests__/template.marko_2*content", 1, 1, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page ? _scope($scope0_id, {
		input_large: input.large,
		input_label: input.label,
		count,
		"ClosureScopes:input_large/9": $wi__input_large && $input_large__closures,
		"ClosureScopes:input_label/10": $wi__input_label && $input_label__closures,
		"ClosureScopes:count/12": $count__closures,
		"ClosureScopes:input_error/11": $wi__input_error && _unfilled_if($scope0_reason, 2) && $input_error__closures
	}, "__tests__/template.marko", 0, {
		input_large: ["input.large"],
		input_label: ["input.label"],
		count: "7:6"
	}) : (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.large, !_server_guard($scope0_reason, 0)), _content_withhold(input.large), _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.label, !_server_guard($scope0_reason, 1)), _content_withhold(input.label));
}, 1);
