export type DataState = {
	isShowing: boolean;
};

const initialDataState = {
	isShowing: false,
};

export const updateData = (
	state = initialDataState,
	action: { type: any; payload: any }
) => {
	switch (action.type) {
		case "toggle":
			return {
				...state,
				isShowing: action.payload,
			};
		default:
			return state;
	}
};
