// Preloaded exercise tips library
const EXERCISE_TIPS = [
    {
        id: 1,
        category: 'Strength',
        difficulty: 'Beginner',
        title: 'Perfecting the Squat Form',
        summary: 'Master the fundamental lower-body exercise to protect your knees and build maximum power.',
        description: 'The squat is one of the most effective compound exercises for developing lower body strength. It targets your quadriceps, hamstrings, glutes, and core. Proper mechanics are critical to avoid injury and maximize recruitment of muscle fibers.',
        cues: [
            'Stand with feet shoulder-width apart, toes pointed slightly outward (around 15 degrees).',
            'Brace your core, keep your chest high, and initiate the movement by pushing your hips back first.',
            'Descend until your thighs are at least parallel to the floor, ensuring your knees track directly over your toes.',
            'Keep your heels glued to the floor and drive upward through the midfoot to stand up.'
        ],
        muscles: ['Gluteus Maximus', 'Quadriceps', 'Hamstrings', 'Core (Abs & Lower Back)'],
        breathing: 'Inhale deeply as you lower your body down. Hold your breath slightly at the bottom (bracing), then exhale forcefully as you drive back up to the starting position.'
    },
    {
        id: 2,
        category: 'Warm-up',
        difficulty: 'Beginner',
        title: '5-Minute Dynamic Warm-Up',
        summary: 'Prepare your nervous system and joints for training to increase performance and reduce injury risks.',
        description: 'Static stretching before a workout can actually decrease power output. Dynamic movement, on the other hand, raises body temperature, lubricates joints with synovial fluid, and gears up the central nervous system.',
        cues: [
            'Jumping Jacks (60 seconds) — to raise heart rate.',
            'Arm Circles (60 seconds) — forward and backward to mobilize shoulder sockets.',
            'Bodyweight Squats (60 seconds) — slow and controlled to wake up leg joints.',
            'Alternating Reverse Lunges (60 seconds) — to activate hip flexors and glutes.',
            'High Knees or Inchworms (60 seconds) — to stretch hamstrings and warm up core.'
        ],
        muscles: ['Full Body Mobilization', 'Cardiorespiratory System', 'Joint Lubrication'],
        breathing: 'Keep your breathing deep and natural. Avoid holding your breath during warm-ups; try to align movement speed with deep inhales and exhales.'
    },
    {
        id: 3,
        category: 'Cardio',
        difficulty: 'Intermediate',
        title: 'HIIT Cardio Protocol (15 Mins)',
        summary: 'Burn maximum fat and improve aerobic capacity in minimal time with High Intensity Intervals.',
        description: 'High-Intensity Interval Training (HIIT) alternates short bursts of intense anaerobic exercise with recovery periods. This creates an EPOC effect (Excess Post-exercise Oxygen Consumption), causing you to burn more calories for hours after training.',
        cues: [
            'Warm up with a light jog or spin for 2 minutes.',
            'Sprint/Work interval: Go 90-100% max effort (sprint, fast bike, burpees) for 30 seconds.',
            'Recover interval: Walk or pedal slowly (intensity 3/10) for 60 seconds.',
            'Repeat the sprint/recovery cycle for 8 to 10 rounds.',
            'Cool down with 2 minutes of gentle walking.'
        ],
        muscles: ['Cardiovascular System', 'Leg Endurance (Fast-twitch fibers)'],
        breathing: 'During the high intensity sprint, focus on quick, explosive breathing. During recovery, consciously take slow, deep belly breaths to lower your heart rate quickly.'
    },
    {
        id: 4,
        category: 'Recovery',
        difficulty: 'Beginner',
        title: 'Post-Workout Cool Down',
        summary: 'Lower your heart rate safely and release muscle tension through structured static stretches.',
        description: 'Cooling down after a strenuous session helps flush lactic acid out of your muscles, reduces blood pooling in your limbs, and transitions your body from a sympathetic (fight-or-flight) state to a parasympathetic (rest-and-recover) state.',
        cues: [
            'Light walk for 2 minutes to gradually taper your heart rate.',
            'Hamstring Stretch: Sit and reach for your toes, holding for 30 seconds per side.',
            'Quadriceps Stretch: Stand on one leg and pull your ankle towards your glutes, holding for 30 seconds.',
            'Chest Opener: Interlace fingers behind your back, lift your chest, and hold for 30 seconds.',
            'Child\'s Pose: Kneel, sit back on your heels, extend arms forward on the floor, and hold for 1 minute.'
        ],
        muscles: ['Hamstrings', 'Quadriceps', 'Chest', 'Lower Back & Spine'],
        breathing: 'This is the time for deep, slow parasympathetic breathing. Inhale for 4 seconds, hold for 2 seconds, and exhale for 6 seconds. Sink deeper into each stretch on the exhale.'
    },
    {
        id: 5,
        category: 'Nutrition',
        difficulty: 'Beginner',
        title: 'Optimal Fitness Nutrition Rules',
        summary: 'Fuel workouts and rebuild muscle with clean protein, balanced carbs, and adequate hydration.',
        description: 'Your training is only as good as your recovery, and recovery starts in the kitchen. Without proper amino acids, your body cannot rebuild muscle fibers, and without glycogen from carbohydrates, you will lack energy for your next session.',
        cues: [
            'Protein Target: Consume 1.6 to 2.2 grams of protein per kilogram of body weight daily (e.g. chicken, tofu, fish, eggs, lentils).',
            'Carbs as Fuel: Eat complex carbohydrates (sweet potatoes, oats, brown rice) 1.5 - 2 hours before high-intensity training.',
            'Hydration Rule: Drink at least 3 liters of water per day, plus an additional 500ml for every 30 minutes of heavy sweating.',
            'Post-Workout Window: Eat a protein and carbohydrate-rich meal within 2 hours of completing a workout.'
        ],
        muscles: ['Whole Body Recovery', 'Muscle Protein Synthesis', 'Glycogen Replenishment'],
        breathing: 'Avoid swallowing air while eating (mindful chewing). Eating slowly helps digestion and improves nutrient absorption.'
    },
    {
        id: 6,
        category: 'Cardio',
        difficulty: 'Intermediate',
        title: 'Running Biomechanics & Gait',
        summary: 'Minimize joint load and increase running efficiency with optimal posture and stride.',
        description: 'Running is a high-impact repetitive movement. Even minor gait adjustments can protect your ankles, knees, and lower back from chronic stress injuries while allowing you to run faster and longer.',
        cues: [
            'Maintain a tall posture with a very slight forward lean originating from your ankles, not your waist.',
            'Keep your gaze forward (around 10-15 meters ahead), shoulders relaxed, and elbows bent at 90 degrees.',
            'Strive for a mid-foot strike, landing with your foot directly underneath your hips to avoid overstriding.',
            'Maintain a higher cadence (aim for 160-180 steps per minute) to reduce ground contact time.'
        ],
        muscles: ['Ankles & Calves', 'Hamstrings & Glutes', 'Cardiorespiratory Endurance'],
        breathing: 'Establish a rhythmic breathing pattern. A common pattern is the 2:2 rhythm: inhale for 2 foot strikes, then exhale for 2 foot strikes. This helps coordinate diaphragm contractions.'
    },
    {
        id: 7,
        category: 'Strength',
        difficulty: 'Advanced',
        title: 'Progressive Overload Blueprint',
        summary: 'Consistently challenge your muscles to stimulate hypertrophy and strength gains over time.',
        description: 'Your muscles adapt to the load placed on them. If you lift the same weight for the same repetitions week after week, your body has no biological reason to grow larger or stronger. You must apply progressive overload.',
        cues: [
            'Load Progression: Add weight to the bar (e.g. increase bench press by 2.5kg once you can perform your goal reps).',
            'Volume Progression: Increase the number of repetitions or sets for an exercise.',
            'Frequency Progression: Train a muscle group 2 times per week instead of just 1.',
            'Density Progression: Reduce rest times between sets (e.g. from 90 seconds to 60 seconds) while keeping load constant.'
        ],
        muscles: ['Neuromuscular Adaptations', 'Skeletal Muscle Hypertrophy'],
        breathing: 'For heavy lifting, learn the Valsalva maneuver: take a deep breath before the rep, brace your abs tightly, perform the concentric phase (lifting) while holding your breath, and exhale past the hardest point.'
    }
];

