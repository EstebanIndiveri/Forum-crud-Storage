const initalProps={
    stateModalAddTweet:false
}

export default function(state=initalProps,action){
    switch (action.type) {
        case "STATE_ADD_TWEET_MODAL":
            return {
                ...state,
                stateModalAddTweet:action.payload
            };
        default:
            return state;
    }
}