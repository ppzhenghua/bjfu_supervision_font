// 动态问卷相关的路由配置
import Main from '_c/main'
import parentView from '@/components/parent-view'

export default{
  name: '问卷',
  path: '/dqs',
  meta: {
    icon: 'ios-book',
    title: '问卷中心'
  },
  component: Main, // 一级目录必须使用Main组件作为component
  children: [
    {
      name: '问卷结构管理',
      path: 'meta_manager', // xzl
      meta: {
        icon: 'arrow-graph-up-right',
        title: '问卷结构管理'
      },
      component: resolve => require(['Views/FormMetaManager/index'], resolve)
    },
    {
      path: 'meta_editor', // yzr
      name: '问卷结构编辑',
      meta: {
        icon: 'arrow-graph-up-right',
        title: '问卷结构编辑'
      },
      component: resolve => require(['Views/FormMetaCreater/index'], resolve)
    },
    {
      path: 'meta_editor/:name/:version', // yzr
      meta: {
        hideInMenu: true
      },
      component: resolve => require(['Views/FormMetaEditor/index'], resolve)
    },
    {
      path: 'form_fill/:name/:version', // 问卷填写
      meta: {
        hideInMenu: true
      },
      component: resolve => require(['Views/FormFill/index'], resolve)
    },
    {
      path: 'form_show/:id', // hmx问卷查看
      meta: {
        hideInMenu: true
      },
      component: resolve => require(['Views/FormShow/index'], resolve)
    },
    {
      name: '问卷管理',
      path: 'form_manager', // xzl
      meta: {
      },
      component: resolve => require(['Views/FormManager/index'], resolve)
    },
    {
      name: '各组评价情况查看',
      path: 'lesson_records', // xzl
      meta: {
      },
      component: resolve => require(['Views/GroupLessonList/index'], resolve)
    },
    {
      name: '问卷数据分析',
      path: 'form_sa', // xzl
      meta: {
      },
      component: resolve => require(['Views/FormStatic/index'], resolve)
    }
  ]
}