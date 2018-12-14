<template>
	<div class="hello">
		<div class="head">
	  		<div class="dizh">
	  			<button @click="hui">
	  				<router-link to="/areas">
		  				<i class="fa fa-caret-left"></i>
		  			</router-link>	
	  			</button>
	  		</div>
	  		<div class="titei">
	  			门店详情
	  		</div>
  		</div>
  		<div class="content">
  			<div class="core">
  				<div class="springing">
  					<img src="../../../static/img/shamo.png" alt="" />
  					<ul class="mytext">
  						<li>
  							<h4>{{details.title}}
  								<p><span>4S 店</span><span>一类资质</span></p>
  							</h4>
  						</li>
  						<li>
  							<h5>
  								{{details.urls}}
  							</h5>
  							<p>营业时间：24小时</p>
  							<p>救援热线：0123456</p>
  						</li>
  					</ul>
  					<ul class="project">
  						<li>
  							<h4>服务项目</h4>
  							<div class="pro">
  								<span>洗车</span>
  								<span>汽车美容</span>
  								<span>总成大修</span>
  								<span>尾气检测</span>
  								<span>四轮定位</span>
  								<span>洗车</span>
  								<span>汽车美容</span>
  								<span>总成大修</span>
  								<span>尾气检测</span>
  								<span>四轮定位</span>
  								<span>洗车</span>
  								<span>汽车美容</span>
  								<span>总成大修</span>
  								<span>尾气检测</span>
  								<span>四轮定位</span>
  								<span>洗车</span>
  								<span>汽车美容</span>
  								<span>总成大修</span>
  								<span>尾气检测</span>
  								<span>四轮定位</span>
  							</div>
  						</li>
  					</ul>
  				</div>
  			</div>
  		</div>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	import BScroll from 'better-scroll'
	export default {
		name: 'three',
		data (){
			return {
				details : null
			}
		},
		methods : {
			hui(){
				this.$store.state.mystyle = {
					marginLeft : '0'
				}
			}
		},
		computed : {
		  ...mapState(['nearby','mystyle','detail'])
		},
		created (){
			var typr = this.$route.params.type
			this.detail.forEach((v,i) => {
				if(v.type==typr){
					this.details = v
				}
			});
		},
		mounted (){
	    	var scroll = new BScroll('.core',{
		  		click : true
		  	});
		  	window.onload = function(){
				scroll.refresh()	
			}
		}
	}
</script>

<style scoped>
.hello{
	width: 100%;
	height: 100%;
}
.head{
	display: block;
	position: absolute;
	top: 0;
	text-align: center;
}
.dizh{
	position: absolute;
	top: 0.15625rem;
	left: 0.3125rem;
}
.dizh button{
	background-color: #000000;
	border: none;
	line-height: 1.0625rem;
	
}	
.dizh button a{
	font-size: 0.75rem;
	color: #fff;
}
.titei{
	color: #fff;
	font-size: 0.5rem;
	font-weight: bold;
	line-height: 1rem;
}	
.content{
	width: 100%;
	height: 100%;
	padding-top: 1.375rem;
}
.core{
	width: 100%;
	height: 100%;
	background-image: url(../../../static/img/zbj-1.png);
	background-repeat:no-repeat ;
	background-size:100%;
	overflow: hidden;
}
.springing img{
	width: 100%;
	height: 5.625rem;
}
.mytext,.project{
	width: 100%;
	margin-bottom: 0.3125rem;
}
.mytext li{
	color: #fff;
	padding: 0.3125rem;
	background-color: rgba(255,255,255,0.2);
}
.mytext li h4{
	font-size: 0.5625rem;
}
.mytext li h4 p{
	padding-top: 0.3125rem ;
	padding-bottom: 0.625rem;
	border-bottom: 0.03125rem solid #fff;
}
.mytext li h4 span{
	padding: 0.0625rem;
	display: inline-block;
	font-size: 0.375rem;
	border: 0.03125rem solid #fff;
	border-radius: 0.125rem;
}
.mytext li h5{
	padding-bottom: 0.3125rem;
}
.mytext li p{
	padding-bottom: 0.3125rem;
}
.project{
	color: #fff;
}
.project li{
	padding: 0.3125rem;
	background-color: rgba(255,255,255,0.2);
}
.project li h4{
	padding: 0.3125rem;
	border-bottom: 0.03125rem solid #fff;
}
.pro{
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
}
.pro span{
	border: 0.03125rem solid #fff;
	border-radius:0.125rem ;
	text-align: center;
	display: block;
	width: 22%;
	padding: 0.15625rem;
	margin-top: 0.3125rem;
}
</style>