// MET value coefficients for default calorie estimations
const MET_VALUES = {
    cardio: 8.0,      // Running, fast cycling, rowers
    strength: 5.0,    // Weightlifting, calisthenics
    flexibility: 2.5, // Yoga, active stretching
    sport: 7.0,       // Basketball, soccer, tennis
    'mind-body': 1.5  // Relaxed yoga, tai chi, deep breathing
};

// Initial data templates to seed the application on first visit
const INITIAL_WORKOUTS = [
    {
        id: 'w-seed-1',
        name: 'Scenic Lake Run',
        category: 'cardio',
        duration: 35,
        weight: null,
        sets: null,
        reps: null,
        calories: 340,
        date: getRelativeDateString(-1) // yesterday
    },
    {
        id: 'w-seed-2',
        name: 'Upper Body Compound Pressing',
        category: 'strength',
        duration: 50,
        weight: 65,
        sets: 4,
        reps: 10,
        calories: 310,
        date: getRelativeDateString(-2) // 2 days ago
    },
    {
        id: 'w-seed-3',
        name: 'Morning Vinyasa Flow',
        category: 'flexibility',
        duration: 25,
        weight: null,
        sets: null,
        reps: null,
        calories: 75,
        date: getRelativeDateString(-4) // 4 days ago
    }
];

