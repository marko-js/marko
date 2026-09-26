// template.marko
const base = { label: _resume(function() {
	return "base";
}, "a0") };
var Base = class {
	label() {
		return "Base";
	}
};
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	const make = _resume(() => ({
		__proto__: base,
		label() {
			return super.label() + n;
		}
	}), "a1", $scope0_id);
	const makeClass = _resume(() => class extends Base {
		label() {
			return super.label() + n;
		}
	}, "a2", $scope0_id);
	const makeBound = _resume(() => function() {
		return this.label + n;
	}, "a3", $scope0_id);
	const count = _resume((call) => ({ arguments: call.arguments.length + n }).arguments, "a4", $scope0_id);
	_html(`<button>${_text_resume($scope0_id, "b", "")}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a5");
	_scope($scope0_id, {
		c: n,
		d: make,
		e: makeClass,
		f: makeBound,
		g: count
	});
}, 1);
