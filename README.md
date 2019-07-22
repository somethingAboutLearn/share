# nuxt-demo2

> My super-excellent Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

## 项目简介

<details>

<summary>点此展开查看</summary>

备注  | 简介
------------- | -------------
项目名称  | nuxt.js demo
spa  | no
ssr | yes

</details>

## 项目结构

<details>

<summary>点此展开查看</summary>

```js
|-/assets                                               //  静态资源
  |-/css                                                //  css
    |-base.scss                                         //  去除默认样式
|-/components                                           //  组件
  |-ImageItem.vue                                       //  image 模块详情组件
  |-ImagesListCeilItem.vue                              //  image 模块列表的每一个元素组件
  |-ImagesListItem.vue                                  //  image 模块列表组件
  |-NavItem.vue                                         //  导航模块组件
  |-SongItem.vue                                        //  song 模块详情组件
  |-SongListCeilItem.vue                                //  song 模块列表的每一个元素组件
  |-SongListItem.vue                                    //  song 模块列表组件
  |-/layouts                                            //  布局
    |-default.vue                                       //  默认布局
    |-error.vue                                         //  错误布局
    |-nav.vue                                           //  导航布局
  |-/pages                                              //  页面，路由会根据此目录结构映射生成
    |-/error                                            //  错误页面
      |-404.vue                                         //  404 页面
    |-/images                                           //  images 页面
      |-_id.vue                                         //  images 详情页面
      |-index.vue                                       //  images 列表页面
    |-/songs                                            //  songs 页面
      |-_id.vue                                         //  songs 详情页面
      |-index.vue                                       //  songs 列表页面
    |-index.vue                                         //  入口页面
  |-/store                                              //  状态管理
    |-/modules                                          //  模块
      |-songs.js                                        //  songs 状态管理
    |-index.js                                          //  状态管理配置
```

</details>

## 问题

### Q1 数据的管理

<details>

<summary>点此展开查看</summary>

- 思路一：在 page 页面的 asyncData() 方法中请求并 return 数据，通过 props 的方式在子组件中接收，参考 `page/images` images 页面
- 思路二：在 page 页面的 fetch() 方法中分发 dispatch()，通过 store 的 actions 定义的方法发送请求返回数据并更新对应的 state ，在页面的 computed 中通过辅助函数 mapState() 分发使用，参考 `page/songs` songs 页面

</details>
