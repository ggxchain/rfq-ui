import { INFURA_API_KEY } from "@/settings";
import { MetaMaskUIProvider } from "@metamask/sdk-react-ui";
import { act, render, screen } from "@testing-library/react";
import ConnectMetaMask from "../common/connectMetamask";

const MetaMask = () => {
	return (
		<MetaMaskUIProvider
			sdkOptions={{
				dappMetadata: {
					name: "Example React UI Dapp",
					url: window.location.href,
				},
				infuraAPIKey: INFURA_API_KEY,
				// Other options.
			}}
		>
			<ConnectMetaMask />
		</MetaMaskUIProvider>
	);
};

describe("ConnectMetaMask", () => {
	test("ConnectMetaMask rendered", async () => {
		const { container } = await act(() => render(<MetaMask />));
		expect(container).toBeDefined();

		const connectMetaMask = screen.getByTestId("connectMetaMask");
		expect(connectMetaMask).toBeDefined();
	});
});
