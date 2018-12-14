<template>
  <div class="hello">
			<div class="heads">
				<div class="h_hea">
					<router-link to="home">
						<span>
							<i class="fa fa-angle-left"></i>
						</span>
					</router-link>	
					<router-link to="/share">
						<span>
							<i class="fa fa-envelope-o"></i>
						</span>
					</router-link>
				</div>
				<div class="photo">
					<router-link to="/share">
						<span>
							<img src="../../static/img/touxiang.png"/>
						</span>
						<p>立即登录</p>
					</router-link>
				</div>
				<div class="evaluate">
					<li>
						<h4>0</h4>
						<p>待服务</p>
					</li>
					<li>
						<h4>0</h4>
						<p>待评价</p>
					</li>
					<li>
						<h4>0</h4>
						<p>全部订单</p>
					</li>
				</div>
	  	</div>
	  	<div class="option">
	  		<div>
		  		<li>
		  			<router-link to="/share">
			  			<img src="../../static/img/mine_small_icon_garage.png"/>
			  			<span>我的爱车</span>
			  			<i class="fa fa-angle-right"></i>
		  			</router-link>
		  		</li>
		  		<li>
		  			<router-link to="/share">
			  			<img src="../../static/img/my_ask_icon.png"/>
			  			<span>我的消息</span>
			  			<i class="fa fa-angle-right"></i>
		  			</router-link>
		  		</li>
		  		<li>
		  			<router-link to="/share">
			  			<img src="../../static/img/mine_small_icon_order.png"/>
			  			<span>我的预约</span>
			  			<i class="fa fa-angle-right"></i>
		  			</router-link>
		  		</li>
		  		<li>
		  			<router-link to="/share">
			  			<img src="../../static/img/mine_small_icon_coupon.png"/>
			  			<span>我的优惠券</span>
			  			<i class="fa fa-angle-right"></i>
		  			</router-link>
		  		</li>
		  		<li>
		  			<router-link to="/share">
			  			<img src="../../static/img/mine_small_icon_like.png"/>
			  			<span>我的收藏</span>
			  			<i class="fa fa-angle-right"></i>
		  			</router-link>
		  		</li>
		  		<li>
		  			<router-link to="/share">
			  			<img src="../../static/img/my_comp_icon.png"/>
			  			<span>我的投诉</span>
			  			<i class="fa fa-angle-right"></i>
		  			</router-link>
		  		</li>
		  		<li>
		  			<router-link to="/share">
			  			<img src="../../static/img/mine_setting.png"/>
			  			<span>设置</span>
			  			<i class="fa fa-angle-right"></i>
		  			</router-link>
		  		</li>
				</div>	
			</div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
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
	mounted (){
  	var scroll = new BScroll('.option',{
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
		width: 100%;
		height: 100%;
		background-image: url(../../static/img/zbj-1.png);
		background-repeat:no-repeat ;
		background-size:100%;
	}
	.heads{
		width: 100%;
		background-color: rgba(255,255,255,0.3);
	}
	.h_hea{
		width: 100%;
		height: 1.375rem;
		color: #fff;
		padding: 0.3125rem 0.625rem;
	
		display: flex;
		justify-content: space-between;
	}
	.h_hea a span{
		width: 0.9375rem;
		height: 0.9375rem;
		color: #fff;
		text-align: center;
		font-size: 0.625rem;
		font-weight: bold;
		display: block;	
		line-height: 0.46875rem;
		padding: 0.15625rem;
		background-color: rgba(0,0,0,0.5);
	}
	.photo{
		width: 100%;
		text-align: center;
	}
	.photo span{
		display: block;
		width: 2.5rem;
		height: 2.5rem;
		margin: auto;
		background-image: url(../../static/img/touxiang.png);
		background-repeat:no-repeat ;
		background-size:100%;
		border: 0.0625rem solid #fff;
		border-radius: 50%;
	}
	.photo span img{
		width: 100%;
		opacity: .2;
	}
	.photo p{
		padding-top: 0.15625rem;
		padding-bottom: 0.625rem;
		color: #fff;
		font-size: 0.625rem;
	}
	.evaluate{
		display: flex;
		background-color: rgba(255,255,255,0.2);
		border-bottom: 0.03125rem solid #ccc;
	}
	.evaluate li{
		color: #fff;
		font-size: 0.4375rem;
		text-align: center;
		width: 33%;
		padding: 0.3125rem 0.625rem;
	}
	.evaluate li:nth-child(2){
		border-left: 0.03125rem solid #aaa;
		border-right: 0.03125rem solid #aaa;
	}
	.evaluate li h4{
		font-weight: bold;
	}
	.option{
		width: 100%;
		height: 10.4375rem;
		overflow: hidden;
		background-color: rgba(255,255,255,0.1);
	}
	.option li{
		padding: 0.375rem 0.625rem;
		line-height: 0.78125rem;
		border-bottom: 0.03125rem solid #666;
	}
	.option li img{
		width: 0.78125rem;
		height: 0.78125rem;
		
	}
	.option li a{
		color: #fff;
		font-size: 0.5rem;
		display: flex;
		justify-content: space-between;
	}
	.option li a span{
		display: block;
		margin-left: 0.625rem;
		text-align: left;
		flex-grow: 1;
	}
	.option li a i{
		margin-top: 0.15625rem;
	}
</style>
