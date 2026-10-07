const STORAGE_KEYS = {
  accounts: 'studysync_accounts',
  currentSession: 'studysync_current_session',
  subjects: 'studysync_subjects',
  exams: 'studysync_exams',
  tasks: 'studysync_tasks',
  completedTasks: 'studysync_completed_tasks',
  quizHistory: 'studysync_quiz_history',
  quizDraft: 'studysync_quiz_draft'
};

const SUBJECT_TOPICS = {
  mathematics: ['Fractions', 'Algebra', 'Quantifiers', 'Geometry'],
  biology: ['Cells', 'Photosynthesis', 'Genetics', 'Human Body'],
  chemistry: ['Atomic Structure', 'Chemical Bonds', 'Stoichiometry', 'Acids and Bases'],
  physics: ['Motion', 'Energy', 'Waves', 'Electricity'],
  english: ['Grammar', 'Reading Comprehension', 'Essay Writing', 'Poetry'],
  history: ['Ancient Civilizations', 'Industrial Revolution', 'World Wars', 'Civil Rights'],
  geography: ['Maps', 'Climate', 'Population', 'Natural Resources']
};

const QUIZ_BANK = {
  mathematics: {
    Fractions: [
      { question: 'What is 3/4 + 1/8?', choices: ['7/8', '4/8', '1/2', '5/8'], answer: '7/8', explanation: 'Convert 3/4 to 6/8, then add 1/8 to get 7/8.' },
      { question: 'A fraction is equivalent to 1/2 when the numerator is 8. What is its denominator?', choices: ['12', '16', '8', '4'], answer: '16', explanation: 'A fraction equivalent to 1/2 must have a denominator double its numerator: 8 × 2 = 16.' },
      { question: 'Which operation makes 5/6 larger?', choices: ['Divide the numerator by 2', 'Add 1/6', 'Multiply the denominator by 2', 'Subtract 1/6'], answer: 'Add 1/6', explanation: 'Adding 1/6 gives 6/6, which equals 1, greater than 5/6.' },
      { question: 'What is 2/3 of 21?', choices: ['7', '12', '14', '16'], answer: '14', explanation: 'Divide 21 into thirds, then take two of those parts: 21 ÷ 3 = 7, and 2 × 7 = 14.' },
      { question: 'Which fraction is smallest?', choices: ['3/4', '2/3', '1/2', '5/8'], answer: '1/2', explanation: '1/2 equals 0.5, which is less than 0.625, 0.667, and 0.75.' }
    ],
    Algebra: [
      { question: 'Solve: 3x = 18', choices: ['x = 5', 'x = 6', 'x = 15', 'x = 21'], answer: 'x = 6', explanation: 'Divide both sides by 3: 18 ÷ 3 = 6.' },
      { question: 'Which expression is equivalent to 4(x + 3)?', choices: ['4x + 3', '4x + 12', 'x + 12', '4x + 7'], answer: '4x + 12', explanation: 'Multiply both terms inside the parentheses by 4: 4x and 12.' },
      { question: 'If y = 2x + 5 and x = 3, what is y?', choices: ['8', '9', '11', '13'], answer: '11', explanation: 'Substitute 3 for x: 2(3) + 5 = 6 + 5 = 11.' },
      { question: 'What is the value of x in x - 7 = 10?', choices: ['3', '7', '10', '17'], answer: '17', explanation: 'Add 7 to both sides: x = 10 + 7 = 17.' },
      { question: 'Which is a like term with 5a?', choices: ['5b', '5a²', '8a', 'a/5'], answer: '8a', explanation: 'Like terms have the same variable and exponent, so 8a matches 5a.' }
    ],
    Quantifiers: [
      { question: 'Choose the correct sentence: The students have completed ___ work.', choices: ['much', 'many', 'little', 'a few'], answer: 'much', explanation: 'Uncountable work takes the quantifier much.' },
      { question: 'There are ___ books on the shelf.', choices: ['a little', 'much', 'many', 'little'], answer: 'many', explanation: 'Books are countable, so many is correct.' },
      { question: 'I have ___ time before class, so I can relax.', choices: ['few', 'many', 'a little', 'a few'], answer: 'a little', explanation: 'Time is uncountable, and a little means a small but sufficient amount.' },
      { question: 'She has ___ friends in her new city.', choices: ['much', 'a little', 'few', 'many'], answer: 'few', explanation: 'Friends are countable, and few describes a small number.' },
      { question: 'Choose the sentence with the correct quantifier.', choices: ['There is many information.', 'There is much information.', 'There are much information.', 'There are many informations.'], answer: 'There is much information.', explanation: 'Information is uncountable, so it takes is and much.' }
    ],
    Geometry: [
      { question: 'What is the sum of the angles in a triangle?', choices: ['90°', '180°', '270°', '360°'], answer: '180°', explanation: 'Every triangle has interior angles that total 180°.' },
      { question: 'A rectangle has a length of 8 cm and width of 3 cm. What is its perimeter?', choices: ['11 cm', '22 cm', '24 cm', '26 cm'], answer: '22 cm', explanation: 'Perimeter is 2(8 + 3) = 2(11) = 22 cm.' },
      { question: 'Which shape has four equal sides and four right angles?', choices: ['Rectangle', 'Triangle', 'Rhombus', 'Circle'], answer: 'Rectangle', explanation: 'A rectangle has four right angles; a square is the special case with equal sides.' },
      { question: 'What is the area of a square with side length 5 cm?', choices: ['10 cm²', '20 cm²', '25 cm²', '30 cm²'], answer: '25 cm²', explanation: 'Area is side × side: 5 × 5 = 25 square centimetres.' },
      { question: 'Which statement about circles is correct?', choices: ['The diameter is twice the radius.', 'The radius is twice the diameter.', 'The radius equals the circumference.', 'The diameter is half the area.'], answer: 'The diameter is twice the radius.', explanation: 'The diameter is the full distance across the circle through its center, so it equals 2r.' }
    ]
  },
  biology: {
    Cells: [
      { question: 'Which structure contains genetic material in a cell?', choices: ['Cell membrane', 'Nucleus', 'Cytoplasm', 'Ribosome'], answer: 'Nucleus', explanation: 'The nucleus stores most of a cell’s DNA.' },
      { question: 'What is the main function of the cell membrane?', choices: ['Releasing energy', 'Controlling what enters and leaves the cell', 'Making proteins', 'Storing water'], answer: 'Controlling what enters and leaves the cell', explanation: 'The cell membrane is selectively permeable and regulates movement across the cell boundary.' },
      { question: 'Which organelle is the site of photosynthesis?', choices: ['Mitochondrion', 'Chloroplast', 'Golgi body', 'Vacuole'], answer: 'Chloroplast', explanation: 'Chloroplasts contain chlorophyll, which captures light energy for photosynthesis.' },
      { question: 'What is the basic unit of life?', choices: ['Tissue', 'Organ', 'Cell', 'Molecule'], answer: 'Cell', explanation: 'Cells are the smallest living units that can perform life processes.' },
      { question: 'Which process produces energy in most cells?', choices: ['Photosynthesis', 'Respiration', 'Diffusion', 'Digestion'], answer: 'Respiration', explanation: 'Cellular respiration releases energy from glucose for cellular processes.' }
    ],
    Photosynthesis: [
      { question: 'What energy source does photosynthesis use?', choices: ['Chemical energy', 'Light energy', 'Heat energy', 'Electrical energy'], answer: 'Light energy', explanation: 'Plants use light energy from the Sun during photosynthesis.' },
      { question: 'Which gas is taken in by plants during photosynthesis?', choices: ['Oxygen', 'Carbon dioxide', 'Nitrogen', 'Hydrogen'], answer: 'Carbon dioxide', explanation: 'Plants absorb carbon dioxide from the air and use it to make glucose.' },
      { question: 'What is the main sugar produced by photosynthesis?', choices: ['Sucrose', 'Glucose', 'Starch', 'Cellulose'], answer: 'Glucose', explanation: 'Glucose is the simple sugar produced during photosynthesis.' },
      { question: 'Which substance gives plant leaves their green color?', choices: ['Chlorophyll', 'Xylem', 'Protein', 'Cellulose'], answer: 'Chlorophyll', explanation: 'Chlorophyll captures light energy and makes leaves appear green.' },
      { question: 'Which word equation is correct for photosynthesis?', choices: ['Carbon dioxide + water → glucose + oxygen', 'Glucose + oxygen → carbon dioxide + water', 'Oxygen + glucose → water + light', 'Water + oxygen → carbon dioxide + glucose'], answer: 'Carbon dioxide + water → glucose + oxygen', explanation: 'Plants use carbon dioxide and water with light energy to make glucose and oxygen.' }
    ]
  }
};

