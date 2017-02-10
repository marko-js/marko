var path = require('path');
var defaultResolveFrom = require('resolve-from');

function getDeps(template, context) {
    if (!template.meta && template.template) {
        template = template.template;
    }

    if (typeof template.createOut !== 'function') {
        return [];
    }

    if (template.deps) {
        return template.deps;
    }

    var deps = template.deps = [];

    if (!template.meta) {
        console.error('Metadata not set for template at ', template.path);
        return [];
    }

    var meta = template.meta;
    var root = path.dirname(template.path);


    if (meta.tags) {
        meta.tags.forEach(tagPath => {
            var resolveFrom = context.resolveFrom || defaultResolveFrom;
            var tag = resolveFrom(root, tagPath);
            var req = context.require || require;
            var tagDeps = getDeps(req(tag), context);
            deps.push.apply(deps, tagDeps);
        });
    }

    if (meta.deps) {
        deps.push.apply(deps, meta.deps.map(d => resolveDep(d, root, context)));
    }

    template.deps = dedupeDeps(deps);

    return deps;
}

function resolveDep(dep, root, context) {
    if (typeof dep === 'string') {
        dep = parseDependencyString(dep);
    }

    if (dep.path) {
        var resolveFrom = (context && context.resolveFrom) || defaultResolveFrom;
        dep.path = resolveFrom(root, dep.path);

        if(dep.path && !dep.type) {
            dep.type = dep.path.slice(dep.path.lastIndexOf('.')+1);
        }
    }

    if (dep.virtualPath) {
        dep.virtualPath = path.resolve(root, dep.virtualPath);
    }

    return dep;
}

function parseDependencyString(string) {
    var match = /^(?:([\w-]+)(?:\:\s*|\s+))?(.*?(?:\.(\w+))?)$/.exec(string);
    return {
        type: match[1] || match[3],
        path: match[2]
    };
}

function dedupeDeps(deps) {
    return deps;
}

function patch(Template) {
    Template.prototype.getDependencies = function(context) {
        context = context || {};

        return getDeps(this, context);
    };
}

exports.getDeps = getDeps;
exports.resolveDep = resolveDep;
exports.patch = patch;