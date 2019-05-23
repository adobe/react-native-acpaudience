jest.mock('NativeModules', () => ({
  ACPAudience: {
    extensionVersion: jest.fn(),
    registerExtension: jest.fn(),
    reset: jest.fn(),
    getVisitorProfile: jest.fn(() => new Promise(resolve => resolve())),
    signalWithData: jest.fn(() => new Promise(resolve => resolve()))
  }
}));