const INITIAL_GOALS = [
    {
        id: 'g-seed-1',
        name: 'Log 4 Active Sessions',
        metric: 'count',
        value: 4,
        timeframe: 'weekly',
        progress: 0,
        status: 'active',
        date: getRelativeDateString(0)
    },
    {
        id: 'g-seed-2',
        name: 'Burn 1,200 kcal',
        metric: 'calories',
        value: 1200,
        timeframe: 'weekly',
        progress: 0,
        status: 'active',
        date: getRelativeDateString(0)
    }
];

// Helper to calculate relative date string (YYYY-MM-DD)
function getRelativeDateString(offsetDays) {
    const d = new Date();
    d.setDate(d.getDate() + offsetDays);
    return d.toISOString().split('T')[0];
}

// State container
let state = {
    workouts: [],
    goals: []
};

// Initialization and Storage Management
function initApp() {
    // Load local storage or seed initial data
    const savedWorkouts = localStorage.getItem('aurafit_workouts');
    const savedGoals = localStorage.getItem('aurafit_goals');

    if (savedWorkouts) {
        state.workouts = JSON.parse(savedWorkouts);
    } else {
        state.workouts = [...INITIAL_WORKOUTS];
        localStorage.setItem('aurafit_workouts', JSON.stringify(state.workouts));
    }

    if (savedGoals) {
        state.goals = JSON.parse(savedGoals);
    } else {
        state.goals = [...INITIAL_GOALS];
        localStorage.setItem('aurafit_goals', JSON.stringify(state.goals));
    }

    // Refresh goal progressions in case dates have shifted relative to current system time
    recalculateGoalsProgress();

    // Attach Event Listeners
    setupViewRouting();
    setupForms();
    setupTipsFilter();
    setupDateWidget();

    // Initial Render of Active View
    renderDashboard();
}

// Sync State back to LocalStorage
function saveStateToStorage() {
    localStorage.setItem('aurafit_workouts', JSON.stringify(state.workouts));
    localStorage.setItem('aurafit_goals', JSON.stringify(state.goals));
}

// Date helper: Checks if a date string falls within the current calendar week (Monday to Sunday)
function isCurrentWeek(dateStr) {
    const workoutDate = new Date(dateStr + 'T00:00:00');
    const now = new Date();

    // Calculate distance to current week's Monday
    const currentDay = now.getDay(); // 0 = Sun, 1 = Mon ... 6 = Sat
    const distanceToMonday = currentDay === 0 ? -6 : 1 - currentDay;

    const monday = new Date(now);
    monday.setDate(now.getDate() + distanceToMonday);
    monday.setHours(0, 0, 0, 0);

    const sunday = new Date(monday);
    sunday.setDate(monday.getDate() + 6);
    sunday.setHours(23, 59, 59, 999);

    return workoutDate >= monday && workoutDate <= sunday;
}

// Date helper: Checks if a date string falls within the current calendar month
function isCurrentMonth(dateStr) {
    const workoutDate = new Date(dateStr + 'T00:00:00');
    const now = new Date();
    return workoutDate.getFullYear() === now.getFullYear() && workoutDate.getMonth() === now.getMonth();
}

// Recalculates goal statistics based on active workouts list
function recalculateGoalsProgress() {
    state.goals.forEach(goal => {
        // Filter workouts that fit the timeframe criteria
        const matchingWorkouts = state.workouts.filter(w => {
            if (goal.timeframe === 'weekly') {
                return isCurrentWeek(w.date);
            } else if (goal.timeframe === 'monthly') {
                return isCurrentMonth(w.date);
            }
            return false;
        });

        // Sum the target metric
        let sum = 0;
        if (goal.metric === 'count') {
            sum = matchingWorkouts.length;
        } else if (goal.metric === 'calories') {
            sum = matchingWorkouts.reduce((acc, w) => acc + (w.calories || 0), 0);
        } else if (goal.metric === 'duration') {
            sum = matchingWorkouts.reduce((acc, w) => acc + (w.duration || 0), 0);
        }

        goal.progress = sum;
        goal.status = sum >= goal.value ? 'completed' : 'active';
    });
    saveStateToStorage();
}

