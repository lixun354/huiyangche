<template>
	<div class="Second" :style="mystyle">
		<div class="hello">
			<div class="head">
		  		<div class="dizh">
			  		<div @click="back">
				  		<i class="fa fa-caret-left"></i>
			  		</div>
		  		</div>
		  		<div class="titei">
		  			故障自查
		  		</div>
		  	</div>
		  	<div class="content">
	  			<div class="model">
	  				<div class="tetie">
	  						选择常见问题
	  				</div>
	  				<ul class="myul">
	  					<li v-for="(i,index) in arr" @click="dian" :key="index">
	  						<router-link :to="i.site">
	  							{{i.issue}}
	  							<i class="fa fa-angle-right"></i>
	  						</router-link>
	  					</li>
	  				</ul>
	  			</div>
		  	</div>
		</div>
		<div class="next"><router-view/></div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	import { mapState } from 'vuex'
export default {
  name: 'analysis',
  data () {
    return {
    	
    }
  },
  methods : {
  	dian(){
  		if(this.$route.params.type == 'Nostart'||this.$route.params.type == 'warm'||this.$route.params.type == 'water'||this.$route.params.type == 'oil'||this.$route.params.type == 'braking'||this.$route.params.type == 'lamplight'){
			this.$store.state.mystyle = {
				marginLeft : '-100%'
			}
	  	}
  	},
  	back(){
  		this.$store.commit('setTransition','turn-off')
  		this.$router.push({path : 'home'})
  	}
  },
  computed : {
    ...mapState(['mystyle','arr'])
  },
  
  mounted (){
  	var scroll = new BScroll('.model',{
  		click : true
  	});
  	window.addEventListener('load',function(){
		scroll.refresh()	
	})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
	width: 50%;
	height: 100%;
	float:left;
	position: relative;
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
.dizh div{
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
	background-image: url(../../static/img/zbj-1.png);
	background-repeat:no-repeat ;
	background-size:100% ;
	padding-top: 1.375rem;
	width: 100%;
	height: 100%;
}
.model{
	width: 100%;
	height: 100%;
}
.tetie{
	padding: 0.3125rem;
	padding-left: 0.46875rem;
	font-size: 0.625rem;
	color: #fff;
}
.myul{
	background-color: rgba(255,255,255,0.2);
}
.myul li{
	border-top: 0.03125rem solid #666;
	border-bottom: 0.03125rem solid #666;
	padding: 0.3125rem;
	padding-left: 0.625rem;
}
.myul li a{
	font-size: 0.5rem;
	color: #fff;
}
.myul li a i{
	float: right;
	font-size: 0.625rem;
	font-weight: 500;
	margin-right: 0.3125rem;
}
.next{
	width:50%;
	height: 100%;
	float:left;
}
.Second{
	width: 200%;
	height: 100%;
	transition: all .5s;
}
</style>
