// template.marko
const base = { label: _resume(function() {
	return "base";
}, "__tests__/template.marko_0/label") };
var Base = class {
	label() {
		return "Base";
	}
};
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	const make = _resume(() => ({
		__proto__: base,
		label() {
			return super.label() + n;
		}
	}), "__tests__/template.marko_0/make", $scope0_id);
	const makeClass = _resume(() => class extends Base {
		label() {
			return super.label() + n;
		}
	}, "__tests__/template.marko_0/makeClass", $scope0_id);
	const makeBound = _resume(() => function() {
		return this.label + n;
	}, "__tests__/template.marko_0/makeBound", $scope0_id);
	const count = _resume((call) => ({ arguments: call.arguments.length + n }).arguments, "__tests__/template.marko_0/count", $scope0_id);
	let text = "";
	_html(`<button>${_text_resume($scope0_id, "#text/1", text)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		n,
		make,
		makeClass,
		makeBound,
		count
	}, "__tests__/template.marko", 0, {
		n: "3:6",
		make: "4:8",
		makeClass: "5:8",
		makeBound: "6:8",
		count: "7:8"
	});
}, 1);
