const asyncRouterMap = [
        {
            path: 'content-manage',
            name: 'content-manage',
            component: () =>
                import(/* webpackChunkName: "about" */ "../components/layout/UserContainer.vue"),
            children: [
                {
                    path: '',
                    name: "my-goods",
                    component: () =>
                        import(/* webpackChunkName: "about" */ "../views/UserGoods.vue"),
                    meta: {
                        userRole: ["user", "superadmin"]
                    }
                },
                {
                    path: 'exhi',
                    name: "my-exhi",
                    component: () =>
                        import(/* webpackChunkName: "about" */ "../views/UserGoods.vue"),
                    meta: {
                        userRole: ["user", "superadmin"]
                    }
                },
                {
                    path: 'hp',
                    name: "my-hp",
                    component: () =>
                        import(/* webpackChunkName: "about" */ "../views/UserGoods.vue"),
                    meta: {
                        userRole: ["user", "superadmin"]
                    }
                },
                {
                    path: 'programe',
                    name: "my-programe",
                    component: () =>
                        import(/* webpackChunkName: "about" */ "../views/UserGoods.vue"),
                    meta: {
                        userRole: ["user", "superadmin"]
                    }
                },
                {
                    path: 'activity',
                    name: "my-activity",
                    component: () =>
                        import(/* webpackChunkName: "about" */ "../views/UserGoods.vue"),
                    meta: {
                        userRole: ["user", "superadmin"]
                    }
                },
                {
                    path: 'breif',
                    name: "my-breif",
                    component: () =>
                        import(/* webpackChunkName: "about" */ "../views/UserGoods.vue"),
                    meta: {
                        userRole: ["user", "superadmin"]
                    }
                },
                {
                    path: 'userhome',
                    name: "user-home",
                    component: () =>
                        import(/* webpackChunkName: "about" */ "../views/UserGoods.vue"),
                    meta: {
                        userRole: ["user", "superadmin"]
                    }
                },
            ]
        },
        {
            path: 'user-manage',
            name: 'user-manage',
            component: () =>
                import(/* webpackChunkName: "about" */ "../components/layout/UserContainer.vue"),
            children: [
                {
                    path: '',
                    name: "my-fans",
                    component: () =>
                        import(/* webpackChunkName: "about" */ "../views/MyFans.vue"),
                    meta: {
                        userRole: ["user", "superadmin"]
                    }
                },
                {
                    path: 'praise',
                    name: "my-zan",
                    component: () =>
                        import(/* webpackChunkName: "about" */ "../views/UserGoods.vue"),
                    meta: {
                        userRole: ["user", "superadmin"]
                    }
                },
                {
                    path: 'order',
                    name: "my-order",
                    component: () =>
                        import(/* webpackChunkName: "about" */ "../views/UserGoods.vue"),
                    meta: {
                        userRole: ["user", "superadmin"]
                    }
                }
            ]
        }
]




export default asyncRouterMap