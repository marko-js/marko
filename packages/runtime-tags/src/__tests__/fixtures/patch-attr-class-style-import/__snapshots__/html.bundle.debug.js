// styles.css.ts
const box = "box";
const item = "item";
const on = "on";
const tone = { warn: "warn" };

// template.marko
const $template = /*@__PURE__*/ (() => `<button>toggle</button><div class="${"box"}"></div><div class="${item}"></div><div class="${item}"></div><div></div><div></div><!><!>`)();
const $walks = " c b b b b%c";
const $class = _attr_class("box");
const $class2 = [_attr_class(item), _attr_class(`${item} ${"on"}`)];
const $class3 = _attr_class(item);
_shells({
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko !__tests__/template.marko_0; c b b b b%;${(() => `<button>toggle</button><div class="${"box"}"></div><div class="${item}"></div><div class="${item}"></div><div></div><div></div><!><!>`)()}`)(),
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell,${/*@__PURE__*/ (() => `<span class="${item}"></span>`)()}`)()
});
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let on$1 = false;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/0")}<div${$class}></div><div${_assert_class_toggles(item, ["on"]), $class2[on$1 ? 1 : 0]}></div>${_el_resume($scope0_id, "#div/1")}<div${_patch_attr_class($scope0_id, "#div/2", [item, input.lit && "on"], $scope0_reason, 0)}></div>${_el_resume($scope0_id, "#div/2")}<div${_patch_attr_class($scope0_id, "#div/3", { ["on"]: input.lit }, $scope0_reason, 0)}></div>${_el_resume($scope0_id, "#div/3")}<div${_patch_attr_class($scope0_id, "#div/4", input.lit ? "on" : "box", $scope0_reason, 0)}></div>${_el_resume($scope0_id, "#div/4")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<span${$class3}></span>`);
			$scope0_page && _scope($scope1_id, {}, "__tests__/template.marko", "9:2");
			return 0;
		}
	}, $scope0_id, "#text/5", 1, _source_guard($scope0_reason, 1), void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_value($scope0_id, "__tests__/template.marko_fill0", on$1, 1);
	$scope0_page && _scope($scope0_id, { on: on$1 }, "__tests__/template.marko", 0, { on: "2:6" });
}, 1);