// Setup top-right header date widget
function setupDateWidget() {
    const dateStrEl = document.getElementById('current-date-str');
    if (dateStrEl) {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        dateStrEl.textContent = new Date().toLocaleDateString('en-US', options);
    }
}

// Navigation & View Routing
function setupViewRouting() {
    const navItems = document.querySelectorAll('.nav-links li');
    const appViews = document.querySelectorAll('.app-view');
    const viewTitle = document.getElementById('view-title');
    const viewSubtitle = document.getElementById('view-subtitle');

    const viewDetails = {
        dashboard: { title: 'Dashboard', subtitle: 'Review your progress and current activities' },
        log: { title: 'Log Workout', subtitle: 'Record details about your exercises and track histories' },
        goals: { title: 'Fitness Goals', subtitle: 'Establish metrics targets and monitor your results' },
        tips: { title: 'Exercise Tips', subtitle: 'Learn correct forms, safety guides, and nutrition advice' }
    };

    function switchView(viewName) {
        // Hide/Show panels
        appViews.forEach(view => {
            view.classList.remove('active');
            if (view.id === `view-${viewName}`) {
                view.classList.add('active');
            }
        });

        // Toggle nav bar active states
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('data-view') === viewName) {
                item.classList.add('active');
            }
        });

        // Set titles
        if (viewDetails[viewName]) {
            viewTitle.textContent = viewDetails[viewName].title;
            viewSubtitle.textContent = viewDetails[viewName].subtitle;
        }

        // Render contents specific to active view
        if (viewName === 'dashboard') {
            renderDashboard();
        } else if (viewName === 'log') {
            renderWorkoutsLog();
        } else if (viewName === 'goals') {
            renderGoals();
        } else if (viewName === 'tips') {
            renderTips();
        }

        // Auto close mobile drawer on click
        const sidebar = document.getElementById('sidebar');
        if (sidebar && window.innerWidth <= 768) {
            sidebar.classList.remove('open');
        }
    }

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const viewName = item.getAttribute('data-view');
            switchView(viewName);
        });
    });

    // Dashboard redirection shortcuts
    const viewAllBtn = document.getElementById('btn-view-all-workouts');
    if (viewAllBtn) {
        viewAllBtn.addEventListener('click', () => switchView('log'));
    }

    // Mobile Hamburger Menu Trigger
    const menuBtn = document.getElementById('mobile-menu-btn');
    const sidebar = document.getElementById('sidebar');
    if (menuBtn && sidebar) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            sidebar.classList.toggle('open');
        });

        // Close if click outside
        document.addEventListener('click', (e) => {
            if (window.innerWidth <= 768 && sidebar.classList.contains('open')) {
                if (!sidebar.contains(e.target) && e.target !== menuBtn) {
                    sidebar.classList.remove('open');
                }
            }
        });
    }
}

// ----------------- VIEW 1: DASHBOARD RENDERER -----------------
function renderDashboard() {
    // 1. Calculate dashboard metrics totals
    const totalWorkouts = state.workouts.length;
    const totalDuration = state.workouts.reduce((sum, w) => sum + Number(w.duration), 0);
    const totalCalories = state.workouts.reduce((sum, w) => sum + Number(w.calories), 0);

    // Count met goals vs total goals
    const goalsTotal = state.goals.length;
    const goalsMet = state.goals.filter(g => g.status === 'completed').length;

    // Update HTML DOM values
    document.getElementById('metric-calories').textContent = totalCalories.toLocaleString();
    document.getElementById('metric-duration').textContent = totalDuration.toLocaleString();
    document.getElementById('metric-workouts').textContent = totalWorkouts.toLocaleString();
    document.getElementById('metric-goals-met').textContent = goalsMet;
    document.getElementById('metric-goals-total').textContent = goalsTotal;

    // 2. Render Recent Workouts (Max 4 items)
    const recentMount = document.getElementById('recent-workouts-mount');
    recentMount.innerHTML = '';

    if (state.workouts.length === 0) {
        recentMount.innerHTML = `
            <div class="empty-state" style="padding: 1.5rem 0;">
                <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>
                <h3>No workouts logged</h3>
                <p>Log a workout to view history here</p>
            </div>
        `;
    } else {
        // Sort newest first
        const sorted = [...state.workouts].sort((a, b) => new Date(b.date) - new Date(a.date));
        const limit = sorted.slice(0, 4);

        limit.forEach(w => {
            const card = document.createElement('div');
            card.className = 'mini-workout-card';

            // Get category-specific styling
            const iconSvg = getCategoryIconSvg(w.category);
            const dateObj = new Date(w.date + 'T00:00:00');
            const dayStr = dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

            card.innerHTML = `
                <div class="mini-w-details">
                    <div class="mini-w-icon" style="color: var(--${w.category === 'flexibility' ? 'success' : w.category === 'strength' ? 'secondary' : w.category === 'cardio' ? 'primary' : 'accent'})">
                        ${iconSvg}
                    </div>
                    <div class="mini-w-text">
                        <h4>${escapeHTML(w.name)}</h4>
                        <p>${dayStr} &bull; ${w.duration} mins</p>
                    </div>
                </div>
                <div class="mini-w-stats">
                    <div class="mini-w-value">${w.calories} kcal</div>
                    <div class="mini-w-sub">${w.weight ? w.weight + ' kg' : 'Bodyweight'}</div>
                </div>
            `;
            recentMount.appendChild(card);
        });
    }

    // 3. Render Weekly Chart
    renderWeeklyChart();
}

