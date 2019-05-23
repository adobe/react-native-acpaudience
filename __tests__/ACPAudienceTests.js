import { NativeModules } from 'react-native';
import ACPAudience from '../js/ACPAudience';

describe('ACPAudience', () => {

  test('extensionVersion is called', async () => {
    const spy = jest.spyOn(NativeModules.ACPAudience, 'extensionVersion');
    await ACPAudience.extensionVersion();
    expect(spy).toHaveBeenCalled();
  });

  test('registerExtension is called', async () => {
    const spy = jest.spyOn(NativeModules.ACPAudience, 'registerExtension');
    await ACPAudience.registerExtension();
    expect(spy).toHaveBeenCalled();
  });

  test('rest is called', async () => {
    const spy = jest.spyOn(NativeModules.ACPAudience, 'reset');
    await ACPAudience.reset();
    expect(spy).toHaveBeenCalled();
  });

  test('getVisitorProfile is called', async () => {
    const spy = jest.spyOn(NativeModules.ACPAudience, 'getVisitorProfile');
    await ACPAudience.getVisitorProfile();
    expect(spy).toHaveBeenCalled();
  });

  test('signalWithData is called with correct parameters', async () => {
  const spy = jest.spyOn(NativeModules.ACPAudience, 'signalWithData');
    let data = {"testKey": "testValue"};
    await ACPAudience.signalWithData(data);
    expect(spy).toHaveBeenCalledWith(data);
  });

});
