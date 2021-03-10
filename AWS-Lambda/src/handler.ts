export const getAllUsers = async (event) => {
  const users = event.queryStringParameters
    ? [
        {
          id: event.queryStringParameters.id,
          name: event.queryStringParameters.name,
        },
      ]
    : [
        {
          id: 1,
          name: "Mrinal",
        },
      ];

  return {
    statusCode: 200,
    body: JSON.stringify(users),
  };
};
