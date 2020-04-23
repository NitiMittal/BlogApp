import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

class TextFieldGroup extends Component {
  constructor(props){
    super(props);
}
    render() {
        return (
          <div class="form-group">
          <input className={classnames("form-control form-control-lg", {
          "is-invalid": this.props.error
        })}
            placeholder={this.props.placeholder}
            name={this.props.name}
            onChange={this.props.onChange}
            value={this.props.value}
            type={this.props.type}
          />
          <small class="form-text text-muted">{this.props.classText}</small>
          {this.props.error && (
          <div className="invalid-feedback">{this.props.error}</div>
        )}

         </div>

  
        )
    }
    
  
  
}

TextFieldGroup.propTypes={
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    classText:PropTypes.string
}




export default TextFieldGroup;
