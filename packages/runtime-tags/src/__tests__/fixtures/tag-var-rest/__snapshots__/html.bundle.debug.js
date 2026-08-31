// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let obj = {
		a: 1,
		b: 2,
		c: 3
	};
	const { a, ...partialObj } = obj;
	_html(`<div class=obj>${_text_resume($scope0_id, "#text/0", JSON.stringify(obj))}</div><div class=partialObj>${_text_resume($scope0_id, "#text/1", JSON.stringify(partialObj))}</div><div class=a>${_text_resume($scope0_id, "#text/2", a)}</div><div class=b>${_text_resume($scope0_id, "#text/3", partialObj.b)}</div><div class=a>${_text_resume($scope0_id, "#text/4", partialObj.a === undefined ? "removed a" : "didn't remove a")}</div><button>Update</button>${_el_resume($scope0_id, "#button/5")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);