const appState = {
  subjects: [],
  exams: [],
  tasks: [],
  completedTasks: [],
  quizHistory: [],
  studyHistory: []
};

function loadFromStorage(key, fallback) {
  const rawValue = localStorage.getItem(key);
  if (!rawValue) return fallback;

  try {
    return JSON.parse(rawValue);
  } catch (error) {
    return fallback;
  }
}

const authState = {
  accounts: loadFromStorage(STORAGE_KEYS.accounts, []),
  currentAccountId: loadFromStorage(STORAGE_KEYS.currentSession, null)
};

migrateCompletedTasks();

const elements = {
  appContent: document.getElementById('appContent'),
  navLinks: document.querySelectorAll('.nav-link'),
  sections: document.querySelectorAll('.page-section'),
  subjectForm: document.getElementById('subjectForm'),
  subjectName: document.getElementById('subjectName'),
  subjectId: document.getElementById('subjectId'),
  cancelSubjectEdit: document.getElementById('cancelSubjectEdit'),
  subjectsList: document.getElementById('subjectsList'),
  examForm: document.getElementById('examForm'),
  examName: document.getElementById('examName'),
  examSubject: document.getElementById('examSubject'),
  examDate: document.getElementById('examDate'),
  examTopics: document.getElementById('examTopics'),
  examsList: document.getElementById('examsList'),
  plannerForm: document.getElementById('plannerForm'),
  plannerSubject: document.getElementById('plannerSubject'),
  plannerExamDate: document.getElementById('plannerExamDate'),
  plannerTopics: document.getElementById('plannerTopics'),
  studyWindowInfo: document.getElementById('studyWindowInfo'),
  studyPlanTasks: document.getElementById('studyPlanTasks'),
  todayTasksList: document.getElementById('todayTasksList'),
  upcomingExamList: document.getElementById('upcomingExamList'),
  quizHistoryList: document.getElementById('quizHistoryList'),
  dashboardTotalTasks: document.getElementById('dashboardTotalTasks'),
  dashboardCompletedTasks: document.getElementById('dashboardCompletedTasks'),
  dashboardPendingTasks: document.getElementById('dashboardPendingTasks'),
  dashboardNextExam: document.getElementById('dashboardNextExam'),
  dashboardAverageScore: document.getElementById('dashboardAverageScore'),
  dashboardStrongTopics: document.getElementById('dashboardStrongTopics'),
  dashboardWeakTopics: document.getElementById('dashboardWeakTopics'),
  dashboardPracticeTopics: document.getElementById('dashboardPracticeTopics'),
  dashboardProgressValue: document.getElementById('dashboardProgressValue'),
  studyHistoryList: document.getElementById('studyHistoryList'),
  progressTotalTasks: document.getElementById('progressTotalTasks'),
  progressCompletedTasks: document.getElementById('progressCompletedTasks'),
  progressPendingTasks: document.getElementById('progressPendingTasks'),
  progressPercentage: document.getElementById('progressPercentage'),
  progressBarText: document.getElementById('progressBarText'),
  progressBarFill: document.getElementById('progressBarFill'),
  quizModal: document.getElementById('quizModal'),
  quizSetup: document.getElementById('quizSetup'),
  quizRunner: document.getElementById('quizRunner'),
  quizResults: document.getElementById('quizResults'),
  quizSubject: document.getElementById('quizSubject'),
  quizTopic: document.getElementById('quizTopic'),
  startQuizBtn: document.getElementById('startQuizBtn'),
  quizForm: document.getElementById('quizForm'),
  quizOptions: document.getElementById('quizOptions'),
  quizProgress: document.getElementById('quizProgress'),
  quizProgressFill: document.getElementById('quizProgressFill'),
  quizQuestionTitle: document.getElementById('quizQuestionTitle'),
  quizTopicLabel: document.getElementById('quizTopicLabel'),
  previousQuestionBtn: document.getElementById('previousQuestionBtn'),
  nextQuestionBtn: document.getElementById('nextQuestionBtn'),
  quizResultBadge: document.getElementById('quizResultBadge'),
  quizResultScore: document.getElementById('quizResultScore'),
  quizResultPercentage: document.getElementById('quizResultPercentage'),
  quizResultSummary: document.getElementById('quizResultSummary'),
  quizAnswerReview: document.getElementById('quizAnswerReview'),
  retakeQuizBtn: document.getElementById('retakeQuizBtn'),
  closeResultsBtn: document.getElementById('closeResultsBtn'),
  authModal: document.getElementById('authModal'),
  authForm: document.getElementById('authForm'),
  authName: document.getElementById('authName'),
  authEmail: document.getElementById('authEmail'),
  authPassword: document.getElementById('authPassword'),
  authMessage: document.getElementById('authMessage'),
  authTabs: document.querySelectorAll('.auth-tab'),
  authSubmit: document.querySelector('.auth-submit'),
  userNameLabel: document.getElementById('userNameLabel'),
  logoutBtn: document.getElementById('logoutBtn')
};