// Generate the CSS vertical bar chart representing the last 7 calendar days of calories burned
function renderWeeklyChart() {
    const chartMount = document.getElementById('chart-mount');
    chartMount.innerHTML = '';

    // Calculate dates of last 7 calendar days
    const last7Days = [];
    for (let i = 6; i >= 0; i--) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        last7Days.push({
            dateString: d.toISOString().split('T')[0],
            dayLabel: d.toLocaleDateString('en-US', { weekday: 'short' }),
            calories: 0
        });
    }

    // Sum calories for each day
    let totalWeeklyCal = 0;
    last7Days.forEach(day => {
        const workoutsOnDay = state.workouts.filter(w => w.date === day.dateString);
        day.calories = workoutsOnDay.reduce((sum, w) => sum + (w.calories || 0), 0);
        totalWeeklyCal += day.calories;
    });

    if (totalWeeklyCal === 0) {
        chartMount.innerHTML = `
            <div class="empty-chart-state">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                <h3>No activity in the last 7 days</h3>
                <p style="font-size:0.85rem; color: var(--text-dark); margin-top:0.25rem;">Log your workouts to populate daily performance charts</p>
            </div>
        `;
        return;
    }

    // Find max value to calibrate bar heights
    const maxCal = Math.max(...last7Days.map(d => d.calories), 300); // minimum scale peak at 300 kcal

    // Create chart container layout
    const chartContainer = document.createElement('div');
    chartContainer.className = 'chart-container';

    // Vertical ticks on axis
    const axisY = document.createElement('div');
    axisY.className = 'chart-axis-y';
    axisY.innerHTML = `
        <span>${maxCal} kcal</span>
        <span>${Math.round(maxCal / 2)} kcal</span>
        <span>0</span>
    `;
    chartContainer.appendChild(axisY);

    // Build bar columns
    last7Days.forEach(day => {
        const pctHeight = (day.calories / maxCal) * 100;
        const wrapper = document.createElement('div');
        wrapper.className = 'chart-bar-wrapper';

        wrapper.innerHTML = `
            <div class="chart-bar-tooltip">${day.calories} kcal</div>
            <div class="chart-bar-container">
                <div class="chart-bar" style="height: ${pctHeight}%"></div>
            </div>
            <div class="chart-label">${day.dayLabel}</div>
        `;
        chartContainer.appendChild(wrapper);
    });

    chartMount.appendChild(chartContainer);

    // Trigger bar animations in microtask/timeout
    setTimeout(() => {
        const bars = chartContainer.querySelectorAll('.chart-bar');
        bars.forEach((bar, idx) => {
            const pct = (last7Days[idx].calories / maxCal) * 100;
            bar.style.height = `${pct}%`;
        });
    }, 50);
}

