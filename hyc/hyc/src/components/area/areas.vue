<template>
	<div class="hello" :style="mystyle">
		<div class="yous">
			<div class="head">
		  		<div class="dizh">
			  			<button @click="back">
			  				<router-link to="/home">
				  				<i class="fa fa-caret-left"></i>
				  			</router-link>	
			  			</button>
		  		</div>
		  		<div class="titei">
		  			{{datas.title}}
				</div>
		  	</div>
		  	<div class="content">
		  		<div class="changl">
			  		<ul>
			  			<li @click="dian" v-for="(i,v) in mods" :key="v">
			  				<router-link :to="i.tos">
				  				<img :src='i.img'/>
				  				<div class="text">
				  					<h4>{{i.brand}}</h4>
				  					<p>{{i.site}}</p>
				  				</div>
				  			</router-link>	
			  			</li>
			  			
			  		</ul>
		  		</div>
		  	</div>
	  	</div>
	  	<div class="pag">
	  		<router-view/>
	  	</div>
	</div>
	
</template>

<script>
	import { mapState } from 'vuex'
	import BScroll from 'better-scroll'
	export default {
		name: 'areas',
		data (){
			return {
				datas : {
					title : null
				},
				mods : null,
				fals : false,
				alone : true
			}
		},
		computed : {
		  ...mapState(['nearby','mystyle'])
		},
		methods : {
			back(){
		  		this.$store.commit('setTransition','turn-off')
		  		this.$router.push({path : 'home'})
		  	},
			dian(){
				if(this.alone){
					this.$store.state.mystyle = {
						marginLeft : '-100%'
					}
				}
				
		  	},
		},
		updated (){
		},
		mounted (){
			var type = this.$route.params.type
	    	this.nearby.forEach((v,i) => {
	    		var rust = v.type.substr(1)
	    		if(rust == type){
	    			this.datas = v;
	    			this.mods = v.aread
	    		}
	    		if(type=='teacher'){
	    			this.alone = false
	    		}else{
	    			this.alone = true
	    		}
	    	});
	    	var scroll = new BScroll('.changl',{
		  		click : true
		  	});
		  	window.addEventListener('load',function(){
				scroll.refresh()	
			})
		}
	}
</script>

<style scoped>
.hello{
	width: 200%;
	height: 100%;
	transition: all .5s;
}
.yous{
	width: 50%;
	height: 100%;
	float: left;
	overflow: hidden;
}
.pag{
	width: 50%;
	height: 100%;
	float: left;
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
	background-image: url(../../../static/img/zbj-1.png);
	background-repeat:no-repeat ;
	background-size:100% ;
}
.changl{
	width: 100%;
	height: 100%;
	overflow: hidden;
}
.content ul li{
	width: 100%;
	padding: 0.3125rem;
	border: 0.03125rem solid #fff;
	background-color: rgba(255,255,255,0.15);
}
.content ul li a{
	display: flex;
}
.content ul li img{
	width: 2.5rem;
	height: 2.5rem;
	border-radius: 0.125rem;
	flex-shrink: 0;
}
.text{
	padding: 0.3125rem 0.46875rem;
	padding-top: 0;
	padding-bottom: 0;
	color: #ccc;
	font-size: 0.5rem;
}
.text h4{
	color: #fff;
	font-size: 0.5625rem;
	font-weight: bold;
	padding-bottom: 0.3125rem;
}
</style>