// tags/child.marko
const $template$2 = "<section> </section>";
const $walks$2 = " D l";
const $setup$2 = () => {};
const $input_workspace_id__script = _script("__tests__/tags/child.marko_0_input_workspace_id#5", ($scope) => _lifecycle($scope, {
	onMount: function() {
		console.log("child mounted", $scope.input_workspace_id);
	},
	onDestroy: function() {
		console.log("child destroyed", $scope.input_workspace_id);
	}
}));
const $input_workspace_id = /*@__PURE__*/ _const("input_workspace_id", $input_workspace_id__script);
const $input_active = ($scope, input_active) => _attr_class($scope["#section/0"], input_active ? "on" : "off");
const $input_workspace_name = ($scope, input_workspace_name) => _text($scope["#text/1"], input_workspace_name);
const $input$1 = ($scope, input) => {
	$input_workspace($scope, input.workspace);
	$input_active($scope, input.active);
};
const $input_workspace = ($scope, input_workspace) => {
	$input_workspace_id($scope, input_workspace?.id);
	$input_workspace_name($scope, input_workspace?.name);
};
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$2, $walks$2, 0, $input$1);

// tags/shell.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<div>${_w0}</div>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => ` D/${_w0}&l`)($walks$2);
const $input_status__script = _script("__tests__/tags/shell.marko_0_input_status#4", ($scope) => _lifecycle($scope, {
	onMount: function() {
		console.log("shell mounted", $scope.input_status);
	},
	onDestroy: function() {
		console.log("shell destroyed", $scope.input_status);
	}
}));
const $input_status = /*@__PURE__*/ _const("input_status", ($scope) => {
	_attr($scope["#div/0"], "data-status", $scope.input_status);
	$input_status__script($scope);
});
function $setup$1($scope) {
	$input_workspace($scope["#childScope/1"], {
		id: "a",
		name: "A"
	});
	$input_active($scope["#childScope/1"], true);
}
const $input = ($scope, input) => $input_status($scope, input.status);
var shell_default = /*@__PURE__*/ _template("__tests__/tags/shell.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = "<button>hide</button><!><!>";
const $walks = " b%c";
const $await_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
	$input_status($scope["#childScope/0"], "ready");
};
const $placeholder_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
	$input_status($scope["#childScope/0"], "loading");
};
const $placeholder_content = _content_resume("__tests__/template.marko_3*content", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $placeholder_content__setup);
const $await_content = /*@__PURE__*/ _await_content("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$try_content__await_promise($scope, resolveAfter({ ok: true }, 3));
};
const $if_content__try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup);
const $if_content__setup = ($scope) => $if_content__try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
const $if = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup);
const $show = /*@__PURE__*/ _let("show/2", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$show($scope, false);
}));
function $setup($scope) {
	$show($scope, true);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
