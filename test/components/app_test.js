// import { renderComponent , expect } from '../test_helper';
// import App from '../../src/components/app';
//
// describe('App' , () => {
//   let component;
//
//   beforeEach(() => {
//     component = renderComponent(App);
//   });
//
//   it('renders something', () => {
//     expect(component).to.exist;
//   });
// });
import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

// Use describe to group together similar tests. 'App' is a string and can be anything, it doesn't need to be 'App'
describe('App', () => {
  let component;

  beforeEach(() => {
    // create an instance of App
    component = renderComponent(App);
  })

  // Use 'it' to test a single attribute of a target.
  it('shows the correct text', () => {
    // Use 'expect' to make an 'assertion' about a target
    // Purpose of expect is to make one simple declarative test about a component.
    // Example: expect(component).to.have.class('comment-box')
    // The first argument is usually the component.
    // The second part is the matcher, will tells Mocha what to test for. This matcher part is the most difficult since there are many many different matchers
    expect(component).to.contain('React simple starter'); // component should contain the text 'React simple starter'

  });

  it('shows a comment box', () => {
    expect(component.find('.comment-box')).to.exist
  });

  it('shows a comment list', () => {
    expect(component.find('.comment-list')).to.exist;
  });

});



// Pretty much all these statements are used in all testing frameworks.
