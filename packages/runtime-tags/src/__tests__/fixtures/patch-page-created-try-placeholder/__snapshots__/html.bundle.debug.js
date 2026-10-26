// a.marko
const $template$2 = "<h1>A</h1>";
const $walks$2 = "b";
const $setup$2 = [[], []];
_shells({ "__tests__/a.marko": "__tests__/a.marko,<h1>A</h1>" });
var a_default = _template("__tests__/a.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<h1>A</h1>");
});

// b.marko
const $template$1 = "<button>go</button><!><!>";
const $walks$1 = " b%c";
const $setup$1 = [[], ["__tests__/b.marko_0"]];
_shells({
	"__tests__/b.marko_3*content": "__tests__/b.marko_3*content;D ;<p> </p>",
	"__tests__/b.marko_2*content": "__tests__/b.marko_2*content",
	"__tests__/b.marko_1_#text#0/await": "__tests__/b.marko_1_#text#0/await;D ;<p> </p>",
	"__tests__/b.marko_1*content": "__tests__/b.marko_1*content;b%;<!><!><!>",
	"__tests__/b.marko": "__tests__/b.marko !__tests__/b.marko_0; b%;<button>go</button><!><!>"
});
var b_default = _template("__tests__/b.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $cg__input_promise = _client_guard($scope0_reason, 0), $wi__input_promise = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_promise__closures = new Set();
	_html(`<button>go</button>${_el_resume($scope0_id, "#button/0")}`);
	_try($scope0_id, "#text/1", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", input.promise, (value) => {
			const $scope3_id = _scope_id();
			_html(`<p>${_patch_text($scope3_id, "#text/0", value, void 0, $scope0_reason, 0)}</p>`);
			$scope0_page && _scope($scope3_id, {}, "__tests__/b.marko", "3:4");
		}, 1, "__tests__/b.marko_3*content", 1);
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, $cg__input_promise ? "__tests__/b.marko_1_input_promise#0:4/init" : "__tests__/b.marko_1_input_promise#0:4/subscribe");
		$scope0_page && $wi__input_promise && _subscribe(_unfilled_if($scope0_reason, 0) && $input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/b.marko", "2:2"), $cg__input_promise && "__tests__/b.marko_1_input_promise#0:4/subscribe", 0);
		$wi__input_promise && _resume_branch($scope1_id);
	}, () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_html("Loading");
	}, void 0, "__tests__/b.marko_2*content", void 0, "__tests__/b.marko_1*content", 1, void 0, 2);
	_script($scope0_id, "__tests__/b.marko_0");
	$scope0_page && _scope($scope0_id, { "ClosureScopes:input_promise/5": $wi__input_promise && _unfilled_if($scope0_reason, 0) && $input_promise__closures }, "__tests__/b.marko", 0);
});

// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
const $setup = [[], []];
_shells({ "__tests__/template.marko": "__tests__/template.marko !;D%;<main><!></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_page__OR__input_promise = _write_guard($scope0_reason, 0), $cg__input_promise = _client_guard($scope0_reason, 2), $cg__input_page = _client_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<main>");
	_dynamic_tag($scope0_id, "#text/0", input.page === "b" ? b_default : a_default, { promise: input.promise }, 0, 0, $wg__input_page__OR__input_promise, void 0, 1, $scope0_reason, 0);
	_html("</main>");
	$scope0_page ? _scope($scope0_id, {
		input_page: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.page,
		input_promise: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.promise
	}, "__tests__/template.marko", 0, {
		input_page: ["input.page"],
		input_promise: ["input.promise"]
	}) : (_filled_guard($scope0_reason, 1) && $cg__input_promise && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.page, !_server_guard($scope0_reason, 1)), $cg__input_promise && _content_withhold(input.page), _filled_guard($scope0_reason, 2) && $cg__input_page && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.promise, !_server_guard($scope0_reason, 2)), $cg__input_page && _content_withhold(input.promise));
}, 1);
