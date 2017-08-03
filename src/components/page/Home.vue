<template>
  	<div>
  		<grid :rows="2">
			<grid-item v-for="i in 2">
				<div><span>kebin</span></div>
			</grid-item>
		</grid>
  	</div>
</template>

<script>
import { Grid, GridItem } from 'vux'

export default {
	components: {
		Grid,
		GridItem
	}
}
</script>

<style>
body {
	background-color: black;
}

.grid-item div {
	margin: 10px
}
</style>
