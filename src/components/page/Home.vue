<template>
  	<div class="body">
  		<flexbox :gutter="0">
			<flexbox-item :span="4">
				<div class="item">
					<span>fuck</span>
				</div>
			</flexbox-item>
			<flexbox-item>
				<div class="item">hello</div>
			</flexbox-item>
	    </flexbox>
	    <flexbox :gutter="0">
			<flexbox-item :span="4">
				<div class="item">
					<span>fuck</span>
				</div>
			</flexbox-item>
			<flexbox-item :span="4">
				<div class="item">
					<span>fuck</span>
				</div>
			</flexbox-item>
			<flexbox-item :span="4">
				<div class="item">
					<span>fuck</span>
				</div>
			</flexbox-item>
	    </flexbox>
	    <flexbox :gutter="0">
			<flexbox-item :span="4">
				<div class="item">
					<span>fuck</span>
				</div>
			</flexbox-item>
			<flexbox-item>
				<div class="item">hello</div>
			</flexbox-item>
	    </flexbox>
	    <flexbox :gutter="0">
			<flexbox-item :span="4">
				<div class="item">
					<span>fuck</span>
				</div>
			</flexbox-item>
			<flexbox-item :span="4">
				<flexbox :gutter="0">
					<flexbox-item :span="6">
						<div class="item-item">
							<span>fuck</span>
						</div>
					</flexbox-item>
					<flexbox-item :span="6">
						<div class="item-item">
							<span>fuck</span>
						</div>
					</flexbox-item>
				</flexbox>
				<flexbox :gutter="0">
					<flexbox-item :span="6">
						<div class="item-item">
							<span>fuck</span>
						</div>
					</flexbox-item>
					<flexbox-item :span="6">
						<div class="item-item">
							<span>fuck</span>
						</div>
					</flexbox-item>
				</flexbox>
			</flexbox-item>
			<flexbox-item :span="4">
				<div class="item">
					<span>fuck</span>
				</div>
			</flexbox-item>
	    </flexbox>
  	</div>
</template>

<script>
import { Flexbox, FlexboxItem } from 'vux'

export default {
	components: {
		Flexbox,
		FlexboxItem
	}
}
</script>

<style>
.body {
	background-color: black;
} 

.item {
	background-color: #fff;
	height: 160px;
	text-align: center;
}

.item-item {
	background-color: #fff;
	height: 80px;
	text-align: center;
}
</style>
