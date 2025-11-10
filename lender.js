// ========================================
// DATA LAYER - In-Memory State Management
// ========================================

let currentUser = {
    id: 'LENDER001',
    name: 'Aditya Kumar',
    email: 'aditya.kumar@siu.edu.in',
    college: 'SIU Nagpur',
    year: 3,
    branch: 'CSE',
    verified: true,
    verification_date: '2025-10-15',
    avatar: '👨‍💼',
    educibil_score: 750,
    wallet_balance: 5200,
    total_lent: 12400,
    active_loans_count: 8,
    default_rate: 2.5,
    monthly_earnings: 540,
    risk_tolerance: 'Moderate',
    on_time_repayment_rate: 95,
    lending_activity_score: 22,
    average_review_rating: 4.6,
    total_transactions: 18,
    current_streak: 7,
    total_xp: 650,
    level: 'Silver',
    badges: ['Responsible Banker', 'Community Builder']
};

let borrowers = [
    {
        id: 'BORR001',
        name: 'Priya Sharma',
        college: 'SIU Nagpur',
        year: 2,
        branch: 'IT',
        verified: true,
        avatar: '👩‍🎓',
        requested_amount: 500,
        loan_purpose: 'Food & Essentials',
        duration_days: 14,
        educibil_score: 680,
        on_time_repayment_rate: 92,
        lending_activity_score: 15,
        average_review_rating: 4.3,
        total_transactions: 12,
        previous_defaults: 0,
        average_days_late: 1.5,
        similar_college: true,
        similar_year: false,
        anonymous_mode: false,
        reviews: [
            { lender: 'Rahul K.', rating: 5, comment: 'Paid on time, great borrower!', date: '2025-10-20' },
            { lender: 'Sneha P.', rating: 4, comment: 'Good communication', date: '2025-10-15' }
        ]
    },
    {
        id: 'BORR002',
        name: 'Rajesh Patel',
        college: 'SIU Nagpur',
        year: 3,
        branch: 'CSE',
        verified: true,
        avatar: '👨‍🎓',
        requested_amount: 300,
        loan_purpose: 'Emergency',
        duration_days: 7,
        educibil_score: 820,
        on_time_repayment_rate: 98,
        lending_activity_score: 28,
        average_review_rating: 4.8,
        total_transactions: 24,
        previous_defaults: 0,
        average_days_late: 0.2,
        similar_college: true,
        similar_year: true,
        anonymous_mode: false,
        reviews: [
            { lender: 'Amit S.', rating: 5, comment: 'Perfect borrower, highly recommend!', date: '2025-11-01' },
            { lender: 'Kavya M.', rating: 5, comment: 'Excellent track record', date: '2025-10-28' }
        ]
    },
    {
        id: 'BORR003',
        name: 'Anonymous User #3847',
        college: 'Unknown',
        year: null,
        branch: null,
        verified: false,
        avatar: '🔒',
        requested_amount: 800,
        loan_purpose: 'Personal',
        duration_days: 30,
        educibil_score: 450,
        on_time_repayment_rate: 75,
        lending_activity_score: 8,
        average_review_rating: 3.2,
        total_transactions: 5,
        previous_defaults: 1,
        average_days_late: 5.2,
        similar_college: false,
        similar_year: false,
        anonymous_mode: true,
        reviews: [
            { lender: 'Anonymous', rating: 3, comment: 'Payment was delayed', date: '2025-10-25' }
        ]
    },
    {
        id: 'BORR004',
        name: 'Kavya Singh',
        college: 'SIU Nagpur',
        year: 3,
        branch: 'Mechanical',
        verified: true,
        avatar: '👩‍🎓',
        requested_amount: 400,
        loan_purpose: 'Books & Materials',
        duration_days: 14,
        educibil_score: 720,
        on_time_repayment_rate: 88,
        lending_activity_score: 18,
        average_review_rating: 4.4,
        total_transactions: 14,
        previous_defaults: 0,
        average_days_late: 2.1,
        similar_college: true,
        similar_year: true,
        anonymous_mode: false,
        reviews: [
            { lender: 'Deepak R.', rating: 4, comment: 'Good borrower, slight delay once', date: '2025-10-18' }
        ]
    },
    {
        id: 'BORR005',
        name: 'Arjun Verma',
        college: 'SIU Nagpur',
        year: 2,
        branch: 'ECE',
        verified: true,
        avatar: '👨‍🎓',
        requested_amount: 600,
        loan_purpose: 'Food & Essentials',
        duration_days: 21,
        educibil_score: 890,
        on_time_repayment_rate: 99,
        lending_activity_score: 32,
        average_review_rating: 4.9,
        total_transactions: 28,
        previous_defaults: 0,
        average_days_late: 0.1,
        similar_college: true,
        similar_year: true,
        anonymous_mode: false,
        reviews: [
            { lender: 'Priya K.', rating: 5, comment: 'Best borrower ever!', date: '2025-11-02' },
            { lender: 'Vikram S.', rating: 5, comment: 'Extremely reliable', date: '2025-10-30' }
        ]
    },
    {
        id: 'BORR006',
        name: 'Anonymous User #5692',
        college: 'Unknown',
        year: null,
        branch: null,
        verified: false,
        avatar: '🔒',
        requested_amount: 250,
        loan_purpose: 'Emergency',
        duration_days: 7,
        educibil_score: 550,
        on_time_repayment_rate: 82,
        lending_activity_score: 12,
        average_review_rating: 3.8,
        total_transactions: 8,
        previous_defaults: 0,
        average_days_late: 2.8,
        similar_college: false,
        similar_year: false,
        anonymous_mode: true,
        reviews: [
            { lender: 'Anonymous', rating: 4, comment: 'Decent borrower', date: '2025-10-22' }
        ]
    }
];

