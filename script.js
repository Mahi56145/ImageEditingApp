// AI for Bharat - Workshop 3 Logic
// Connected to AWS Lambda + Bedrock

async function submitJob() {
    console.log("Sending request to API Gateway...");
    const prompt = document.querySelector('textarea').value;
    
    // Simulation of API Call
    alert("Request sent to AWS Lambda! Generating image...");
}