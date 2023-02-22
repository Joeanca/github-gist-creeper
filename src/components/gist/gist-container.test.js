const noop = () => {};
describe.skip('GistContainer tests', () => {
  it('should not render if the context has no userData', noop)
  it('should render with context custom hook', noop)
  it('should render a user avatar component', noop)
  it('should a header if exists', noop)
  it('should not throw an error if the header does not exist', noop)
  it('should render a FormattedGist for every gist in the userData', noop)
  it('should not render a FormattedGist if the userData has no gists', noop)
  it('should not crash if the createdAt date does not exist or is invalid', noop)
  it('should handle an empty object or property gracefully', noop)
})