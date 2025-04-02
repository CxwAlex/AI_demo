/**
 * 元宝AI助手 API 配置文件
 * 在此文件中配置您的API信息
 */

// API配置
const API_CONFIG = {
  // DeepSeek API配置
  DEEPSEEK: {
    API_URL: 'https://api.deepseek.com/v1/chat/completions',
    API_KEY: '', // 在此填入您的DeepSeek API密钥
    MODEL: 'deepseek-chat',
    TEMPERATURE: 0.7,
    MAX_TOKENS: 2000,
    TOP_P: 0.9,
    FREQUENCY_PENALTY: 0,
    PRESENCE_PENALTY: 0
  },
  // 腾讯云Hunyuan API配置
  HUNYUAN: {
    API_URL: 'https://api.hunyuan.cloud.tencent.com/v1/chat/completions',
    API_KEY: '', // 在此填入您的腾讯云API密钥
    MODEL: 'hunyuan-turbo',
    TEMPERATURE: 0.7,
    MAX_TOKENS: 2000,
    TOP_P: 0.9,
    FREQUENCY_PENALTY: 0,
    PRESENCE_PENALTY: 0
  },
  // 阿里云DeepSeek API配置
  ALIYUN_DEEPSEEK: {
    API_URL: 'https://dashscope.aliyuncs.com/api/v1/services/aigc/text-generation/generation',
    API_KEY: '', // 在此填入您的阿里云API密钥
    MODEL: 'deepseek-r1',
    TEMPERATURE: 0.7,
    MAX_TOKENS: 2000,
    TOP_P: 0.9,
    FREQUENCY_PENALTY: 0,
    PRESENCE_PENALTY: 0
  },
  // 通义千问API配置
  QWEN: {
    API_URL: 'https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions',
    API_KEY: '', // 在此填入您的通义千问API密钥
    MODEL: 'qwen2.5-7b-instruct-1m',  // 更新为正确的模型名称
    TEMPERATURE: 0.7,
    MAX_TOKENS: 2000,
    TOP_P: 0.9,
    FREQUENCY_PENALTY: 0,
    PRESENCE_PENALTY: 0
  },
  // 阿里云OSS配置
  ALIYUN_OSS: {
    REGION: 'oss-cn-hangzhou',  // 替换为您的REGION
    BUCKET: '', // 替换为您的BUCKET
    ACCESS_KEY_ID: '', // 替换为您的ACCESS_KEY_ID
    ACCESS_KEY_SECRET: '',// 替换为您的ACCESS_KEY_SECRET
    ENDPOINT: 'https://oss-cn-hangzhou.aliyuncs.com'  // OSS访问域名
  },
  QWEN_VL: {
    API_KEY: '',  // 替换为您的API密钥
    API_URL: 'https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions',
    MODEL: 'qwen-vl-max',  // 使用最新的通义千问VL模型
    TEMPERATURE: 0.7,
    MAX_TOKENS: 2048,
    TOP_P: 0.95
  }
};

// 系统提示词配置
const SYSTEM_PROMPTS = {
  'Hunyuan': '你是元宝AI助手，由腾讯公司开发的混元大模型。请用中文回答问题，保持友好和专业的态度。',
  'Deepseek': '你是元宝AI助手，使用DeepSeek大模型。请用中文回答问题，保持友好和专业的态度。',
  'Qwen': '你是元宝AI助手，使用通义千问大模型。请用中文回答问题，保持友好和专业的态度。',
  'T1·深度思考': '你是元宝AI助手的深度思考模式。请提供深入的分析和见解，注重逻辑性和全面性。',
  '联网搜索': '你是元宝AI助手的联网搜索模式。请提供最新、准确的网络信息，并注明信息来源。',
  '可信搜索': '你是元宝AI助手的可信搜索模式。请只提供经过验证的权威信息，确保信息的可靠性。'
}; 