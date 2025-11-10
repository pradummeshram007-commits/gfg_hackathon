// Data
const borrowerData = {
    id: 1,
    name: "Arjun Singh",
    collegeName: "SIU Nagpur",
    collegeYear: 3,
    creditScore: 780,
    trustBadge: "verified",
    currentBalance: "₹15,400",
    reputation: "Excellent",
    emergencyCreditAvailable: "₹800"
};

const lendersData = [
    {
        id: 1,
        name: "Priya Patel",
        collegeName: "SIU Nagpur",
        collegeYear: 4,
        branch: "Engineering",
        matchPercentage: 92,
        riskTolerance: "Medium",
        interestRate: "8%",
        trustBadge: true,
        profileImage: "PP"
    },
    {
        id: 2,
        name: "Rahul Gupta",
        collegeName: "SIU Nagpur",
        collegeYear: 3,
        branch: "CSE",
        matchPercentage: 88,
        riskTolerance: "Low",
        interestRate: "6%",
        trustBadge: true,
        profileImage: "RG"
    },
    {
        id: 3,
        name: "Anonymous Lender #4521",
        matchPercentage: 85,
        riskTolerance: "High",
        interestRate: "12%",
        trustBadge: false,
        profileImage: "AL"
    }
];

const activeLoansData = [
    {
        id: 1,
        lenderName: "Ananya Sharma",
        amount: "₹5,000",
        remaining: "₹2,400",
        interestRate: "7%",
        nextDueDate: "2025-11-15",
        status: "active",
        progressPercent: 52,
        dueAmount: "₹500"
    },
    {
        id: 2,
        lenderName: "Anonymous Lender",
        amount: "₹2,000",
        remaining: "₹800",
        interestRate: "5%",
        nextDueDate: "2025-11-20",
        status: "active",
        progressPercent: 60,
        dueAmount: "₹250"
    }
];

// State
let isAnonymous = false;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderLenders();
    renderActiveLoans();
    initializeEventListeners();
    animateCreditScore();
});

// Render Lenders
function renderLenders() {
    const lendersGrid = document.getElementById('lendersGrid');
    lendersGrid.innerHTML = '';

    lendersData.forEach(lender => {
        const lenderCard = document.createElement('div');
        lenderCard.className = 'lender-card';
        
        const riskClass = lender.riskTolerance.toLowerCase();
        const trustBadgeHTML = lender.trustBadge ? '<span style="color: #4caf50; margin-left: 0.5rem;">✓</span>' : '';
        
        lenderCard.innerHTML = `
            <div class="match-score">${lender.matchPercentage}% Match</div>
            <div class="lender-header">
                <div class="lender-avatar">${lender.profileImage}</div>
                <div class="lender-info">
                    <h3>${lender.name}${trustBadgeHTML}</h3>
                    <div class="lender-meta">
                        ${lender.collegeName ? lender.collegeName + ' | ' : ''}
                        ${lender.branch ? lender.branch : ''}
                        ${lender.collegeYear ? 'Year ' + lender.collegeYear : ''}
                    </div>
                </div>
            </div>
            <div class="lender-details">
                <div class="detail-box">
                    <span class="detail-label">Risk Tolerance</span>
                    <span class="risk-badge ${riskClass}">${lender.riskTolerance}</span>
                </div>
                <div class="detail-box">
                    <span class="detail-label">Interest Rate</span>
                    <span class="detail-value">${lender.interestRate}</span>
                </div>
            </div>
            <button class="btn btn-primary btn-full" onclick="requestLoanFromLender(${lender.id})">
                Request Loan
            </button>
        `;
        
        lendersGrid.appendChild(lenderCard);
    });
}

// Render Active Loans
function renderActiveLoans() {
    const loansContainer = document.getElementById('activeLoansContainer');
    loansContainer.innerHTML = '';

    activeLoansData.forEach(loan => {
        const loanCard = document.createElement('div');
        loanCard.className = 'loan-card';
        
        loanCard.innerHTML = `
            <div class="loan-header">
                <div class="loan-lender">${loan.lenderName}</div>
                <span class="status-badge ${loan.status}">${loan.status.charAt(0).toUpperCase() + loan.status.slice(1)}</span>
            </div>
            <div class="loan-info-grid">
                <div class="loan-info-item">
                    <span class="loan-label">Loan Amount</span>
                    <span class="loan-value">${loan.amount}</span>
                </div>
                <div class="loan-info-item">
                    <span class="loan-label">Remaining</span>
                    <span class="loan-value">${loan.remaining}</span>
                </div>
                <div class="loan-info-item">
                    <span class="loan-label">Interest Rate</span>
                    <span class="loan-value">${loan.interestRate}</span>
                </div>
                <div class="loan-info-item">
                    <span class="loan-label">Next Due</span>
                    <span class="loan-value">${formatDate(loan.nextDueDate)}</span>
                </div>
            </div>
            <div class="loan-progress">
                <div class="progress-header">
                    <span>Repayment Progress</span>
                    <span>${loan.progressPercent}%</span>
                </div>
                <div class="progress-bar-container">
                    <div class="progress-bar-fill" style="width: ${loan.progressPercent}%"></div>
                </div>
            </div>
            <button class="btn btn-primary" onclick="makePayment(${loan.id})">
                Pay ${loan.dueAmount}
            </button>
        `;
        
        loansContainer.appendChild(loanCard);
    });
}

