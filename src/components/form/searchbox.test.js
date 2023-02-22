const noop = () => {};
describe.skip('SearchBox tests', () => {
  it('should render with props/children passed in', noop)
  it('should be able to read the token via context', noop)
  it('should not display a component if token is not set', noop)
  it('should update token if context changed', noop)
  it('should update state on user type debouncing', noop)
  it('should handle an empty object or property gracefully', noop)
  it('should clear the userData on input change', noop)

  describe.skip('Query interaction tests', () => {
    it('should return userData if successful', noop)
    it('should display a loading component while loading', noop)
    it('should set the context of userData on sucess', noop)
    it('should trigger a query on input change length more than github minimum username reqs', noop)
    it('should not refetch on focus', noop)
    it('should handle query errors gracefully, regardless of error', noop)
    it('should display an error if error occurred', noop)
  })
})

