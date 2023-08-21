import axios from "axios";

export const getData = async (q) => {
    const params = {
        key: '524d2fa70c8f4cb5b7692004232903',
        q
    }
    const response = await axios
        .get("https://api.weatherapi.com/v1/current.json?/",{
            params
        })
    return response.data;
}