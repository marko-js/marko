// data.js
const fetchThing = () => Promise.resolve("thing");

// template.marko
_shells({
	a0: "a0;D ;<em> </em>",
	a: "a !a3; D l ;<button class=n> </button><main></main>",
	a1: "a1;D ;<em> </em>",
	a2: "a2;b%;<!><!><!>"
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $sg__input_show = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=n>${_text_resume($scope0_id, "b", n)}</button>${_el_resume($scope0_id, "a")}<main>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "a", fetchThing(), (value) => {
				const $scope2_id = _scope_id();
				_html(`<em>${_patch_text($scope2_id, "a", value, void 0, 0, 0)}</em>`);
				_scope($scope2_id, {});
			}, 1, "a0");
			$scope0_page && _scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "c", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a2"], $scope0_reason, 0);
	_html(`</main>${_el_resume($scope0_id, "c", $sg__input_show)}`);
	_script($scope0_id, "a3");
	$scope0_page && _scope($scope0_id, { g: n });
}, 1, 0);