let activeLoans = [
    {
        id: 'LOAN001',
        borrower_id: 'BORR001',
        amount: 500,
        interest_rate: 2.5,
        duration_days: 14,
        started_date: '2025-11-01',
        due_date: '2025-11-15',
        status: 'On Track',
        amount_repaid: 250,
        earnings: 12.5
    },
    {
        id: 'LOAN002',
        borrower_id: 'BORR002',
        amount: 300,
        interest_rate: 1.5,
        duration_days: 7,
        started_date: '2025-10-31',
        due_date: '2025-11-07',
        status: 'On Track',
        amount_repaid: 300,
        earnings: 4.5
    },
    {
        id: 'LOAN003',
        borrower_id: 'BORR004',
        amount: 400,
        interest_rate: 2.0,
        duration_days: 14,
        started_date: '2025-10-28',
        due_date: '2025-11-11',
        status: 'At Risk',
        amount_repaid: 200,
        earnings: 8.0,
        days_overdue: 5
    }
];

let transactions = [
    { id: 'TXN001', type: 'Interest Earned', amount: 12.5, date: '2025-11-05', status: 'completed' },
    { id: 'TXN002', type: 'Loan Funded', amount: -500, date: '2025-11-01', status: 'completed' },
    { id: 'TXN003', type: 'Repayment Received', amount: 305, date: '2025-11-07', status: 'completed' },
    { id: 'TXN004', type: 'Interest Earned', amount: 4.5, date: '2025-11-07', status: 'completed' },
    { id: 'TXN005', type: 'Loan Funded', amount: -400, date: '2025-10-28', status: 'completed' },
    { id: 'TXN006', type: 'Wallet Deposit', amount: 5000, date: '2025-10-15', status: 'completed' }
];

// ========================================
// CALCULATION FORMULAS (REAL LOGIC)
// ========================================

// Calculate EduCIBIL Score based on real formula
function calculateEduCIBIL(borrower) {
    const onTimeRepaymentRate = borrower.on_time_repayment_rate || 0;
    const lendingActivityScore = Math.min((borrower.lending_activity_score || 0), 30);
    const userReviewsRating = (borrower.average_review_rating / 5) * 25;
    const transactionBonus = Math.min(((borrower.total_transactions || 0) / 100) * 15, 15);
    
    const educibil = ((onTimeRepaymentRate * 0.35) + (lendingActivityScore * 0.25) + (userReviewsRating * 0.25) + transactionBonus) / 100 * 1000;
    
    return Math.round(educibil);
}

