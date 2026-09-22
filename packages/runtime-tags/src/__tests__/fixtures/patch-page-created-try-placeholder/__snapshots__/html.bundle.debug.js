// a.marko
const $template$2 = "<h1>A</h1>";
const $walks$2 = "b";
_shells({ "__tests__/a.marko": "__tests__/a.marko,<h1>A</h1>" });
var a_default = _template_patch("__tests__/a.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<h1>A</h1>");
}, 0, 0);

// b.marko
const $template$1 = "<button>go</button><!><!>";
const $walks$1 = " b%c";
_shells({
	"__tests__/b.marko_3*content": "__tests__/b.marko_3*content;D ;<p> </p>",
	"__tests__/b.marko_2*content": "__tests__/b.marko_2*content,Loading",
	"__tests__/b.marko_1_#text#0/await": "__tests__/b.marko_1_#text#0/await;D ;<p> </p>",
	"__tests__/b.marko_1*content": "__tests__/b.marko_1*content;b%;<!><!><!>",
	"__tests__/b.marko": "__tests__/b.marko !__tests__/b.marko_0; b%;<button>go</button><!><!>"
});
var b_default = _template_patch("__tests__/b.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_promise__closures = new Set();
	_html(`<button>go</button>${_el_resume($scope0_id, "#button/0")}`);
	_try($scope0_id, "#text/1", _content_resume("__tests__/b.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_await($scope1_id, "#text/0", input.promise, (value) => {
			const $scope3_id = _scope_id();
			_html(`<p>${_patch_text($scope3_id, "#text/0", value, void 0, $scope0_reason, 0)}</p>`);
			_scope($scope3_id, {}, "__tests__/b.marko", "3:4");
		}, 1, "__tests__/b.marko_1_#text#0/await", 1);
		$scope0_page && _subscribe(_unfilled_if($scope0_reason, 0) && $input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/b.marko", "2:2"));
		$scope0_page && _resume_branch($scope1_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_shell("__tests__/b.marko_2*content", $scope0_id) }) }, 1);
	_script($scope0_id, "__tests__/b.marko_0");
	$scope0_page && _scope($scope0_id, { "ClosureScopes:input_promise": $input_promise__closures }, "__tests__/b.marko", 0);
}, 0, 0);

// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
_shells({ "__tests__/template.marko": "__tests__/template.marko;D%;<main><!></main>" });
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_page__OR__input_promise = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<main>");
	const $tag = input.page === "b" ? b_default : a_default;
	const $input2 = { promise: input.promise };
	_dynamic_tag($scope0_id, "#text/0", $tag, $input2, 0, 0, $sg__input_page__OR__input_promise, _patch_dynamic_tag($scope0_id, "#text/0", $tag, $input2, 0, 0, $scope0_reason, 0));
	_html("</main>");
	$scope0_page && _scope($scope0_id, {
		input_page: _source_if($scope0_reason, 2) && input.page,
		input_promise: _source_if($scope0_reason, 1) && input.promise
	}, "__tests__/template.marko", 0, {
		input_page: ["input.page"],
		input_promise: ["input.promise"]
	});
}, 1, 1);