const quizState = {
  questions: [],
  currentIndex: 0,
  answers: {},
  subject: '',
  topic: '',
  active: false,
  saved: false
};

initializeApp();

function initializeApp() {
  bindNavigation();
  bindSubjects();
  bindExams();
  bindPlanner();
  bindTaskToggle();
  bindQuiz();
  bindAuthentication();
  initializeSession();
}

function bindAuthentication() {
  elements.authTabs.forEach((tab) => {
    tab.addEventListener('click', () => setAuthMode(tab.dataset.authMode));
  });

  elements.authForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const mode = elements.authForm.dataset.authMode || 'login';
    const name = elements.authName.value.trim();
    const email = elements.authEmail.value.trim().toLowerCase();
    const password = elements.authPassword.value;

    if (!email || password.length < 6) {
      showAuthMessage('Enter a valid email and password with at least 6 characters.', false);
      return;
    }

    if (mode === 'signup' && !name) {
      showAuthMessage('Enter your full name to create an account.', false);
      return;
    }

    try {
      elements.authSubmit.disabled = true;
      const isSuccessful = mode === 'signup'
        ? await createAccount(name, email, password)
        : await loginAccount(email, password);

      if (isSuccessful) {
        showAuthMessage(mode === 'signup' ? 'Account created successfully.' : 'Login successful.', true);
        setTimeout(() => {
          hideAuthModal();
          renderAll();
        }, 300);
      }
    } catch (error) {
      showAuthMessage(error.message, false);
    } finally {
      elements.authSubmit.disabled = false;
    }
  });

  elements.logoutBtn.addEventListener('click', logout);
}

function initializeSession() {
  const account = authState.accounts.find((item) => item.id === authState.currentAccountId);
  if (!account) {
    setAuthMode('login');
    showAuthModal();
    return;
  }

  loadAccountData(account);
  hideAuthModal();
}

function setAuthMode(mode) {
  elements.authForm.dataset.authMode = mode;
  elements.authTabs.forEach((tab) => {
    const isActive = tab.dataset.authMode === mode;
    tab.classList.toggle('active', isActive);
    tab.setAttribute('aria-selected', String(isActive));
  });

  const isSignup = mode === 'signup';
  elements.authName.parentElement.classList.toggle('hidden', !isSignup);
  elements.authSubmit.textContent = isSignup ? 'Create account' : 'Login';
  showAuthMessage('', false);
}

function showAuthModal() {
  elements.authModal.classList.remove('hidden');
  elements.appContent.classList.add('app-hidden');
}

function hideAuthModal() {
  elements.authModal.classList.add('hidden');
  elements.appContent.classList.remove('app-hidden');
}

function showAuthMessage(message, isSuccess) {
  elements.authMessage.textContent = message;
  elements.authMessage.classList.toggle('success', isSuccess);
}

function bindNavigation() {
  elements.navLinks.forEach((button) => {
    button.addEventListener('click', () => {
      const targetId = button.dataset.target;
      elements.sections.forEach((section) => {
        const isActive = section.id === targetId;
        section.classList.toggle('active', isActive);
      });
      elements.navLinks.forEach((navLink) => {
        navLink.classList.toggle('active', navLink === button);
      });
    });
  });
}

function bindSubjects() {
  elements.subjectForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = elements.subjectName.value.trim();
    if (!name) return;

    const subjectId = elements.subjectId.value;
    if (subjectId) {
      const subject = appState.subjects.find((item) => item.id === Number(subjectId));
      if (subject) subject.name = name;
    } else {
      appState.subjects.push({ id: Date.now(), name, studyDNA: { topicProfiles: {} } });
    }

    saveState();
    resetSubjectForm();
    refreshSubjectOptions();
    refreshQuizSubjectOptions();
    renderAll();
  });

  elements.cancelSubjectEdit.addEventListener('click', () => {
    resetSubjectForm();
  });

  elements.subjectsList.addEventListener('click', (event) => {
    const target = event.target.closest('button');
    if (!target) return;

    const { action, id } = target.dataset;
    if (!action || !id) return;

    const numericId = Number(id);

    if (action === 'edit-subject') {
      const subject = appState.subjects.find((item) => item.id === numericId);
      if (subject) {
        elements.subjectId.value = subject.id;
        elements.subjectName.value = subject.name;
        elements.cancelSubjectEdit.classList.remove('hidden');
        elements.subjectName.focus();
      }
    }

    if (action === 'delete-subject') {
      appState.subjects = appState.subjects.filter((item) => item.id !== numericId);
      appState.exams = appState.exams.filter((exam) => exam.subject !== getSubjectName(numericId));
      appState.tasks = appState.tasks.filter((task) => task.subject !== getSubjectName(numericId));
      appState.quizHistory = appState.quizHistory.filter((entry) => entry.subject !== getSubjectName(numericId));
      saveState();
      refreshSubjectOptions();
      refreshQuizSubjectOptions();
      renderAll();
    }
  });
}

function bindExams() {
  elements.examForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!appState.subjects.length) {
      alert('Please add at least one subject before creating an exam.');
      return;
    }

    const name = elements.examName.value.trim();
    const subject = elements.examSubject.value;
    const date = elements.examDate.value;
    const topics = Number(elements.examTopics.value);
    if (!name || !subject || !date || !topics) return;

    appState.exams.push({ id: Date.now(), name, subject, date, topics });
    saveState();
    elements.examForm.reset();
    renderAll();
  });

  elements.examsList.addEventListener('click', (event) => {
    const target = event.target.closest('button');
    if (!target) return;
    const id = Number(target.dataset.id);
    if (!id) return;

    appState.exams = appState.exams.filter((exam) => exam.id !== id);
    saveState();
    renderAll();
  });
}