// Calculate Risk Score and Level
function calculateRisk(borrower) {
    const baseRisk = (1 - (borrower.educibil_score / 1000)) * 100;
    const defaultFactor = ((borrower.previous_defaults || 0) / Math.max(borrower.total_transactions, 1)) * 30;
    const delayPattern = ((borrower.average_days_late || 0) / 30) * 20;
    
    const riskScore = Math.min(baseRisk + defaultFactor + delayPattern, 100);
    
    let riskLevel = 'Low';
    if (riskScore >= 60) riskLevel = 'High';
    else if (riskScore >= 30) riskLevel = 'Medium';
    
    return { score: Math.round(riskScore), level: riskLevel };
}

// Calculate Compatibility Score
function calculateCompatibility(borrower, lender) {
    const collegeSimilarity = (borrower.similar_college ? 30 : 0) + (borrower.similar_year ? 20 : 0);
    
    const lenderRiskTolerance = lender.risk_tolerance === 'Conservative' ? 20 : lender.risk_tolerance === 'Moderate' ? 50 : 80;
    const borrowerRisk = calculateRisk(borrower).score;
    const riskAlignment = 100 - Math.abs(lenderRiskTolerance - borrowerRisk);
    
    const repaymentHistorySimilarity = (borrower.on_time_repayment_rate / 100) * 30;
    
    const compatibilityScore = (collegeSimilarity + riskAlignment + repaymentHistorySimilarity) / 1.8;
    
    return Math.round(compatibilityScore);
}

// Calculate Interest Earned
function calculateInterest(amount, interestRate, days) {
    return (amount * (interestRate / 100) * (days / 365)).toFixed(2);
}

// Calculate XP for gamification
function calculateLoanXP(loanAmount, isAnonymous) {
    const baseXP = 50;
    const amountBonus = Math.floor(loanAmount / 1000);
    const anonymousBonus = isAnonymous ? 20 : 0;
    return baseXP + amountBonus + anonymousBonus;
}

// Determine level from XP
function getLevel(xp) {
    if (xp >= 1000) return { name: 'Platinum', icon: '💎', nextLevel: 'Max Level', nextXP: 0 };
    if (xp >= 500) return { name: 'Gold', icon: '🥇', nextLevel: 'Platinum', nextXP: 1000 };
    if (xp >= 200) return { name: 'Silver', icon: '🥈', nextLevel: 'Gold', nextXP: 500 };
    return { name: 'Bronze', icon: '🥉', nextLevel: 'Silver', nextXP: 200 };
}

// Get EduCIBIL tier
function getScoreTier(score) {
    if (score >= 800) return { class: 'gold', label: 'Elite', color: '#FFD700' };
    if (score >= 600) return { class: 'silver', label: 'Good', color: '#C0C0C0' };
    if (score >= 400) return { class: 'bronze', label: 'Fair', color: '#CD7F32' };
    return { class: 'critical', label: 'Critical', color: '#FF6B6B' };
}

// ========================================
// UI RENDERING FUNCTIONS
// ========================================

function renderDashboard() {
    // Update user info
    document.getElementById('userName').textContent = currentUser.name.split(' ')[0];
    document.getElementById('navUserName').textContent = currentUser.name.split(' ')[0];
    document.getElementById('navAvatar').textContent = currentUser.avatar;
    
    // Update EduCIBIL score
    const scoreTier = getScoreTier(currentUser.educibil_score);
    const scoreElement = document.getElementById('mainScore');
    scoreElement.textContent = currentUser.educibil_score;
    scoreElement.className = `educibil-score ${scoreTier.class}`;
    
    // Update score breakdown
    document.getElementById('onTimeRate').textContent = `${currentUser.on_time_repayment_rate}%`;
    document.getElementById('onTimeProgress').style.width = `${currentUser.on_time_repayment_rate}%`;
    document.getElementById('lendingActivity').textContent = `${currentUser.lending_activity_score}/30`;
    document.getElementById('reviewRating').textContent = `${currentUser.average_review_rating}/5 ⭐`;
    document.getElementById('transactionCount').textContent = currentUser.total_transactions;
    
    // Update stats
    document.getElementById('walletBalance').textContent = `₹${currentUser.wallet_balance.toLocaleString()}`;
    document.getElementById('totalLent').textContent = `₹${currentUser.total_lent.toLocaleString()}`;
    document.getElementById('activeLoans').textContent = currentUser.active_loans_count;
    document.getElementById('defaultRate').textContent = `${currentUser.default_rate}%`;
    document.getElementById('monthlyEarnings').textContent = `₹${currentUser.monthly_earnings}`;
    
    const levelInfo = getLevel(currentUser.total_xp);
    document.getElementById('currentLevel').textContent = `${levelInfo.name} ${levelInfo.icon}`;
}

