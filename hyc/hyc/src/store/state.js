export default {
	address : '北京',
	
	mystyle : null,
	
	states : 'turn-on',
	
	nav : [{
		type : '/share',
		title : '分享',
		name : 'fa fa-share-alt-square'
	},{
		type : '/mycenter',
		title : '我的',
		name : 'fa fa-user-circle'
	},{
		type : '/analysis',
		title : '故障自查',
		name : 'fa fa-cogs'
	},{
		type : '/activity',
		title : '热点活动',
		name : 'fa fa-bullhorn'
	},{
		type : '/complaint',
		title : '热点投诉',
		name : 'fa fa-exclamation-circle'
	}],
	
	banner : [
		'../static/img/lunbo-1.jpeg',
		'../static/img/lunbo-2.jpeg',
		'../static/img/lunbo-3.jpeg',
		'../static/img/lunbo-4.jpeg',
		'../static/img/lunbo-5.png',
		'../static/img/lunbo-6.jpeg',
	],
	
	arr : [{
		site : '/analysis/Nostart',
		issue : '无法启动'
	},{
		site : '/analysis/warm',
		issue : '空调暖风'
	},{
		site : '/analysis/water',
		issue : '水温过高'
	},{
		site : '/analysis/oil',
		issue : '油液渗漏'
	},{
		site : '/analysis/braking',
		issue : '制动'
	},{
		site : '/analysis/lamplight',
		issue : '灯光'
	}],
	
	main : [{
		type : 'Nostart',
		title : '无法启动',
		result : '如果车钥匙无法转动，应该是点火系统出了问题，或者方向盘处于锁止状态，自动挡的车型档位未处于P档的位置；如车钥匙可以转动但没有反应，应该是电瓶出现故障',
		method : '建议您先转动方向盘后在测试是否能转动；如电瓶故障建议检查电瓶极柱接触是否牢固，或电量不足，建议充电；如果您的车型为动挡车型请将档位放到P档；如上述无法解决建议预约专业技师进行处理。推荐技师工种：机修工、电工。',
		explain : '技师作业说明：技师会检查整个点火系统，如果点火开关有问题，技师会出具检测结果和维修方案（包括内容和价格）。如您同意方案，技师会准备配件并进行作业。'
	},{
		type : 'warm',
		title : '空调暖风',
		result : '如果水温达到正常温度，温度无正常提升应该是节温器开度不够，或者是暖气水箱堵塞；能加热但温度不高原因可能是空调滤清器堵塞或暖风控制系统失灵；打开空调没有冷风，问题原因有以下几种：1.冷媒（氟利昂）渗漏；2.冷凝器电子扇未工作；3.保险丝损坏。',
		method : '有水温或温度过低自身无法解决；空调系统的检查与维修建议有专业人员进行处置；建议预约技师；推荐技师工种：机修工、电工。',
		explain : '技师作业说明：技师会检查暖风空调系统系统，如果发现上述问题，技师会出具检测结果和维修方案（包括内容和价格）。如您同意方案，技师会准备配件并进行作业。'
	},{
		type : 'water',
		title : '水温过高',
		result : '根据经验，大多数是由于以下问题引起：1.节温器失灵；2.冷却液渗漏；3.冷却扇损坏；4.水箱堵塞；5.风扇皮带松动、磨损。',
		method : '建议您预约专业技师进行判断，及时到店进行检测。推荐技师工种：机修工、电工。',
		explain : '技师作业说明：技师会根据检测结果进行逐步处置，并出具检测结果和维修方案（包括内容和价格）。如您同意方案，技师会准备配件并进行作业。'
	},{
		type : 'oil',
		title : '油液渗漏',
		result : '根据经验油液渗漏多发于发动机，也有液压油、冷却液、渗漏。如出现上述情况请尽量不要继续驾驶车辆！',
		method : '建议您预约专业技师进行判断，及时到店进行检测。推荐技师工种：机修工。',
		explain : '技师作业说明：技师会根据检测结果进行逐步处置，并出具检测结果和维修方案（包括内容和价格）。如您同意方案，技师会准备配件并进行作业。'
	},{
		type : 'braking',
		title : '制动',
		result : '出现异响的话根据经验，大多数是由刹车片磨损过高；如出现方向或制动抖动有可能是专项悬挂不见磨损；车辆制动跑偏原因多于制动分配不均匀；制动踏板不归位多由于制动液缺少渗漏；踏板过沉，踩不动应该是刹车助力引起的。',
		method : '建议您预约专业技师进行判断，及时到店进行检测。推荐技师工种：机修工、电工。',
		explain : '技师作业说明：技师会根据检测结果进行逐步处置，并出具检测结果和维修方案（包括内容和价格）。如您同意方案，技师会准备配件并进行作业。'
	},{
		type : 'lamplight',
		title : '灯光',
		result : '如一侧灯光不亮应该是灯泡烧毁，两侧都不亮很可能是继电器损坏或是保险丝损坏',
		method : '建议您预约专业技师进行判断，及时到店进行检测。推荐技师工种：机修工、电工。',
		explain : '技师作业说明：技师会根据检测结果进行逐步处置，并出具检测结果和维修方案（包括内容和价格）。如您同意方案，技师会准备配件并进行作业。'
	}],
	
	chunk : [[
		{
			type : '/areas',
			title : '附近门店',
			img : '../../static/img/main_bt_shop.png'
		},{
			type : '/share',
			title : '车主投诉',
			img : '../../static/img/main_bt_complain.png'
		}
	],[
		{
			type : '/retail',
			title : '推荐门店',
			img : '../../static/img/main_bt_ask.png'
		},{
			type : '/teacher',
			title : '推荐名师',
			img : '../../static/img/main_bt_tech.png'
		}
	]],
	
	nearby : [{
		type : '/areas',
		title : '附近门店',
		aread : [{
			tos : '/areas/Audi',
			brand : '奥迪4S店',
			img : require('../assets/4S-1.jpg'),
			site : '郑州市中州大道与民航路交叉口向南100米路西'
		},{
			tos : '/areas/Volvo',
			brand : 'VOLVO4S店',
			img : require('../assets/4S-2.jpg'),
			site : '管城区第八大街经北一路136号'
		},{
			tos : '/areas/three',
			brand : 'BMW4S店',
			img : require('../assets/4S-4.jpg'),
			site : '郑州市西四环路与冬青街交汇处'
		},{
			tos : '/areas/flag',
			brand : '红旗4S店',
			img : require('../assets/4S-5.jpg'),
			site : '商务外环与九如东路交汇处人保大厦1层'
		},{
			tos : '/areas/gallop',
			brand : 'Maybach4S店',
			img : require('../assets/4S-6.jpg'),
			site : '河南省郑州市二七区嵩山南路69号百姓广场A区二层'
		},{
			tos : '/areas/Porsche',
			brand : 'Porsche4S店',
			img : require('../assets/4S-7.jpg'),
			site : '郑州市中牟县杨桥路与郑汴物流通道交叉口东500米路北'
		},{
			tos : '/areas/Ford',
			brand : '福特4S店',
			img : require('../assets/4S-8.jpg'),
			site : '河南省郑州市金水区郑花路96号附近'
		}]
		
	},{
		type : '/share',
		title : '车主投诉',
		aread : ''
	},{
		type : '/retail',
		title : '推荐门店',
		aread : [{
			tos : '/areas/Audi',
			brand : '奥迪4S店',
			img : require('../assets/4S-1.jpg'),
			site : '郑州市中州大道与民航路交叉口向南100米路西'
		},{
			tos : '/areas/Volvo',
			brand : 'VOLVO4S店',
			img : require('../assets/4S-2.jpg'),
			site : '管城区第八大街经北一路136号'
		},{
			tos : '/areas/three',
			brand : 'BMW4S店',
			img : require('../assets/4S-4.jpg'),
			site : '郑州市西四环路与冬青街交汇处'
		},{
			tos : '/areas/flag',
			brand : '红旗4S店',
			img : require('../assets/4S-5.jpg'),
			site : '商务外环与九如东路交汇处人保大厦1层'
		},{
			tos : '/areas/gallop',
			brand : 'Maybach4S店',
			img : require('../assets/4S-6.jpg'),
			site : '河南省郑州市二七区嵩山南路69号百姓广场A区二层'
		},{
			tos : '/areas/Porsche',
			brand : 'Porsche4S店',
			img : require('../assets/4S-7.jpg'),
			site : '郑州市中牟县杨桥路与郑汴物流通道交叉口东500米路北'
		},{
			tos : '/areas/Ford',
			brand : '福特4S店',
			img : require('../assets/4S-8.jpg'),
			site : '河南省郑州市金水区郑花路96号附近'
		}]
	},{
		type : '/teacher',
		title : '推荐名师',
		aread : [{
			tos : '',
			brand : '阿尔杰农',
			img : require('../assets/weixiu-1.png'),
			site : '机修工'
		},{
			tos : '',
			brand : '盖尔',
			img : require('../assets/weixiu-2.png'),
			site : '电工'
		},{
			tos : '',
			brand : '安德鲁',
			img : require('../assets/weixiu-3.png'),
			site : '机修工'
		}]
	}],
	
	detail :[{
		type : 'Audi',
		title : '奥迪4S店',
		urls : '郑州市中州大道与民航路交叉口向南100米路西',
	},{
		type : 'Volvo',
		title : 'VOLVO4S店',
		urls : '管城区第八大街经北一路136号'
	},{
		type : 'three',
		title : 'BMW4S店',
		urls : '郑州市西四环路与冬青街交汇处'
	},{
		type : 'flag',
		title : '红旗4S店',
		urls : '商务外环与九如东路交汇处人保大厦1层'
	},{
		type : 'gallop',
		title : 'Maybach4S店',
		urls : '河南省郑州市二七区嵩山南路69号百姓广场A区二层'
	},{
		type : 'Porsche',
		title : 'Porsche4S店',
		urls : '郑州市中牟县杨桥路与郑汴物流通道交叉口东500米路北'
	},{
		type : 'Ford',
		title : '福特4S店',
		urls : '河南省郑州市金水区郑花路96号附近'
	}],
	
	activity : [{
		type : '/share',
		title : '开车头昏乏力？',
		img : require('../assets/jiaquan-1.png'),
	},{
		type : '/share',
		title : '等啥呢，加油福利来了！',
		img : require('../assets/jiayou-1.png'),
	},{
		type : '/share',
		title : '全年钜惠，福利来袭！',
		img : require('../assets/huodong-1.png'),
	}]
}
