document.addEventListener("DOMContentLoaded", () => {
    // DOM Elements
    const chatContainer = document.getElementById("chatContainer")
    const userInputForm = document.getElementById("userInputForm")
    const userInputField = document.getElementById("userInput")
    const budgetSummaryCard = document.getElementById("budgetSummaryCard")
    const budgetSummaryContent = document.getElementById("budgetSummaryContent")
    const restartButton = document.getElementById("restartButton")
    const downloadButton = document.getElementById("downloadButton")
  
    // Language selection
    let currentLanguage = "en" // Default language is English
  
    // Translations
    const translations = {
      en: {
        welcome:
          "👋 Hi there! I'm your SpendSmart financial assistant. I'll help analyze your budget and provide personalized advice.",
        intro:
          "I'll ask you a series of questions about your finances to understand your complete financial picture. Please answer honestly for the most accurate analysis.",
        languageSelect: "Please select your preferred language: \n1. English \n2. العربية (Arabic)",
        analyzing: "Thanks for providing all the information! I'm analyzing your budget now...",
        completed: "I've completed your budget analysis! Here's a summary of your financial situation:",
        inputPlaceholder: "Type your answer...",
        startOver: "Start Over",
        downloadReport: "Download Report",
        overview: "Overview",
        categories: "Categories",
        advice: "Advice",
        financialOverview: "Financial Overview",
        totalMoney: "💰 Total Money Available",
        monthlyIncome: "💵 Monthly Income",
        totalExpenses: "🧾 Total Monthly Expenses",
        monthsCoverage: "📅 Months Coverage",
        recommended: "Recommended: At least 6 months",
        budgetBreakdown: "Budget Breakdown (50/30/20 Rule)",
        rule5030: "The 50/30/20 Rule",
        ruleDescription:
          "A popular budgeting method that suggests allocating 50% of your income to needs, 30% to wants, and 20% to savings and debt repayment.",
        needs: "Needs",
        wants: "Wants",
        savings: "Savings",
        target: "Target",
        needsDescription: "Housing, food, transportation, and other essentials.",
        wantsDescription: "Entertainment, dining out, subscriptions, and other non-essentials.",
        savingsDescription: "Savings and debt repayment.",
        current: "Current",
        ideal: "Ideal",
        spendingByCategory: "Spending by Category",
        categoryAnalysis: "Category Analysis",
        criticalIssues: "Critical Issues",
        importantRecommendations: "Important Recommendations",
        suggestionsImprovement: "Suggestions for Improvement",
        generalTips: "General Financial Tips",
        tips: [
          "Track your expenses regularly to stay aware of your spending habits.",
          "Consider using the envelope budgeting method for categories where you tend to overspend.",
          "Review and cancel unused subscriptions at least twice a year.",
          "Look for ways to increase your income through side hustles or career advancement.",
          "Automate your savings to ensure consistent contributions.",
        ],
        questions: [
          "How much money do you currently have in savings and checking accounts combined?",
          "What is your total monthly income after taxes?",
          "How much do you spend monthly on food and groceries?",
          "How much do you spend on transportation (fuel, public transit, taxis, etc.)?",
          "How much do you pay for rent or housing-related costs (including utilities)?",
          "How much do you spend on entertainment (e.g., movies, dining out, shopping)?",
          "How much do you spend on education or school-related expenses (for yourself or others)?",
          "Do you financially support others? If yes, how much monthly?",
          "Do you have any ongoing medical expenses? If yes, how much per month?",
          "How much do you save monthly (if any)? Or how much would you like to save?",
          "Do you have any debt payments (credit cards, loans, etc.)? If yes, how much monthly?",
          "How much do you spend on subscriptions (streaming services, gym, etc.) monthly?",
        ],
        explanations: [
          "This helps me understand your current financial reserves.",
          "Your income is the foundation of your budget planning.",
          "Food is a necessity, but there are often ways to optimize this spending.",
          "Transportation costs can add up quickly and often have room for optimization.",
          "Housing is typically the largest expense for most people.",
          "Entertainment spending is discretionary and often where budgets can be adjusted.",
          "Education expenses are important investments in your future.",
          "Supporting others affects how you allocate your resources.",
          "Medical expenses are essential but can sometimes be optimized.",
          "Saving is crucial for financial security and future goals.",
          "Debt management is a key part of financial health.",
          "Subscription costs often go unnoticed but can add up significantly.",
        ],
        categories: {
          housing: "Housing",
          food: "Food",
          transportation: "Transportation",
          entertainment: "Entertainment",
          education: "Education",
          support: "Support Others",
          medical: "Medical",
          savings: "Savings",
          debt: "Debt Payments",
          subscriptions: "Subscriptions",
        },
        advice: {
          overspending:
            "You're spending {amount} more than you earn each month. This is unsustainable and requires immediate attention.",
          emergencyLow:
            "Your emergency fund only covers {months} months of expenses. Aim to build this up to at least 3-6 months of expenses.",
          emergencyMedium:
            "Your emergency fund covers {months} months of expenses, which is good. Consider increasing it to 6 months for better security.",
          emergencyGood:
            "Great job on your emergency fund! You have enough savings to cover expenses for {months} months.",
          needsHigh:
            "Your essential needs take up {percent}% of your income (ideal: 50%). Look for ways to reduce housing, food, or transportation costs.",
          wantsHigh:
            "You're spending {percent}% of your income on wants (ideal: 30%). Consider reducing entertainment and subscription expenses.",
          savingsLow:
            "You're only putting {percent}% of your income toward savings and debt repayment (ideal: 20%). Try to increase this amount.",
          categoryHigh:
            "Your {category} expenses are {percent}% higher than recommended. Consider reducing this by {amount} monthly.",
          increaseSavings:
            "Try to increase your monthly savings by {amount} to reach the recommended 15% of your income.",
          subscriptions:
            "Review your subscriptions and cancel those you don't regularly use. This could save you significant money each month.",
        },
      },
      ar: {
        welcome: "👋 مرحبًا! أنا مساعدك المالي من SpendSmart. سأساعدك في تحليل ميزانيتك وتقديم نصائح مخصصة.",
        intro:
          "سأطرح عليك سلسلة من الأسئلة حول وضعك المالي لفهم صورتك المالية الكاملة. يرجى الإجابة بصدق للحصول على التحليل الأكثر دقة.",
        languageSelect: "الرجاء اختيار لغتك المفضلة: \n1. English (الإنجليزية) \n2. العربية",
        analyzing: "شكرًا لتقديم جميع المعلومات! أقوم بتحليل ميزانيتك الآن...",
        completed: "لقد أكملت تحليل ميزانيتك! إليك ملخصًا لوضعك المالي:",
        inputPlaceholder: "اكتب إجابتك...",
        startOver: "ابدأ من جديد",
        downloadReport: "تنزيل التقرير",
        overview: "نظرة عامة",
        categories: "الفئات",
        advice: "النصائح",
        financialOverview: "نظرة عامة مالية",
        totalMoney: "💰 إجمالي المال المتاح",
        monthlyIncome: "💵 الدخل الشهري",
        totalExpenses: "🧾 إجمالي النفقات الشهرية",
        monthsCoverage: "📅 تغطية الأشهر",
        recommended: "الموصى به",
        budgetBreakdown: "تقسيم الميزانية (قاعدة 50/30/20)",
        rule5030: "قاعدة 50/30/20",
        ruleDescription:
          "طريقة شائعة للميزانية تقترح تخصيص 50٪ من دخلك للاحتياجات، و30٪ للرغبات، و20٪ للادخار وسداد الديون.",
        needs: "الاحتياجات",
        wants: "الرغبات",
        savings: "المدخرات",
        target: "الهدف",
        needsDescription: "السكن، الطعام، النقل، وغيرها من الضروريات.",
        wantsDescription: "الترفيه، تناول الطعام بالخارج، الاشتراكات، وغيرها من الكماليات.",
        savingsDescription: "المدخرات وسداد الديون.",
        current: "الحالي",
        ideal: "المثالي",
        spendingByCategory: "الإنفاق حسب الفئة",
        categoryAnalysis: "تحليل الفئات",
        criticalIssues: "قضايا حرجة",
        importantRecommendations: "توصيات مهمة",
        suggestionsImprovement: "اقتراحات للتحسين",
        generalTips: "نصائح مالية عامة",
        tips: [
          "تتبع نفقاتك بانتظام للبقاء على دراية بعادات الإنفاق الخاصة بك.",
          "فكر في استخدام طريقة ميزانية المظاريف للفئات التي تميل إلى الإنفاق الزائد فيها.",
          "راجع وألغِ الاشتراكات غير المستخدمة مرتين على الأقل سنويًا.",
          "ابحث عن طرق لزيادة دخلك من خلال الأعمال الجانبية أو التقدم الوظيفي.",
          "قم بأتمتة مدخراتك لضمان المساهمات المنتظمة.",
        ],
        questions: [
          "كم من المال لديك حاليًا في حسابات التوفير والحسابات الجارية مجتمعة؟",
          "ما هو إجمالي دخلك الشهري بعد الضرائب؟",
          "كم تنفق شهريًا على الطعام والبقالة؟",
          "كم تنفق على وسائل النقل (الوقود، النقل العام، سيارات الأجرة، إلخ)؟",
          "كم تدفع للإيجار أو التكاليف المتعلقة بالسكن (بما في ذلك المرافق)؟",
          "كم تنفق على الترفيه (مثل الأفلام، تناول الطعام بالخارج، التسوق)؟",
          "كم تنفق على التعليم أو النفقات المتعلقة بالمدرسة (لنفسك أو للآخرين)؟",
          "هل تدعم الآخرين ماليًا؟ إذا كانت الإجابة نعم، فكم شهريًا؟",
          "هل لديك أي نفقات طبية مستمرة؟ إذا كانت الإجابة نعم، فكم شهريًا؟",
          "كم توفر شهريًا (إن وجد)؟ أو كم ترغب في توفير؟",
          "هل لديك أي مدفوعات ديون (بطاقات ائتمان، قروض، إلخ)؟ إذا كانت الإجابة نعم، فكم شهريًا؟",
          "كم تنفق على الاشتراكات (خدمات البث، صالة الألعاب الرياضية، إلخ) شهريًا؟",
        ],
        explanations: [
          "هذا يساعدني على فهم احتياطياتك المالية الحالية.",
          "دخلك هو أساس تخطيط ميزانيتك.",
          "الطعام ضرورة، ولكن غالبًا ما توجد طرق لتحسين هذا الإنفاق.",
          "يمكن أن تتراكم تكاليف النقل بسرعة وغالبًا ما يكون هناك مجال للتحسين.",
          "السكن هو عادة أكبر نفقة لمعظم الناس.",
          "الإنفاق على الترفيه اختياري وغالبًا ما يكون المكان الذي يمكن تعديل الميزانيات فيه.",
          "نفقات التعليم هي استثمارات مهمة في مستقبلك.",
          "دعم الآخرين يؤثر على كيفية تخصيص مواردك.",
          "النفقات الطبية ضرورية ولكن يمكن تحسينها في بعض الأحيان.",
          "الادخار أمر بالغ الأهمية للأمن المالي والأهداف المستقبلية.",
          "إدارة الديون جزء أساسي من الصحة المالية.",
          "تكاليف الاشتراك غالبًا ما تمر دون أن يلاحظها أحد ولكنها يمكن أن تتراكم بشكل كبير.",
        ],
        categories: {
          housing: "السكن",
          food: "الطعام",
          transportation: "النقل",
          entertainment: "الترفيه",
          education: "التعليم",
          support: "دعم الآخرين",
          medical: "الطبية",
          savings: "المدخرات",
          debt: "مدفوعات الديون",
          subscriptions: "الاشتراكات",
        },
        advice: {
          overspending: "أنت تنفق {amount} أكثر مما تكسب كل شهر. هذا غير مستدام ويتطلب اهتمامًا فوريًا.",
          emergencyLow:
            "صندوق الطوارئ الخاص بك يغطي فقط {months} أشهر من النفقات. اهدف إلى زيادة هذا إلى 3-6 أشهر على الأقل.",
          emergencyMedium:
            "صندوق الطوارئ الخاص بك يغطي {months} أشهر من النفقات، وهذا جيد. فكر في زيادته إلى 6 أشهر لمزيد من الأمان.",
          emergencyGood:
            "عمل رائع في صندوق الطوارئ الخاص بك! لديك ما يكفي من المدخرات لتغطية النفقات لمدة {months} أشهر.",
          needsHigh:
            "احتياجاتك الأساسية تستهلك {percent}٪ من دخلك (المثالي: 50٪). ابحث عن طرق لتقليل تكاليف السكن أو الطعام أو النقل.",
          wantsHigh: "أنت تنفق {percent}٪ من دخلك على الرغبات (المثالي: 30٪). فكر في تقليل نفقات الترفيه والاشتراكات.",
          savingsLow: "أنت تضع فقط {percent}٪ من دخلك نحو المدخرات وسداد الديون (المثالي: 20٪). حاول زيادة هذا المبلغ.",
          categoryHigh:
            "نفقات {category} الخاصة بك أعلى بنسبة {percent}٪ من الموصى به. فكر في تقليل هذا بمقدار {amount} شهريًا.",
          increaseSavings: "حاول زيادة مدخراتك الشهرية بمقدار {amount} للوصول إلى النسبة الموصى بها وهي 15٪ من دخلك.",
          subscriptions:
            "راجع اشتراكاتك وألغِ تلك التي لا تستخدمها بانتظام. يمكن أن يوفر لك هذا مبلغًا كبيرًا من المال كل شهر.",
        },
      },
    }
  
    // Category icons for visualization
    const categoryIcons = {
      savings: "fa-piggy-bank",
      income: "fa-money-bill-wave",
      food: "fa-utensils",
      transportation: "fa-car",
      housing: "fa-home",
      entertainment: "fa-film",
      education: "fa-graduation-cap",
      support: "fa-hands-helping",
      medical: "fa-hospital",
      debt: "fa-credit-card",
      subscriptions: "fa-repeat",
    }
  
    // User answers storage
    let userAnswers = []
    let currentQuestionIndex = -1 // Start at -1 for language selection
    let chatbotReady = false
    let budgetData = {}
    const charts = {}
  
    // Initialize chatbot
    function initChatbot() {
      // Clear chat container
      chatContainer.innerHTML = ""
  
      // Add welcome message
      setTimeout(() => {
        addBotMessage(translations[currentLanguage].welcome)
  
        setTimeout(() => {
          // Ask for language preference first
          addBotMessage(translations.en.languageSelect)
          userInputField.placeholder = translations[currentLanguage].inputPlaceholder
          chatbotReady = true
        }, 1500)
      }, 1000)
    }
  
    // Add progress bar to chat
    function addProgressBar() {
      const progressContainer = document.createElement("div")
      progressContainer.className = "progress-container"
      progressContainer.id = "progressBar"
  
      const progressBar = document.createElement("div")
      progressBar.className = "progress-bar"
      progressBar.style.width = "0%"
  
      progressContainer.appendChild(progressBar)
      chatContainer.appendChild(progressContainer)
    }
  
    // Update progress bar
    function updateProgressBar() {
      const progressBar = document.querySelector(".progress-bar")
      const progressPercentage = ((currentQuestionIndex + 1) / translations[currentLanguage].questions.length) * 100
      progressBar.style.width = `${progressPercentage}%`
    }
  
    // Ask a question
    function askQuestion(index) {
      if (index < translations[currentLanguage].questions.length) {
        addBotMessage(translations[currentLanguage].questions[index])
        userInputField.focus()
        updateProgressBar()
      } else {
        // All questions answered, show analysis
        processAnswers()
      }
    }
  
    // Add bot message to chat
    function addBotMessage(message) {
      // Add typing indicator
      const typingIndicator = document.createElement("div")
      typingIndicator.className = "typing-indicator bot-message message"
      typingIndicator.innerHTML = `
              <span></span>
              <span></span>
              <span></span>
          `
      chatContainer.appendChild(typingIndicator)
  
      // Scroll to bottom
      chatContainer.scrollTop = chatContainer.scrollHeight
  
      // Replace with actual message after delay
      setTimeout(() => {
        typingIndicator.remove()
  
        const messageDiv = document.createElement("div")
        messageDiv.className = "bot-message message"
        messageDiv.textContent = message
        chatContainer.appendChild(messageDiv)
  
        // Scroll to bottom
        chatContainer.scrollTop = chatContainer.scrollHeight
      }, 1500)
    }
  
    // Add user message to chat
    function addUserMessage(message) {
      const messageDiv = document.createElement("div")
      messageDiv.className = "user-message message"
      messageDiv.textContent = message
      chatContainer.appendChild(messageDiv)
  
      // Scroll to bottom
      chatContainer.scrollTop = chatContainer.scrollHeight
    }
  
    // Process form submission
    userInputForm.addEventListener("submit", (e) => {
      e.preventDefault()
  
      if (!chatbotReady) return
  
      const userInput = userInputField.value.trim()
  
      if (userInput === "") return
  
      // Add user message to chat
      addUserMessage(userInput)
  
      // Handle language selection
      if (currentQuestionIndex === -1) {
        if (userInput === "1" || userInput.toLowerCase() === "english") {
          currentLanguage = "en"
        } else if (userInput === "2" || userInput.toLowerCase() === "arabic" || userInput === "العربية") {
          currentLanguage = "ar"
          // Add RTL class to body for Arabic
          document.body.classList.add("rtl")
        } else {
          // Default to English if input is not recognized
          currentLanguage = "en"
        }
  
        // Update placeholder text based on selected language
        userInputField.placeholder = translations[currentLanguage].inputPlaceholder
  
        // Show introduction message in selected language
        setTimeout(() => {
          addBotMessage(translations[currentLanguage].intro)
  
          setTimeout(() => {
            // Show progress bar
            addProgressBar()
  
            // Start asking questions
            currentQuestionIndex = 0
            askQuestion(currentQuestionIndex)
          }, 1500)
        }, 1000)
      } else {
        // Store answer
        userAnswers[currentQuestionIndex] = userInput
  
        // Add explanation for the question
        if (translations[currentLanguage].explanations[currentQuestionIndex]) {
          setTimeout(() => {
            const explanationDiv = document.createElement("div")
            explanationDiv.className = "bot-message message"
            explanationDiv.innerHTML = `<i class="fas fa-info-circle me-2"></i>${translations[currentLanguage].explanations[currentQuestionIndex]}`
            chatContainer.appendChild(explanationDiv)
  
            // Scroll to bottom
            chatContainer.scrollTop = chatContainer.scrollHeight
          }, 1000)
        }
  
        // Clear input field
        userInputField.value = ""
  
        // Move to next question
        currentQuestionIndex++
  
        // Ask next question after delay
        setTimeout(() => {
          askQuestion(currentQuestionIndex)
        }, 2000)
      }
    })
  
    // Process all answers and show budget summary
    function processAnswers() {
      chatbotReady = false
  
      // Show loading message
      addBotMessage(translations[currentLanguage].analyzing)
  
      setTimeout(() => {
        // Parse numerical values
        const currentMoney = extractNumber(userAnswers[0])
        const monthlyIncome = extractNumber(userAnswers[1])
        const foodExpenses = extractNumber(userAnswers[2])
        const transportationExpenses = extractNumber(userAnswers[3])
        const housingExpenses = extractNumber(userAnswers[4])
        const entertainmentExpenses = extractNumber(userAnswers[5])
        const educationExpenses = extractNumber(userAnswers[6])
        const supportExpenses = extractNumber(userAnswers[7])
        const medicalExpenses = extractNumber(userAnswers[8])
        const monthlySavings = extractNumber(userAnswers[9])
        const debtPayments = extractNumber(userAnswers[10])
        const subscriptionExpenses = extractNumber(userAnswers[11])
  
        // Calculate total expenses
        const totalExpenses =
          foodExpenses +
          transportationExpenses +
          housingExpenses +
          entertainmentExpenses +
          educationExpenses +
          supportExpenses +
          medicalExpenses +
          debtPayments +
          subscriptionExpenses
  
        // Calculate remaining money after expenses
        const remainingMoney = monthlyIncome - totalExpenses
  
        // Calculate months of coverage
        const monthsCoverage = currentMoney > 0 ? Math.round((currentMoney / totalExpenses) * 10) / 10 : 0
  
        // Calculate ideal budget based on 50/30/20 rule
        const idealNeeds = monthlyIncome * 0.5 // 50% for needs
        const idealWants = monthlyIncome * 0.3 // 30% for wants
        const idealSavings = monthlyIncome * 0.2 // 20% for savings
  
        // Categorize expenses
        const needsExpenses = housingExpenses + foodExpenses + transportationExpenses + medicalExpenses
        const wantsExpenses = entertainmentExpenses + subscriptionExpenses
        const savingsAndDebt = monthlySavings + debtPayments
  
        // Calculate overspending in each category
        const needsOverspending = needsExpenses > idealNeeds ? needsExpenses - idealNeeds : 0
        const wantsOverspending = wantsExpenses > idealWants ? wantsExpenses - idealWants : 0
        const savingsUnderTarget = savingsAndDebt < idealSavings ? idealSavings - savingsAndDebt : 0
  
        // Store budget data for charts and analysis
        budgetData = {
          currentMoney,
          monthlyIncome,
          totalExpenses,
          remainingMoney,
          monthsCoverage,
          categories: {
            housing: {
              amount: housingExpenses,
              ideal: monthlyIncome * 0.3, // Typically 30% of income
              name: translations[currentLanguage].categories.housing,
              icon: "fa-home",
            },
            food: {
              amount: foodExpenses,
              ideal: monthlyIncome * 0.15, // Typically 15% of income
              name: translations[currentLanguage].categories.food,
              icon: "fa-utensils",
            },
            transportation: {
              amount: transportationExpenses,
              ideal: monthlyIncome * 0.1, // Typically 10% of income
              name: translations[currentLanguage].categories.transportation,
              icon: "fa-car",
            },
            entertainment: {
              amount: entertainmentExpenses,
              ideal: monthlyIncome * 0.1, // Typically 10% of income
              name: translations[currentLanguage].categories.entertainment,
              icon: "fa-film",
            },
            education: {
              amount: educationExpenses,
              ideal: monthlyIncome * 0.1, // Varies widely
              name: translations[currentLanguage].categories.education,
              icon: "fa-graduation-cap",
            },
            support: {
              amount: supportExpenses,
              ideal: monthlyIncome * 0.05, // Varies widely
              name: translations[currentLanguage].categories.support,
              icon: "fa-hands-helping",
            },
            medical: {
              amount: medicalExpenses,
              ideal: monthlyIncome * 0.05, // Varies widely
              name: translations[currentLanguage].categories.medical,
              icon: "fa-hospital",
            },
            savings: {
              amount: monthlySavings,
              ideal: monthlyIncome * 0.15, // Typically 15-20% of income
              name: translations[currentLanguage].categories.savings,
              icon: "fa-piggy-bank",
            },
            debt: {
              amount: debtPayments,
              ideal: monthlyIncome * 0.15, // Should be limited to 15-20% of income
              name: translations[currentLanguage].categories.debt,
              icon: "fa-credit-card",
            },
            subscriptions: {
              amount: subscriptionExpenses,
              ideal: monthlyIncome * 0.05, // Should be limited
              name: translations[currentLanguage].categories.subscriptions,
              icon: "fa-repeat",
            },
          },
          budgetRule: {
            needs: {
              actual: needsExpenses,
              ideal: idealNeeds,
              percentage: Math.round((needsExpenses / monthlyIncome) * 100),
              idealPercentage: 50,
            },
            wants: {
              actual: wantsExpenses,
              ideal: idealWants,
              percentage: Math.round((wantsExpenses / monthlyIncome) * 100),
              idealPercentage: 30,
            },
            savings: {
              actual: savingsAndDebt,
              ideal: idealSavings,
              percentage: Math.round((savingsAndDebt / monthlyIncome) * 100),
              idealPercentage: 20,
            },
          },
        }
  
        // Generate advice based on budget analysis
        const advice = generateAdvice(budgetData)
  
        // Show completion message
        addBotMessage(translations[currentLanguage].completed)
  
        // Show budget summary card
        setTimeout(() => {
          displayBudgetSummary(budgetData, advice)
          budgetSummaryCard.classList.remove("d-none")
  
          // Update button text based on language
          restartButton.innerHTML = `<i class="fas fa-redo me-2"></i>${translations[currentLanguage].startOver}`
          downloadButton.innerHTML = `<i class="fas fa-download me-2"></i>${translations[currentLanguage].downloadReport}`
  
          // Scroll to summary card
          setTimeout(() => {
            budgetSummaryCard.scrollIntoView({ behavior: "smooth" })
          }, 500)
        }, 1500)
      }, 2500)
    }
  
    // Helper function to extract numbers from user input
    function extractNumber(input) {
      if (!input) return 0
      const match = input.match(/[\d,.]+/)
      if (!match) return 0
      return Number.parseFloat(match[0].replace(/,/g, ""))
    }
  
    // Generate personalized advice
    function generateAdvice(data) {
      const advice = {
        critical: [],
        important: [],
        suggestions: [],
      }
  
      const t = translations[currentLanguage].advice
  
      // Check income vs expenses
      if (data.totalExpenses > data.monthlyIncome) {
        advice.critical.push(t.overspending.replace("{amount}", formatCurrency(data.totalExpenses - data.monthlyIncome)))
      }
  
      // Emergency fund advice
      if (data.monthsCoverage < 3) {
        advice.important.push(t.emergencyLow.replace("{months}", data.monthsCoverage.toFixed(1)))
      } else if (data.monthsCoverage < 6) {
        advice.suggestions.push(t.emergencyMedium.replace("{months}", data.monthsCoverage.toFixed(1)))
      } else {
        advice.suggestions.push(t.emergencyGood.replace("{months}", data.monthsCoverage.toFixed(1)))
      }
  
      // 50/30/20 rule advice
      const { needs, wants, savings } = data.budgetRule
  
      if (needs.percentage > 50) {
        advice.important.push(t.needsHigh.replace("{percent}", needs.percentage))
      }
  
      if (wants.percentage > 30) {
        advice.important.push(t.wantsHigh.replace("{percent}", wants.percentage))
      }
  
      if (savings.percentage < 20) {
        advice.important.push(t.savingsLow.replace("{percent}", savings.percentage))
      }
  
      // Category-specific advice
      Object.entries(data.categories).forEach(([key, category]) => {
        if (category.amount > category.ideal * 1.2) {
          // More than 20% over ideal
          const percentOver = Math.round((category.amount / category.ideal - 1) * 100)
          advice.important.push(
            t.categoryHigh
              .replace("{category}", category.name.toLowerCase())
              .replace("{percent}", percentOver)
              .replace("{amount}", formatCurrency(category.amount - category.ideal)),
          )
        }
      })
  
      // Savings advice
      const savingsCategory = data.categories.savings
      if (savingsCategory.amount < savingsCategory.ideal) {
        advice.suggestions.push(
          t.increaseSavings.replace("{amount}", formatCurrency(savingsCategory.ideal - savingsCategory.amount)),
        )
      }
  
      // Subscription advice
      const subscriptionsCategory = data.categories.subscriptions
      if (subscriptionsCategory.amount > subscriptionsCategory.ideal) {
        advice.suggestions.push(t.subscriptions)
      }
  
      return advice
    }
  
    // Format currency
    function formatCurrency(amount) {
      if (currentLanguage === "en") {
        return new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }).format(amount)
      } else {
        // For Arabic, we'll use SAR (Saudi Riyal) as an example
        return new Intl.NumberFormat("ar-SA", {
          style: "currency",
          currency: "JOD",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }).format(amount)
      }
    }
  
    // Display budget summary
    function displayBudgetSummary(data, advice) {
      // Set direction for the entire summary based on language
      const direction = currentLanguage === "ar" ? "rtl" : "ltr"
      const textAlign = currentLanguage === "ar" ? "right" : "left"
  
      // Create tabs for different sections
      budgetSummaryContent.style.direction = direction
      budgetSummaryContent.style.textAlign = textAlign
  
      budgetSummaryContent.innerHTML = `
              <ul class="nav nav-pills budget-tabs mb-4" id="budgetTabs" role="tablist">
                  <li class="nav-item" role="presentation">
                      <button class="nav-link active" id="overview-tab" data-bs-toggle="pill" data-bs-target="#overview" type="button" role="tab">${translations[currentLanguage].overview}</button>
                  </li>
                  <li class="nav-item" role="presentation">
                      <button class="nav-link" id="categories-tab" data-bs-toggle="pill" data-bs-target="#categories" type="button" role="tab">${translations[currentLanguage].categories}</button>
                  </li>
                  <li class="nav-item" role="presentation">
                      <button class="nav-link" id="advice-tab" data-bs-toggle="pill" data-bs-target="#advice" type="button" role="tab">${translations[currentLanguage].advice}</button>
                  </li>
              </ul>
              
              <div class="tab-content" id="budgetTabsContent">
                  <!-- Overview Tab -->
                  <div class="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview-tab">
                      <div class="summary-section mb-4">
                          <h4 class="mb-3">${translations[currentLanguage].financialOverview}</h4>
                          <div class="summary-item d-flex align-items-center">
                              <i class="fas fa-wallet summary-icon"></i>
                              <div>
                                  <h5 class="mb-1">${translations[currentLanguage].totalMoney}</h5>
                                  <p class="mb-0 fs-4 fw-bold">${formatCurrency(data.currentMoney)}</p>
                              </div>
                          </div>
                          <div class="summary-item d-flex align-items-center">
                              <i class="fas fa-money-bill-wave summary-icon"></i>
                              <div>
                                  <h5 class="mb-1">${translations[currentLanguage].monthlyIncome}</h5>
                                  <p class="mb-0 fs-4 fw-bold">${formatCurrency(data.monthlyIncome)}</p>
                              </div>
                          </div>
                          <div class="summary-item d-flex align-items-center">
                              <i class="fas fa-receipt summary-icon"></i>
                              <div>
                                  <h5 class="mb-1">${translations[currentLanguage].totalExpenses}</h5>
                                  <p class="mb-0 fs-4 fw-bold">${formatCurrency(data.totalExpenses)}</p>
                              </div>
                          </div>
                          <div class="summary-item d-flex align-items-center">
                              <i class="fas fa-calendar-alt summary-icon"></i>
                              <div>
                                  <h5 class="mb-1">${translations[currentLanguage].monthsCoverage}</h5>
                                  <p class="mb-0 fs-4 fw-bold">${data.monthsCoverage.toFixed(1)} ${currentLanguage === "ar" ? "شهر" : "months"}</p>
                                  <div class="progress mt-2" style="height: 10px;">
                                      <div class="progress-bar ${data.monthsCoverage < 3 ? "bg-danger" : data.monthsCoverage < 6 ? "bg-warning" : "bg-success"}" 
                                          role="progressbar" 
                                          style="width: ${Math.min(data.monthsCoverage * 10, 100)}%;" 
                                          aria-valuenow="${Math.min(data.monthsCoverage * 10, 100)}" 
                                          aria-valuemin="0" 
                                          aria-valuemax="100">
                                      </div>
                                  </div>
                                  <small class="text-muted">${translations[currentLanguage].recommended}</small>
                              </div>
                          </div>
                      </div>
                      
                      <div class="budget-breakdown">
                          <h4 class="mb-3">${translations[currentLanguage].budgetBreakdown}</h4>
                          <div class="budget-rule">
                              <div class="budget-rule-title">${translations[currentLanguage].rule5030}</div>
                              <div class="budget-rule-description">
                                  ${translations[currentLanguage].ruleDescription}
                              </div>
                          </div>
                          
                          <div class="row mt-4">
                              <div class="col-md-4 mb-3">
                                  <div class="card h-100">
                                      <div class="card-body" style="direction: ${direction}; text-align: ${textAlign};">
                                          <h5 class="card-title">${translations[currentLanguage].needs} (${data.budgetRule.needs.percentage}%)</h5>
                                          <h6 class="card-subtitle mb-2 text-muted">${translations[currentLanguage].target}: 50%</h6>
                                          <p class="card-text">
                                              ${translations[currentLanguage].needsDescription}
                                          </p>
                                          <div class="d-flex justify-content-between">
                                              <span>${translations[currentLanguage].current}:</span>
                                              <span class="fw-bold">${formatCurrency(data.budgetRule.needs.actual)}</span>
                                          </div>
                                          <div class="d-flex justify-content-between">
                                              <span>${translations[currentLanguage].ideal}:</span>
                                              <span>${formatCurrency(data.budgetRule.needs.ideal)}</span>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div class="col-md-4 mb-3">
                                  <div class="card h-100">
                                      <div class="card-body" style="direction: ${direction}; text-align: ${textAlign};">
                                          <h5 class="card-title">${translations[currentLanguage].wants} (${data.budgetRule.wants.percentage}%)</h5>
                                          <h6 class="card-subtitle mb-2 text-muted">${translations[currentLanguage].target}: 30%</h6>
                                          <p class="card-text">
                                              ${translations[currentLanguage].wantsDescription}
                                          </p>
                                          <div class="d-flex justify-content-between">
                                              <span>${translations[currentLanguage].current}:</span>
                                              <span class="fw-bold">${formatCurrency(data.budgetRule.wants.actual)}</span>
                                          </div>
                                          <div class="d-flex justify-content-between">
                                              <span>${translations[currentLanguage].ideal}:</span>
                                              <span>${formatCurrency(data.budgetRule.wants.ideal)}</span>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div class="col-md-4 mb-3">
                                  <div class="card h-100">
                                      <div class="card-body" style="direction: ${direction}; text-align: ${textAlign};">
                                          <h5 class="card-title">${translations[currentLanguage].savings} (${data.budgetRule.savings.percentage}%)</h5>
                                          <h6 class="card-subtitle mb-2 text-muted">${translations[currentLanguage].target}: 20%</h6>
                                          <p class="card-text">
                                              ${translations[currentLanguage].savingsDescription}
                                          </p>
                                          <div class="d-flex justify-content-between">
                                              <span>${translations[currentLanguage].current}:</span>
                                              <span class="fw-bold">${formatCurrency(data.budgetRule.savings.actual)}</span>
                                          </div>
                                          <div class="d-flex justify-content-between">
                                              <span>${translations[currentLanguage].ideal}:</span>
                                              <span>${formatCurrency(data.budgetRule.savings.ideal)}</span>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  
                  <!-- Categories Tab -->
                  <div class="tab-pane fade" id="categories" role="tabpanel" aria-labelledby="categories-tab">
                      <div class="category-comparison">
                          <h4 class="mb-3">${translations[currentLanguage].spendingByCategory}</h4>
                          
                          <h5 class="mt-4 mb-3">${translations[currentLanguage].categoryAnalysis}</h5>
                          ${Object.entries(data.categories)
                            .map(([key, category]) => {
                              const ratio = category.amount / category.ideal
                              let statusClass = "good"
                              if (ratio > 1.2) statusClass = "danger"
                              else if (ratio > 1) statusClass = "warning"
  
                              return `
                                  <div class="category-item ${statusClass}">
                                      <div class="d-flex justify-content-between align-items-center">
                                          <div>
                                              <i class="fas ${category.icon} me-2"></i>
                                              <strong>${category.name}</strong>
                                          </div>
                                          <div class="text-end">
                                              <div>${formatCurrency(category.amount)}</div>
                                              <small class="text-muted">${translations[currentLanguage].ideal}: ${formatCurrency(category.ideal)}</small>
                                          </div>
                                      </div>
                                      <div class="category-progress">
                                          <div class="category-progress-bar ${statusClass}" 
                                              style="width: ${Math.min(ratio * 100, 200)}%">
                                          </div>
                                      </div>
                                  </div>
                              `
                            })
                            .join("")}
                      </div>
                  </div>
                  
                  <!-- Advice Tab -->
                  <div class="tab-pane fade" id="advice" role="tabpanel" aria-labelledby="advice-tab">
                      <div class="advice-section">
                          ${
                            advice.critical.length > 0
                              ? `
                              <h4 class="mb-3">${translations[currentLanguage].criticalIssues}</h4>
                              <div class="advice-list mb-4">
                                  ${advice.critical
                                    .map(
                                      (item) => `
                                      <div class="advice-item danger-item d-flex align-items-start">
                                          <i class="fas fa-exclamation-circle me-2 mt-1 danger-icon"></i>
                                          <p class="mb-0">${item}</p>
                                      </div>
                                  `,
                                    )
                                    .join("")}
                              </div>
                              `
                              : ""
                          }
                          
                          ${
                            advice.important.length > 0
                              ? `
                              <h4 class="mb-3">${translations[currentLanguage].importantRecommendations}</h4>
                              <div class="advice-list mb-4">
                                  ${advice.important
                                    .map(
                                      (item) => `
                                      <div class="advice-item warning-item d-flex align-items-start">
                                          <i class="fas fa-exclamation-triangle me-2 mt-1 warning-icon"></i>
                                          <p class="mb-0">${item}</p>
                                      </div>
                                  `,
                                    )
                                    .join("")}
                              </div>
                              `
                              : ""
                          }
                          
                          <h4 class="mb-3">${translations[currentLanguage].suggestionsImprovement}</h4>
                          <div class="advice-list">
                              ${advice.suggestions
                                .map(
                                  (item) => `
                                  <div class="advice-item d-flex align-items-start">
                                      <i class="fas fa-lightbulb me-2 mt-1 advice-icon"></i>
                                      <p class="mb-0">${item}</p>
                                  </div>
                              `,
                                )
                                .join("")}
                          </div>
                          
                          <div class="mt-4 p-3 bg-light rounded">
                              <h5>${translations[currentLanguage].generalTips}</h5>
                              <ul class="mb-0">
                                  ${translations[currentLanguage].tips.map((tip) => `<li>${tip}</li>`).join("")}
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          `
    }
  
    // Restart chatbot
    restartButton.addEventListener("click", () => {
      userAnswers = []
      currentQuestionIndex = -1 // Reset to language selection
      chatbotReady = false
      budgetSummaryCard.classList.add("d-none")
      initChatbot()
    })
  
    // Download report
    downloadButton.addEventListener("click", () => {
      // Simple implementation - in a real app, you'd generate a proper PDF
      alert("In a production environment, this would generate and download a PDF report of your budget analysis.")
    })
  
    // Initialize chatbot on page load
    initChatbot()
  })
  