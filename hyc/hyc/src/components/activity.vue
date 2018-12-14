<template>
	<div class="mybox" :style="mystyle">
	  <div class="hello">
			<div class="head">
		  		<div class="dizh">
			  		<div @click="back">
				  		<i class="fa fa-caret-left"></i>
			  		</div>
		  		</div>
		  		<div class="titei">
		  			热点活动
		  		</div>
	  		</div>
	  		<div class="content">
	  			<div class="reality">
	  				<div class="forma" v-for="(i,v) in activity" :key="v" @click="dian">
	  					<router-link :to="i.type">
		  					<img :src="i.img"/>
		  					<p>{{i.title}}</p>
		  				</router-link>	
	  				</div>
	  			</div>
	  		</div>
	  </div>
	  <div class="details">
	  	<router-view/>
	  </div>
	</div> 
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'home',
	data () {
	    return {
	    	
	    }
    },
	methods : {
	  	back(){
	  		this.$store.commit('setTransition','turn-off')
	  		this.$router.push({path : 'home'})
	  	},
	  	dian(){
		  		this.$store.state.mystyle = {
						marginLeft : '-100%'
					}
	  	}
	},
  	computed : {
		  ...mapState(['activity','mystyle'])
	},
	mounted (){
		
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mybox{
	width: 200%;
	height: 100%;
	transition: all .5s;
}
.hello{
	width: 50%;
	height: 100%;
	float: left;
}
.details{
	width: 50%;
	height: 100%;
	float: left;
}
.content{
	width: 100%;
	height: 100%;
	padding-top: 1.375rem;
	background-image: url(../../static/img/zbj-1.png);
	background-repeat:no-repeat ;
	background-size:100%;
}
.reality{
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
.forma{
	height: 33%;
	border: 0.0625rem solid #aaa;
	position: relative;
	margin-bottom: 0.5%;
}
.forma img{
	width: 100%;
	height: 100%;
}
.forma p{
	width: 100%;
	color: #fff;
	font-size: 0.5rem;
	font-weight: bold;
	padding: 0.3125rem 0.625rem;
	background-color: rgba(255,255,255,0.2);
	position: absolute;
	bottom: 0rem;
}
</style>
