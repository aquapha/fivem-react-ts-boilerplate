import { Nui } from "./app/Nui/NuiHandler";
import { useSelector } from "react-redux";
import { RootState } from "./app/utils/types";
import { store } from "./index";
import "./app.scss";

Nui.registerEmit("toggle", (data: { type: any; value: any }) => {
	store.dispatch({ type: "toggle", payload: data.value });
});

export const App = () => {
	const { isShowing } = useSelector((state: RootState) => state.data);

	return <>{isShowing ? <h1>APP</h1> : null}</>;
};
