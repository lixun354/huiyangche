<template>
  <div class="hello">
			<div class="head">
		  		<div class="dizh">
			  		<div @click="back">
				  		<i class="fa fa-caret-left"></i>
			  		</div>
		  		</div>
		  		<div class="titei">
		  			热点投诉
		  		</div>
	  	</div>
	  	<div class="content">
	  			<div class="mlbo">
	  					<li>
	  							<h4>
	  								<span>[雪佛兰]</span> 从4S店修理厂提车发现故障要提车发现故障要
	  							</h4>
	  							<p>
	  								投诉时间：2018-10-24 13:06
	  							</p>
	  					</li>
	  					<li>
	  						<h4>
	  								<span>[起亚]</span> 从4S店修理厂提车发现故障要提车发现故障要
	  							</h4>
	  							<p>
	  								投诉时间：2018-07-25 10:26
	  							</p>
	  					</li>
	  					<li>
	  						<h4>
	  								<span>[现代]</span> 从4S店修理厂提车发现故障要提车发现故障要
	  							</h4>
	  							<p>
	  								投诉时间：2018-09-20 11:16
	  							</p>
	  					</li>
	  			</div>
	  	</div>
  </div>
</template>

<script>
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
	width: 100%;
	height: 100%;
}	
.content{
	width: 100%;
	height: 100%;
	padding-top: 1.375rem;
	background-image: url(../../static/img/zbj-1.png);
	background-repeat:no-repeat ;
	background-size:100%;
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
.mlbo{
	width: 100%;
	height: 100%;
}
.mlbo li{
	padding: 0.3125rem 0.625rem;
	border: 0.00055rem solid #aaa;
	background-color: rgba(255,255,255,0.15);
	margin-top: 0.3125rem;
	font-size: 0.5rem;
	color: #fff;
}
.mlbo li h4{
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.mlbo li p{
	padding-top: 0.3125rem;
	font-size: 0.4375rem;
}
.mlbo li h4 span{
	font-weight: bold;
}
</style>

