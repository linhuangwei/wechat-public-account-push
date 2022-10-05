/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx05c90b8b660cd199',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '4d40503663a1ad0b40354d868a704cd8',

  PROVINCE: '福建',
  CITY: '福州',
  SWITCH: {
    /** 每日天气 */
    weather: true,

    /** 节假日 */
    // 下一休息日综合提醒
    holidaytts: true,

    /** 每日N句 */
    // 金山每日一句
    CIBA: true,
    // 每日一言
    oneTalk: false,
    // 土味情话(彩虹屁)
    earthyLoveWords: true,
    // 朋友圈文案
    momentCopyrighting: false,
    // 毒鸡汤
    poisonChickenSoup: false,
    // 古诗古文
    poetry: false,

    /** 星座运势 */
    horoscope: true,

    /** 生日消息和节日消息 */
    birthdayMessage: true,

    // 学生课表
    courseSchedule: false,
  },

  USERS: [
    {
      // 想要发送的人的名字
      name: '雅艺宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o16I-5u_CnrQFPyy1nLIGutiNeis',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '1Olq6I5q4qzEsjRcO4AT0G0zHeVQ3JubFLOfznocu40',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-17',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '生日', name: '宝贝', year: '1998', date: '12-17',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '男友', year: '1997', date: '12-01',
        },
        {
          type: '节日', name: '恋爱纪念日', year: '2021', date: '12-24',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2021-12-24' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
    {
      // 想要发送的人的名字
      name: '雅艺宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o16I-5sl4WpPgEcKgzJGwFPxDzUg',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '1Olq6I5q4qzEsjRcO4AT0G0zHeVQ3JubFLOfznocu40',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-17',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '生日', name: '宝贝', year: '1998', date: '12-17',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '男友', year: '1997', date: '12-01',
        },
        {
          type: '节日', name: '恋爱纪念日', year: '2021', date: '12-24',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2021-12-24' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '',
    }
  ],

}

module.exports = USER_CONFIG

