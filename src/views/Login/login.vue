<template>
  <div class="login">
    <header-top title="登录">
      <span slot="left" @click="$router.back()">
        <svg
          t="1604981684132"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1136"
          width="32"
          height="32"
        >
          <path
            d="M674.22000122 842.78857422c-6.5177679 0-13.10795546-2.31742859-18.10491083-6.95228577L331.67508793 535.14992905c-9.99391079-9.26971435-9.99391079-24.33300019 0-33.60271454L656.11509038 200.8608551c9.99391079-9.26971435 26.21591092-9.26971435 36.20982169 0 9.99391079 9.26971435 9.99391079 24.33300019 0 33.60271454L385.98982048 518.34857177l306.33509159 283.88500214c9.99391079 9.26971435 9.99391079 24.33300019 0 33.60271455-4.9969554 4.63485718-11.58714294 6.95228576-18.10491085 6.95228576z"
            fill="#ffffff"
            p-id="1137"
          ></path>
        </svg>
      </span>
    </header-top>

    <div class="login-box bg-white">
      <h4 class="text-center fs-xxxl text-primary mt-0 pt-2">饿死了么外卖</h4>
      <div class="d-flex ai-center px-4 py-2 jc-around fs-xxl fw-700">
        <a
          href="javascript:;"
          :class="loginWay ? 'on' : 'off'"
          @click="loginWay = true"
          >短信登录</a
        >
        <a
          href="javascript:;"
          :class="!loginWay ? 'on' : 'off'"
          @click="loginWay = false"
          >密码登录</a
        >
      </div>

      <!-- 短信认证 -->
      <div v-show="loginWay">
        <form>
          <!-- 手机号输入框 -->
          <section class="input_container d-flex ai-center jc-between">
            <label for="phone" class="mr-1 ml-2">
              <svg
                t="1605082144891"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="3441"
                width="16"
                height="16"
              >
                <path
                  d="M512 834.56c20.48 0 38.4-17.92 38.4-38.4s-17.92-38.4-38.4-38.4-38.4 17.92-38.4 38.4 17.92 38.4 38.4 38.4z m192-742.4H320c-56.32 0-102.4 46.08-102.4 102.4v614.4c0 56.32 46.08 102.4 102.4 102.4h384c56.32 0 102.4-46.08 102.4-102.4v-614.4c0-56.32-46.08-102.4-102.4-102.4z m51.2 716.8c0 28.16-23.04 51.2-51.2 51.2H320c-28.16 0-51.2-23.04-51.2-51.2v-76.8h486.4v76.8z m0-128H268.8v-409.6h486.4v409.6z m0-460.8H268.8v-25.6c0-28.16 23.04-51.2 51.2-51.2h384c28.16 0 51.2 23.04 51.2 51.2v25.6z"
                  p-id="3442"
                ></path>
              </svg>
            </label>
            <input
              type="tel"
              class="username border-none fs-xl flex-1"
              id="phone"
              maxlength="11"
              placeholder="请输入手机号"
              v-model="phone"
              @input="inputPhone"
              key="phone"
            />
            <button
              :disabled="!rightPhone"
              :class="[
                'mr-2',
                'fs-xl',
                'border-none',
                'bg-white',
                rightPhone ? 'text-primary' : 'text-grey',
              ]"
              @click.prevent="getVerifyCode"
            >
              {{ computeTime > 0 ? `已发送(${computeTime}s)` : "获取验证码" }}
            </button>
          </section>

          <!-- 验证码输入框 -->
          <section class="input_container d-flex ai-center jc-between">
            <label for="verify" class="mr-1 ml-2">
              <svg
                t="1605082336430"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="4246"
                width="16"
                height="16"
              >
                <path
                  d="M96.621714 193.316571H927.451429A24.137143 24.137143 0 0 0 950.857143 169.691429 24.137143 24.137143 0 0 0 927.378286 146.285714H96.548571A24.137143 24.137143 0 0 0 73.142857 169.764571c0 12.580571 10.971429 23.552 23.478857 23.552zM927.451429 817.005714H96.548571a24.137143 24.137143 0 0 0-23.478857 23.552c0 12.507429 10.971429 23.478857 23.478857 23.478857H927.451429a24.137143 24.137143 0 0 0 23.478857-23.478857 24.137143 24.137143 0 0 0-23.478857-23.552zM167.204571 384.512h53.248v250.806857h-53.248V384.512zM402.285714 542.793143c3.145143-4.681143 7.826286-6.217143 14.116572-7.826286 6.290286-1.536 15.652571-1.536 28.233143-1.536h35.986285c26.697143 0 45.494857-3.145143 58.002286-10.971428 9.435429-4.681143 15.725714-14.116571 20.406857-25.088 4.681143-10.971429 7.826286-23.478857 7.826286-39.204572a72.704 72.704 0 0 0-6.290286-32.914286c-4.681143-9.362286-9.362286-18.797714-17.188571-23.478857-12.580571-10.971429-34.523429-15.652571-67.437715-15.652571H345.965714V431.542857h119.076572c14.116571 0 23.552 1.536 29.769143 6.290286 7.826286 4.681143 12.580571 14.116571 12.580571 25.088 0 10.971429-4.754286 18.797714-14.116571 23.478857-6.290286 3.145143-15.652571 4.681143-29.769143 4.681143h-40.740572c-17.261714 0-29.842286 1.609143-37.668571 3.145143a44.617143 44.617143 0 0 0-21.942857 12.580571c-14.116571 14.043429-21.942857 35.986286-20.333715 64.219429v65.828571h216.283429v-43.885714H395.995429v-25.088c0-12.507429 1.609143-21.942857 6.290285-25.088zM878.738286 453.485714a62.464 62.464 0 0 0-10.971429-37.595428c-7.826286-12.580571-17.188571-21.942857-31.305143-26.697143-6.290286-1.536-10.971429-3.072-15.725714-3.072-4.681143 0-15.652571-1.609143-31.305143-1.609143H671.890286v45.494857h108.105143c9.435429 0 15.725714 0 18.797714 1.536 3.145143 0 6.290286 1.536 9.435428 4.681143 7.826286 4.754286 10.971429 12.580571 10.971429 23.552 0 9.362286-3.145143 17.188571-9.435429 21.942857-4.681143 4.681143-15.652571 6.217143-31.305142 6.217143H693.833143v43.885714h84.626286c12.507429 0 21.942857 1.609143 28.233142 4.754286 7.826286 4.681143 12.507429 14.116571 12.507429 26.624 0 10.971429-3.145143 18.797714-9.435429 23.478857-4.681143 4.754286-15.652571 6.290286-29.769142 6.290286H671.890286v43.885714h111.250285c18.797714 0 32.914286-1.536 42.349715-3.145143a56.905143 56.905143 0 0 0 26.624-10.971428c18.797714-10.971429 26.624-29.769143 26.624-53.248 0-25.088-10.971429-45.494857-32.914286-61.147429 21.942857-14.116571 32.914286-31.378286 32.914286-54.857143z"
                  p-id="4247"
                ></path>
              </svg>
            </label>
            <input
              type="text"
              class="password border-none fs-xl flex-1"
              id="verify"
              placeholder="请输入验证码"
              v-model="code"
              maxlength="6"
              key="code"
            />
          </section>

          <p class="text-red">短信服务已经失效，该登录方式废弃</p>

          <div class="mt-3 px-2 text-center pb-2">
            <button
              type="button"
              class="text-white border-none login-btn fs-xxl bg-primary mb-2"
              @click="login"
            >
              登录
            </button>
            <span class="text-grey-1">关于我们</span>
          </div>
        </form>
      </div>

      <!-- 用户名密码认证 -->
      <div v-show="!loginWay">
        <form>
          <!-- 用户名输入框 -->
          <section class="input_container d-flex ai-center">
            <label for="username" class="mr-1 ml-2">
              <svg
                t="1604986566440"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="2007"
                width="16"
                height="16"
              >
                <path
                  d="M652.3 562.7C741.6 513.3 802 418.2 802 309c0-160.2-129.8-290-290-290S222 148.8 222 309c0 109.2 60.4 204.3 149.7 253.7C184 622.2 48 797.7 48 1005h58c0-224.2 181.8-406 406-406s406 181.8 406 406h58c0-207.3-136-382.8-323.7-442.3zM280 309c0-128.1 103.9-232 232-232s232 103.9 232 232-103.9 232-232 232-232-103.9-232-232z"
                  p-id="2008"
                ></path>
              </svg>
            </label>
            <input
              type="text"
              class="username border-none fs-xl"
              id="username"
              placeholder="请输入用户名"
              v-model="username"
              key="username"
            />
          </section>

          <!-- 密码输入框 -->
          <section class="input_container d-flex ai-center jc-between">
            <label for="password" class="mr-1 ml-2">
              <svg
                t="1604986748799"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="2962"
                width="16"
                height="16"
              >
                <path
                  d="M786.673 428.454c40.237 0 72.885 32.707 72.885 72.945v340.329a72.885 72.885 0 0 1-72.885 73.005h-534.89a72.885 72.885 0 0 1-72.884-72.945v-340.33c0-40.357 32.587-73.004 72.885-73.004h534.889m0-72.885h-534.89a145.89 145.89 0 0 0-145.89 145.83v340.329a145.89 145.89 0 0 0 145.89 145.89h534.83a145.89 145.89 0 0 0 145.89-145.83v-340.33a145.89 145.89 0 0 0-145.89-145.89zM519.228 88.124A170.165 170.165 0 0 1 689.393 258.29v97.28h-340.33v-97.28A170.165 170.165 0 0 1 519.229 88.124m0-72.884a243.11 243.11 0 0 0-243.11 243.049v170.165h486.28V258.409a243.11 243.11 0 0 0-243.17-243.29z m0 765.77a36.442 36.442 0 0 1-36.442-36.442v-145.89a36.442 36.442 0 0 1 72.885 0v145.89c0 20.12-16.264 36.383-36.443 36.383v0.06z"
                  p-id="2963"
                ></path>
              </svg>
            </label>
            <input
              :type="showPwd ? 'text' : 'password'"
              class="password border-none fs-xl flex-1"
              id="password"
              placeholder="请输入密码"
              v-model="password"
              key="password"
            />
            <my-switch
              @change="getSwitchType"
              :value="showPwd"
              class="mr-2"
            ></my-switch>
          </section>

          <!-- 验证码输入框 -->
          <section class="input_container d-flex ai-center">
            <label for="username" class="mr-1 ml-2">
              <svg
                t="1604988690630"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="4934"
                width="16"
                height="16"
              >
                <path
                  d="M512 1024c-161.373091 0-465.454545-230.865455-465.454545-449.861818V159.837091c0-5.957818 3.118545-8.890182 6.190545-14.801455a24.296727 24.296727 0 0 1 15.546182-5.911272H93.090909c71.354182-2.978909 142.754909-17.780364 210.990546-41.425455C366.173091 73.914182 428.218182 44.357818 484.072727 8.843636L499.572364 0H512c3.118545 0 9.309091 0 12.427636 2.932364l15.499637 8.936727c55.854545 38.446545 117.899636 68.049455 179.991272 91.694545 68.235636 23.738182 139.636364 38.493091 210.990546 41.425455h24.808727c6.237091 0 9.309091 2.978909 15.546182 5.957818 6.190545 2.932364 6.190545 8.843636 6.190545 14.801455v408.389818C977.454545 790.202182 673.373091 1024 512 1024z m373.992727-797.556364c-70.888727-5.864727-134.935273-20.48-202.752-43.892363-61.626182-23.412364-111.848727-52.689455-170.402909-84.898909-58.600727 35.141818-123.857455 62.184727-193.256727 84.898909-67.816727 23.412364-105.937455 40.96-179.898182 43.892363v342.621091c0 134.656 266.891636 364.823273 372.317091 364.823273 76.8 0 373.992727-195.025455 373.992727-364.823273V226.443636z m-404.107636 444.322909c-9.402182 8.936727-18.757818 11.915636-31.278546 11.915637-12.567273 0-21.876364-2.978909-31.278545-11.915637l-128.325818-121.94909c-15.639273-14.894545-15.639273-48.686545 0-63.534546 15.685818-14.894545 43.799273-30.533818 59.485091-15.639273l97.000727 95.138909 247.202909-234.961454c15.639273-14.894545 43.752727-0.512 59.438546 14.336 15.685818 14.894545 15.685818 49.989818 0 64.837818l-272.244364 261.771636z"
                  p-id="4935"
                ></path>
              </svg>
            </label>
            <input
              type="text"
              class="username border-none fs-xl"
              id="username"
              placeholder="请输入验证码"
              v-model="captcha_code"
              maxlength="4"
              key="captcha_cod"
            />

            <div class="d-flex ai-center jc-end">
              <img :src="code" class="img-change border-none" />
              <div
                class="bg-primary text-white border-none code"
                @click="getCaptchaCode"
              >
                图形码
              </div>
            </div>
          </section>

          <div class="mt-2 px-2 pb-2">
            <button
              class="login-btn bg-primary text-white border-none fs-xxl"
              @click="login"
            >
              登录
            </button>
          </div>
        </form>
      </div>
    </div>

    <alert-tip
      :type="type"
      :tip="alertText"
      v-if="showAlert"
      @change="alertClose"
    ></alert-tip>
  </div>