// ----------------- VIEW 2: LOG WORKOUT RENDERER -----------------
function renderWorkoutsLog() {
    const tableBody = document.getElementById('history-table-body');
    const emptyState = document.getElementById('history-empty-state');
    const countSpan = document.getElementById('workout-history-count');

    tableBody.innerHTML = '';
    emptyState.innerHTML = '';
    countSpan.textContent = `${state.workouts.length} logged`;

    if (state.workouts.length === 0) {
        emptyState.innerHTML = `
            <div class="empty-state">
                <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>
                <h3>No Workouts Logged Yet</h3>
                <p>Add your first workout using the log form on the left</p>
            </div>
        `;
        document.getElementById('history-table').style.display = 'none';
    } else {
        document.getElementById('history-table').style.display = 'table';

        // Sort chronologically (newest first)
        const sorted = [...state.workouts].sort((a, b) => new Date(b.date) - new Date(a.date));

        sorted.forEach(w => {
            const tr = document.createElement('tr');

            const dateObj = new Date(w.date + 'T00:00:00');
            const dateFormatted = dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

            // Format Load Volume
            let volumeStr = '—';
            if (w.weight || w.sets || w.reps) {
                const weightPart = w.weight ? `${w.weight} kg` : 'BW';
                const setPart = w.sets && w.reps ? ` (${w.sets}x${w.reps})` : '';
                volumeStr = `${weightPart}${setPart}`;
            }

            // Category tag formatting
            const categoryLabel = w.category.replace('-', ' ');

            tr.innerHTML = `
                <td>${dateFormatted}</td>
                <td style="font-weight: 600;">${escapeHTML(w.name)}</td>
                <td><span class="table-category category-${w.category}">${categoryLabel}</span></td>
                <td>${volumeStr}</td>
                <td>${w.duration} mins</td>
                <td style="color: var(--accent); font-weight: 700;">${w.calories} kcal</td>
                <td>
                    <button class="action-btn" data-id="${w.id}" title="Delete Workout">
                        <svg viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
                    </button>
                </td>
            `;

            // Setup delete listener
            tr.querySelector('.action-btn').addEventListener('click', (e) => {
                const workoutId = e.currentTarget.getAttribute('data-id');
                deleteWorkout(workoutId);
            });

            tableBody.appendChild(tr);
        });
    }
}

function deleteWorkout(id) {
    state.workouts = state.workouts.filter(w => w.id !== id);
    saveStateToStorage();
    recalculateGoalsProgress();
    renderWorkoutsLog();
}

// ----------------- VIEW 3: FITNESS GOALS RENDERER -----------------
function renderGoals() {
    const goalsMount = document.getElementById('goals-list-mount');
    const emptyState = document.getElementById('goals-empty-state');
    const countSpan = document.getElementById('goals-progress-count');

    goalsMount.innerHTML = '';
    emptyState.innerHTML = '';
    countSpan.textContent = `${state.goals.length} Goals Active`;

    if (state.goals.length === 0) {
        emptyState.innerHTML = `
            <div class="empty-state">
                <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z"/></svg>
                <h3>No active fitness goals</h3>
                <p>Create a target on the left to measure your weekly or monthly progress</p>
            </div>
        `;
    } else {
        state.goals.forEach(goal => {
            const card = document.createElement('div');

            // Calculate percentages
            const pct = Math.min(Math.round((goal.progress / goal.value) * 100), 500); // capped at 500% overflow
            const isDone = goal.status === 'completed';

            card.className = `glass-card goal-card ${isDone ? 'completed' : ''}`;

            // Labels for unit
            let unitStr = '';
            if (goal.metric === 'calories') unitStr = 'kcal';
            else if (goal.metric === 'duration') unitStr = 'mins';
            else if (goal.metric === 'count') unitStr = 'workouts';

            card.innerHTML = `
                <div class="goal-header">
                    <div class="goal-meta">
                        <h3>${escapeHTML(goal.name)}</h3>
                        <p>${goal.timeframe === 'weekly' ? 'This Week' : 'This Month'} &bull; Target: ${goal.value.toLocaleString()} ${unitStr}</p>
                    </div>
                    <div style="display:flex; gap:0.5rem; align-items:center;">
                        <span class="goal-badge">${goal.timeframe}</span>
                        <button class="action-btn delete-goal-btn" data-id="${goal.id}" title="Delete Goal" style="padding: 0.15rem;">
                            <svg viewBox="0 0 24 24" width="16" height="16"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
                        </button>
                    </div>
                </div>
                
                <div class="goal-progress-container">
                    <div class="goal-progress-info">
                        <span>Current: <strong>${goal.progress.toLocaleString()}</strong> / ${goal.value.toLocaleString()} ${unitStr}</span>
                        <span class="goal-percentage">${pct}%</span>
                    </div>
                    <div class="progress-bar-bg" style="margin-top:0.5rem;">
                        <div class="progress-bar-fill" style="width: ${Math.min(pct, 100)}%"></div>
                    </div>
                </div>
            `;

            // Delete Goal listener
            card.querySelector('.delete-goal-btn').addEventListener('click', (e) => {
                e.stopPropagation();
                deleteGoal(goal.id);
            });

            goalsMount.appendChild(card);
        });
    }
}

function deleteGoal(id) {
    state.goals = state.goals.filter(g => g.id !== id);
    saveStateToStorage();
    renderGoals();
}

// ----------------- VIEW 4: EXERCISE TIPS RENDERER -----------------
let activeTipsCategory = 'all';

