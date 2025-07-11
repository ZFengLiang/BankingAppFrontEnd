// src/config.js
export const API_BASE_URL = "https://bankapp-xgle.onrender.com/api/";

export const API_ENDPOINTS = {
    //autherisation and login
    auth: `${API_BASE_URL}user/auth`,
    register: `${API_BASE_URL}user/auth/register`,
    login: `${API_BASE_URL}user/auth/login`,

    // accounts
    userAccounts: `${API_BASE_URL}account/user`,
    userSavingsAccounts: `${API_BASE_URL}account/user/savings`,
    userPendingAccounts: `${API_BASE_URL}account/user/pending`,
    userCheckingsAccounts: `${API_BASE_URL}account/user/checkings`,

    transactions: `${API_BASE_URL}transactions`,
    employee: `${API_BASE_URL}employee`,
    usertransaction: `${API_BASE_URL}transactions/user`,
    searchIban: `${API_BASE_URL}transactions/search-iban`,

    ATM: `${API_BASE_URL}atm/accounts`,
    ATMDeposit: `${API_BASE_URL}atm/deposit`,
    ATMWithdraw: `${API_BASE_URL}atm/withdraw`,
    
    //users
    users: `${API_BASE_URL}user`,
    account: `${API_BASE_URL}account`,
    userAccounts: `${API_BASE_URL}account/user`,
    employee: `${API_BASE_URL}employee`,

    //Authentication
    checkUsername: `${API_BASE_URL}user/auth/check-username`,
    checkEmail: `${API_BASE_URL}user/auth/check-email`,
    checkBsn: `${API_BASE_URL}user/auth/check-bsn`,
    
};
export default API_ENDPOINTS;