</template>

<script>
import HeaderTop from "../../components/HeaderTop/index";
import {
  accountLogin,
  getCaptchas,
  mobileCode,
  sendLogin,
} from "../../api/index";
import MySwitch from "../../components/Switch/index";
import AlertTip from "../../components/AlertTip/index";
export default {
  name: "Login",
  components: {
    HeaderTop,
    "my-switch": MySwitch,
    AlertTip,
  },
  data() {
    return {
      loginWay: true, // true代表短信登录 false代表密码登录
      type: "",
      phone: "", //手机号
      computeTime: 0, //计时
      code: "", //短信验证码
      validate_token: "", //短信验证码校验token
      showPwd: false,

      username: "", //用户名
      password: "", //密码
      captcha_code: "", //图形验证码

      alertText: "", //提示文本
      showAlert: false, //是否显示提示框
    };
  },
  computed: {
    rightPhone() {
      return /^1\d{10}$/.test(this.phone);
    },
  },
  watch: {
    loginWay(val) {
      if (!val) {
        this.username = "";
        this.password = "";
        this.captcha_code = "";
        this.getCaptchaCode();
      } else {
        this.phone = "";
        this.code = "";
      }
    },
  },
  methods: {
    getSwitchType(type) {
      this.showPwd = type;
    },
    inputPhone() {},

    // 获取图形验证码
    async getCaptchaCode() {
      getCaptchas().then((res) => {
        this.code = res.code;
      });
    },

    // 异步获取短信验证码
    async getVerifyCode() {
      // 当前没有计时，启动倒计时
      if (this.computeTime === 0) {
        this.computeTime = 30;
        const intervalId = setInterval(() => {
          if (this.computeTime <= 0) {
            clearInterval(intervalId);
          }
          this.computeTime--;
        }, 1000);
        const res = await mobileCode(this.phone);
        // this.validate_token = res.validate_token;
        console.log(res);
      }
    },

    // 异步登录
    async login() {
      // 检验表单合法性
      if (this.loginWay) {
        // 短信登录，校验手机号和验证码
        const { rightPhone, code } = this;
        if (!rightPhone) {
          this.alertText = "手机号不正确";
          this.showAlert = true;
          return;
        } else if (!/^\d{6}$/.test(code)) {
          this.alertText = "验证码为6位数";
          this.showAlert = true;
          return;
        } else {
          const res = await sendLogin(
            this.code,
            this.phone,
            this.validate_token
          );
          console.log(res);
          return;
        }
      } else {
        // 密码登录，校验用户名，密码和图形码
        const { username, password, captcha_code } = this;
        if (!username) {
          this.alertText = "请输入用户名";
          this.showAlert = true;
          return;
        } else if (!password) {
          this.alertText = "请输入密码";
          this.showAlert = true;
          return;
        } else if (!captcha_code) {
          this.alertText = "请输入图形码";
          this.showAlert = true;
          return;
        } else {
          const res = await accountLogin(
            this.username,
            this.password,
            this.captcha_code
          );
          console.log(res);
          if (res.user_id) {
            this.$store.dispatch("getUserInfo", res);
            this.$router.replace("/profile");
          } else {
            this.showAlert = true;
            this.type = "error";
            this.alertText = res.message;
            this.getCaptchaCode();
          }
        }
      }
    },

    // 关闭提示框
    alertClose(val) {
      this.showAlert = val;
      this.alertText = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.input_container {
  height: 1.28rem;
  width: 100%;
  border-bottom: 0.026667rem solid #f1f1f1;
  input {
    height: 80%;
  }
}
.eye {
  position: absolute;
  right: 0.533333rem;
}
.login-btn {
  width: 100%;
  height: 1.173333rem;
}
.other {
  position: absolute;
  top: 55%;
  width: 100%;
}
.code {
  padding: 0.16rem 0.053333rem;
}
.img-change {
  width: 1.92rem;
  height: 0.826667rem;
  margin-right: 0.133333rem;
}
img[src=""],
img:not([src]) {
  opacity: 0;
}
.on {
  color: #3190e8;
  border-bottom: 0.08rem solid #3190e8;
  padding-bottom: 0.053333rem;
}
.off {
  color: #666;
  border-bottom: 0.08rem solid transparent;
  padding-bottom: 0.053333rem;
}
</style>