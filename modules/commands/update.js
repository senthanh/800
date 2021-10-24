
try {
	var { existsSync, writeFileSync, removeSync, mkdirSync, copySync, readdirSync, createWriteStream } = require("fs-extra"),
			axios = require("axios"),
			extract = require("extract-zip"),
			exec = require('child_process').exec;
} catch { return console.error("[!] Hiện tại bạn chưa cài đặt các package hỗ trợ việc update, nhập vào cmd/terminal 'npm install --save fs-extra axios extract-zip child_process'"); }

try {
	var configValue = require("./config.json");
	console.log("Đã tìm thấy file config");
}
catch (error) {
if (error) return console.log("Không tìm thấy file config của bot!");
}

(async () => {
	try {
		console.log("====== VUI LÒNG KHÔNG TẮT CMD/TERMINAL NÀY CHO TỚI KHI UPDATE HOÀN TẤT ======");
		await backup(configValue);
		await clone();
		await clean();
        await unzip();
		await install();
		await modules();
		await finish(configValue);
	} catch (e) { console.log(e) }
})();

async function backup(configValue) {
	console.log('-> Đang xóa bản sao lưu cũ');
	removeSync(process.cwd() + '/tmp');
	console.log('-> Đang sao lưu dữ liệu');
	mkdirSync(process.cwd() + '/tmp');
    mkdirSync(process.cwd() + "/tmp/main")
	if (existsSync('./modules')) copySync('./modules', './tmp/modules');
	if (existsSync(`./${configValue.APPSTATEPATH}`)) copySync(`./${configValue.APPSTATEPATH}`, `./tmp/${configValue.APPSTATEPATH}`);
	if (existsSync('./config.json')) copySync('./config.json', './tmp/config.json');
	if (existsSync(`./includes/${configValue.DATABASE.sqlite.storage}`)) copySync(`./includes/${configValue.DATABASE.sqlite.storage}`, `./tmp/${configValue.DATABASE.sqlite.storage}`);
}

async function clean() {
	console.log('-> Đang xóa bản cũ');
	readdirSync('.').forEach(item => { if (item != 'tmp') removeSync(item); });
}

async function clone() {
	console.log('-> Đang tải bản cập nhật mới');
	const response = await axios({
		method: 'GET',
		url: "https://github.com/maihuybao/MiraiBypassGban/archive/refs/tags/head.zip",
		responseType: "stream"
	});