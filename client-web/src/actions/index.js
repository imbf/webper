import server from '../apis/server';
import history from '../history';

export const signIn = (userId) => (dispatch) => {
    dispatch({ type: "SIGN_IN", payload: userId });
    history.goBack();
};

export const signOut = () => {
    return {
        type: "SIGN_OUT"
    }
}

export const createDir = directory_detail => async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await server.post('/dirs', { ...directory_detail, userId });
    dispatch({ type: "CREATE_DIR", payload: response.data });
    history.goBack();
}

export const fetchDirs = parentId => async dispatch => {
    const response = await server.get(`/dirs?parentId=${parentId}`);

    dispatch({ type: "FETCH_DIRS", payload: response.data });
}

export const fetchDir = id => async dispatch => {
    const response = await server.get(`/dirs/${id}`);
    dispatch({ type: "FETCH_DIR", payload: response.data });
}

export const deleteDir = id => async dispatch => {
    const response = await server.delete(`/dirs/${id}`);

    dispatch({ type: "DELETE_DIR", payload: id });
    history.goBack();
}

export const editDir = (id, formValues) => async dispatch => {
    const response = await server.patch(`/dirs/${id}`, formValues);

    dispatch({ type: "EDIT_DIR", payload: response.data });
    history.goBack();
}

export const createScrap = (video_detail, directoryId, category) => async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await server.post(`/${category}s`, { ...video_detail, userId, directoryId });

    dispatch({ type: "CREATE_SCRAP", payload: response.data });
    history.push(`/detail/${directoryId}`);
}

export const fetchScraps = (directoryId, category) => async (dispatch) => {
    const response = await server.get(`/${category}s?directoryId=${directoryId}`);

    dispatch({ type: "FETCH_SCRAPS", payload: response.data });
    history.push(`/detail/${directoryId}`);
}

export const editScrap = (id, formValues, directoryId) => async dispatch => {
    const response = await server.patch(`/videos/${id}`, formValues);
    // /video는 나중에 카테고리 타입을 받아와 ``신택스로 바꿔서 재사용할 것;

    dispatch({ type: "EDIT_SCRAP", payload: response.data });
    history.push(`/detail/${directoryId}`);
}