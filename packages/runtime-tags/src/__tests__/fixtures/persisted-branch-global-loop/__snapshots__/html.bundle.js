// items.ts
function itemsFor(q) {
	return [
		1,
		2,
		3
	].map((id) => ({
		id,
		label: `${q}${id}`
	}));
}

// tags/row.marko
const $template = "<p> <button> </button></p>";
const $walks = "D b D m";
_shells({ b: "b !b0;D b D ;<p> <button> </button></p>" });
var row_default = _template_persisted("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let clicks = 0;
	_html(`<p>${_patch_text($scope0_id, "a", input.label, void 0, $scope0_reason, 0)}<button>${_text_resume($scope0_id, "c", clicks)}</button>${_el_resume($scope0_id, "b")}</p>`);
	_script($scope0_id, "b0");
	_patch_value($scope0_id, "b0", clicks, 1);
	$scope0_page && _scope($scope0_id, { g: clicks });
}, 0, 0);

// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a0: "a0; ;<div></div>",
	a1: "a1,<p>invalid</p>",
	a2: /*@__PURE__*/ ((_w0, _w1) => `a2;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks), $template)
});
var template_default = _template_persisted("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const [search, issues] = $global().search;
	_if(() => {
		if (issues) {
			const $scope2_id = _scope_id();
			_html("<p>invalid</p>");
			$scope0_page && _scope($scope2_id, {});
			return 0;
		} else {
			const $scope1_id = _scope_id();
			const items = itemsFor(search.q);
			_html("<div>");
			_for_of(items, (item) => {
				const $scope3_id = _scope_id();
				const $childScope = _peek_scope_id();
				_patch_child($scope3_id, "a", $childScope);
				row_default(item);
				_scope($scope3_id, { a: _existing_scope($childScope) });
			}, "id", $scope1_id, "a", 1, $scope0_page, $scope0_page, void 0, void 0, "a2");
			_html(`</div>${_el_resume($scope1_id, "a", $scope0_page)}`);
			$scope0_page && _scope($scope1_id, {});
			return 1;
		}
	}, $scope0_id, "a", 1, $scope0_page, $scope0_page, void 0, void 0, ["a1", "a0"]);
	_global_subscribe("a3", $scope0_id);
	$scope0_page && _scope($scope0_id, {});
}, 1, 1);
