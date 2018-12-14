<template>
	<div class="hello">
		<div class="head">
			<button class="dizh">
				<router-link to="/baidu"  @click.native="clickLink">
					{{address}}
					<i class="fa fa-caret-down"></i>
				</router-link>
			</button>
			<div class="titei">
				会养车
			</div>
			<button>
				<i class="fa fa-search"></i>
			</button>
		</div>
		<div class="content">
			<div class="mos animated" :class="{content_shrink:fals}">
				<h1>
					<span>权威</span>
					<span>专业</span>
					<span>公正</span>
					<span>真实</span>
				</h1>
				<div class="chunk">
					<div class="ch_up" v-for="(i,index) in chunk" :key="index">
						<router-link v-for="(v,o) in i" :key="o" :to="v.type"  @click.native="clickLink">
							<div class="alone">
								<img :src="v.img"/>
								<h4>{{v.title}}</h4>
							</div>
						</router-link>
					</div>
				</div>
				<div class="banner">
					<swiper :options="swiperOption">
						<swiper-slide v-for="(i,index) in banner" :key="index">
							<img :src="i"/>
						</swiper-slide>
						<div class="swiper-pagination"  slot="pagination"></div>
						<div class="swiper-scrollbar"   slot="scrollbar"></div>
					</swiper>
				</div>
			</div>
		</div>
		<div class="nav animated" :class="{nav_hight:fals,bounce:fals}">
			<ul>
				<li @click="ball()">
					<router-link to="/home" @click.native="clickLink">
						<p><i class="fa fa-automobile"></i></p>
						首页
					</router-link>
				</li>
				<li v-for="(i,index) in nav" :key="index">
					<router-link :to="i.type" @click.native="clickLink">
						<p><i :class="i.name"></i></p>
						{{i.title}}
					</router-link>
				</li>
				
			</ul> 
		</div>		
	</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'home',
  data(){
  	return {
  		fals : false,
  		swiperOption : {
  			pagination: {
			    el: '.swiper-pagination',
			    
			  },
  			autoplay:true,
  		}
  	}
  },
  computed : {
    ...mapState(['address','chunk','nav','banner'])
  },
  methods : {
  	ball(){
  		this.fals = !this.fals
  	},
  	clickLink() {
      this.$store.commit("setTransition", "turn-on");
    }
  },
  mounted (){
  	var _this = this
  	window.addEventListener(
      "popstate",
      function(e) {
        _this.$store.commit("setTransition", "turn-off");
      },
      false
   );
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
	width: 100%;
	height: 100%;
  background-color: #000;
  position: absolute;
  top:0
}
.head{
	height: 1.375rem;
	position: absolute;
	top: 0;
}
.head button{
	width: 1.7rem;
	border: none;
	background-color: #000000;
	color: #fff;
}
.head button a{
	color: #fff;
}
.head .titei{
	text-align: center;
	font-size: 0.5625rem;
	color: #fff;
	 flex-grow: 1;
	 line-height: 1rem;
}
.content{
	width: 100%;
	height: 100%;
	padding: 1.375rem 0 1.875rem;
	background-image: url(../../static/img/zbj-1.png);
	background-repeat:no-repeat ;
	background-size:100% ;
}
.content_shrink{
	transform: scale(0.8);
	margin-top: -0.9375rem;
}
.mos{
	width: 100%;
	height: 100%;
	padding: 0.3125rem;
	transition: all 1s;
	display: flex;
	flex-direction: column;
}
.mos h1{
	padding: 0.3125rem;
	color: rgba(255,255,255,0.7);
	font-size: 0.75rem;
	display: flex;
	justify-content: space-around;
}
.ch_up{
	margin-top: 0.625rem;
}
.ch_up{
	display: flex;
}
.alone{
	text-align: center;
	margin: 0 0.3125rem;
	border-radius: 0.3125rem;
	background-color: rgba(255,255,255,0.4);
	padding: 0.78125rem 1.03125rem;
	box-sizing: border-box;
}
.alone img{
	width: 1.25rem;
	height: 0.9375rem;
	margin-bottom: 0.15625rem;
}
.alone h4{
	text-align: center;
	color: #fff;
	font-size: 0.5rem;
}
.nav{
	width: 100%;
	height: 1.875rem;
	border-top: 0.03125rem solid #fff;
	background-color: #000;
	overflow: hidden;
	position: absolute;
	bottom: 0;
}
.nav_hight{
	height: 3.75rem;
}
.nav ul{
	height: 1.875rem;
	display: flex;
	justify-content:space-between;
	flex-wrap: wrap;
}
.nav ul li{
	width: 33%;
	box-sizing: content-box;
	padding: 0.3125rem 0;
	flex-grow: 1;
	text-align: center;
	position: relative;
}
.nav ul li a{
	color: #fff;
	
}
.nav ul li a p{
		font-size: 20px;
	}
.banner{
	flex-grow: 1;
	padding: 0.3125rem;
}
.banner .swiper-container{
	height: 4.21875rem;
	border-radius: 0.3125rem;
	color:#fff;
}
.banner img{
	width: 100%;
	height: 100%;
	border-radius: 0.3125rem;
}
.banner .swiper-container{
	z-index: 0;
}
</style>
