// child.marko
var child_default = _template("a", (input) => {
	const $sg__input_content = _serialize_guard(_scope_reason(), 0);
	const $scope0_id = _scope_id();
	let show = true;
	_html(`<button id=toggle>toggle</button>${_el_resume($scope0_id, "a")}<section>`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.content, {}, 0, 0, $sg__input_content);
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b", 1, 1, 1, "</section>");
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		e: input.content,
		f: show
	});
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "_a", [{
	type: "on-click",
	selector: "body"
}]);
var template_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_hoist($scope0_id, "b0");
	const $Item_content__subscribers = /* @__PURE__ */ new Set();
	const Item = { content: _content_resume("b1", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<span>x</span>${_el_resume($scope1_id, "a")}`);
		_subscribe($Item_content__subscribers, _scope($scope1_id, {}));
	}, $scope0_id) };
	$Child_withLoadAssets({ content: Item });
	_await($scope0_id, "c", resolveAfter(1), (v) => {
		_scope_id();
		Item.content({});
	}, 0);
	_script($scope0_id, "b2", 0);
	_scope($scope0_id, { B1: $Item_content__subscribers });
}, 1);
