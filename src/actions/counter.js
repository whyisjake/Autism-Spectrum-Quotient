import { INCREMENT_COUNTER, DECREMENT_COUNTER, DECREMENT_AQ_COUNTER, INCREMENT_AQ_COUNTER} from "constants/ActionTypes";
import { createAction } from "redux-actions";

export const increment = createAction(INCREMENT_COUNTER);
export const decrement = createAction(DECREMENT_COUNTER);
export const incrementAQ = createAction(INCREMENT_AQ_COUNTER);
export const decrementAQ = createAction(DECREMENT_AQ_COUNTER);
