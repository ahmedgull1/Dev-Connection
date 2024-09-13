import axios from 'axios';

export const addUser = (userData) => async (dispatch) => {
    try {
        dispatch({ type: 'ADD_USER_REQUEST' });
        const { data } = await axios.post('http://localhost:8000/devUsers', userData);
        localStorage.setItem('userinfo', JSON.stringify(data.id))
        console.log(id, 'test from action');

        dispatch({ type: 'ADD_USER_SUCCESS', payload: data });
    } catch (error) {
        dispatch({ type: 'ADD_USER_FAIL', payload: error.message });
    }
};

export const getData = () => async (dispatch) => {
    try {
        dispatch({ type: 'GET_DATA_REQUEST' });

        const { data } = await axios.get('http://localhost:8000/devUsers');

        dispatch({ type: 'GET_DATA_SUCCESS', payload: data });
    } catch (error) {
        dispatch({ type: 'GET_DATA_FAIL', payload: error.message });
    }
};


export const createProfile = (profileData) => async (dispatch) => {
    try {
        dispatch({ type: 'CREATE_PROFILE_REQUEST' });

        const { data } = await axios.put(`http://localhost:8000/devUsers/${profileData.id}`, profileData);

        dispatch({ type: 'CREATE_PROFILE_SUCCESS', payload: data });
    } catch (error) {
        dispatch({ type: 'CREATE_PROFILE_FAIL', payload: error.message });
    }
};


export const fetchProfile = (userId) => async (dispatch) => {
    if (!userId) {
        console.error('Userid');
        return;
    }
    try {
        dispatch({ type: 'FETCH_PROFILE_REQUEST' });

        const { data } = await axios.get(`http://localhost:8000/devUsers/${userId}`);

        dispatch({ type: 'FETCH_PROFILE_SUCCESS', payload: data });

    } catch (error) {
        dispatch({ type: 'FETCH_PROFILE_FAIL', payload: error.message });
    }
};



export const updateProfile = (profile) => async (dispatch) => {
    // console.log(profile.id ,'test');

    try {
        dispatch({ type: 'UPDATE_PROFILE_REQUEST' });
        const response = await axios.put(`http://localhost:8000/devUsers/${profile.id}`, profile);
        dispatch({ type: 'UPDATE_PROFILE_SUCCESS', payload: response.data });
    } catch (error) {
        dispatch({ type: 'UPDATE_PROFILE_FAILURE', payload: error.message });
    }
};

