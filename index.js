const debug = require('debug')('catbird');
const chokidar = require('chokidar');
const fs = require('fs');
const path = require('path');
const spawn = require('cross-spawn');
const minimist = require('minimist');

const argv = minimist(process.argv.slice(2));

const configPath = argv.config || argv.c || 'catbird.json';
const config = path.join(process.cwd(), configPath);

const catbird = JSON.parse(fs.readFileSync(config, 'utf8'));

const opts = {
	ignoreInitial: true
};

const evt = cmd => {
	return (event, file) => {
		debug(`${event}: ${file}`);

		const proc = spawn('npm', ['run', cmd], {
			stdio: 'inherit'
		});

		proc.on('error', err => {
			debug(`${err}`);
		});
	};
};

catbird.forEach(item => {
	chokidar.watch(item.path, opts).on('all', evt(item.cmd));
});
