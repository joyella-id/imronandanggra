import ComponentRenderWrapper from "@/components/ComponentRenderWrapper/ComponentRenderWrapper";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
	return (
		<>
			<ToastContainer
				position="top-center"
				autoClose={2000}
				limit={1}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			></ToastContainer>
			<ComponentRenderWrapper />
		</>
	);
}
