// child.marko
var child_default = _template("__tests__/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_content = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let show = true;
	_html(`<button id=toggle>toggle</button>${_el_resume($scope0_id, "#button/0")}<section>`);
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.content, {}, 0, 0, $sg__input_content);
			_scope($scope1_id, {}, "__tests__/child.marko", "4:4");
			return 0;
		}
	}, $scope0_id, "#section/1", 1, 1, 1, "</section>");
	_script($scope0_id, "__tests__/child.marko_0");
	_scope($scope0_id, {
		input_content: input.content,
		show
	}, "__tests__/child.marko", 0, {
		input_content: ["input.content"],
		show: "1:6"
	});
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "ready:__tests__/child.marko", [{
	type: "on-click",
	selector: "body"
}]);
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $el_getter = _hoist($scope0_id, "__tests__/template.marko_0_#span#0/hoist");
	const $Item_content__subscribers = new Set();
	const Item = { content: _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<span>x</span>${_el_resume($scope1_id, "#span/0")}`);
		_subscribe($Item_content__subscribers, _scope($scope1_id, {}, "__tests__/template.marko", "4:2"));
	}, $scope0_id) };
	$Child_withLoadAssets({ content: Item });
	_await($scope0_id, "#text/2", resolveAfter(1), (v) => {
		const $scope2_id = _scope_id();
		Item.content({});
	}, 0);
	_script($scope0_id, "__tests__/template.marko_0", 0);
	_scope($scope0_id, { "ClosureScopes:1": $Item_content__subscribers }, "__tests__/template.marko", 0);
}, 1);
