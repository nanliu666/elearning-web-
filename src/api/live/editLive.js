import { del, get, post, put } from '@/router/axios'

// 添加直播
export const postAddLive = (params) => post('/api/common/v1/live/plan/addLivePlan', params)

//  获取直播详情
export const getLiveDetails = (params) => get('api/manage/v1/course/getCourseList', params)

// 分类查询接口
export const getcategoryTree = (params) => get('/api/common/v1/category/getCategoryTree', params)

//  根据名称搜索教师接口
export const getQueryTeacher = (params) => get('/api/common/v1/live/plan/getLiveTeachers', params)

//  根据名称搜索嘉宾或助教
export const getQueryAssistant = (params) =>
  get('api/common/v1/live/plan/getGuestOrAssistant', params)

//  查询直播课程信息列表
export const getQueryCurriculum = (params) => get('api/manage/v1/course/getCourseList', params)

//  获取组织用户
export const getOrganizationUser = (params) => get('api/org/v1/org/user/child', params)

//  获取其他用户
export const getOtherUser = (params) => get('api/user/v1/user/outer', params)

//  获取该组织下的所有用户包括子用户
export const getUsersByOrgId = (params) => get('api/common/v1/live/plan/getUsersByOrgId', params)

/**
 * 分类查询接口
 * */
// export const getCategoryList = (params) => get('/manage/v1/evaluation/category', params)
/**
 * 修改分类
 * */
export const putCategory = (params) => put('/manage/v1/evaluation/category', params)
/**
 * 删除分类
 * */
export const delCategory = (params) => del('/manage/v1/evaluation/category', params)
/**
 * 新增分类接口
 * */
// export const postCategory = (params) => post('/manage/v1/evaluation/category', params)
/**
 * 分类查询接口
 * */
export const ableCategory = (params) => put('/manage/v1/evaluation/category/able', params)
