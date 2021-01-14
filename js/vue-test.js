const HelloVueApp = {
	data() {
		return {
			message: 'Hello Vue!!',

		}
	}
}
const Count = {
	data() {
		return {
			counter: 0
		}
	}
}

Vue.createApp(HelloVueApp).mount('#hello-vue')
Vue.createApp(Count).mount('#count')