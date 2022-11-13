import { createStore } from "vuex";

const moduleLogin = {
	state: () => ({
		email: "",
		password: "",
		userHasLogined: [],
		// i try to use vuex for change input type but nothing works :(
		// typePass: "text",
		// showPassword: false,
	}),
	mutations: {
		updateEmail(state, value) {
			state.email = value;
		},
		updatePassword(state, value) {
			state.password = value;
		},
		getDataUser(state, data) {
			state.userHasLogined = data;
		},
		// this code below show how to change input type from data state
		// showPass(state) {
		// 	if (state.showPassword === false) {
		// 		state.showPassword = true;
		// 		state.typePass = "text";
		// 	} else {
		// 		state.showPassword = false;
		// 		state.typePass = "password";
		// 	}
		// },
	},
};

const moduleRegister = {
	state: () => ({
		email: "",
		nomor_hp: "",
		p_l: "",
		p_p: "",
		password: "",
		showPassword: false,
	}),
};

const store = createStore({
	modules: {
		login: moduleLogin,
		register: moduleRegister,
	},
});

export default store;
