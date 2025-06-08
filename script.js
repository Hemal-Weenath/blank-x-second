AOS.init({
  duration: 1200,
  once: true,
  offset: 100
});

// AI Chat Functionality with Simple Receptionist Responses
const searchInput = document.querySelector('.ai-search-input');
const chatBox = document.querySelector('#aiChatBox');
const chatBody = document.querySelector('#aiChatBody');
const chatText = document.querySelector('#aiChatText');
const chatSend = document.querySelector('#aiChatSend');
const chatClose = document.querySelector('#aiChatClose');

// Predefined simple responses for receptionist-like AI
const simpleResponses = {
  "hi": "Hello! How can I help you today?",
  "hello": "Hi there! How can I assist you in exploring Blank X’s universe?",
  "hey": "Hey! How can I guide you through Blank X Innovations?",
  "what do you do": "I’m Blank X Test AI Model, here to help you explore our cosmic services: web design, branding, UI/UX, and more! How can I assist?",
  "who are you": "I’m Blank X Test AI Model, your receptionist for Blank X Innovations. We’re cosmic trailblazers in digital solutions. How can I help?",
  "what is blank x": "Blank X Innovations is your partner in digital evolution, offering stellar web design, branding, UI/UX, and more. How can I assist?",
  "bye": "Goodbye! Reach out anytime at blankxinnovationsofficial@gmail.com or +94 71 95 52 053. Safe travels!",
  "thank you": "You’re welcome! How else can I help you today?",
  "thanks": "My pleasure! Anything else you’d like to know about Blank X Innovations?"
};

// Function to check for simple responses
function getSimpleResponse(query) {
  const cleanQuery = query.toLowerCase().trim();
  return simpleResponses[cleanQuery] || null;
}

// Function to handle user input and display in chat
function handleUserInput(userMessage) {
  if (userMessage.length > 0) {
    // Show chat box
    chatBox.classList.add('show');
    
    // Display user message
    const userMsgDiv = document.createElement('div');
    userMsgDiv.className = 'ai-chat-message user';
    userMsgDiv.textContent = userMessage;
    chatBody.appendChild(userMsgDiv);
    chatBody.scrollTop = chatBody.scrollHeight;

    // Check for simple response
    const simpleReply = getSimpleResponse(userMessage);
    if (simpleReply) {
      const aiMsgDiv = document.createElement('div');
      aiMsgDiv.className = 'ai-chat-message ai';
      aiMsgDiv.textContent = simpleReply;
      chatBody.appendChild(aiMsgDiv);
      chatBody.scrollTop = chatBody.scrollHeight;
    } else {
      // Fallback response for unknown queries
      const aiMsgDiv = document.createElement('div');
      aiMsgDiv.className = 'ai-chat-message ai';
      aiMsgDiv.textContent = "I’m not sure about that, but I’m here to help! Try asking about Blank X’s services, portfolio, or contact details.";
      chatBody.appendChild(aiMsgDiv);
      chatBody.scrollTop = chatBody.scrollHeight;
    }
  }
}

// Handle search bar input
searchInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter' && this.value.trim().length > 0) {
    const userMessage = this.value.trim();
    handleUserInput(userMessage);
    this.value = '';
  }
});

// Handle chat box input
function handleChatInput() {
  const userMessage = chatText.value.trim();
  if (userMessage.length > 0) {
    handleUserInput(userMessage);
    chatText.value = '';
  }
}

chatSend.addEventListener('click', handleChatInput);
chatText.addEventListener('keypress', function(e) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    handleChatInput();
  }
});

// Close chat box
chatClose.addEventListener('click', function() {
  chatBox.classList.remove('show');
});

// Close chat box when clicking outside
document.addEventListener('click', function(e) {
  if (!chatBox.contains(e.target) && !searchInput.contains(e.target)) {
    chatBox.classList.remove('show');
  }
});

// Water Droplet Mouse Pointer Functionality
const waterDropletCursor = document.getElementById('waterDropletCursor');
document.addEventListener('mousemove', (e) => {
  waterDropletCursor.style.left = e.clientX + 'px';
  waterDropletCursor.style.top = e.clientY + 'px';
});