import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */
// import componentsRouter from './modules/components'
// import chartsRouter from './modules/charts'
// import tableRouter from './modules/table'
// import nestedRouter from './modules/nested'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 * 基本路由，不会有权限控制
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
      }
    ]
  },
  {
    path: '/profile',
    component: Layout,
    redirect: '/profile/index',
    hidden: true,
    children: [
      {
        path: 'index',
        component: () => import('@/views/profile/index'),
        name: 'Profile',
        meta: { title: 'Profile', icon: 'user', noCache: true }
      }
    ]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 * 动态路由，不同身份看到的路由信息不一样
 */
export const asyncRoutes = [
  {
    path: '/customer',
    component: Layout,
    redirect: '/customer/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/customer/index'),
        name: 'customer',
        meta: { title: '顾客管理', icon: 'peoples', noCache: true }
      }
    ]
  },
  {
    path: '/waiter',
    component: Layout,
    redirect: '/waiter/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/waiter/index'),
        name: 'waiter',
        meta: { title: '员工管理', icon: 'user', noCache: true }
      }
    ]
  },
  {
    path: '/category',
    component: Layout,
    redirect: '/category/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/category/index'),
        name: 'category',
        meta: { title: '栏目管理', icon: 'list', noCache: true }
      }
    ]
  },
  {
    path: '/comment',
    component: Layout,
    redirect: '/comment/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/comment/index'),
        name: 'comment',
        meta: { title: '评论管理', icon: 'message', noCache: true }
      }
    ]
  },
  {
    path: '/product',
    component: Layout,
    redirect: '/product/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/product/index'),
        name: 'product',
        meta: { title: '产品管理', icon: 'edit', noCache: true }
      }
    ]
  },
  {
    path: '/order',
    component: Layout,
    redirect: '/order/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/order/index'),
        name: 'order',
        meta: { title: '订单管理', icon: 'form', noCache: true }
      }
    ]
  },
  {
    path: '/address',
    component: Layout,
    redirect: '/address/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/address/index'),
        name: 'address',
        meta: { title: '地址管理', icon: 'link', noCache: true }
      }
    ]
  },
  {
    path: '/user',
    component: Layout,
    redirect: '/user/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/user/index'),
        name: 'user',
        meta: { title: '用户管理', icon: 'qq', noCache: true }
      }
    ]
  },
  
  /*
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/page',
    alwaysShow: true, // will always show the root menu
    name: 'Permission',
    meta: {
      title: 'Permission',
      icon: 'lock',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'page',
        component: () => import('@/views/permission/page'),
        name: 'PagePermission',
        meta: {
          title: 'Page Permission',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'directive',
        component: () => import('@/views/permission/directive'),
        name: 'DirectivePermission',
        meta: {
          title: 'Directive Permission'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: 'role',
        component: () => import('@/views/permission/role'),
        name: 'RolePermission',
        meta: {
          title: 'Role Permission',
          roles: ['admin']
        }
      }
    ]
  },
  */

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
