module.exports.handler = async (event, context) => {
    let response = {
        principalId: 'me',
        policyDocument: {
            Version: '2012-10-17',
            Statement: [{
                Action: 'execute-api:Invoke',
                Effect: 'Allow',
                Resource: event.methodArn,
            }]
        },
        isAuthorized: false,
    };
    const authHeader = event.headers.Authorization || event.headers.authorization;
    if (!authHeader) {
        return response;
    }

    try {
        // Your login to validate the token
        // response.isAuthorized = false;
        response.isAuthorized = true;
        return response;
    } catch (error) {
        console.log(error);
        return response;
    }
}
