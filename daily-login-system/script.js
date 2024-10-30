let members = {
    'HAMID': '1234',
    'USER1': '1234',
    'USER2': '1234',
    'USER3': '1234'
};

let notifications = [];
let loginHistory = [];
let notificationCount = 0;

function login() {
    const memberId = document.getElementById('memberId').value;
    const password = document.getElementById('password').value;
    const loginMessage = document.getElementById('loginMessage');

    if (members[memberId] && members[memberId] === password) {
        loginMessage.innerText = 'Login successful!';
        addLoginHistory(memberId);
        updateAdminNotifications(memberId);
    } else {
        loginMessage.innerText = 'Invalid ID or Password.';
    }
}

function addLoginHistory(memberId) {
    const time = new Date().toLocaleTimeString('en-US');
    loginHistory.push(`User ${memberId} logged in at ${time}`);
    updateLoginHistory();
}

function updateAdminNotifications(memberId) {
    notifications.push(`User ${memberId} has logged in.`);
    notificationCount++;
    updateNotificationCount();
    updateAdminNotificationsList();
}

function updateAdminNotificationsList() {
    const adminNotifications = document.getElementById('adminNotifications');
    adminNotifications.innerHTML = notifications.map(notification => `<div>${notification}</div>`).join('');
}

function updateNotificationCount() {
    document.getElementById('adminNotificationCount').innerText = notificationCount;
}

function updateLoginHistory() {
    const historyList = document.getElementById('loginHistory');
    historyList.innerHTML = loginHistory.map(entry => `<div>${entry}</div>`).join('');
}

function addUser() {
    const newUserId = document.getElementById('newUserId').value;
    const newUserMessage = document.getElementById('newUserMessage');

    if (newUserId && !members[newUserId]) {
        members[newUserId] = '1234'; // Default password for new users
        newUserMessage.innerText = `User ${newUserId} added successfully!`;
    } else {
        newUserMessage.innerText = 'User already exists or invalid ID.';
    }
}
