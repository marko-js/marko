// data.js
const fetchThing = () => Promise.resolve("thing");

// template.marko
const $template = "<button class=n> </button><main></main>";
const $walks = " D l b";
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;D ;<em> </em>",
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; D l ;<button class=n> </button><main></main>",
	"__tests__/template.marko_1_#text#0/await": "__tests__/template.marko_1_#text#0/await;D ;<em> </em>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;b%;<!><!><!>"
});
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $sg__input_show = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=n>${_text_resume($scope0_id, "#text/1", n)}</button>${_el_resume($scope0_id, "#button/0")}<main>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "#text/0", fetchThing(), (value) => {
				const $scope2_id = _scope_id();
				_html(`<em>${_patch_text($scope2_id, "#text/0", value, void 0, 0, 0)}</em>`);
				_scope($scope2_id, {}, "__tests__/template.marko", "7:6");
			}, 1, "__tests__/template.marko_1_#text#0/await");
			$scope0_page && _scope($scope1_id, {}, "__tests__/template.marko", "6:4");
			return 0;
		}
	}, $scope0_id, "#main/2", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_html(`</main>${_el_resume($scope0_id, "#main/2", $sg__input_show)}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page && _scope($scope0_id, { n }, "__tests__/template.marko", 0, { n: "3:6" });
}, 1, 0);