function renderGamification() {
    const levelInfo = getLevel(currentUser.total_xp);
    
    document.getElementById('levelTitle').textContent = `${levelInfo.name} Lender`;
    document.getElementById('currentXP').textContent = currentUser.total_xp;
    
    const xpProgress = (currentUser.total_xp / levelInfo.nextXP) * 100;
    document.getElementById('xpProgress').style.width = `${xpProgress}%`;
    
    document.getElementById('currentStreak').textContent = currentUser.current_streak;
    
    // Render badges
    const allBadges = [
        { id: 'top-lender', icon: '👑', name: 'Top Lender', unlocked: currentUser.total_lent >= 100000 },
        { id: 'responsible', icon: '🎯', name: 'Responsible Banker', unlocked: currentUser.badges.includes('Responsible Banker') },
        { id: 'finance-guru', icon: '🧠', name: 'Finance Guru', unlocked: currentUser.total_xp >= 500 },
        { id: 'risk-manager', icon: '🛡️', name: 'Risk Manager', unlocked: currentUser.default_rate < 3 },
        { id: 'community', icon: '🤝', name: 'Community Builder', unlocked: currentUser.badges.includes('Community Builder') },
        { id: 'anonymous', icon: '🎭', name: 'Anonymous Hero', unlocked: false }
    ];
    
    const badgesContainer = document.getElementById('badgesContainer');
    badgesContainer.innerHTML = allBadges.map(badge => `
        <div class="badge-item ${badge.unlocked ? 'unlocked' : 'locked'}">
            <div class="badge-icon">${badge.icon}</div>
            <div class="badge-name">${badge.name}</div>
        </div>
    `).join('');
}

function renderBorrowers() {
    const borrowersContainer = document.getElementById('borrowersContainer');
    
    // Apply filters
    const riskFilter = document.getElementById('riskFilter').value;
    const amountFilter = document.getElementById('amountFilter').value;
    const durationFilter = document.getElementById('durationFilter').value;
    const collegeFilter = document.getElementById('collegeFilter').value;
    
    let filteredBorrowers = borrowers.filter(borrower => {
        // Risk filter
        if (riskFilter !== 'all') {
            const risk = calculateRisk(borrower);
            if (risk.level.toLowerCase() !== riskFilter) return false;
        }
        
        // Amount filter
        if (amountFilter !== 'all') {
            const [min, max] = amountFilter.split('-').map(Number);
            if (borrower.requested_amount < min || borrower.requested_amount > max) return false;
        }
        
        // Duration filter
        if (durationFilter !== 'all') {
            if (borrower.duration_days !== parseInt(durationFilter)) return false;
        }
        
        // College filter
        if (collegeFilter === 'same' && !borrower.similar_college) return false;
        
        return true;
    });
    
    borrowersContainer.innerHTML = filteredBorrowers.map(borrower => {
        const risk = calculateRisk(borrower);
        const compatibility = calculateCompatibility(borrower, currentUser);
        const scoreTier = getScoreTier(borrower.educibil_score);
        
        return `
            <div class="borrower-card" data-borrower-id="${borrower.id}">
                <div class="borrower-header">
                    <div class="borrower-avatar">${borrower.avatar}</div>
                    <div class="borrower-info">
                        <h4>${borrower.name}</h4>
                        <div class="borrower-meta">${borrower.anonymous_mode ? 'Anonymous' : `${borrower.college} - ${borrower.branch}`}</div>
                    </div>
                </div>
                
                <div class="borrower-score">
                    <div>
                        <div style="font-size: 11px; color: var(--silver-medium);">EduCIBIL</div>
                        <div class="score-badge" style="color: ${scoreTier.color};">${borrower.educibil_score}</div>
                    </div>
                    <span class="risk-badge risk-${risk.level.toLowerCase()}">${risk.level} Risk</span>
                </div>
                
                <div class="borrower-details">
                    <div class="detail-item">
                        <div class="detail-label">Requested</div>
                        <div class="detail-value">₹${borrower.requested_amount}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Duration</div>
                        <div class="detail-value">${borrower.duration_days} days</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Purpose</div>
                        <div class="detail-value" style="font-size: 13px;">${borrower.loan_purpose}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">On-Time Rate</div>
                        <div class="detail-value">${borrower.on_time_repayment_rate}%</div>
                    </div>
                </div>
                
                <div class="compatibility-bar">
                    <div class="compatibility-label">
                        <span>Match Score</span>
                        <strong>${compatibility}%</strong>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${compatibility}%"></div>
                    </div>
                </div>
                
                <div class="borrower-actions">
                    <button class="btn btn-secondary btn-small" onclick="viewBorrowerDetails('${borrower.id}')">View Details</button>
                    <button class="btn btn-primary btn-small" onclick="openLoanOffer('${borrower.id}')">Make Offer</button>
                </div>
            </div>
        `;
    }).join('');
}

