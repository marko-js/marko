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
const $template$1 = "<p> <button> </button></p>";
const $walks$1 = "D b D m";
_shells({ "__tests__/tags/row.marko": "__tests__/tags/row.marko !__tests__/tags/row.marko_0;D b D ;<p> <button> </button></p>" });
var row_default = _template_persisted("__tests__/tags/row.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let clicks = 0;
	_html(`<p>${_patch_text($scope0_id, "#text/0", input.label, void 0, $scope0_owned, 0)}<button>${_text_resume($scope0_id, "#text/2", clicks)}</button>${_el_resume($scope0_id, "#button/1")}</p>`);
	_script($scope0_id, "__tests__/tags/row.marko_0");
	_patch_value($scope0_id, "__tests__/tags/row.marko0", clicks, 1);
	$scope0_reason && _scope($scope0_id, { clicks }, "__tests__/tags/row.marko", 0, { clicks: "6:6" });
}, 0, 0);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
_shells({
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell; ;<div></div>",
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell,<p>invalid</p>",
	"__tests__/template.marko_3*shell": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_3*shell;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $template$1)
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	const [search, issues] = $global$1.search;
	_if(() => {
		if (issues) {
			const $scope2_id = _scope_id();
			_html("<p>invalid</p>");
			$scope0_reason && _scope($scope2_id, {}, "__tests__/template.marko", "4:2");
			return 0;
		} else {
			const $scope1_id = _scope_id();
			const items = itemsFor(search.q);
			_html("<div>");
			_for_of(items, (item) => {
				const $scope3_id = _scope_id();
				const $childScope = _peek_scope_id();
				_patch_child($scope3_id, "#childScope/0", $childScope);
				row_default(item);
				_scope($scope3_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "10:6");
			}, "id", $scope1_id, "#div/0", 1, $scope0_reason, $scope0_reason, void 0, void 0, "__tests__/template.marko_3*shell");
			_html(`</div>${_el_resume($scope1_id, "#div/0", $scope0_reason)}`);
			$scope0_reason && _scope($scope1_id, {}, "__tests__/template.marko", "7:2");
			return 1;
		}
	}, $scope0_id, "#text/0", 1, $scope0_reason, $scope0_reason, void 0, void 0, ["__tests__/template.marko_2*shell", "__tests__/template.marko_1*shell"]);
	_global_subscribe("__tests__/template.marko_0_$global_search#5/global", $scope0_id);
	$scope0_reason && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1, 1);
