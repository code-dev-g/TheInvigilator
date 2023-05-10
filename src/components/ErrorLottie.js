import Lottie from "react-lottie";
import animationData from "../../public/lottie/errorLottie.json";

function ErrorLottie() {
	const defaultOptions = {
		loop: false,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	return (
		<div>
			<Lottie options={defaultOptions} height={300} width={300} />
		</div>
	);
}

export default ErrorLottie;