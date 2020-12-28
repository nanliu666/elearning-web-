import { get, post, del, put } from '@/router/axios'

/**
 * 新增学习计划
 * @param {Object} params - 参数
 * */
export const getlearnPlanList = (params) => get('/api/blade-manage/v1/study/plan/queryPlan', params)

/**
 * 修改学习计划
 * @param {Object} params - 参数
 * */
export const updatePlan = (params) => put('/api/blade-manage/v1/study/plan/updatePlan', params)

/**
 * 新增分组分类
 * @param {Object} params - 参数
 * */
export const addCatalog = (params) =>
  post('/api/blade-manage/v1/study/plan/catalog/addCatalog', params)

/**
 * 删除分组分类
 * @param {Object} params - 参数
 * */
export const delCatalogs = (params) =>
  del('/api/blade-manage/v1/study/plan/catalog/delCatalogs', params)

/**
 * 查询分组分类
 * @param {Object} params - 参数
 * */
export const getCatalogs = (params) =>
  get('/api/blade-manage/v1/study/plan/catalog/getCatalogs', params)

/**
 * 分类移动
 * @param {Object} params - 参数
 * */
export const moveCatalogs = (params) => put('/api/blade-manage/v1/study/plan/catalog/move', params)

/**
 * 编辑分组分类
 * @param {Object} params - 参数
 * */
export const updateCatalogs = (params) =>
  put('/api/blade-manage/v1/study/plan/catalog/updateCatalogs', params)

/**
 * 编辑分组分类
 * @param {Object} params - 参数
 * */
export const addPlan = (params) => post('/api/blade-manage/v1/study/plan/addPlan', params)

/**
 * 人员信息
 * @param {Object} params - 参数
 * */
export const getUserList = (params) => get('/api/user/v1/user/work/list', params)

/**
 * 查看完成率
 * @param {Object} params - 参数
 * */
export const queryPercentageComplete = (params) =>
  get('/api/blade-manage/v1/study/plan/queryPercentageComplete', params)

/**
 * 选修课查询
 * @param {Object} params - 参数
 * */
export const queryLog = (params) => get('/api/blade-manage/v1/study/plan/course/queryLog', params)

/**
 * 删除学习计划
 * @param {Object} params - 参数
 * */
export const deletePlan = (params) => del('/api/blade-manage/v1/study/plan/deletePlan', params)

/**
 * 查询学习计划详情
 * @param {Object} params - 参数
 * */
export const planDetail = (params) => get('/api/blade-manage/v1/study/plan/planDetail', params)

/**
 * 查询课程详情
 * @param {Object} params - 参数
 * */
export const courseDetail = (params) => get('/api/blade-manage/v1/study/plan/courseDetail', params)

/**
 * 查询课程信息列表
 * @param {Object} params - 参数
 * */
export const getCourseList = (params) => get('/api/blade-manage/v1/course/getCourseList', params)
