// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
  // 更新状态栏时间
  updateStatusBarTime();
  setInterval(updateStatusBarTime, 60000);
  
  // 初始化底部导航栏点击事件
  initTabBarEvents();
  
  // 初始化输入框事件
  initInputEvents();
});

// 更新状态栏时间
function updateStatusBarTime() {
  const timeElements = document.querySelectorAll('.status-bar-time');
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const timeString = `${hours}:${minutes}`;
  
  timeElements.forEach(el => {
    el.textContent = timeString;
  });
}

// 初始化底部导航栏点击事件
function initTabBarEvents() {
  const tabItems = document.querySelectorAll('.tab-item');
  
  tabItems.forEach(item => {
    item.addEventListener('click', function() {
      // 移除所有激活状态
      tabItems.forEach(tab => tab.classList.remove('active'));
      
      // 添加当前项的激活状态
      this.classList.add('active');
      
      // 获取目标页面
      const targetPage = this.getAttribute('data-target');
      
      // 如果在iframe中，则更新父页面的iframe src
      if (window.parent !== window) {
        const iframes = window.parent.document.querySelectorAll('iframe');
        iframes.forEach(iframe => {
          if (iframe.contentWindow === window) {
            iframe.src = `pages/${targetPage}.html`;
          }
        });
      } else {
        // 直接跳转
        window.location.href = `pages/${targetPage}.html`;
      }
    });
  });
}

// 初始化输入框事件
function initInputEvents() {
  const chatInputs = document.querySelectorAll('.chat-input');
  
  chatInputs.forEach(input => {
    const sendButton = input.parentElement.querySelector('.send-button');
    
    // 输入框回车事件
    input.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        sendMessage(input.value);
        input.value = '';
        e.preventDefault();
      }
    });
    
    // 发送按钮点击事件
    if (sendButton) {
      sendButton.addEventListener('click', function() {
        sendMessage(input.value);
        input.value = '';
      });
    }
  });
}

// 发送消息
function sendMessage(text) {
  if (!text.trim()) return;
  
  const messageContainer = document.querySelector('.message-container');
  if (!messageContainer) return;
  
  // 创建用户消息
  const userMessage = document.createElement('div');
  userMessage.className = 'message message-user';
  userMessage.textContent = text;
  messageContainer.appendChild(userMessage);
  
  // 滚动到底部
  messageContainer.scrollTop = messageContainer.scrollHeight;
  
  // 显示AI正在输入
  const typingIndicator = document.createElement('div');
  typingIndicator.className = 'message message-ai typing-indicator';
  typingIndicator.innerHTML = '<div class="loading-dots"><div class="dot"></div><div class="dot"></div><div class="dot"></div></div>';
  messageContainer.appendChild(typingIndicator);
  
  // 模拟AI回复
  setTimeout(() => {
    // 移除输入指示器
    messageContainer.removeChild(typingIndicator);
    
    // 创建AI回复消息
    const aiMessage = document.createElement('div');
    aiMessage.className = 'message message-ai';
    
    // 根据用户输入生成回复
    let reply = '';
    if (text.includes('你好') || text.includes('嗨') || text.includes('hi')) {
      reply = '你好！我是元宝AI助手，有什么可以帮助你的吗？';
    } else if (text.includes('天气')) {
      reply = '今天天气晴朗，气温22-28℃，适合外出活动。';
    } else if (text.includes('新闻') || text.includes('资讯')) {
      reply = '今日热点：1. 人工智能新突破；2. 全球气候变化会议召开；3. 新能源汽车销量创新高。';
    } else if (text.includes('写') || text.includes('文案') || text.includes('文章')) {
      reply = '好的，我可以帮你写作。请告诉我具体的主题和要求，我会为你生成高质量的内容。';
    } else if (text.includes('翻译')) {
      reply = '我可以帮你翻译多种语言。请告诉我需要翻译的内容和目标语言。';
    } else {
      reply = '我理解你的问题了。作为AI助手，我可以帮你查询信息、创作内容、解答问题等。请告诉我更多细节，以便我提供更精准的帮助。';
    }
    
    aiMessage.textContent = reply;
    messageContainer.appendChild(aiMessage);
    
    // 滚动到底部
    messageContainer.scrollTop = messageContainer.scrollHeight;
  }, 1500);
}

// 切换功能页面
function switchFeature(feature) {
  // 如果在iframe中，则更新父页面的iframe src
  if (window.parent !== window) {
    const iframes = window.parent.document.querySelectorAll('iframe');
    iframes.forEach(iframe => {
      if (iframe.contentWindow === window) {
        iframe.src = `pages/${feature}.html`;
      }
    });
  } else {
    // 直接跳转
    window.location.href = `pages/${feature}.html`;
  }
} 