function bindPlanner() {
  elements.plannerExamDate.addEventListener('input', updateStudyWindowInfo);
  elements.plannerTopics.addEventListener('input', updateStudyWindowInfo);

  elements.plannerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!appState.subjects.length) {
      alert('Please add at least one subject before generating a study plan.');
      return;
    }

    const subject = elements.plannerSubject.value;
    const examDate = elements.plannerExamDate.value;
    const topics = Number(elements.plannerTopics.value);
    if (!subject || !examDate || !topics) return;

    const generatedTasks = generateStudyPlan(subject, examDate, topics);
    appState.tasks = [...appState.tasks, ...generatedTasks];
    saveState();
    elements.plannerForm.reset();
    updateStudyWindowInfo();
    renderAll();
  });
}

function bindTaskToggle() {
  elements.studyPlanTasks.addEventListener('change', (event) => {
    const target = event.target;
    if (!target.matches('input[type="checkbox"]')) return;

    const taskId = Number(target.dataset.id);
    const taskIndex = appState.tasks.findIndex((item) => item.id === taskId);
    const task = appState.tasks[taskIndex];
    if (!task) return;

    appState.tasks.splice(taskIndex, 1);
    const completedTask = {
      ...task,
      completed: true,
      completedAt: formatDateISO(new Date())
    };

    appState.completedTasks.unshift(completedTask);
    addStudyHistory({
      type: 'task',
      title: task.title,
      subject: task.subject,
      completedAt: completedTask.completedAt,
      details: 'Study task completed'
    });

    saveState();
    renderAll();
    if (!appState.tasks.length) {
      showPlanCompletionMessage();
    }
  });
}

function showPlanCompletionMessage() {
  const message = 'Study plan completed! Great work!';
  const currentMessage = elements.studyPlanTasks.querySelector('.quiz-alert');
  if (currentMessage) currentMessage.remove();
  elements.studyPlanTasks.insertAdjacentHTML('beforeend', `<li class="quiz-alert">${message}</li>`);
}

function bindQuiz() {
  elements.quizSubject.addEventListener('change', () => updateQuizTopicOptions());
  elements.startQuizBtn.addEventListener('click', startQuiz);
  elements.previousQuestionBtn.addEventListener('click', () => changeQuestion(-1));
  elements.nextQuestionBtn.addEventListener('click', () => {
    const answer = quizState.answers[quizState.currentIndex];
    if (!answer) {
      alert('Please select an answer before continuing.');
      return;
    }
    if (elements.nextQuestionBtn.textContent === 'Submit Quiz') {
      submitQuiz();
      return;
    }
    changeQuestion(1);
  });
  elements.quizForm.addEventListener('change', (event) => {
    if (event.target.name === 'quiz-option') {
      quizState.answers[quizState.currentIndex] = event.target.value;
      saveQuizDraft();
    }
  });
  elements.quizModal.addEventListener('click', (event) => {
    const action = event.target.dataset.action;
    if (action === 'close-quiz') closeQuiz(false);
  });
  elements.closeResultsBtn.addEventListener('click', closeQuiz);
  elements.retakeQuizBtn.addEventListener('click', () => {
    quizState.answers = {};
    quizState.currentIndex = 0;
    quizState.saved = false;
    showQuizRunner();
    saveQuizDraft();
  });
  window.addEventListener('beforeunload', () => {
    if (quizState.active && !quizState.saved) saveQuizDraft();
  });
}

function refreshSubjectOptions() {
  const options = appState.subjects.map((subject) => `<option value="${subject.name}">${escapeHtml(subject.name)}</option>`).join('');
  elements.examSubject.innerHTML = options || '<option value="">No subjects available</option>';
  elements.plannerSubject.innerHTML = options || '<option value="">No subjects available</option>';
  elements.examSubject.disabled = !appState.subjects.length;
  elements.plannerSubject.disabled = !appState.subjects.length;
}

function refreshQuizSubjectOptions() {
  elements.quizSubject.innerHTML = appState.subjects.length
    ? appState.subjects.map((subject) => `<option value="${escapeHtml(subject.name)}">${escapeHtml(subject.name)}</option>`).join('')
    : '<option value="">No subjects available</option>';
  elements.quizSubject.disabled = !appState.subjects.length;
  elements.startQuizBtn.disabled = !appState.subjects.length;
  updateQuizTopicOptions();
}

function updateQuizTopicOptions() {
  const subjectName = elements.quizSubject.value;
  const topics = getSubjectTopics(subjectName);
  elements.quizTopic.innerHTML = topics.map((topic) => `<option value="${escapeHtml(topic)}">${escapeHtml(topic)}</option>`).join('');
  elements.quizTopic.disabled = !topics.length;
}

function renderAll() {
  renderSubjects();
  renderExams();
  renderPlannerTasks();
  renderDashboard();
  renderProgress();
  renderStudyHistory();
}

function renderSubjects() {
  if (!appState.subjects.length) {
    elements.subjectsList.innerHTML = '<div class="empty-state">No subjects yet. Add your first subject to get started.</div>';
    return;
  }

  elements.subjectsList.innerHTML = appState.subjects.map((subject) => {
    const topicProfile = getTopicProfile(subject, 'overall');
    const dnaStatus = topicProfile.status || 'Study DNA';
    return `
      <article class="subject-card">
        <div class="subject-header">
          <strong>${escapeHtml(subject.name)}</strong>
        </div>
        <div class="subject-meta">Study DNA: <strong>${escapeHtml(dnaStatus)}</strong></div>
        <div class="subject-actions">
          <button class="icon-btn edit-btn" type="button" data-action="edit-subject" data-id="${subject.id}">Edit</button>
          <button class="icon-btn quiz-btn" type="button" data-action="open-quiz" data-id="${subject.id}">Take Quiz</button>
          <button class="icon-btn delete-btn" type="button" data-action="delete-subject" data-id="${subject.id}">Delete</button>
        </div>
      </article>
    `;
  }).join('');

  elements.subjectsList.querySelectorAll('[data-action="open-quiz"]').forEach((button) => {
    button.addEventListener('click', () => openQuizButton(Number(button.dataset.id)));
  });
}

function openQuizButton(subjectId) {
  const subject = appState.subjects.find((item) => item.id === subjectId);
  if (!subject) return;
  elements.quizSubject.value = subject.name;
  updateQuizTopicOptions();
  openQuizModal();
}

