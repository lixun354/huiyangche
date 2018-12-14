<template>
  <div class="hello">
			<div class="heads">
				<div class="h_hea" @click="back">
					<router-link to="home">
						<span>
							<i class="fa fa-angle-left"></i>
						</span>
					</router-link>
				</div>
				<div class="photo">
					<img src="../../static/img/login_icon.png"/>
				</div>
	  	</div>	
	  	<div class="ul">
	  		<li>
	  			<img src="../../static/img/login_icon_user.png" alt="" />
	  			<input type="text" placeholder="请输入手机号码"/>
	  		</li>
	  		<li>
	  			<img src="../../static/img/login_icon_phone.png" alt="" />
	  			<input type="text" placeholder="请输入验证码"/>
	  			<button>获取验证码</button>
	  		</li>
	  	</div>
	  	<div class="btn">
	  		<button>登 录</button>
	  		<button>注 册</button>
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
	  	}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.hello{
		width: 100%;
		height: 100%;
		background-image: url(../../static/img/login_bg.png);
		background-repeat:no-repeat ;
		background-size:100%;
	}
	.h_hea{
		height: 1.375rem;
		padding: 0.3125rem 0.3125rem;
		
	}
	.h_hea a{
		display: block;
		text-align: center;
		width: 0.9375rem;
		height: 0.9375rem;
		font-size: 0.5625rem;
		color: #fff;
		font-weight: bold;
		line-height: 0.9375rem;
		background-color: rgba(0,0,0,0.5);
	}
	.photo{
		padding: 1.5625rem 0;
		text-align: center;
	}
	.photo img{
		width: 3.75rem;
	}
	.ul{
		width: 100%;
	}
	.ul li{
		display: flex;
		padding: 0.3125rem 0.625rem;
		position: relative;
	}
	.ul li img{
		width: 0.78125rem;
		height: 0.9375rem;
	}
	.ul li input{
		margin-left: 0.3125rem;
		flex-grow: 1;
		background-color: rgba(0,0,0,0);
		border: none;
		border-bottom: 0.03125rem solid #fff;
		
	}
	.ul li button{
		border: none;
		background-color: rgba(0,0,0,0);
		position: absolute;
		right: 0.625rem;
		top: 0.03125rem;
		color: #fff;
		border: 0.03125rem solid #fff;
		padding: 0.15625rem;
		border-radius: 0.375rem;
	}
	.ul li input::-webkit-input-placeholder{
			color: #ccc;
	}
	.btn{
		width: 100%;
		padding: 0.625rem;
	}
	.btn button{
		width: 100%;
		color: #fff;
		font-size: 0.625rem;
		font-weight: bold;
		background-color: rgba(0,0,0,0);
		border: none;
		border: 0.03125rem solid #fff;
		padding: 0.15625rem 0;
		border-radius: 0.46875rem;
		margin-bottom: 0.3125rem;
	}
</style>
