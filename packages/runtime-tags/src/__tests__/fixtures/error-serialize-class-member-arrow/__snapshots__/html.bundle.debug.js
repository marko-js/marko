// template.marko
var Base = class {
	label() {
		return "Base";
	}
};
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	const Derived = class extends Base {
		static offset = 10;
		static fromThis = () => this.offset + n;
		constructor(...args) {
			super();
			this.fromArguments = () => arguments.length + n;
			this.fromNewTarget = () => typeof new.target + n;
		}
		fromSuper() {
			return () => super.label() + n;
		}
	};
	let text = "";
	_html(`<button>${_text_resume($scope0_id, "#text/1", text)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		n,
		Derived
	}, "__tests__/template.marko", 0, {
		n: "2:6",
		Derived: "3:8"
	});
}, 1);
