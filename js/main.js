var app = new Vue({
	el: '#container',
	data: {
		title: {},
		persionInfo: {},
		jobIntention: {},
		educationalBackground: {},
		selfEvaluation: [],
		workExperience: [],
		projectExperience: [],
		expertise: []
	},
	created: function () {
		this.getData();
	},
	methods: {
		getData: function () {
			var _this = this;
			var params = {
				url: './config.json',
				async: true,
				success: function (response) {
					_this.title = response.title;
					_this.persionInfo = response.persionInfo;
					_this.jobIntention = response.jobIntention;
					_this.educationalBackground = response.educationalBackground;
					_this.selfEvaluation = response.selfEvaluation;
					_this.workExperience = response.workExperience;
					_this.projectExperience = response.projectExperience;
					_this.expertise = response.expertise;
				}
			}
			window.httpGet(params);
		}
	}
});