function renderExams() {
  const sortedExams = [...appState.exams].sort((a, b) => new Date(a.date) - new Date(b.date));
  if (!sortedExams.length) {
    elements.examsList.innerHTML = '<div class="empty-state">No upcoming exams yet. Add your exam plan.</div>';
    return;
  }

  elements.examsList.innerHTML = sortedExams.map((exam) => `
    <div class="exam-item">
      <div class="exam-info">
        <strong>${escapeHtml(exam.name)}</strong>
        <span class="exam-meta">${escapeHtml(exam.subject)} • ${formatDate(exam.date)}</span>
        <span class="exam-meta">${exam.topics} topics</span>
      </div>
      <div class="exam-actions">
        <span class="badge">${getDaysLeft(exam.date)}</span>
        <button class="icon-btn delete-btn" type="button" data-id="${exam.id}">Remove</button>
      </div>
    </div>
  `).join('');
}

function renderPlannerTasks() {
  const upcomingTasks = [...appState.tasks].sort((a, b) => new Date(a.date) - new Date(b.date));
  if (!upcomingTasks.length) {
    elements.studyPlanTasks.innerHTML = '<li class="empty-state">No active study-plan tasks remain. Great job completing your current work.</li>';
    return;
  }

  elements.studyPlanTasks.innerHTML = upcomingTasks.map((task) => `
    <li class="task-item">
      <label>
        <input type="checkbox" data-id="${task.id}" />
        <span class="task-content">
          <strong>${escapeHtml(task.title)}</strong>
          <small>${escapeHtml(task.subject)} • ${formatDate(task.date)}</small>
        </span>
      </label>
    </li>
  `).join('');
}

function renderDashboard() {
  const activeTasks = appState.tasks.length;
  const completed = appState.completedTasks.length;
  const totalTasks = activeTasks + completed;
  const pending = activeTasks;
  const progress = totalTasks ? Math.round((completed / totalTasks) * 100) : 0;
  const upcomingExam = [...appState.exams].sort((a, b) => new Date(a.date) - new Date(b.date))[0];
  const today = formatDateISO(new Date());
  const todayTasks = appState.tasks.filter((task) => task.date === today);
  const averageScore = appState.quizHistory.length
    ? Math.round(appState.quizHistory.reduce((sum, entry) => sum + entry.percentage, 0) / appState.quizHistory.length)
    : 0;
  const topicProfiles = appState.subjects.flatMap((subject) =>
    Object.entries(subject.studyDNA?.topicProfiles || {})
      .map(([topic, profile]) => ({ subject: subject.name, topic, ...profile }))
  );
  const strongTopics = topicProfiles.filter((item) => item.status === 'strong').length;
  const weakTopics = topicProfiles.filter((item) => item.status === 'weak').length;
  const practiceTopics = topicProfiles.filter((item) => item.status === 'needs-practice').length;

  elements.dashboardTotalTasks.textContent = totalTasks;
  elements.dashboardCompletedTasks.textContent = completed;
  elements.dashboardPendingTasks.textContent = pending;
  elements.dashboardProgressValue.textContent = `${progress}%`;
  elements.dashboardNextExam.textContent = upcomingExam ? `${upcomingExam.subject} • ${getDaysLeft(upcomingExam.date)}` : 'None';
  elements.dashboardAverageScore.textContent = `${averageScore}%`;
  elements.dashboardStrongTopics.textContent = strongTopics;
  elements.dashboardWeakTopics.textContent = weakTopics;
  elements.dashboardPracticeTopics.textContent = practiceTopics;

  if (!todayTasks.length) {
    elements.todayTasksList.innerHTML = '<li class="empty-state">No tasks are scheduled for today. Nice time to review a topic.</li>';
  } else {
    elements.todayTasksList.innerHTML = todayTasks.map((task) => `
      <li class="task-item ${task.completed ? 'completed' : ''}">
        <span class="task-content">
          <strong>${escapeHtml(task.title)}</strong>
          <small>${escapeHtml(task.subject)}</small>
        </span>
        <span class="badge">${task.completed ? 'Done' : 'Open'}</span>
      </li>
    `).join('');
  }

  if (!upcomingExam) {
    elements.upcomingExamList.innerHTML = '<li class="empty-state">No confirmed exam dates yet.</li>';
  } else {
    elements.upcomingExamList.innerHTML = `
      <li class="exam-item">
        <div class="exam-info">
          <strong>${escapeHtml(upcomingExam.name)}</strong>
          <span class="exam-meta">${escapeHtml(upcomingExam.subject)}</span>
          <span class="exam-meta">${formatDate(upcomingExam.date)}</span>
        </div>
        <span class="badge">${getDaysLeft(upcomingExam.date)}</span>
      </li>
    `;
  }

  const history = [...appState.quizHistory].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 4);
  if (!history.length) {
    elements.quizHistoryList.innerHTML = '<li class="empty-state">No quiz results yet. Take a short quiz to strengthen your Study DNA.</li>';
    return;
  }

  elements.quizHistoryList.innerHTML = history.map((entry) => `
    <li class="quiz-history-item">
      <strong>${escapeHtml(entry.subject)} • ${escapeHtml(entry.topic)}</strong>
      <span>${entry.percentage}% • ${formatDate(entry.date)}</span>
      <span class="history-status ${entry.status}">${entry.status.replace('-', ' ')}</span>
    </li>
  `).join('');
}

function renderStudyHistory() {
  const history = [...appState.studyHistory].sort((a, b) => new Date(b.completedAt) - new Date(a.completedAt));
  if (!history.length) {
    elements.studyHistoryList.innerHTML = '<div class="empty-state">No study history yet. Complete a task or take a quiz to begin tracking progress.</div>';
    return;
  }

  elements.studyHistoryList.innerHTML = history.map((entry) => `
    <article class="history-item">
      <strong>${escapeHtml(entry.title)}</strong>
      <small>${escapeHtml(entry.subject)} • ${escapeHtml(entry.type)}</small>
      <small>${entry.details}</small>
      <small>${formatDate(entry.completedAt)}</small>
    </article>
  `).join('');
}

function renderProgress() {
  const activeTasks = appState.tasks.length;
  const completed = appState.completedTasks.length;
  const totalTasks = activeTasks + completed;
  const percentage = totalTasks ? Math.round((completed / totalTasks) * 100) : 0;
  elements.progressTotalTasks.textContent = totalTasks;
  elements.progressCompletedTasks.textContent = completed;
  elements.progressPendingTasks.textContent = activeTasks;
  elements.progressPercentage.textContent = `${percentage}%`;
  elements.progressBarText.textContent = `${percentage}%`;
  elements.progressBarFill.style.width = `${percentage}%`;
}

