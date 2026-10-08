// styles.css.ts
const box = "box";
const item = "item";
const on = "on";

// template.marko
const $class = _attr_class("box");
const $class2 = [_attr_class(item), _attr_class(`${item} ${"on"}`)];
const $class3 = _attr_class(item);
_shells({
	a: /*@__PURE__*/ (() => `a !a1; c b b b b%;${(() => `<button>toggle</button><div class="${"box"}"></div><div class="${item}"></div><div class="${item}"></div><div></div><div></div><!><!>`)()}`)(),
	a0: /*@__PURE__*/ (() => `a0,${/*@__PURE__*/ (() => `<span class="${item}"></span>`)()}`)()
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let on$1 = false;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "a")}<div${$class}></div><div${$class2[0]}></div>${_el_resume($scope0_id, "b")}<div${_patch_attr_class($scope0_id, "c", [item, input.lit && "on"], $scope0_reason, 0)}></div>${_el_resume($scope0_id, "c")}<div${_patch_attr_class($scope0_id, "d", { ["on"]: input.lit }, $scope0_reason, 0)}></div>${_el_resume($scope0_id, "d")}<div${_patch_attr_class($scope0_id, "e", input.lit ? "on" : "box", $scope0_reason, 0)}></div>${_el_resume($scope0_id, "e")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<span${$class3}></span>`);
			$scope0_page && _scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "f", 1, _source_guard($scope0_reason, 1), void 0, void 0, void 0, ["a0"], $scope0_reason, 1);
	_script($scope0_id, "a1");
	_patch_value($scope0_id, "a2", on$1, 1);
	$scope0_page && _scope($scope0_id, { k: on$1 });
}, 1);
