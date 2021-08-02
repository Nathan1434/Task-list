module.exports = {
	pluginOptions: {
		electronBuilder: {
			nodeIntegration: true,
			contextIsolation: false,

			builderOptions: {
				productName: 'Task List',
				appId: 'Task List',
				icon: 'public/favicon.png',
				copyright: 'Copyright © 2021 Nathaniel Campbell',
			},
		},
	},
};