function generateStudyPlan(subject, examDate, topics) {
  const today = new Date();
  const examDay = new Date(examDate + 'T00:00:00');
  const daysRemaining = Math.max(1, Math.ceil((examDay - today) / (1000 * 60 * 60 * 24)));
  const totalTopics = Number(topics);
  const topicsPerDay = 2;
  const planDays = Math.max(1, Math.min(daysRemaining, Math.ceil(totalTopics / topicsPerDay)));
  const topicPriority = getAdaptiveStudyPlanSubject(subject)
    .sort((a, b) => (b.priority || 1) - (a.priority || 1))
    .map((item) => item.topic)
    .filter((topic) => topic !== 'Revision');
  const urgentTopics = Array.from({ length: totalTopics }, (_, index) => `Topic ${index + 1}`);
  const orderedTopics = [...topicPriority, ...urgentTopics.filter((topic) => !topicPriority.includes(topic))];
  const tasks = [];

  for (let day = 1; day <= planDays; day += 1) {
    const startIndex = (day - 1) * topicsPerDay;
    const taskTopics = orderedTopics.slice(startIndex, startIndex + topicsPerDay);
    if (!taskTopics.length) continue;
    const taskDate = new Date(today);
    taskDate.setDate(today.getDate() + day);
    tasks.push({
      id: Date.now() + day + Math.random(),
      title: taskTopics.length > 1 ? `Day ${day}: ${taskTopics.join(', ')}` : `Day ${day}: ${taskTopics[0]}`,
      subject,
      date: formatDateISO(taskDate),
      completed: false,
      topicPriority: taskTopics
    });
  }

  if (tasks.length) {
    const revisionDate = new Date(today);
    revisionDate.setDate(today.getDate() + planDays);
    tasks.push({
      id: Date.now() + Math.random(),
      title: 'Revision',
      subject,
      date: formatDateISO(revisionDate),
      completed: false,
      topicPriority: []
    });
  }

  return tasks;
}

function getDaysLeft(dateString) {
  const targetDate = new Date(dateString + 'T00:00:00');
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const difference = targetDate - today;
  const dayCount = Math.ceil(difference / (1000 * 60 * 60 * 24));
  if (dayCount < 0) return 'Past';
  if (dayCount === 0) return 'Today';
  return `${dayCount} days`;
}

function updateStudyWindowInfo() {
  const examDate = elements.plannerExamDate.value;
  const topicCount = Number(elements.plannerTopics.value);
  if (!examDate) {
    elements.studyWindowInfo.textContent = 'Select an exam date to see your available study days.';
    return;
  }

  const daysRemaining = getRemainingDays(examDate);
  const totalTopics = Number.isFinite(topicCount) && topicCount > 0 ? topicCount : 0;
  const recommendedDays = totalTopics ? Math.min(3, Math.max(2, Math.min(daysRemaining, totalTopics))) : 2;
  elements.studyWindowInfo.textContent = `You have ${daysRemaining} day${daysRemaining === 1 ? '' : 's'} left until the exam. For a realistic study routine, plan for ${recommendedDays} focused study day${recommendedDays === 1 ? '' : 's'}.`;
}

function saveState() {
  if (!authState.currentAccountId) return;

  const account = authState.accounts.find((item) => item.id === authState.currentAccountId);
  if (!account) return;

  account.data = {
    subjects: appState.subjects,
    exams: appState.exams,
    tasks: appState.tasks,
    completedTasks: appState.completedTasks,
    quizHistory: appState.quizHistory,
    studyHistory: appState.studyHistory
  };
  localStorage.setItem(STORAGE_KEYS.accounts, JSON.stringify(authState.accounts));
  localStorage.setItem(STORAGE_KEYS.currentSession, JSON.stringify(authState.currentAccountId));
}

function loadAccountData(account) {
  const data = account.data || {};
  appState.subjects = data.subjects || [];
  appState.exams = data.exams || [];
  appState.tasks = data.tasks || [];
  appState.completedTasks = data.completedTasks || [];
  appState.quizHistory = data.quizHistory || [];
  appState.studyHistory = data.studyHistory || [];
  authState.currentAccountId = account.id;
  elements.userNameLabel.textContent = account.name;
  elements.userNameLabel.classList.remove('hidden');
  elements.logoutBtn.classList.remove('hidden');
  refreshSubjectOptions();
  refreshQuizSubjectOptions();
  restoreQuizDraft();
  updateStudyWindowInfo();
  renderAll();
}

function createAccount(name, email, password) {
  return hashPassword(password).then((passwordHash) => {
    if (authState.accounts.some((account) => account.email === email)) {
      throw new Error('An account with that email already exists.');
    }

    const account = {
      id: Date.now().toString(),
      name,
      email,
      passwordHash,
      data: {
        subjects: appState.subjects,
        exams: appState.exams,
        tasks: appState.tasks,
        completedTasks: appState.completedTasks,
        quizHistory: appState.quizHistory,
        studyHistory: appState.studyHistory
      }
    };

    authState.accounts.push(account);
    localStorage.setItem(STORAGE_KEYS.accounts, JSON.stringify(authState.accounts));
    authState.currentAccountId = account.id;
    localStorage.setItem(STORAGE_KEYS.currentSession, JSON.stringify(account.id));
    loadAccountData(account);
    return true;
  });
}

function loginAccount(email, password) {
  return hashPassword(password).then((passwordHash) => {
    const account = authState.accounts.find((item) => item.email === email && item.passwordHash === passwordHash);
    if (!account) {
      throw new Error('Invalid email or password.');
    }

    authState.currentAccountId = account.id;
    localStorage.setItem(STORAGE_KEYS.currentSession, JSON.stringify(account.id));
    loadAccountData(account);
    return true;
  });
}

function logout() {
  authState.currentAccountId = null;
  localStorage.removeItem(STORAGE_KEYS.currentSession);
  elements.userNameLabel.classList.add('hidden');
  elements.logoutBtn.classList.add('hidden');
  resetAppState();
  setAuthMode('login');
  showAuthModal();
}

function resetAppState() {
  appState.subjects = [];
  appState.exams = [];
  appState.tasks = [];
  appState.completedTasks = [];
  appState.quizHistory = [];
  clearQuizDraft();
}

function hashPassword(password) {
  const encoder = new TextEncoder();
  return window.crypto.subtle.digest('SHA-256', encoder.encode(password)).then((buffer) => {
    return Array.from(new Uint8Array(buffer)).map((byte) => byte.toString(16).padStart(2, '0')).join('');
  });
}

function initializeApp() {
  bindNavigation();
  bindSubjects();
  bindExams();
  bindPlanner();
  bindTaskToggle();
  bindQuiz();
  bindAuthentication();
  initializeSession();
}

function initializeSession() {
  const account = authState.accounts.find((item) => item.id === authState.currentAccountId);
  if (!account) {
    setAuthMode('login');
    showAuthModal();
    return;
  }

  loadAccountData(account);
  hideAuthModal();
}

