<!--
 * @Author: wangtao
 * @Date: 2020-07-09 00:09:12
 * @LastEditors: 汪滔
 * @LastEditTime: 2021-11-27 09:49:15
 * @Description: 项目说明文件
-->

# xmgj_react_native_basic_framework

## 这是一个基础框架

1. 用 react-native-cli 新增一个项目，保留 Android，ios 目录，将 js 相关部分替换，app.json 中的要换为项目名

## 项目搭建思路

1. 用 npx react-native init xmzj_app (如果不行，卸载：npm uninstall -g react-native-cli 下载：npm install react-native-cli )
2. 引入 react-navigation
   ```
   "@react-native-community/masked-view": "^0.1.10",
   "react-native-gesture-handler": "^1.8.0",
   "react-native-reanimated": "^1.13.1",
   "react-native-safe-area-context": "^3.1.8",
   "react-native-screens": "^2.11.0",
   "react-navigation": "^4.4.2",
   "react-navigation-drawer": "^1.4.0",
   "react-navigation-stack": "^1.10.3",
   "react-navigation-tabs": "^1.2.0"
   ```
3. 配置别名（新增功能）
   ```
   "babel-plugin-module-resolver": "^4.0.0",
   ```
4. 配置全局通信

```
"mitt": "^2.1.0",
```

5. 配置 eslint(痛定思痛，xmgj 没配置导致编码不规范，现在强制性，请在编辑器中安装 ESlint，Prettier 插件配合使用，真香！！！)

```
"babel-eslint": "^10.1.0",
"eslint": "^6.5.1",
"eslint-config-airbnb": "^18.2.0",
"eslint-plugin-import": "^2.22.1",
"eslint-plugin-jsx-a11y": "^6.3.1",
"eslint-plugin-react": "^7.21.4",
```

6. 配置存储机制（之前用的 react-native-storage 已经两年未维护了，重要地方采用双存储机制（主要是用于存储登录信息等，如无必要请不要用来做业务）（目前@react-native-community/async-storage 杀进程后不会丢失，sync-storage 杀进程后会丢失）
   ```
   "@react-native-community/async-storage": "^1.12.1",
   "sync-storage": "^0.4.2"
   ```

## 路由导航（架构核心，重点，常用）

- 管理路由

1.  本项目的路由主要基于 react-navigation 作为基础进行架构设计，请事先学习文档：https://reactnavigation.org/docs/3.x/getting-started/

2.  项目的路由管理全部设计到 router.js 文件中，方便路由拦截，权限路由，路由栈改变等，请引入文件

```
      import About from './containers/My/About'; //我的 关于
      About: {
        screen: About,
        navigationOptions: {
          headerTitle: '个人资料',
        },
      },

      在路由中内置两个公共样式
      About: {
        screen: About,
        navigationOptions: {
          ...titleCenter  //适配安卓居中，安卓默认靠右
        },
      },

      About: {
        screen: About,
        ...emptyHeader //去掉头部
      },

      <!-- 也可以在组件内部设置navigation，优先级低于router.js -->
      static navigationOptions = ({navigation}) => ({
        title: '商城',
        headerTitleStyle: {
          alignSelf: 'center',
          textAlign: 'center',
          flex: 1,
        },
        headerRight: (
          <TouchableOpacity
            activeOpacity={0.8}
            style={{padding: 10}}
            onPress={() => {}}>
            <Text
              allowFontScaling={false}
              style={{fontSize: 13, color: '#000', marginRight: 10}}>
              {'编辑'}
            </Text>
          </TouchableOpacity>
        ),
        tabBarIcon: ({focused}) => (
          <Image
            source={focused ? mall : mallGray}
            style={{width: 24, height: 24}}
          />
        ),
      });

```

    此时可以在路由管理器中找到对应key，通过下面的跳转方法即可方便使用

- 使用路由
  1. 跳转下一级路由

```
    不传参数

    msg.emit('router: goToNext', {
        routeName: 'XmArticle',
    });

    传参数
    msg.emit('router: goToNext', {
        routeName: 'XmArticle',
        data: "logistics"
    });

    取参数（强烈建议按此模板书写，可能会觉得繁琐，但是对于react-navigation 4.*.*的版本这样最好，不会因为参数传错儿导致程序崩溃和闪退）

    componentWillMount() {
      const navigation = this.props.navigation;
      const state = navigation.state || {};
      const params = state.params || {};
      const { data } = params;

    }

```

2.  返回上一页
    msg.emit('router: back');

- 往路由中动态注入参数

```
   componentDidMount() {

    const navigation = this.props.navigation;
    navigation.setParams({
      type:false,
    })

  }

  <!-- 在静态方法中取出, 此处改标题优先级低于router.js-->
  static navigationOptions = ({ navigation }) => {

    return {
      // headerTitle: navigation.state.params.contentTitle,
      headerTitle: navigation.getParams('contentTitle'),
    };

  };

```




## React 新版本一些生命周期的替换

```
//老的
componentWillReceiveProps(nextProps) {
    if (nextProps.disabled !== this.state.disabled) {
      this.setState({ disabled: nextProps.disabled })
    }
  }
//新的替换方案
static getDerivedStateFromProps(props, state) {
    if (props.disabled !== state.disabled) {
      return {
        disabled: props.disabled,
      };
    }

    return null;
  }

```
