
/*
Prompt:
  We have defined a basic dropdown via the Dropdown and DropdownItem components
  below, with example usage in the ExampleNav component. The Dropdown and
  DropdownItem components have some problems, and also have room for
  improvements (doesn't everything?)
  A couple items TODO here (make sure to explain with comments!)

  1. Please fix any obvious issues you see with the dropdown and the project.
  2. Please then make improvements to the dropdown.
  3. Consider the different ways that this dropdown might be used and what
     changes would be neccessary to make it more flexible.
  4. If we wanted to sync this dropdown selection to the server with
     app.sync('PATCH', 'user', { dropdown_1_state: {true,false} })
     where would this be included?
  5. If we wanted to pass children (like this example) OR a Promise that
     resolves to an array of items what changes should be made?
     (just a sentence or two or some code is ok).

  PS: No need to worry about CSS.
 */

import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

/**
 * Dropdown
 */
class Dropdown extends PureComponent {
  /**
   * @constructor
   * @param {*} props
   */
  constuctor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  /**
   * Return the PropTypes for Dropdown Component
   * @return {object}
   */
  static get propTypes() {
    return {
        'children': PropTypes.array,
    };
  }

  toggle() {
    const {isOpen} = this.state;

    this.setState({isOpen: isOpen});
  }

  /**
   * Renders the Dropdown Component
   * @return {Dropdown} The rendered component
   */
  render() {
    const {isOpen} = this.state;
    const {label} = this.props;

    return (
      <div className='dropdown'>
        <button type="button" className="dropdown-button" id="dropdownButton"
                aria-haspopup="true" aria-expended={isOpen} onClick={this.toggle}>{label}
        </button>

        <ul className={`${isOpen ? "dropdown-open" : ""} dropdown-menu`} aria-labelledby="dropdownButton" role="menu">
          {this.state.isOpen && this.props.children}
        </ul>
      </div>
    );
  }
}

/**
 * DropdownItem
 */
class DropdownItem extends PureComponent {
  /**
   * @return {DropdownItem}
   */
  render() {
    // TODO implement me
  }
}

/**
 * ExampleNav includes all the basic children of the drop down for testing purposes.
 */
class ExampleNav extends PureComponent {
  /**
   * Render.
   * @returns {ExampleNav}
   */
  render() {
    return (
      <nav>
        <a href="/page1">Page 1</a>
        <Dropdown label="More items">
          <DropdownItem href="/page2">Page 2</DropdownItem>
          <DropdownItem href="/page3">Page 3</DropdownItem>
          <DropdownItem href="/page4">Page 4</DropdownItem>
        </Dropdown>
        <Dropdown label="Even more items">
          <DropdownItem href="/page5">Page 5</DropdownItem>
          <DropdownItem href="/page6">Page 6</DropdownItem>
        </Dropdown>
      </nav>
    );
  }
}
