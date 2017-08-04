<template>
  	<div class="body">
  		<flexbox justify="center">
  			<flexbox-item :span="12">
  				<div class="top-item">
					 <swiper loop auto dots-position="center" class="wapper">
					 	<swiper-item v-for="(item, index) in wipper_list" :key="index"><img :src="item" class="wapper"></swiper-item>
					 </swiper>
				</div>
  			</flexbox-item>
  		</flexbox>
  		<flexbox justify="center">
			<flexbox-item :span="4">
				<div class="item">
					<span>fuck</span>
				</div>
			</flexbox-item>
			<flexbox-item>
				<div class="item">hello</div>
			</flexbox-item>
	    </flexbox>
	    <flexbox justify="center">
			<flexbox-item :span="4">
				<div class="item">
					<span>fuck</span>
				</div>
			</flexbox-item>
			<flexbox-item :span="3.71">
				<div class="item">
					<span>fuck</span>
				</div>
			</flexbox-item>
			<flexbox-item :span="3.71">
				<div class="item">
					<span>fuck</span>
				</div>
			</flexbox-item>
	    </flexbox>
	    <flexbox justify="center">
			<flexbox-item :span="4">
				<div class="item">
					<span>fuck</span>
				</div>
			</flexbox-item>
			<flexbox-item>
				<div class="item">hello</div>
			</flexbox-item>
	    </flexbox>
	    <flexbox justify="center">
			<flexbox-item :span="4">
				<div class="item">
					<span>fuck</span>
				</div>
			</flexbox-item>
			<flexbox-item :span="3.8">
				<flexbox justify="center">
					<flexbox-item :span="5.65">
						<div class="item-item">
							<span>fuck</span>
						</div>
					</flexbox-item>
					<flexbox-item :span="5.65">
						<div class="item-item">
							<span>fuck</span>
						</div>
					</flexbox-item>
				</flexbox>
				<flexbox justify="center">
					<flexbox-item :span="5.65">
						<div class="item-item">
							<span>fuck</span>
						</div>
					</flexbox-item>
					<flexbox-item :span="5.65">
						<div class="item-item">
							<span>fuck</span>
						</div>
					</flexbox-item>
				</flexbox>
			</flexbox-item>
			<flexbox-item :span="3.7">
				<div class="item">
					<span>fuck</span>
				</div>
			</flexbox-item>
	    </flexbox>
  	</div>
</template>

<script>
import { Flexbox, FlexboxItem, Swiper, SwiperItem } from 'vux'

export default {
	components: {
		Flexbox,
		FlexboxItem,
		Swiper, SwiperItem
	},
	data: function() {
		return {
			wipper_list: [
				'http://img.sccnn.com/bimg/337/40711.jpg',
				'http://pic.qiantucdn.com/58pic/18/48/19/5627b4a0ac2b8_1024.jpg'
			]
		}
	}
}
</script>

<style>
.body {
	background-color: black;
	padding: .5rem .5rem 0 .5rem;
	height: 100%;
}

.top-item {
	height: 12rem;
	background-color: #fff;
	text-align: center;
	margin-bottom: .5rem;
}

.wapper {
	height: 9rem
}

.item {
	height: 9rem;
	background-color: #fff;
	text-align: center;
	margin-bottom: .5rem;
}

.item-item {
	background-color: #fff;
	height: 4.2rem;
	text-align: center;
	margin-bottom: .5rem;
}
</style>