function setupTipsFilter() {
    const pills = document.querySelectorAll('#tips-category-pills .filter-pill');
    pills.forEach(pill => {
        pill.addEventListener('click', () => {
            pills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            activeTipsCategory = pill.getAttribute('data-category');
            renderTips();
        });
    });

    const searchInput = document.getElementById('tips-search');
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            renderTips();
        });
    }

    // Modal Close
    const closeBtn = document.getElementById('modal-close-btn');
    const modal = document.getElementById('tip-modal-overlay');
    if (closeBtn && modal) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
        });

        // Close on clicking backdrop
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    }
}

function renderTips() {
    const gridMount = document.getElementById('tips-grid-mount');
    const searchVal = document.getElementById('tips-search').value.toLowerCase().trim();
    gridMount.innerHTML = '';

    // Filter array
    const filtered = EXERCISE_TIPS.filter(tip => {
        const matchesCategory = activeTipsCategory === 'all' || tip.category === activeTipsCategory;
        const matchesSearch = tip.title.toLowerCase().includes(searchVal) ||
            tip.summary.toLowerCase().includes(searchVal) ||
            tip.category.toLowerCase().includes(searchVal) ||
            tip.description.toLowerCase().includes(searchVal);
        return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
        gridMount.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1;">
                <svg viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
                <h3>No guides match your search</h3>
                <p>Try refining your search keyword or selecting a different category filter</p>
            </div>
        `;
        return;
    }

    filtered.forEach(tip => {
        const card = document.createElement('div');
        card.className = `glass-card tip-card ${tip.category}`;

        card.innerHTML = `
            <div>
                <div class="tip-header">
                    <span class="tip-tag">${tip.category}</span>
                    <span class="tip-difficulty">${tip.difficulty}</span>
                </div>
                <h3 class="tip-title">${escapeHTML(tip.title)}</h3>
                <p class="tip-desc">${escapeHTML(tip.summary)}</p>
            </div>
            
            <div class="tip-footer">
                <span>Core Target</span>
                <span class="tip-footer-interactive" data-id="${tip.id}">
                    Learn Cues
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
                </span>
            </div>
        `;

        // Click event to expand modal
        card.querySelector('.tip-footer-interactive').addEventListener('click', (e) => {
            const tipId = Number(e.currentTarget.getAttribute('data-id'));
            openTipModal(tipId);
        });

        gridMount.appendChild(card);
    });
}

function openTipModal(tipId) {
    const tip = EXERCISE_TIPS.find(t => t.id === tipId);
    if (!tip) return;

    const modalTitle = document.getElementById('modal-tip-title');
    const modalBody = document.getElementById('modal-tip-body');
    const overlay = document.getElementById('tip-modal-overlay');

    modalTitle.textContent = tip.title;

    // Construct HTML template
    let musclesHTML = tip.muscles.map(m => `<li>${escapeHTML(m)}</li>`).join('');
    let cuesHTML = tip.cues.map(c => `<li>${escapeHTML(c)}</li>`).join('');

    modalBody.innerHTML = `
        <div style="font-weight: 500; font-size: 1.05rem; color: var(--text-main); margin-bottom: 0.5rem;">
            Category: <span style="color: var(--primary); font-weight:600;">${tip.category}</span> &bull; Difficulty: <span style="color:var(--text-muted);">${tip.difficulty}</span>
        </div>
        <p>${escapeHTML(tip.description)}</p>
        
        <div>
            <strong style="display:block; margin-bottom:0.5rem; text-transform:uppercase; font-size:0.8rem; letter-spacing:0.5px;">Instructional Cues:</strong>
            <ol style="padding-left:1.25rem; display:flex; flex-direction:column; gap:0.4rem;">
                ${cuesHTML}
            </ol>
        </div>

        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:1rem; margin-top:0.5rem;">
            <div>
                <strong style="display:block; margin-bottom:0.4rem; text-transform:uppercase; font-size:0.8rem; letter-spacing:0.5px;">Muscles Worked:</strong>
                <ul style="padding-left:1.25rem;">
                    ${musclesHTML}
                </ul>
            </div>
            <div>
                <strong style="display:block; margin-bottom:0.4rem; text-transform:uppercase; font-size:0.8rem; letter-spacing:0.5px;">Breathing Guide:</strong>
                <p style="font-size:0.85rem; line-height:1.4;">${escapeHTML(tip.breathing)}</p>
            </div>
        </div>
    `;

    overlay.classList.add('active');
}

// ----------------- FORM HANDLERS & INPUT VALIDATORS -----------------
function setupForms() {
    // 1. Workout Logger Form
    const wForm = document.getElementById('workout-form');
    wForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const nameInput = document.getElementById('workout-name');
        const categoryInput = document.getElementById('workout-category');
        const durationInput = document.getElementById('workout-duration');
        const weightInput = document.getElementById('workout-weight');
        const setsInput = document.getElementById('workout-sets');
        const repsInput = document.getElementById('workout-reps');
        const caloriesInput = document.getElementById('workout-calories');

        // Simple Validation
        if (!nameInput.value.trim()) {
            alert('Please specify an exercise or activity name.');
            nameInput.focus();
            return;
        }

        const duration = Number(durationInput.value);
        if (isNaN(duration) || duration <= 0) {
            alert('Workout duration must be greater than 0.');
            durationInput.focus();
            return;
        }

        // Auto calculate calories based on MET coefficients if left empty
        let calories = Number(caloriesInput.value);
        if (!caloriesInput.value || isNaN(calories) || calories <= 0) {
            const category = categoryInput.value;
            const met = MET_VALUES[category] || 5.0;
            // Calories standard formula based on MET for average person (70kg)
            calories = Math.round(met * 3.5 * 70 / 200 * duration);
        }

        const newWorkout = {
            id: 'w-' + Date.now(),
            name: nameInput.value.trim(),
            category: categoryInput.value,
            duration: duration,
            weight: weightInput.value ? Number(weightInput.value) : null,
            sets: setsInput.value ? Number(setsInput.value) : null,
            reps: repsInput.value ? Number(repsInput.value) : null,
            calories: calories,
            date: getRelativeDateString(0) // Logged on current day
        };

        state.workouts.push(newWorkout);
        saveStateToStorage();
        recalculateGoalsProgress();

        wForm.reset();

        // Switch to Dashboard immediately to see updated progress
        document.getElementById('nav-btn-dashboard').click();
    });

    // 2. Goal Creation Form
    const gForm = document.getElementById('goal-form');
    gForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const nameInput = document.getElementById('goal-name');
        const metricInput = document.getElementById('goal-metric');
        const valueInput = document.getElementById('goal-value');
        const timeframeInput = document.getElementById('goal-timeframe');

        if (!nameInput.value.trim()) {
            alert('Please enter a goal title.');
            nameInput.focus();
            return;
        }

        const targetVal = Number(valueInput.value);
        if (isNaN(targetVal) || targetVal <= 0) {
            alert('Target value must be greater than 0.');
            valueInput.focus();
            return;
        }

        const newGoal = {
            id: 'g-' + Date.now(),
            name: nameInput.value.trim(),
            metric: metricInput.value,
            value: targetVal,
            timeframe: timeframeInput.value,
            progress: 0,
            status: 'active',
            date: getRelativeDateString(0)
        };

        state.goals.push(newGoal);
        saveStateToStorage();
        recalculateGoalsProgress();

        gForm.reset();

        // Switch back to Goals list view to review the newly added target
        renderGoals();
    });
}

// ----------------- HELPERS -----------------
function escapeHTML(str) {
    if (!str) return '';
    return str.replace(/[&<>'"]/g,
        tag => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;'
        }[tag] || tag)
    );
}

function getCategoryIconSvg(category) {
    switch (category) {
        case 'cardio':
            return `<svg viewBox="0 0 24 24"><path d="M13.5 22c4.14 0 7.5-3.36 7.5-7.5 0-3.33-2.17-6.15-5.15-7.14-.14.67-.44 1.28-.88 1.79C16.92 10.42 18 12.33 18 14.5c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-1.99.97-3.75 2.47-4.85-.36-.45-.63-1-.79-1.6C5.07 9.17 3 11.59 3 14.5 3 18.64 6.36 22 10.5 22h3z"/></svg>`;
        case 'strength':
            return `<svg viewBox="0 0 24 24"><path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14 4.14 5.57 2 7.71 3.43 9.14 2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22 14.86 20.57 16.29 22 18.43 19.86 19.86 21.29 21.29 19.86 19.86 18.43 22 16.29 20.57 14.86z"/></svg>`;
        case 'flexibility':
            return `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>`;
        case 'sport':
            return `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z"/></svg>`;
        case 'mind-body':
            return `<svg viewBox="0 0 24 24"><path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 19.4c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.9-1.9C9.07 19.67 10.48 20 12 20c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 15c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm1-11h-2v4h3v-2h-1V7z"/></svg>`;
        default:
            return `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>`;
    }
}

// Fire application setup once elements are fully parsed
window.addEventListener('DOMContentLoaded', initApp);