// Event Listeners
function initializeEventListeners() {
    // Modals
    const requestLoanBtn = document.getElementById('requestLoanBtn');
    const requestEmergencyBtn = document.getElementById('requestEmergencyBtn');
    const createGroupBtn = document.getElementById('createGroupBtn');
    
    const requestLoanModal = document.getElementById('requestLoanModal');
    const emergencyLoanModal = document.getElementById('emergencyLoanModal');
    const createGroupModal = document.getElementById('createGroupModal');
    
    const closeLoanModal = document.getElementById('closeLoanModal');
    const closeEmergencyModal = document.getElementById('closeEmergencyModal');
    const closeGroupModal = document.getElementById('closeGroupModal');
    
    // Open modals
    requestLoanBtn.addEventListener('click', () => {
        requestLoanModal.classList.add('active');
    });
    
    requestEmergencyBtn.addEventListener('click', () => {
        emergencyLoanModal.classList.add('active');
    });
    
    createGroupBtn.addEventListener('click', () => {
        createGroupModal.classList.add('active');
    });
    
    // Close modals
    closeLoanModal.addEventListener('click', () => {
        requestLoanModal.classList.remove('active');
    });
    
    closeEmergencyModal.addEventListener('click', () => {
        emergencyLoanModal.classList.remove('active');
    });
    
    closeGroupModal.addEventListener('click', () => {
        createGroupModal.classList.remove('active');
    });
    
    // Close on backdrop click
    [requestLoanModal, emergencyLoanModal, createGroupModal].forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    });
    
    // Anonymous Toggle
    const anonymousToggle = document.getElementById('anonymousToggle');
    anonymousToggle.addEventListener('change', (e) => {
        isAnonymous = e.target.checked;
        showNotification(
            isAnonymous ? 
            'Anonymous mode enabled. Your identity will be hidden.' : 
            'Anonymous mode disabled. Your profile will be visible.'
        );
    });
    
    // Forms
    const loanRequestForm = document.getElementById('loanRequestForm');
    loanRequestForm.addEventListener('submit', handleLoanRequest);
    
    const emergencyLoanForm = document.getElementById('emergencyLoanForm');
    emergencyLoanForm.addEventListener('submit', handleEmergencyLoanRequest);
    
    const createGroupForm = document.getElementById('createGroupForm');
    createGroupForm.addEventListener('submit', handleCreateGroup);
    
    // Other buttons
    const addFundsBtn = document.getElementById('addFundsBtn');
    addFundsBtn.addEventListener('click', () => {
        showNotification('Add funds feature coming soon!');
    });
    
    const uploadIdBtn = document.getElementById('uploadIdBtn');
    uploadIdBtn.addEventListener('click', () => {
        showNotification('ID upload feature coming soon!');
    });
    
    const notificationBtn = document.getElementById('notificationBtn');
    notificationBtn.addEventListener('click', () => {
        showNotification('You have 3 new notifications');
    });
}

// Form Handlers
function handleLoanRequest(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    showNotification('Loan request submitted successfully! We\'re matching you with lenders.');
    document.getElementById('requestLoanModal').classList.remove('active');
    e.target.reset();
}

function handleEmergencyLoanRequest(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    showNotification('Emergency loan request submitted! Auto-matching in progress...');
    document.getElementById('emergencyLoanModal').classList.remove('active');
    e.target.reset();
    
    // Simulate auto-match
    setTimeout(() => {
        showNotification('✓ Emergency loan matched! Funds will be credited shortly.');
    }, 2000);
}

function handleCreateGroup(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    showNotification('Group loan created successfully! Invitations sent to members.');
    document.getElementById('createGroupModal').classList.remove('active');
    e.target.reset();
}

// Actions
function requestLoanFromLender(lenderId) {
    const lender = lendersData.find(l => l.id === lenderId);
    showNotification(`Loan request sent to ${lender.name}`);
}

function makePayment(loanId) {
    const loan = activeLoansData.find(l => l.id === loanId);
    showNotification(`Payment of ${loan.dueAmount} initiated for loan #${loanId}`);
}

// Utilities
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%);
        border: 1px solid rgba(192, 192, 192, 0.3);
        border-radius: 12px;
        padding: 1rem 1.5rem;
        color: #FFFFFF;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
        z-index: 3000;
        animation: slideInRight 0.3s ease;
        max-width: 400px;
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Animate Credit Score
function animateCreditScore() {
    const scoreCircle = document.getElementById('scoreCircle');
    const creditScore = 780;
    const maxScore = 850;
    const percentage = (creditScore / maxScore) * 100;
    const circumference = 2 * Math.PI * 80;
    const offset = circumference - (percentage / 100) * circumference;
    
    setTimeout(() => {
        scoreCircle.style.strokeDashoffset = offset;
    }, 500);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);