function renderActiveLoans() {
    const loansContainer = document.getElementById('loansContainer');
    
    loansContainer.innerHTML = activeLoans.map(loan => {
        const borrower = borrowers.find(b => b.id === loan.borrower_id);
        const daysUntilDue = Math.ceil((new Date(loan.due_date) - new Date()) / (1000 * 60 * 60 * 24));
        const progress = (loan.amount_repaid / loan.amount) * 100;
        
        let statusClass = 'status-on-track';
        if (loan.status === 'At Risk') statusClass = 'status-at-risk';
        if (loan.status === 'Overdue') statusClass = 'status-overdue';
        
        return `
            <div class="table-row">
                <div>
                    ${borrower ? borrower.name : 'Unknown'}
                    <div style="font-size: 11px; color: var(--silver-medium); margin-top: 3px;">${loan.id}</div>
                </div>
                <div>₹${loan.amount}</div>
                <div>${loan.interest_rate}%</div>
                <div>
                    ${loan.due_date}
                    <div style="font-size: 11px; color: var(--silver-medium); margin-top: 3px;">${daysUntilDue} days left</div>
                </div>
                <div>
                    <span class="status-badge ${statusClass}">${loan.status}</span>
                    <div class="progress-bar" style="margin-top: 8px;">
                        <div class="progress-fill" style="width: ${progress}%"></div>
                    </div>
                </div>
                <div style="color: var(--green-success); font-weight: 600;">+₹${loan.earnings}</div>
            </div>
        `;
    }).join('');
}

function renderWallet() {
    document.getElementById('walletAvailable').textContent = `₹${currentUser.wallet_balance.toLocaleString()}`;
    
    const lockedAmount = activeLoans.reduce((sum, loan) => sum + (loan.amount - loan.amount_repaid), 0);
    document.getElementById('walletLocked').textContent = `₹${lockedAmount.toLocaleString()}`;
    
    document.getElementById('monthEarnings').textContent = `+₹${currentUser.monthly_earnings}`;
    
    // Render transactions
    const transactionsContainer = document.getElementById('transactionsContainer');
    transactionsContainer.innerHTML = transactions.map(txn => `
        <div class="transaction-item">
            <div class="transaction-info">
                <div class="transaction-type">${txn.type}</div>
                <div class="transaction-date">${txn.date} • ${txn.id}</div>
            </div>
            <div class="transaction-amount ${txn.amount > 0 ? 'amount-positive' : 'amount-negative'}">
                ${txn.amount > 0 ? '+' : ''}₹${Math.abs(txn.amount).toLocaleString()}
            </div>
        </div>
    `).join('');
}

function renderProfile() {
    document.getElementById('profileAvatar').textContent = currentUser.avatar;
    document.getElementById('profileName').textContent = currentUser.name;
    document.getElementById('profileEmail').textContent = currentUser.email;
    document.getElementById('profileCollege').textContent = currentUser.college;
    document.getElementById('profileYear').textContent = `${currentUser.year}rd Year ${currentUser.branch}`;
    document.getElementById('profileTrust').textContent = `${currentUser.educibil_score}/1000`;
    document.getElementById('profileRisk').textContent = currentUser.risk_tolerance;
    document.getElementById('profileSince').textContent = 'Oct 2025';
    document.getElementById('profileDefault').textContent = `${currentUser.default_rate}%`;
    
    if (currentUser.verified) {
        document.getElementById('verifiedBadge').style.display = 'inline-flex';
    } else {
        document.getElementById('verifiedBadge').style.display = 'none';
    }
}

