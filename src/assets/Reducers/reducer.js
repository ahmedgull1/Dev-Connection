import { data } from "autoprefixer";

export const addUserReducer = (state = { userData: [], loading: false, error: null }, action) => {
    switch (action.type) {
        case 'ADD_USER_REQUEST':
            return { ...state, loading: true };
        case 'ADD_USER_SUCCESS':
            return { ...state, loading: false, userData: action.payload };
        case 'ADD_USER_FAIL':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export const getDataReducer = (state = { data: [], loading: false, failed: null }, action) => {
    switch (action.type) {
        case 'GET_DATA_REQUEST':
            return { ...state, loading: true };
        case 'GET_DATA_SUCCESS':
            return { ...state, loading: false, data: action.payload };
        case 'GET_DATA_FAIL':
            return { ...state, loading: false, failed: action.payload };
        default:
            return state;
    }
};

// PROFILEREDUCER....................................

// export const profileReducer = (state = { data: null, loading: false, error: null }, action) => {
//     switch (action.type) {
//         case 'CREATE_PROFILE_REQUEST':
//             return { ...state, loading: true };
//         case 'CREATE_PROFILE_SUCCESS':
//             return { ...state, loading: false, data: action.payload };
//         case 'CREATE_PROFILE_FAIL':
//             return { ...state, loading: false, error: action.payload };
//         default:
//             return state;
//     }
// };

export const initialState = {
    data: null,
    loading: false,
    error: null
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_PROFILE_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_PROFILE_SUCCESS':
            return { ...state, loading: false, data: action.payload };
        case 'FETCH_PROFILE_FAIL':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};


export const userProfileReducers = (state = { profile: {}, loading: false, error: null }, action) => {
    switch (action.type) {
        case 'FETCH_PROFILE_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_PROFILE_SUCCESS':
            return { ...state, loading: false, profile: action.payload };
        case 'FETCH_PROFILE_FAIL':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};


export const updateuserReducer = (state = { profile: {} }, action) => {
    switch (action.type) {
        case 'UPDATE_PROFILE_REQUEST':
            return { ...state, loading: true, error: null };
        case'UPDATE_PROFILE_SUCCESS':
            return { ...state, loading: false, profile: action.payload };
        case 'UPDATE_PROFILE_FAILURE':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};