function resetSubjectForm() {
  elements.subjectForm.reset();
  elements.subjectId.value = '';
  elements.cancelSubjectEdit.classList.add('hidden');
}

function getSubjectTopics(subjectName) {
  if (!subjectName) return [];
  const normalizedName = subjectName.trim().toLowerCase();
  const topicList = Object.entries(SUBJECT_TOPICS).find(([key]) => key === normalizedName);
  return topicList ? topicList[1] : ['Core Concepts', 'Key Skills', 'Revision'];
}

function openQuizModal() {
  const selectedSubject = elements.quizSubject.value || appState.subjects[0]?.name;
  if (selectedSubject) {
    elements.quizSubject.value = selectedSubject;
    updateQuizTopicOptions();
  }
  elements.quizModal.classList.remove('hidden');
  document.body.classList.add('modal-open');
}

function closeQuiz(showConfirmation = true) {
  if (showConfirmation && quizState.active && !quizState.saved) {
    const shouldClose = window.confirm('Your quiz progress will be lost. Do you want to leave?');
    if (!shouldClose) return;
  }

  elements.quizModal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  if (!quizState.saved) clearQuizDraft();
  resetQuizView();
}

function resetQuizView() {
  quizState.questions = [];
  quizState.currentIndex = 0;
  quizState.answers = {};
  quizState.active = false;
  quizState.saved = false;
  elements.quizSetup.classList.remove('hidden');
  elements.quizRunner.classList.add('hidden');
  elements.quizResults.classList.add('hidden');
  elements.quizForm.reset();
  elements.nextQuestionBtn.textContent = 'Next';
  elements.previousQuestionBtn.disabled = true;
}

function startQuiz() {
  const subject = elements.quizSubject.value;
  const topic = elements.quizTopic.value;
  if (!subject || !topic) return;

  quizState.subject = subject;
  quizState.topic = topic;
  quizState.questions = buildQuizQuestions(subject, topic);
  quizState.currentIndex = 0;
  quizState.answers = {};
  quizState.active = true;
  quizState.saved = false;
  saveQuizDraft();
  showQuizRunner();
  renderQuestion();
}

function showQuizRunner() {
  elements.quizSetup.classList.add('hidden');
  elements.quizResults.classList.add('hidden');
  elements.quizRunner.classList.remove('hidden');
}

function renderQuestion() {
  const question = quizState.questions[quizState.currentIndex];
  if (!question) return;

  elements.quizTopicLabel.textContent = quizState.topic;
  elements.quizQuestionTitle.textContent = `Question ${quizState.currentIndex + 1}`;
  elements.quizProgress.textContent = `Question ${quizState.currentIndex + 1} of ${quizState.questions.length}`;
  elements.quizProgressFill.style.width = `${((quizState.currentIndex + 1) / quizState.questions.length) * 100}%`;
  elements.previousQuestionBtn.disabled = quizState.currentIndex === 0;
  elements.nextQuestionBtn.textContent = quizState.currentIndex === quizState.questions.length - 1 ? 'Submit Quiz' : 'Next';

  const selectedAnswer = quizState.answers[quizState.currentIndex];
  elements.quizOptions.innerHTML = `
    <div class="quiz-question-text">Question ${quizState.currentIndex + 1} of ${quizState.questions.length}</div>
    <div class="quiz-question-text">${escapeHtml(question.question)}</div>
    ${question.choices.map((choice, index) => `
      <label class="quiz-option">
        <input type="radio" name="quiz-option" value="${escapeHtml(choice)}" ${selectedAnswer === choice ? 'checked' : ''} />
        <span><strong>${String.fromCharCode(65 + index)}.</strong> ${escapeHtml(choice)}</span>
      </label>
    `).join('')}
  `;
}

function changeQuestion(step) {
  const nextIndex = quizState.currentIndex + step;
  if (nextIndex < 0 || nextIndex >= quizState.questions.length) return;
  quizState.currentIndex = nextIndex;
  renderQuestion();
}

function submitQuiz() {
  const questions = quizState.questions;
  let correctCount = 0;
  const review = questions.map((question, index) => {
    const selectedAnswer = quizState.answers[index];
    const isCorrect = selectedAnswer === question.answer;
    if (isCorrect) correctCount += 1;
    return { question: question.question, selectedAnswer, isCorrect, answer: question.answer, explanation: question.explanation };
  });

  const score = correctCount;
  const maxScore = questions.length;
  const percentage = Math.round((score / maxScore) * 100);
  const status = percentage < 50 ? 'weak' : percentage <= 75 ? 'needs-practice' : 'strong';

  const entry = {
    id: Date.now(),
    subject: quizState.subject,
    topic: quizState.topic,
    score,
    maxScore,
    percentage,
    status,
    date: formatDateISO(new Date())
  };

  appState.quizHistory.unshift(entry);
  addStudyHistory({
    type: 'quiz',
    title: `${quizState.topic} quiz`,
    subject: quizState.subject,
    completedAt: entry.date,
    details: `${entry.score} / ${entry.maxScore} (${entry.percentage}%)`,
    status: entry.status
  });
  updateStudyDNA(percentage, status);
  saveState();
  clearQuizDraft();
  quizState.saved = true;
  renderDashboard();
  renderProgress();
  renderSubjects();
  showQuizResults(entry, review);
}

function showQuizResults(entry, review) {
  elements.quizRunner.classList.add('hidden');
  elements.quizResults.classList.remove('hidden');
  elements.quizResultBadge.textContent = entry.status === 'weak' ? 'Weak' : entry.status === 'needs-practice' ? 'Needs Practice' : 'Strong';
  elements.quizResultBadge.className = `result-badge ${entry.status}`;
  elements.quizResultScore.textContent = `${entry.score} / ${entry.maxScore}`;
  elements.quizResultPercentage.textContent = `${entry.percentage}%`;
  elements.quizResultSummary.textContent = `Your score is ${entry.percentage}%. ${entry.topic} is currently ${entry.status === 'weak' ? 'a weak topic' : entry.status === 'needs-practice' ? 'a topic that needs practice' : 'a strong topic'}. We recommend ${getRecommendationMinutes(entry.percentage)} of revision tomorrow.`;
  elements.quizAnswerReview.innerHTML = review.map((item) => `
    <article class="quiz-review-item ${item.isCorrect ? 'correct' : 'incorrect'}">
      <strong>${escapeHtml(item.question)}</strong>
      <p>Your answer: ${escapeHtml(item.selectedAnswer || 'No answer')}</p>
      <p>${item.isCorrect ? 'Correct.' : `Incorrect. Correct answer: ${escapeHtml(item.answer)}.`}</p>
      <p>${escapeHtml(item.explanation)}</p>
    </article>
  `).join('');
}