// ========================================
// MODAL FUNCTIONS
// ========================================

function viewBorrowerDetails(borrowerId) {
    const borrower = borrowers.find(b => b.id === borrowerId);
    if (!borrower) return;
    
    const risk = calculateRisk(borrower);
    const compatibility = calculateCompatibility(borrower, currentUser);
    const scoreTier = getScoreTier(borrower.educibil_score);
    
    // Calculate risk factors breakdown
    const baseRisk = ((1 - (borrower.educibil_score / 1000)) * 100).toFixed(1);
    const defaultImpact = (((borrower.previous_defaults || 0) / Math.max(borrower.total_transactions, 1)) * 30).toFixed(1);
    const delayImpact = (((borrower.average_days_late || 0) / 30) * 20).toFixed(1);
    
    const modalContent = `
        <div class="modal-header">
            <div style="display: flex; align-items: center; gap: 15px;">
                <div style="font-size: 48px;">${borrower.avatar}</div>
                <div>
                    <h3>${borrower.name}</h3>
                    <p style="color: var(--silver-medium); margin: 5px 0;">${borrower.anonymous_mode ? 'Anonymous Profile' : `${borrower.college} - ${borrower.branch} ${borrower.year ? `(Year ${borrower.year})` : ''}`}</p>
                    ${borrower.verified ? '<span class="verified-badge">✓ Verified</span>' : ''}
                </div>
            </div>
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0;">
            <div class="stat-card">
                <div class="stat-label">EduCIBIL Score</div>
                <div class="stat-value" style="color: ${scoreTier.color};">${borrower.educibil_score}</div>
                <div class="stat-change">${scoreTier.label} Tier</div>
            </div>
            <div class="stat-card">
                <div class="stat-label">Risk Level</div>
                <div class="stat-value">${risk.score}%</div>
                <div class="stat-change">${risk.level} Risk Profile</div>
            </div>
            <div class="stat-card">
                <div class="stat-label">Match Score</div>
                <div class="stat-value">${compatibility}%</div>
                <div class="stat-change">Compatibility with you</div>
            </div>
            <div class="stat-card">
                <div class="stat-label">Requesting</div>
                <div class="stat-value">₹${borrower.requested_amount}</div>
                <div class="stat-change">For ${borrower.duration_days} days</div>
            </div>
        </div>
        
        <h4 style="margin: 25px 0 15px 0;">📊 EduCIBIL Score Breakdown</h4>
        <div style="display: grid; gap: 15px;">
            <div class="detail-card">
                <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                    <span style="color: var(--silver-medium); font-size: 13px;">On-Time Repayment Rate</span>
                    <strong>${borrower.on_time_repayment_rate}%</strong>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${borrower.on_time_repayment_rate}%"></div>
                </div>
            </div>
            <div class="detail-card">
                <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                    <span style="color: var(--silver-medium); font-size: 13px;">Average User Reviews</span>
                    <strong>${borrower.average_review_rating}/5 ⭐</strong>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${(borrower.average_review_rating / 5) * 100}%"></div>
                </div>
            </div>
            <div class="detail-card">
                <div style="display: flex; justify-content: space-between;">
                    <span style="color: var(--silver-medium); font-size: 13px;">Total Successful Transactions</span>
                    <strong>${borrower.total_transactions}</strong>
                </div>
            </div>
            <div class="detail-card">
                <div style="display: flex; justify-content: space-between;">
                    <span style="color: var(--silver-medium); font-size: 13px;">Previous Defaults</span>
                    <strong style="color: ${borrower.previous_defaults > 0 ? 'var(--red-critical)' : 'var(--green-success)'}">${borrower.previous_defaults}</strong>
                </div>
            </div>
        </div>
        
        <h4 style="margin: 25px 0 15px 0;">🛡️ Risk Engine Analysis</h4>
        <div class="detail-card" style="padding: 20px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                <span style="font-size: 16px; font-weight: 600;">Overall Risk Score</span>
                <span style="font-size: 24px; font-weight: 700;" class="risk-badge risk-${risk.level.toLowerCase()}">${risk.score}% - ${risk.level}</span>
            </div>
            <div style="color: var(--silver-medium); font-size: 13px; line-height: 1.6;">
                <p style="margin: 8px 0;"><strong>Risk Factors Breakdown:</strong></p>
                <p style="margin: 5px 0;">• Base Risk (EduCIBIL): ${baseRisk}%</p>
                <p style="margin: 5px 0;">• Default History Impact: ${defaultImpact}%</p>
                <p style="margin: 5px 0;">• Payment Delay Pattern: ${delayImpact}%</p>
                <p style="margin: 10px 0; padding-top: 10px; border-top: 1px solid rgba(255,255,255,0.05);">
                    ${risk.level === 'Low' ? '✅ This borrower has an excellent track record and poses minimal risk.' : 
                      risk.level === 'Medium' ? '⚠️ Moderate risk detected. Review payment history carefully.' : 
                      '🚨 High risk profile. Consider smaller amounts or avoid lending.'}
                </p>
            </div>
        </div>
        
        <h4 style="margin: 25px 0 15px 0;">💬 Reviews from Previous Lenders</h4>
        <div class="reviews-section">
            ${borrower.reviews.map(review => `
                <div class="review-item">
                    <div class="review-header">
                        <strong>${review.lender}</strong>
                        <span class="review-rating">${'⭐'.repeat(review.rating)}</span>
                    </div>
                    <p style="color: var(--silver-medium); font-size: 13px; margin: 5px 0;">${review.comment}</p>
                    <p style="color: var(--silver-medium); font-size: 11px;">${review.date}</p>
                </div>
            `).join('')}
        </div>
        
        <div style="display: flex; gap: 10px; margin-top: 30px;">
            <button class="btn btn-secondary" onclick="closeModal()" style="flex: 1;">Close</button>
            <button class="btn btn-primary" onclick="closeModal(); openLoanOffer('${borrower.id}');" style="flex: 1;">Make Loan Offer</button>
        </div>
    `;
    
    document.getElementById('modalContent').innerHTML = modalContent;
    document.getElementById('borrowerModal').classList.add('active');
}

