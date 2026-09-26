// template.marko
const base = {
	key: _resume(function() {
		return "key";
	}, "__tests__/template.marko_0/key"),
	label: _resume(function() {
		return "base";
	}, "__tests__/template.marko_0/label")
};
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	const obj = {
		__proto__: base,
		label() {
			return super.label() + n;
		}
	};
	const keyed = {
		__proto__: base,
		label() {
			return { [super.key()]() {
				return n;
			} };
		}
	};
	let text = "";
	_html(`<button>${_text_resume($scope0_id, "#text/1", text)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		n,
		obj,
		keyed
	}, "__tests__/template.marko", 0, {
		n: "2:6",
		obj: "3:8",
		keyed: "4:8"
	});
}, 1);
