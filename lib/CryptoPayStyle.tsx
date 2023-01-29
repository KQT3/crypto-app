import Paper from "@mui/material/Paper";
//import OnramperWidget from "@onramper/widget";
// import lightThemeColors from "../styles/themes/lightThemeColors";
// import darkThemeColors from "../styles/themes/darkThemeColors";
//
// const isServer = typeof window === "undefined";
//
// let themeMode: string | null = "dark";
// if (!isServer) {
//   if (!localStorage.getItem("theme")){
//     localStorage.setItem("theme", "dark");
//   }
//   themeMode = localStorage.getItem("theme")
// }
//
// export default function CryptoPayStyle() {
//     const wallets = {
//         BTC: {address: "btcAddr"},
//         BNB: {address: "bnbAddress", memo: "cryptoTag"},
//     };
//
//     return (
//         <Paper
//             sx={{
//                 width: "440px",
//                 height: "595px",
//                 boxShadow: "0 2px 10px 0 rgba(0, 0, 0, 0.1)",
//                 borderRadius: "10px",
//                 margin: "auto",
//                 color:  themeMode === "light" ? "black" : "white",
//                 '& div, nav, input, footer': {
//                     borderTopLeftRadius: "10px",
//                     borderTopRightRadius: "10px",
//                     backgroundColor: themeMode === "light" ? lightThemeColors.grey["200"] : darkThemeColors.grey["700"]
//                 }
//             }}
//         >
//             {/*<OnramperWidget*/}
//             {/*    API_KEY={"pk_test_ass3gtLSWQpI11IWUZLJdrfyQhj7bTw_3xwLvhEvH6Q0"}*/}
//             {/*    defaultAddrs={wallets}*/}
//             {/*    defaultAmount={50}*/}
//             {/*    defaultCrypto={"BTC"}*/}
//             {/*    defaultFiat={"EUR"}*/}
//             {/*    isAddressEditable={true}*/}
//             {/*/>*/}
//         </Paper>
//     );
// }