function closeModal() {
    document.getElementById('borrowerModal').classList.remove('active');
}

function openLoanOffer(borrowerId) {
    const borrower = borrowers.find(b => b.id === borrowerId);
    if (!borrower) return;
    
    // Store current borrower ID for form submission
    window.currentOfferBorrowerId = borrowerId;
    
    document.getElementById('offerBorrowerName').textContent = borrower.name;
    document.getElementById('offerAmount').value = borrower.requested_amount;
    document.getElementById('offerDuration').value = borrower.duration_days;
    
    // Calculate preview
    updateLoanPreview();
    
    document.getElementById('loanOfferModal').classList.add('active');
}

function closeLoanOfferModal() {
    document.getElementById('loanOfferModal').classList.remove('active');
}

function updateLoanPreview() {
    const amount = parseFloat(document.getElementById('offerAmount').value) || 0;
    const interestRate = parseFloat(document.getElementById('offerInterest').value) || 0;
    const duration = parseInt(document.getElementById('offerDuration').value) || 0;
    
    const interest = calculateInterest(amount, interestRate, duration);
    const total = (parseFloat(amount) + parseFloat(interest)).toFixed(2);
    
    document.getElementById('previewAmount').textContent = `₹${amount}`;
    document.getElementById('previewInterest').textContent = `+₹${interest}`;
    document.getElementById('previewTotal').textContent = `₹${total}`;
    
    if (window.currentOfferBorrowerId) {
        const borrower = borrowers.find(b => b.id === window.currentOfferBorrowerId);
        if (borrower) {
            const risk = calculateRisk(borrower);
            document.getElementById('previewRisk').textContent = `${risk.level} (${risk.score}%)`;
        }
    }
}

// ========================================
// EVENT HANDLERS
// ========================================

