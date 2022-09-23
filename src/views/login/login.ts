import {reactive, ref} from "vue";

const loginData = reactive({
    username: '',
    password: '',
    rmbPassword: false
})

const registerData = reactive({
    username: '',
    email: '',
    verificationCode: '',
    password: '',
    confirm: ''
})

const retrieveData = reactive({
    username: '',
    email: '',
    verificationCode: '',
    password: '',
    confirm: ''
})

enum PageView {
    LoginView,
    RegisterView,
    RetrieveView
}

const pageView = ref(PageView.LoginView)

const ToPageView = (view: PageView) => {
    pageView.value = view
}

export default {
    pageView,
    ToPageView,

    loginData,
    registerData,
    retrieveData,
}