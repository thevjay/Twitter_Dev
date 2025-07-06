import TweetController from '../../src/controllers/tweet-controller';
import { mockRequest,mockResponse} from '../mocker';
import { getTweet } from '../../src/controllers/tweet-controller'
import TweetService from '../../src/services/tweet-service';

jest.mock('../../src/services/tweet-service')

test("Should return tweets",async () => {
    const req = mockRequest();
    req.params = { id: '112323' }; // or req.params.id if needed
    const res = mockResponse(); 

    const response = [
        {
            content: "Tweet 1"
        },
        {
            content: "Tweet 2"
        }
    ]

  TweetService.get = jest.fn().mockResolvedValue(response);

    await getTweet(req,res);

    expect(res.json).toHaveBeenCalledWith({
        success: true,
        message: 'Successfully fetched a tweet',
        data : response,
        err: {}
    })
})