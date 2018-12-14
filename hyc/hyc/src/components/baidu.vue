<template>
	<div class="baidu">
		<div class="head">
			<button>
				<a href="#/home">
					<i class="fa fa-chevron-left"></i>
				</a>	
			</button>
			<span class="geography">
				{{result}}
			</span>
			
		</div>
		<div class="baidumap" id="allmap"></div>
	</div>
		
</template>

<script type="text/javascript">
	export default {
		name : 'baidu',
		data(){
			return {
				result : null
			}
		},
		mounted () {
		  this.baiduMap()
		  this.$nextTick(function () {

		  })
		},
		methods: {
			goback () {
			    this.$router.go(-1)
			},
			baiduMap () {
				var map = new BMap.Map('allmap');
				
				// 创建地图实例
				var point = new BMap.Point(116.404, 39.915);
				// 创建点坐标
				map.centerAndZoom(point, 11);
				// 初始化地图， 设置中心点坐标和地图级别
				var zoomCtrl = new BMap.ZoomControl({anchor: BMAP_ANCHOR_BOTTOM_RIGHT, offset: new BMap.Size(20, 20)});
				map.addControl(zoomCtrl);
				
//				// 添加带有定位的导航控件
				var navigationControl = new BMap.NavigationControl({
				    // 靠左上角位置
				    anchor: BMAP_ANCHOR_TOP_LEFT,
				    // LARGE类型
				    type: BMAP_NAVIGATION_CONTROL_LARGE,
				    // 启用显示定位
				    enableGeolocation: true
				});
				map.addControl(navigationControl);
//				// 添加定位控件
//				var geolocationControl = new BMap.GeolocationControl();
//				geolocationControl.addEventListener("locationSuccess", (e) =>{
//				    // 定位成功事件
//				    console.log(e)
//					var address = '';
//				    address += e.addressComponent.province;
//				    address += e.addressComponent.city;
//				    address += e.addressComponent.district;
//				    address += e.addressComponent.street;
//				    address += e.addressComponent.streetNumber;
//				    this.$confirm({
//				    	title: '你好', // 默认无标题
//					    content : '当前城市为：'+address,
//					    yesText : '确定',
//					    noText : '取消'
//				    })
//				});
//				geolocationControl.addEventListener("locationError",function(e){
//				    // 定位失败事件
//				    alert(e.message);
//				});
//				map.addControl(geolocationControl);


				
				var size = new BMap.Size(10, 20);
				map.addControl(new BMap.CityListControl({
				    anchor: BMAP_ANCHOR_TOP_LEFT,
				    offset: size,
				    // 切换城市之间事件
				    // onChangeBefore: function(){
				    //    alert('before');
				    // },
				    // 切换城市之后事件
				    // onChangeAfter:function(){
				    //   alert('after');
				    // }
				}));
								
				
				
				
				
				
				// 定位
				var marker = new BMap.Marker(point);
				map.addOverlay(marker);
				var myCity = new BMap.LocalCity();
				myCity.get((result) => {
					this.$store.commit('changeAddress',result.name)
					this.result = result.name
//					console.log(this.result)
					this.$confirm({
						title: '提示', // 默认无标题
					    content : '当前定位城市为：'+ result.name +'是否切换',
					    yesText : '是',
					    noText : '否'
					}).then(() =>{
						map.setCenter(result.name);
					}).catch(function(){
						console.log(2)
					})
					
				});
			}	
		}
	}
</script>
<style scoped>
body, html,#allmap {
	width: 100%;
	height: 100%;
	overflow: hidden;
	margin:0;
	font-family:"微软雅黑";
}
.head{
	position: absolute;
	top: 0;
	z-index: 1;
	
}
.head .geography{
	color: #fff;
	font-size: 0.625rem;
	line-height: 0.9375rem;
}
.head button a{
	color: #fff;
}
.head button{
	position: absolute;
	left: 0.5rem;
	top: 0.125rem;
	font-size: 20px;
	border: none;
	outline: none;
	background-color: #000;
	color: #fff;
	line-height: 1.125rem;
}
.baidu{
	height: 100%;
	position: relative;
	padding-top: 1.375rem;
}
</style>