<script setup>
import { useCounterStore } from '../store';

const props = defineProps({});
console.log(props);

const counterStore = useCounterStore();
const { count } = storeToRefs(counterStore);
</script>

<template>
	<h3>首页</h3>
	<t-button>确定</t-button>
	<div>
		<p>pinia数据：{{ count }}</p>
	</div>
	<!-- 路由切换 -->
	<br />
	<router-link to="/about">Abuout</router-link>
</template>

<style scoped lang="scss">
h3 {
	color: red;
}
</style>
