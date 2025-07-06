// import dummyFunctions from '../../src/services/dummy-service'

import * as dummy from '../../src/services/dummy-service'

test("result is true and returns Learning JS",() => {
    // IMPL of test
    //console.log(dummyFunctions);
    //dummyFunctions.helper = jest.fn(()=> true)
    // const spy = jest.spyOn(dummyFunctions,'helper').mockImplementation(()=>{
    //     return true
    // })

    //const result = dummyFunctions.execute();
    jest.spyOn(dummy,'helper').mockReturnValue(true);
    //helper.mockReturnValue(true);
    const result = dummy.execute();
    expect(result).toBe('Learning JS');
})

test("result is true and returns Learning JS",() => {
    // IMPL of test
    // console.log(dummyFunctions);
    // dummyFunctions.helper = jest.fn(()=> false)
    // const spy = jest.spyOn(dummyFunctions,'helper').mockImp lementation(()=>{
    //     return true
    // })
        
    jest.spyOn(dummy,'helper').mockReturnValue(true);
    const result = dummy.execute();
    expect(result).toBe('Learning ReactJS');
})