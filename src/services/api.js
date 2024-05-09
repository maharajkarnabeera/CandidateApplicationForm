export default async function getData(offset) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
        "limit": 10,
        "offset": offset
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body,
    };

    try {
        const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);

        // Check for successful response
        if (!response.ok) {
            throw new Error(`API request failed with status: ${response.status}`);
        }

        // Check for valid JSON response
        return await response.json();

    } catch (error) {
        console.error("Error fetching data:", error);
        // You can throw a new error to propagate it upwards
        throw new Error("Failed to retrieve data");
    }
}
