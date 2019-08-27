

export function fetchingError(bool, errData) {
    console.error('fetchingError === ', errData)
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    }
}

export function isFetching(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    }
}

export function fetchingSuccess(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items
    }
}

export function fetchRemoteData(url) {
    return (dispatch) => {
        dispatch(isFetching(true))
        fetch(url)
            .then((response) => {
                
                if (!response.ok) {
                    throw Error(response.statusText)
                }
                dispatch(isFetching(false));
                
                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(fetchingSuccess(items)))
            .catch(err => dispatch(fetchingError(true, err) ))
    }
}