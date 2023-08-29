const axios = require('axios');
const getRandomUser = require('./randomUser');

jest.mock('axios');

describe('getRandomUser method calls randomuser api', () => {
  afterEach(()=> {
    jest.clearAllMocks();
  });

  test('should fetch and format a random user', async () => {
    const mockResponse = {
      data: {
        results: [
          {
            name: { first: 'John', last: 'Doe' },
            email: 'john.doe@example.com',
          },
        ],
      },
    };

    axios.get.mockResolvedValue(mockResponse);
    const result = await getRandomUser();

    expect(axios.get).toHaveBeenCalledWith('https://randomuser.me/api/');
    expect(result).toEqual(mockResponse.data.results[0]);
  });

  test("should handle API request failure", async () => {
    const message = "Network Error";
    axios.get.mockRejectedValue(new Error(message));
  

    await expect(getRandomUser()).rejects.toThrow('Failed to fetch random user data');
    expect(axios.get).toHaveBeenCalledWith('https://randomuser.me/api/');
  });
});
