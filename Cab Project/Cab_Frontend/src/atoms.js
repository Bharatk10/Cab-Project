import {atom} from 'recoil';

export const userData = atom({
    key: 'userData', 
    default: ''
});

export const adminData = atom({
    key: 'adminData', 
    default: ''
});

export const empData = atom({
    key: 'empData', 
    default: '' 
});

export const isUserLoggedIn = atom({
    key:'isUserLoggedIn',
    default:false
})

export const isAdminLoggedIn = atom({
    key:'isAdminLoggedIn',
    default:false
})

export const isEmployeeLoggedIn = atom({
    key:'isEmployeeLoggedIn',
    default:false
})