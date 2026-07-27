import config from "@marko/compiler/config";
process.stdout.write(JSON.stringify({ translator: config.translator, output: config.output }));
