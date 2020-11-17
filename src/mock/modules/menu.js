import Mock from 'mockjs'
/**
 * menuPrivileges是所有菜单权限
 * orgPrivileges是所有组织，暂时用不到
 *
 * 注意：menuType为Menu的菜单，它的下级menuType只能为Button
 *
 * menuType为Menu的菜单,它的path在页面渲染时会生成对应的路由，所以path的值要和实际文件路径相同
 * 例如：页面文件的路径是：src\views\system\role.vue,它对应的path就是/system/role
 *
 */
const res = {
  resCode: 200,
  success: true,
  response: {
    orgPrivileges: [
      {
        orgId: '1252523599903072257',
        orgName: '百利宏12',
        orgType: 'Company',
        isOwn: 1
      },
      {
        orgId: '1252523599903072259',
        orgName: '广州易宝分公司',
        orgType: 'Company',
        isOwn: 1
      },
      {
        orgId: '1259787152448147458',
        orgName: '出差',
        orgType: 'Company',
        isOwn: 1
      }
    ],
    menuPrivileges: [
      {
        menuId: '1259069584261287938',
        menuName: '系统管理',
        menuType: 'Dir', // 菜单类型，Dir：目录，Menu：菜单；Button：按钮
        isOwn: 1, // 是否拥有 0：否，1：是
        isShow: 1, // 是否显示在菜单栏 0：否，1：是
        code: 'system',
        alias: 'system',
        path: '',
        icon: 'iconfont iconicon_setting',
        dataPrivileges: [
          {
            dataId: '1',
            scopeName: '个人可见',
            isOwn: 1
          }
        ],
        children: [
          {
            menuId: '125907515306392371',
            menuName: '组织管理',
            menuType: 'Dir',
            isOwn: 1,
            isShow: 1,
            code: 'org_management',
            alias: 'orgManagement',
            path: '',
            icon: 'iconfont iconicon_subordinate',
            dataPrivileges: [],
            children: [
              {
                menuId: '1259075153063923714',
                menuName: '组织管理',
                menuType: 'Menu',
                isOwn: 1,
                isShow: 1,
                code: 'org_management',
                alias: 'orgManagement',
                path: '/orgs/orgManagement',
                icon: 'iconfont iconicon_subordinate',
                dataPrivileges: [],
                children: []
              },
              {
                menuId: '1260118258720522241',
                menuName: '组织排序',
                menuType: 'Menu',
                isOwn: 1,
                isShow: 0,
                code: 'org_sort',
                alias: 'org_sort',
                path: '/orgs/orgSort',
                icon: 'iconfont icon-caidanguanli',
                dataPrivileges: [],
                children: []
              },
              {
                menuId: '1260118573335265281',
                menuName: '组织详情',
                menuType: 'Menu',
                isOwn: 1,
                isShow: 0,
                code: 'org_detail',
                alias: 'org_detail',
                path: '/orgs/orgDetail',
                icon: 'iconfont icon-daohanglanmoshi02',
                dataPrivileges: [],
                children: []
              }
            ]
          },
          {
            menuId: '1259073456778285058',
            menuName: '用户管理',
            menuType: 'Menu',
            isOwn: 1,
            isShow: 1,
            code: 'org_user',
            alias: 'user',
            path: '/system/user',
            icon: 'iconfont iconicon_boss',
            dataPrivileges: [],
            children: []
          },

          {
            menuId: '1260401852546387969',
            menuName: '角色管理',
            menuType: 'Dir',
            isOwn: 1,
            isShow: 1,
            code: 'role',
            alias: '角色',
            children: [
              {
                menuId: '1260401852546387969',
                menuName: '角色管理',
                menuType: 'Menu',
                isOwn: 1,
                isShow: 1,
                code: 'role',
                alias: '角色',
                path: '/system/role',
                icon: 'iconfont iconicon_group',
                dataPrivileges: [],
                children: []
              },
              {
                menuId: '12604101852546387969',
                menuName: '角色权限',
                menuType: 'Menu',
                isOwn: 1,
                isShow: 0,
                code: 'role',
                alias: '角色权限',
                path: '/system/permissionConfig'
              },

              {
                menuId: '12604101852546387969',
                menuName: '查看用户',
                menuType: 'Menu',
                isOwn: 1,
                isShow: 0,
                code: 'role',
                alias: '查看用户',
                path: '/system/userDetail'
              }
            ]
          },
          {
            menuId: '1259070994843471874',
            menuName: '菜单管理',
            menuType: 'Menu',
            isOwn: 1,
            isShow: 1,
            code: 'system_menu',
            alias: 'menu',
            path: '/system/menu',
            icon: 'iconfont iconicon_compile',
            dataPrivileges: [],
            children: []
          },
          {
            menuId: '125907843471874',
            menuName: '原始菜单管理',
            menuType: 'Menu',
            isOwn: 1,
            isShow: 1,
            code: 'system_menu_all',
            alias: 'menuAll ',
            path: '/system/menuAll',
            icon: 'iconfont iconicon_compile',
            dataPrivileges: [],
            children: []
          },
          {
            menuId: '1259071409534308354',
            menuName: '操作日志',
            menuType: 'Menu',
            isOwn: 1,
            isShow: 1,
            code: 'system_actionLog',
            alias: 'actionLog',
            path: '/system/actionLog',
            icon: 'iconfont iconicon_addresslist',
            dataPrivileges: [],
            children: []
          },
          // {
          //   menuId: '1259072341233010217985',
          //   menuName: '商户管理',
          //   menuType: 'Menu',
          //   isOwn: 1,
          //   isShow: 1,
          //   code: 'system_tenant',
          //   alias: 'tenant',
          //   path: '/system/tenant',
          //   icon: 'iconfont el-icon-key',
          //   dataPrivileges: [],
          //   children: []
          // },
          {
            menuId: '81585ddd-7bab-4db1-848c-91103ffc9014',
            menuName: '新闻管理',
            menuType: 'Dir',
            isOwn: 1,
            isShow: 1,
            code: 'news_manage',
            alias: '新闻管理',
            icon: 'iconfont iconicon_study',
            dataPrivileges: [],
            children: [
              {
                menuId: '81585ddd-7bab-4db1-848c-91103ffc9014',
                menuName: '新闻管理',
                menuType: 'Menu',
                isOwn: 1,
                isShow: 1,
                code: 'news_manage',
                alias: '新闻管理',
                path: '/newsCenter/newsManage',
                icon: 'iconfont iconicon_study',
                dataPrivileges: []
              },
              {
                menuId: 'e407bfbd-6f90-4628-97c4-eac6949e0a5b',
                menuName: '新闻发布',
                menuType: 'Menu',
                isOwn: 1,
                isShow: 0,
                code: 'news_publish',
                alias: '新闻发布',
                path: '/newsCenter/newsEdit',
                icon: '',
                dataPrivileges: [],
                children: []
              },
              {
                menuId: '2ddb4048-c735-4bd0-a85e-5c31037d9649',
                menuName: '新闻中心',
                menuType: 'Menu',
                isOwn: 1,
                isShow: 0,
                code: 'news_manage',
                alias: '新闻中心',
                path: '/newsCenter/newsCenter',
                icon: 'iconfont iconicon_study',
                dataPrivileges: [],
                children: []
              },
              {
                menuId: 'fa198d3f-46fc-4857-bcae-4a67b89d7071',
                menuName: '新闻详情',
                menuType: 'Menu',
                isOwn: 1,
                isShow: 0,
                code: 'news_detail',
                alias: '新闻详情',
                path: '/newsCenter/newsDetail',
                icon: 'icon-basics-detailed-outlined',
                dataPrivileges: [],
                children: []
              },
              {
                menuId: 'a12f338d-279f-43f9-b13a-c28689052dec',
                menuName: '草稿箱',
                menuType: 'Menu',
                isOwn: 1,
                isShow: 0,
                code: 'news_drafts',
                alias: '新闻详情',
                path: '/newsCenter/newsDrafts',
                icon: '',
                dataPrivileges: [],
                children: []
              },
              {
                menuId: 'acb97380-40dc-4918-972c-bed5b7450641',
                menuName: '已发布的',
                menuType: 'Menu',
                isOwn: 1,
                isShow: 0,
                code: 'news_published',
                alias: 'news_published',
                path: '/newsCenter/newsPublished',
                icon: '',
                dataPrivileges: [],
                children: []
              }
            ]
          }
        ]
      },
      {
        menuId: '1259073456778285158',
        menuName: '知识库',
        menuType: 'Dir',
        isOwn: 1,
        isShow: 1,
        code: 'repository',
        alias: 'repository',
        icon: 'iconfont iconicon_group',
        dataPrivileges: [],
        children: [
          {
            menuId: '1260401852546387969',
            menuName: '目录管理',
            menuType: 'Menu',
            isOwn: 1,
            isShow: 1,
            code: 'role',
            alias: '目录管理',
            path: '/repository/catalogManagement',
            icon: 'iconfont iconicon_group',
            dataPrivileges: [],
            children: []
          },
          {
            menuId: '12604101852546387969',
            menuName: '知识管理',
            menuType: 'Menu',
            isOwn: 1,
            isShow: 1,
            code: 'role',
            alias: '知识管理',
            path: '/repository/knowledgeManagement'
          },
          {
            menuId: '12604101852546387969',
            menuName: '创建资源',
            menuType: 'Menu',
            isOwn: 1,
            isShow: 0,
            code: 'role',
            alias: '知识管理',
            path: '/repository/knowledgeEdit'
          },
          {
            menuId: '12604101852546387969',
            menuName: '学习情况',
            menuType: 'Menu',
            isOwn: 1,
            isShow: 0,
            code: 'role',
            alias: '学习情况',
            path: '/repository/knowledgeDetail'
          },
          {
            menuId: '12604101852546387969',
            menuName: '调整排序',
            menuType: 'Menu',
            isOwn: 1,
            isShow: 0,
            code: 'role',
            alias: '调整排序',
            path: '/repository/catalogSort'
          }
        ]
      },
      {
        menuId: '1590112075691',
        menuName: '审批管理',
        menuType: 'Dir', // 菜单类型，Dir：目录，Menu：菜单；Button：按钮
        isOwn: 0, // 是否拥有 0：否，1：是
        isShow: 1, // 是否显示在菜单栏 0：否，1：是
        code: 'approval',
        alias: 'approval',
        path: '',
        icon: 'iconfont iconicon_setting',
        children: [
          {
            menuId: '15901120756913',
            menuName: '审批流程',
            menuType: 'Menu',
            isOwn: 1,
            isShow: 1,
            code: 'approval_approval',
            alias: 'approval',
            path: '/apprProcess/approvalList',
            icon: 'iconfont iconicon_compile'
          },
          {
            menuId: '15901120756920',
            menuName: '审批记录',
            menuType: 'Menu',
            isOwn: 1,
            isShow: 1,
            code: 'approval_recordList',
            alias: '/apprProcess/recordList',
            path: '/apprProcess/recordList',
            icon: 'iconfont iconicon_compile'
          },
          {
            menuId: '159011207563',
            menuName: '审批提交',
            menuType: 'Menu',
            isOwn: 1,
            isShow: 0,
            code: 'submit_approval',
            alias: 'submitApproval',
            path: '/apprProcess/apprSubmit',
            icon: 'iconfont iconicon_compile'
          },
          {
            menuId: '1590112075691322',
            menuName: '发起申请',
            menuType: 'Menu',
            isOwn: 1,
            isShow: 1,
            code: 'approval_launchApply',
            alias: 'launchApply',
            path: '/apprProcess/launchApply',
            icon: 'iconfont iconicon_compile'
          },
          {
            menuId: '0000006',
            menuName: '审批详情',
            menuType: 'Menu',
            isOwn: 1,
            isShow: 0,
            code: 'approval_approval',
            alias: 'approval',
            path: '/apprProcess/apprDetail',
            icon: 'iconfont iconicon_compile'
          },
          {
            menuId: '000000',
            menuName: '我的审批',
            menuType: 'Dir',
            isOwn: 1,
            isShow: 1,
            code: 'approval_approval',
            alias: 'approval',
            path: '',
            icon: 'iconfont iconicon_compile',
            children: [
              {
                menuId: '0000003',
                menuName: '待我审批',
                menuType: 'Menu',
                isOwn: 1,
                isShow: 1,
                code: 'approval_approval',
                alias: 'approval',
                path: '/apprProcess/appr/waitAppr',
                icon: 'iconfont iconicon_compile'
              },
              {
                menuId: '0000004',
                menuName: '我已审批',
                menuType: 'Menu',
                isOwn: 1,
                isShow: 1,
                code: 'approval_approval',
                alias: 'approval',
                path: '/apprProcess/appr/hasAppr',
                icon: 'iconfont iconicon_compile'
              },
              {
                menuId: '0000005',
                menuName: '抄送我的',
                menuType: 'Menu',
                isOwn: 1,
                isShow: 1,
                code: 'approval_approval',
                alias: 'approval',
                path: '/apprProcess/appr/copyApprToMe',
                icon: 'iconfont iconicon_compile'
              },
              {
                menuId: '0000001',
                menuName: '我发起的',
                menuType: 'Menu',
                isOwn: 1,
                isShow: 1,
                code: 'approval_approval',
                alias: 'approval',
                path: '/apprProcess/appr/apprByMe',
                icon: 'iconfont iconicon_compile'
              }
            ]
          }
        ]
      }
    ]
  },
  resMsg: '操作成功'
}

export default ({ mock }) => {
  if (!mock) return
  Mock.mock(new RegExp('/api/sys/v1/user/menu/privilege' + '.*'), 'get', () => {
    return res
  })
}