function updateStudyDNA(percentage, status) {
  const subject = appState.subjects.find((item) => item.name === quizState.subject);
  if (!subject) return;
  const profile = subject.studyDNA?.topicProfiles || {};
  const existing = profile[quizState.topic] || { attempts: 0, averageScore: 0, status: 'Study DNA', priority: 1 };
  const attempts = existing.attempts + 1;
  const averageScore = Math.round(((existing.averageScore * existing.attempts) + percentage) / attempts);
  const priority = status === 'weak'
    ? Math.max(existing.priority + 1, 2)
    : status === 'strong'
      ? Math.max(1, existing.priority - 1)
      : Math.max(existing.priority, 1);
  const nextStatus = percentage < 50 ? 'weak' : percentage <= 75 ? 'needs-practice' : 'strong';
  profile[quizState.topic] = { attempts, averageScore, status: nextStatus, priority, lastScore: percentage, lastDate: formatDateISO(new Date()) };
  subject.studyDNA = { ...subject.studyDNA, topicProfiles: profile };
}

function getTopicProfile(subject, topic) {
  if (!subject?.studyDNA?.topicProfiles) return { status: 'Study DNA', priority: 1 };
  return subject.studyDNA.topicProfiles[topic] || { status: 'Study DNA', priority: 1 };
}

function getAdaptiveStudyPlanSubject(subjectName) {
  const subject = appState.subjects.find((item) => item.name === subjectName);
  if (!subject?.studyDNA?.topicProfiles) return [];
  return Object.entries(subject.studyDNA.topicProfiles)
    .map(([topic, profile]) => ({ topic, ...profile }))
    .sort((a, b) => (b.priority || 1) - (a.priority || 1));
}

function getWeakTopicsForSubject(subjectName) {
  const subject = appState.subjects.find((item) => item.name === subjectName);
  const profiles = subject?.studyDNA?.topicProfiles || {};
  return Object.entries(profiles)
    .filter(([, profile]) => profile.status === 'weak')
    .map(([topic]) => topic);
}

function addStudyHistory(entry) {
  appState.studyHistory.unshift({
    id: Date.now() + Math.random(),
    ...entry
  });
}

function getRecommendationMinutes(percentage) {
  return percentage < 50 ? '30 minutes' : percentage <= 75 ? '20 minutes' : '15 minutes';
}

function buildQuizQuestions(subject, topic) {
  const bank = QUIZ_BANK[subject.trim().toLowerCase()]?.[topic] || [
    { question: `Which statement best describes ${topic}?`, choices: ['A key idea in the topic', 'A type of exam only', 'An unrelated subject', 'A completed task'], answer: 'A key idea in the topic', explanation: `${topic} should be understood as a meaningful concept that can be studied and revised.` },
    { question: `Which approach best supports learning ${topic}?`, choices: ['Memorizing without checking understanding', 'Practicing with focused questions', 'Ignoring the topic until the exam', 'Skipping examples'], answer: 'Practicing with focused questions', explanation: 'Active practice and review help you identify gaps and improve understanding.' },
    { question: `What is the best next step after making a mistake in ${topic}?`, choices: ['Leave it unanswered', 'Review the explanation and try again', 'Start an unrelated topic', 'Delete the question'], answer: 'Review the explanation and try again', explanation: 'Reviewing the explanation helps you correct the misunderstanding and build retention.' },
    { question: `Which result shows progress in ${topic}?`, choices: ['The same score every time', 'A higher score after practice', 'No study plan', 'Avoiding the topic'], answer: 'A higher score after practice', explanation: 'Improved quiz performance is evidence that revision and practice are helping.' },
    { question: `What should you do before a test on ${topic}?`, choices: ['Review weak points and attempt practice questions', 'Wait until the day before', 'Skip the topic', 'Only read notes once'], answer: 'Review weak points and attempt practice questions', explanation: 'Targeted revision and practice questions reinforce the topic before evaluation.' }
  ];
  return bank.slice(0, 5);
}

function saveQuizDraft() {
  const draft = { subject: quizState.subject, topic: quizState.topic, currentIndex: quizState.currentIndex, answers: quizState.answers, active: quizState.active, saved: quizState.saved };
  localStorage.setItem(STORAGE_KEYS.quizDraft, JSON.stringify(draft));
}

function restoreQuizDraft() {
  const savedDraft = loadFromStorage(STORAGE_KEYS.quizDraft, null);
  if (!savedDraft || !savedDraft.active) return;

  const subject = appState.subjects.find((item) => item.name === savedDraft.subject);
  if (!subject || !savedDraft.topic) return;

  quizState.subject = savedDraft.subject;
  quizState.topic = savedDraft.topic;
  quizState.questions = buildQuizQuestions(savedDraft.subject, savedDraft.topic);
  quizState.currentIndex = savedDraft.currentIndex || 0;
  quizState.answers = savedDraft.answers || {};
  quizState.active = true;
  quizState.saved = savedDraft.saved || false;
  elements.quizSubject.value = savedDraft.subject;
  updateQuizTopicOptions();
  elements.quizTopic.value = savedDraft.topic;
  showQuizRunner();
  renderQuestion();
}

function clearQuizDraft() {
  localStorage.removeItem(STORAGE_KEYS.quizDraft);
}

function getRemainingDays(dateString) {
  const targetDate = new Date(dateString + 'T00:00:00');
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const difference = targetDate - today;
  const dayCount = Math.ceil(difference / (1000 * 60 * 60 * 24));
  return Math.max(1, dayCount);
}

function formatDate(dateString) {
  const date = new Date(dateString + 'T00:00:00');
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function formatDateISO(date) {
  return new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString().split('T')[0];
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function migrateCompletedTasks() {
  if (!Array.isArray(appState.tasks)) return;

  const completedTasks = appState.tasks.filter((task) => task.completed);
  if (!completedTasks.length) return;

  appState.completedTasks = [
    ...completedTasks.map((task) => ({
      ...task,
      completed: true,
      completedAt: task.completedAt || formatDateISO(new Date())
    })),
    ...appState.completedTasks
  ];
  appState.tasks = appState.tasks.filter((task) => !task.completed);
  saveState();
}

function getSubjectName(subjectId) {
  const subject = appState.subjects.find((item) => item.id === subjectId);
  return subject ? subject.name : '';
}
