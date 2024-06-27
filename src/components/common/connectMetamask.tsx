"use client";
import Modal from "@/components/common/modal";
import {
	MetaMaskButton,
	useAccount,
	useSignMessage,
} from "@metamask/sdk-react-ui";
import Image from "next/image";
import { useState } from "react";

export default function ConnectMetaMask() {
	const [modal, setModal] = useState<boolean>(false);

	const { isConnected } = useAccount();
	const {
		data: signData,
		isError: isSignError,
		isLoading: isSignLoading,
		isSuccess: isSignSuccess,
		signMessage,
	} = useSignMessage({
		message: "gm wagmi frens",
	});

	return (
		<div data-testid="connectMetaMask">
			{(!isConnected && (
				<div className="flex justify-between md:mt-10 mt-1 items-center">
					<MetaMaskButton theme={"light"} color="white"></MetaMaskButton>
					<Image
						width={0}
						height={0}
						src={"/info.svg"}
						className="ml-2 cursor-pointer md:w-6 md:h-6 w-5 h-5 my-1 mr-2"
						alt={"Metamask info"}
						onClick={() => setModal(true)}
					/>
				</div>
			)) || (
				<>
					<div style={{ marginTop: 20 }}>
						<button
							type={"button"}
							disabled={isSignLoading}
							onClick={() => signMessage()}
						>
							Sign message
						</button>
						{isSignSuccess && <div>Signature: {signData}</div>}
						{isSignError && <div>Error signing message</div>}
					</div>
				</>
			)}
			<Modal
				modalTitle={"Connect Metamask"}
				isOpen={modal}
				onClose={() => setModal(false)}
			>
				<div className="flex flex-col w-full">
					<p className="text-GGx-dark">
						Please use Metamask to connect wallet info.
					</p>
				</div>
			</Modal>
		</div>
	);
}
