<script setup>
import { User } from '../api';

const userInfo = ref(null);

const getUserInfo = async () => {
	const data = await User.getUserInfo();
	userInfo.value = data.data;
};

onMounted(() => {
	getUserInfo();
});
</script>

<template>
	<h3>关于页面</h3>
	<p>{{ userInfo?.menuPermission.length }}</p>
	<router-link to="/">首页</router-link>
</template>

<style scoped lang="scss">
h3 {
	top: 1px;
	color: $main-color;

	:deep(.a) {
		color: $main-color;
	}
}
</style>