// Authentication
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('emailInput').value;
    const verified = document.getElementById('verifiedCheck').checked;
    
    // Update user data
    currentUser.email = email;
    currentUser.verified = verified;
    
    // Hide auth page, show dashboard
    document.getElementById('authPage').style.display = 'none';
    document.getElementById('dashboard').classList.add('active');
    
    // Render initial data
    renderDashboard();
    renderGamification();
    renderBorrowers();
    renderActiveLoans();
    renderWallet();
    renderProfile();
    
    showToast('✓', 'Welcome back! Login successful.');
});

// Navigation
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all
        document.querySelectorAll('.nav-menu a').forEach(a => a.classList.remove('active'));
        document.querySelectorAll('.page-section').forEach(section => section.classList.remove('active'));
        
        // Add active class to clicked
        this.classList.add('active');
        
        const page = this.getAttribute('data-page');
        document.getElementById(`${page}Page`).classList.add('active');
    });
});

// Filters
document.getElementById('riskFilter').addEventListener('change', renderBorrowers);
document.getElementById('amountFilter').addEventListener('change', renderBorrowers);
document.getElementById('durationFilter').addEventListener('change', renderBorrowers);
document.getElementById('collegeFilter').addEventListener('change', renderBorrowers);

// Loan offer form inputs
document.getElementById('offerAmount').addEventListener('input', updateLoanPreview);
document.getElementById('offerInterest').addEventListener('input', updateLoanPreview);
document.getElementById('offerDuration').addEventListener('change', updateLoanPreview);

// Loan offer form submission
document.getElementById('loanOfferForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const borrowerId = window.currentOfferBorrowerId;
    const amount = parseFloat(document.getElementById('offerAmount').value);
    const interestRate = parseFloat(document.getElementById('offerInterest').value);
    const duration = parseInt(document.getElementById('offerDuration').value);
    const isAnonymous = document.getElementById('offerAnonymous').value === 'yes';
    
    // Create new loan
    const newLoan = {
        id: `LOAN${String(activeLoans.length + 1).padStart(3, '0')}`,
        borrower_id: borrowerId,
        amount: amount,
        interest_rate: interestRate,
        duration_days: duration,
        started_date: new Date().toISOString().split('T')[0],
        due_date: new Date(Date.now() + duration * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        status: 'On Track',
        amount_repaid: 0,
        earnings: 0
    };
    
    activeLoans.push(newLoan);
    
    // Update user stats
    currentUser.wallet_balance -= amount;
    currentUser.total_lent += amount;
    currentUser.active_loans_count += 1;
    
    // Add transaction
    transactions.unshift({
        id: `TXN${String(transactions.length + 1).padStart(3, '0')}`,
        type: 'Loan Funded',
        amount: -amount,
        date: new Date().toISOString().split('T')[0],
        status: 'completed'
    });
    
    // Calculate and add XP
    const xpEarned = calculateLoanXP(amount, isAnonymous);
    currentUser.total_xp += xpEarned;
    currentUser.current_streak += 1;
    
    // Update lending activity score
    currentUser.lending_activity_score = Math.min((currentUser.total_lent / 10000) * 30, 30);
    
    // Recalculate EduCIBIL
    currentUser.educibil_score = calculateEduCIBIL(currentUser);
    
    // Re-render everything
    renderDashboard();
    renderActiveLoans();
    renderWallet();
    renderGamification();
    
    // Close modal
    closeLoanOfferModal();
    
    // Show success message
    showToast('✓', `Loan funded successfully! You earned ${xpEarned} XP.`);
    
    // Navigate to active loans page
    setTimeout(() => {
        document.querySelectorAll('.nav-menu a').forEach(a => a.classList.remove('active'));
        document.querySelectorAll('.page-section').forEach(section => section.classList.remove('active'));
        document.querySelector('[data-page="loans"]').classList.add('active');
        document.getElementById('loansPage').classList.add('active');
    }, 1500);
});

// Toast notification
function showToast(icon, message) {
    document.getElementById('toastIcon').textContent = icon;
    document.getElementById('toastMessage').textContent = message;
    document.getElementById('toast').classList.add('active');
    
    setTimeout(() => {
        document.getElementById('toast').classList.remove('active');
    }, 3000);
}

// Close modal on background click
document.getElementById('borrowerModal').addEventListener('click', function(e) {
    if (e.target === this) closeModal();
});

document.getElementById('loanOfferModal').addEventListener('click', function(e) {
    if (e.target === this) closeLoanOfferModal();
});