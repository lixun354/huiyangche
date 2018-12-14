<template>
<div class="hello">
	<div class="head">
  		<div class="dizh">
	  			<button @click="hui">
	  				<router-link to="/analysis">
		  				<i class="fa fa-caret-left"></i>
		  			</router-link>	
	  			</button>
  		</div>
  		<div class="titei">
  			诊断结果
  		</div>
  	</div>
	<div class="content">
		<div class="title">
			{{myData.title}}
		</div>
		<div class="diagnose">
			诊断结果
		</div>
		<p>{{myData.result}}</p>
		<div class="diagnose">
			处理方法
		</div>
		<p>{{myData.method}}</p>
		<div class="button">
			<button>在线预约专业技师</button>
		</div>
			
		<p>{{myData.explain}}</p>
	</div>
</div>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		name: 'Nostart',	
		data () {
		    return {
		    	myData : {
		    		title : null
		    	}
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
	   		...mapState(['mystyle'])
	    },
	    mounted (){
	    	var type = this.$route.params.type
	    	this.$store.state.main.forEach((v,i) => {
	    		if(v.type == type){
	    			this.myData = v
	    		}
	    	})
	    }
	}
</script>

<style scoped>
.hello{
	width: 100%;
	height: 100%;
	background-image: url(../../../static/img/zbj-1.png);
	background-repeat:no-repeat ;
	background-size:100% ;
	padding-top: 1.375rem;
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
	color: #fff;
}
.title{
	padding: 0.3125rem;
	padding-left: 0.46875rem;
	color: #fff;
	font-size: 0.625rem;
	border-bottom: 0.03125rem solid #999;
}
.diagnose{
	padding: 0.3125rem;
	padding-left: 0.46875rem;
	font-size: 0.5rem;
}
.content p{
	/*background-color: rgba(255,255,255,0.2);*/
	padding: 0.15625rem 0.625rem;
	line-height: 0.625rem;
}
.button{
	padding: 0.46875rem;
	text-align: center;
}
.button button{
	width: 80%;
	margin: auto;
	padding: 0.3125rem;
	border: none;
	border-radius: 0.1875rem;
	background-color: #a6a5c4;
}
</style>