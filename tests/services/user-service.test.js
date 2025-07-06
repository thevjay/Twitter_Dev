import UserService from '../../src/services/user-service';
import UserRepository  from '../../src/repository/user-repository';

jest.mock('../../src/repository/user-repository');

describe("User service signup test",()=>{
    test('should successfully create a user',async ()=>{
        const data = {
            email: "a@b.com",
            password: "123456"
        }
        // 
        UserRepository.prototype.create.mockReturnValue({
      ...data,
      createdAt: "2022-12-12",
      updatedAt: "2022-12-12"
    });
        const service = new UserService();
        const response = await service.signup(data);
        expect(response.email).toBe(data.email)
    })
})